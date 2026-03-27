import { setRequestLocale } from "next-intl/server";
import AboutClient from "@/components/sections/AboutClient";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutClient />;
}
