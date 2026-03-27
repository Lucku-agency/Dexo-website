import { setRequestLocale } from "next-intl/server";
import JobsClient from "@/components/sections/JobsClient";

export default async function JobsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <JobsClient />;
}
