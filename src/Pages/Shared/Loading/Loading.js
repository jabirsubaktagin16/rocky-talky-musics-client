import React from "react";
import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      style={{ height: "400px" }}
      className="w-100 d-flex justify-content-center align-items-center"
    >
      <HashLoader />
    </div>
  );
};

export default Loading;
