import React from "react";
import Head from "next/head";

const Seo = ({ title }) => {
  let i = `Chat Cast - ${title}`;
  return (
    <Head>
      <title>{i}</title>
    </Head>
  );
};

export default Seo;
