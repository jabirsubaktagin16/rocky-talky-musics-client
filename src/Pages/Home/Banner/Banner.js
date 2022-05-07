import React from "react";
import carousel_1 from "../../../images/images/carousel_1.jpg";
import carousel_2 from "../../../images/images/carousel_2.jpg";
import carousel_3 from "../../../images/images/carousel_3.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide carousel-fade relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          <img
            src={carousel_1}
            className="w-screen lg:h-full h-screen"
            alt="..."
          />
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50" />
          <div className="carousel-caption md:block absolute text-center">
            <h3 className="text-3xl font-bold">First slide label</h3>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src={carousel_2}
            className="w-screen lg:h-full h-screen"
            alt="..."
          />
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50" />
          <div className="carousel-caption md:block absolute text-center">
            <h3 className="text-3xl font-bold">Second slide label</h3>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src={carousel_3}
            className="w-screen lg:h-full h-screen"
            alt="..."
          />
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50" />
          <div className="carousel-caption md:block absolute text-center">
            <h3 className="text-3xl font-bold">Third slide label</h3>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
