import React from "react";
import musicPlaying from "../../../images/images/musicPlaying.png";

const SecondSection = () => {
  return (
    <div className="container px-10 md:px-20 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">
      <div>
        <img src={musicPlaying} alt="" />
      </div>
      {/* Remove class [ h-24 ] when adding a card block */}
      {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
      <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />
    </div>
  );
};

export default SecondSection;
