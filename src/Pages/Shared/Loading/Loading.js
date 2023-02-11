import Lottie from "lottie-react";
import React from "react";
import musical from '../../../musical.json';

const Loading = () => {
  const style = {
    height: 500,
  };
  return (
    <div className="w-full flex justify-center items-center my-20">
      <Lottie style={style} animationData={musical} loop={true} />
    </div>
  );
};

export default Loading;
