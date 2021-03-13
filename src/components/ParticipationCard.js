import React from "react";
import "../styles/Home.css";

const PaymentWaysCard = ({ participatedata }) => {
  return (
    <div className="text-center">
      <div className="">{participatedata.participationImg}</div>
      <h5 className="purple participationHeader">{participatedata.header}</h5>
      <p className="participationExplanation">{participatedata.explanation}</p>
    </div>
  );
};

export default PaymentWaysCard;
