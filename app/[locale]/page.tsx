import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import IndustriesSection from "@/components/sections/IndustriesSection";
import About from "@/components/sections/About";
import GlobalBanner from "@/components/sections/GlobalBanner";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import ValueProps from "@/components/sections/ValueProps";
import Differentiators from "@/components/sections/Differentiators";
import CompanyForm from "@/components/sections/CompanyForm";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <IndustriesSection />
      <About />
      <GlobalBanner />
      <Services />
      <Process />
      <ValueProps />
      <Differentiators />
      <CompanyForm />
    </>
  );
}
