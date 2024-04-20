import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
const Customswitcher = dynamic(() => import("../switcher/landing-switcher"), {ssr: false,});
import SSRProvider from 'react-bootstrap/SSRProvider';

const Authenticationlayout = ({ children }) => {
  useEffect(()=>{
    document.querySelector("body").classList.add("ltr", "main-body", "leftmenu", "error-1");
  });
  return (
    <>
    <SSRProvider>
    <div className='login-img'>
    <div className="page">
    { children }
    </div>
    </div>
    <Customswitcher />
    </SSRProvider>
    </>
  );
};

export default Authenticationlayout;
