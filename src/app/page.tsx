import { Hero } from "@/components/home/Hero";
import { ValueStrip } from "@/components/home/ValueStrip";
import { ProductSection } from "@/components/home/ProductSection";
import { PlatformSection } from "@/components/home/PlatformSection";
import { DemoSsection } from "@/components/home/DemoSsection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TargetUsers } from "@/components/home/TargetUsers";
import { ContentSection } from "@/components/home/ContentSection";
import { PricingSection } from "@/components/home/PricingSection";
import { PartnerSection } from "@/components/home/PartnerSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueStrip />
      <ProductSection />
      <PlatformSection />
      <DemoSsection />
      <HowItWorks />
      <TargetUsers />
      <ContentSection />
      <PricingSection />
      <PartnerSection />
    </>
  );
}
