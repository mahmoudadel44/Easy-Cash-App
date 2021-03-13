import React from "react";
import "../styles/Home.css";

const PartnersCard = ({ partnersdata }) => {
  return (
    <div className="mb-5 mt-5">
      <div className="">{partnersdata.PartnersImg}</div>
    </div>
  );
};

export default PartnersCard;
