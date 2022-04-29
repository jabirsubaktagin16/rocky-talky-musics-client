import React from "react";
import notFound from "../../../images/images/notFound.png";

const NotFound = () => {
  return (
    <div className="flex justify-center">
      <div className="lg: w-8/12">
        <img src={notFound} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
