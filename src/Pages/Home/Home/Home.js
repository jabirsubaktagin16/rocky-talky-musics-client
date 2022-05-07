import React from "react";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Products from "../Products/Products";
import SecondSection from "../SecondSection/SecondSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <SecondSection />
      <Brands />
      <Products />
    </div>
  );
};

export default Home;
