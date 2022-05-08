import React from "react";
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
          <div
            className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover"
            style={{
              backgroundImage: "url('https://i.ibb.co/y4jnmZ1/carousel-1.jpg')",
              height: "584px",
            }}
          >
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            >
              <div className="flex justify-center items-center h-full">
                <div className="text-white">
                  <h1 className="font-semibold text-4xl mb-4 uppercase">
                    Acoustic Guitar
                  </h1>
                  <div className="flex justify-center items-center">
                    <p className="font-light text-lg w-2/3">
                      An acoustic guitar is a musical instrument in the string
                      family. When a string is plucked its vibration is
                      transmitted from the bridge, resonating throughout the top
                      of the guitar. It is also transmitted to the side and back
                      of the instrument, resonating through the air in the body,
                      and producing sound from the sound hole. The original,
                      general term for this stringed instrument is guitar, and
                      the retronym 'acoustic guitar' distinguishes it from an
                      electric guitar, which relies on electronic amplification.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <div
            className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover"
            style={{
              backgroundImage: "url('https://i.ibb.co/KF493HL/carousel-2.jpg')",
              height: "584px",
            }}
          >
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            >
              <div className="flex justify-center items-center h-full">
                <div className="text-white">
                  <h1 className="font-semibold text-4xl mb-4 uppercase">
                    Microphone
                  </h1>
                  <div className="flex justify-center items-center">
                    <p className="font-light text-lg w-2/3">
                      A microphone, colloquially called a mic or mike, is a
                      transducer that converts sound into an electrical signal.
                      Microphones are used in many applications such as
                      telephones, hearing aids, public address systems for
                      concert halls and public events, motion picture
                      production, live and recorded audio engineering, sound
                      recording, two-way radios, megaphones, and radio and
                      television broadcasting. They are also used in computers
                      for recording voice, speech recognition, VoIP, and for
                      other purposes such as ultrasonic sensors or knock
                      sensors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <div
            className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover"
            style={{
              backgroundImage: "url('https://i.ibb.co/3WjG5jJ/carousel-3.jpg')",
              height: "584px",
            }}
          >
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            >
              <div className="flex justify-center items-center h-full">
                <div className="text-white">
                  <h1 className="font-semibold text-4xl mb-4 uppercase">
                    Bass Guitar
                  </h1>
                  <div className="flex justify-center items-center">
                    <p className="font-light text-lg w-2/3">
                      The bass guitar, electric bass or simply bass, is the
                      lowest-pitched member of the guitar family. It is a
                      plucked string instrument similar in appearance and
                      construction to an electric or an acoustic guitar, but
                      with a longer neck and scale length, and typically four to
                      six strings or courses. Since the mid-1950s, the bass
                      guitar has largely replaced the double bass in popular
                      music.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
