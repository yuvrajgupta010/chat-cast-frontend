import React from "react";
import style from "./empty.module.css";

const Empty = () => {
  return (
    <div
      className={`col-8 m-0 p-0 d-flex flex-column gap-0 h-100 ${style.empty}`}
    ></div>
  );
};

export default Empty;
