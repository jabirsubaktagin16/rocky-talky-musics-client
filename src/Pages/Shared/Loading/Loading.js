import React, { useState } from "react";
import { BarLoader } from "react-spinners";

const Loading = () => {
  const [color, setColor] = useState("#480ca8");
  return (
    <div className="w-full flex justify-center items-center my-20">
      <BarLoader color={color} size={200} />
    </div>
  );
};

export default Loading;
