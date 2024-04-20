import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
const LandingSwitcher = dynamic(() => import("../switcher/landing-switcher"), {ssr: false,});
import SSRProvider from 'react-bootstrap/SSRProvider';

const Landingpagelayout = ({ children }) => {
  const Add =()=>{
    document.querySelector("body").classList.add('landing-page' ,'horizontal');
    document.querySelector("body").classList.remove( 'sidebar-mini', 'transparent-mode', 'layout-boxed');
  };
  useEffect(() => {
    Add();
  },[]);
  return (
    <div>
      <SSRProvider>
      <LandingSwitcher/>
      { children }
      </SSRProvider>
    </div>
  );
};

export default Landingpagelayout;
