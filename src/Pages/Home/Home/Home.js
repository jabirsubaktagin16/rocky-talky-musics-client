import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Products from "../Products/Products";
import SecondSection from "../SecondSection/SecondSection";

const Home = () => {
  return (
    <div>
      <Header />
      <PageTitle title={""} />
      <Banner />
      <SecondSection />
      <Brands />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
