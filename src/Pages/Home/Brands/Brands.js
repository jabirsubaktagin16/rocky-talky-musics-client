import React from "react";
import akg from "../../../images/logos/akg.png";
import bach from "../../../images/logos/Bach.png";
import epiphone from "../../../images/logos/epiphone.png";
import fender from "../../../images/logos/Fender.png";
import gemeinhardt from "../../../images/logos/Gemeinhardt.png";
import mapex from "../../../images/logos/Mapex.png";

const Brands = () => {
  return (
    <div className="my-16">
      <p className="text-2xl text-center">
        Following Renowned Companies are providing their best products to us
      </p>
      <div className="container mx-auto md:px-20 px-10 grid overflow-hidden lg:grid-cols-6 xl:grid-cols-6 grid-cols-3 grid-rows-none gap-8 mt-8">
        <div>
          <img src={akg} alt="" className="w-3/4" />
        </div>
        <div>
          <img src={bach} alt="" className="w-3/4" />
        </div>
        <div>
          <img src={epiphone} alt="" className="w-3/4" />
        </div>
        <div>
          <img src={fender} alt="" className="w-3/4" />
        </div>
        <div>
          <img src={gemeinhardt} alt="" className="w-3/4" />
        </div>
        <div>
          <img src={mapex} alt="" className="w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
