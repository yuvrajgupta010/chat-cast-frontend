import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Seo from "@/shared/layout-components/seo/seo";
import Empty from "@/components/Empty";
import ChatBox from "@/components/Chat/ChatBox";
import PurchasePlan from "@/components/PurchasePlan/PurchasePlan";
import ChatList from "@/components/ChatList/ChatList";

const Chat = () => {
  const { currentChatUser } = useSelector((store) => store.chatApp);
  const [isValidated, setIsValidated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    document
      .querySelector("body")
      .classList.add("app", "sidebar-mini", "ltr", "light-mode");
    document
      .querySelector("body")
      .classList.remove("login-img", "landing-page", "horizontal");

    if (
      localStorage.getItem("sashhorizontal") ||
      localStorage.getItem("sashhorizontalHover")
    ) {
      document.body.classList.remove("sidebar-mini");
      document.body.classList.add("horizontal");
    }

    const token = localStorage.getItem("accessToken");
    const userDetails = localStorage.getItem("userDetails");

    let timeout;
    if (token && userDetails) {
      timeout = setTimeout(() => {
        setIsValidated(true);
      }, 1000);
    } else {
      router.push("/");
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <>
      <Seo title="Chat" />
      <ToastContainer />
      {!isValidated ? (
        <div
          className="row m-0 p-0 align-items-center justify-content-center"
          style={{ height: "100vh", minWidth: "1000px" }}
        >
          <div className="dimmer active">
            <div className="spinner2">
              <div className="cube1"></div>
              <div className="cube2"></div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="row m-0 p-0"
          style={{ height: "100vh", minWidth: "1000px" }}
        >
          <ChatList />
          {/* <PurchasePlan /> */}
          {!currentChatUser ? <ChatBox /> : <Empty />}
        </div>
      )}
    </>
  );
};

export default Chat;
