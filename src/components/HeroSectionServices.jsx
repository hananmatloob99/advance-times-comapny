import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/SR1.jpg";
import image2 from "../assets/SR2.jpg";
import image3 from "../assets/SR3.jpg";

import {
  LearnMoreModal,
  LearnMoreTrigger,
  LearnMoreBody,
} from "../components/LearnMore.jsx";

const slides = [
  {
    id: 1,
    image: image1,
    title: "Our Services",
    subtitle: "Design and approval of safety plans from the competent authorities.",
  },
  {
    id: 2,
    image: image2,
    title: "Our Services",
    subtitle: "Supply all kinds of equipment and materials used (pumps - alarms - fire network supplies).",
  },
  {
    id: 3,
    image: image3,
    title: "Our Services",
    subtitle: "Periodic maintenance contracts for safety systems.",
  },
];

const HeroSectionServices = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <LearnMoreModal>
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id}>
              <div
                className="w-full h-screen bg-center bg-cover flex items-center justify-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="bg-black/20 backdrop-blur-md p-6 sm:p-10 rounded-xl text-center text-white max-w-2xl mx-4 sm:mx-auto z-10">
                  <h1 className=" text-black text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl mb-6 text-black">{slide.subtitle}</p>

                  {/* Only the trigger inside the slide */}
                  <LearnMoreTrigger className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                    Learn More
                  </LearnMoreTrigger>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Modal Body outside the loop */}
        <LearnMoreBody />
      </LearnMoreModal>
    </div>
  );
};

export default HeroSectionServices;
