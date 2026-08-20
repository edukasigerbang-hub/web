import type { Metadata } from "next";
import { FeatureHero } from "@/components/fitur/FeatureHero";
import { FeatureValueProps } from "@/components/fitur/FeatureValueProps";
import { FeatureSections } from "@/components/fitur/FeatureSections";
import { FeatureDesignedForIfp } from "@/components/fitur/FeatureDesignedForIfp";
import { FeatureClassroom } from "@/components/fitur/ClassroomExperience";
import { FeatureCta } from "@/components/fitur/FeatureCta";

export const metadata: Metadata = {
  title: "Fitur Gerbang Edukasi — Media Pembelajaran Interaktif untuk IFP",
  description:
    "Kenali fitur Gerbang Edukasi, media pembelajaran interaktif untuk Interactive Flat Panel Android dan Windows yang membantu menciptakan pembelajaran lebih aktif dan menarik.",
};

export default function FiturPage() {
  return (
    <>
      <FeatureHero />
      <FeatureValueProps />
      <FeatureSections />
      <FeatureDesignedForIfp />
      <FeatureClassroom />
      <FeatureCta />
    </>
  );
}
