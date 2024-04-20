import React from 'react';
import Head from "next/head";
import favicon from "../../../public/assets/images/brand/favicon.ico";

const Seo = ({title}) => {
  let i = `Sash - ${title}`;
  return (
    <Head>
        <title>{i}</title>
        <link rel="icon" href={favicon.src} />
        <meta name="description" content="Sash - Nextjs Admin &amp; Dashboard Template"/>
        <meta name="author" content="Spruko Technologies Private Limited"/>
        <meta name="keywords" content="next js dashboard template,
          admin dashboard nextjs,
          next js admin template,
          next js admin panel,
          admin dashboard,
          nextjs react bootstrap,
          react bootstrap with next js,
          next js admin dashboard,
          nextjs admin dashboard template,
          admin panel template,
          admin template react bootstrap,
          nextjs dashboard,next js react bootstrap"></meta>
    </Head>
  );
};

export default Seo;
