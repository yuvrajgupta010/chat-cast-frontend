import Seo from "@/shared/layout-components/seo/seo";
import React from "react";
import Landingpages from "@/shared/data/landingpagedata/landingpages";

const LandingPage = () => {
  return (
    <>
      <Seo title="Secure Chating and File Sharing Platform" />
      <Landingpages />
    </>
  );
};
LandingPage.layout = "Landingpagelayout";
export default LandingPage;
