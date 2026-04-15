import { NextRequest, NextResponse } from "next/server";

const CLICKUP_TOKEN = process.env.CLICKUP_TOKEN;
const COMPANY_LIST_ID = "901712374217";
const CANDIDATE_LIST_ID = "901712381168";

export async function POST(req: NextRequest) {
  try {
    if (!CLICKUP_TOKEN) {
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const body = await req.json();
    const { type, ...fields } = body;

    const listId = type === "company" ? COMPANY_LIST_ID : CANDIDATE_LIST_ID;

    let taskName = "";
    let description = "";

    if (type === "company") {
      taskName = `Hire Request: ${fields.fullName} — ${fields.companyName}`;
      description = [
        `Full Name: ${fields.fullName}`,
        `Work Email: ${fields.workEmail}`,
        `Company Name: ${fields.companyName}`,
        `Phone: ${fields.phone}`,
      ].join("\n");
    } else {
      taskName = `Candidate: ${fields.fullName}`;
      description = [
        `Full Name: ${fields.fullName}`,
        `Email: ${fields.email}`,
        `Phone: ${fields.phone}`,
        `LinkedIn: ${fields.linkedinUrl}`,
      ].join("\n");
    }

    const res = await fetch(`https://api.clickup.com/api/v2/list/${listId}/task`, {
      method: "POST",
      headers: {
        Authorization: CLICKUP_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: taskName,
        description,
        status: "to do",
        priority: 2,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("ClickUp error:", err);
      return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
