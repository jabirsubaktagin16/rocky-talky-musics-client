import React, { useState } from "react";
import { BarLoader } from "react-spinners";

const Loading = () => {
  const [color, setColor] = useState("#480ca8");
  return (
    <div
      style={{ height: "400px" }}
      className="w-full flex justify-center items-center"
    >
      <BarLoader color={color} size={150} />
    </div>
  );
};

export default Loading;
