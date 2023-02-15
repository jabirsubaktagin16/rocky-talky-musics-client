import React from "react";
import notFound from "../../../images/images/notFound.png";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="lg: w-8/12">
          <img src={notFound} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
