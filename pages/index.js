import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import React from "react";
const Landingpages = dynamic(
  () => import("@/shared/data/landingpagedata/landingpages"),
  { ssr: false }
);

const LandingPage = () => {
  return (
    <div>
      <Seo title="Landingpage" />
      <Landingpages />
    </div>
  );
};
LandingPage.layout = "Landingpagelayout";
export default LandingPage;
