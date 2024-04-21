import React from "react";
import Head from "next/head";
import favicon from "../../../public/assets/images/brand/favicon.ico";

const Seo = ({ title }) => {
  let i = `Chat Cast - ${title}`;
  return (
    <Head>
      <title>{i}</title>
    </Head>
  );
};

export default Seo;
