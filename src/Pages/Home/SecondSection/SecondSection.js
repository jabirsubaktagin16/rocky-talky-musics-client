import React from "react";
import musicPlaying from "../../../images/images/musicPlaying.png";

const SecondSection = () => {
  return (
    <div className="container items-center px-10 md:px-20 mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">
      <div>
        <img src={musicPlaying} alt="" />
      </div>
      {/* Remove class [ h-24 ] when adding a card block */}
      {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
      <div>
        <h4 className="text-6xl leading-tight font-bold mb-4 pb-4">
          About Rocky Talky Musics
        </h4>
        <p className="text-lg font-normal leading-relaxed text-gray-800">
          Rocky Talky Musics is One of the best musical instrument provider in
          the world. We supply different types of musical instruments such as-
          Accoustic Guitar, Bass Guitar, Flute, Violin, Trumpet, Drums,
          Microphone etc around the world. We provide different renowned brands
          musical instruments and we are quite famous among the musical
          instrument shops.
        </p>
      </div>
    </div>
  );
};

export default SecondSection;
