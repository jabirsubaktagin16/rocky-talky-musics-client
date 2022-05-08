import React from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Products from "../Products/Products";
import SecondSection from "../SecondSection/SecondSection";

const Home = () => {
  return (
    <div>
      <PageTitle title={""} />
      <Banner />
      <SecondSection />
      <Brands />
      <Products />
    </div>
  );
};

export default Home;
