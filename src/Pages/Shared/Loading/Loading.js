import React from "react";
import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      style={{ height: "400px" }}
      className="w-full flex justify-center items-center"
    >
      <HashLoader />
    </div>
  );
};

export default Loading;
