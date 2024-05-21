import React from "react";
import Plans from "./Plans";
import Payment from "./Payment";

const PurchasePlan = () => {
  return (
    <div className="col-8 d-flex h-100 card br-0 shadow-none border-start flex-row align-items-center justify-content-center">
      {/* <Plans /> */}
      <Payment />
    </div>
  );
};

export default PurchasePlan;
