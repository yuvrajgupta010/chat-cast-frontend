import React from "react";

function MessageStatus({ messageStatus = "sent" }) {
  return (
    <>
      {messageStatus === "sent" && (
        <i className="bi bi-check2 fs-6 text-muted"></i>
      )}
      {messageStatus === "delivered" && (
        <i className="bi bi-check2-all fs-6 text-muted"></i>
      )}
      {messageStatus === "read" && (
        <i className="bi bi-check2-all fs-6 text-secondary"></i>
      )}
    </>
  );
}

export default MessageStatus;
