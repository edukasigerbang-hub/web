import type { Metadata } from "next";
import { PartnerHero } from "@/components/partner/PartnerHero";
import { PartnerTypes } from "@/components/partner/PartnerTypes";
import { PartnerBenefits } from "@/components/partner/PartnerBenefits";
import { PartnerProcess } from "@/components/partner/PartnerProcess";
import { PartnerCta } from "@/components/partner/PartnerCta";
import { PartnerFaq } from "@/components/partner/PartnerFaq";

export const metadata: Metadata = {
  title: "Partner",
  description:
    "Tumbuh bersama Gerbang Edukasi — jadi distributor, reseller, system integrator, atau partner teknologi pendidikan.",
};

export default function PartnerPage() {
  return (
    <>
      <PartnerHero />
      <PartnerTypes />
      <PartnerBenefits />
      <PartnerProcess />
      <PartnerCta />
      <PartnerFaq />
    </>
  );
}
