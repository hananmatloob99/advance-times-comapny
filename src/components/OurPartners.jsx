// src/components/OurPartners.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partnerLogos = [
  "/src/assets/Al Faris School.png",
  "/src/assets/Al-Hokair Group.png",
  "/src/assets/Alhokair.png",
  "/src/assets/Apparel.png",
  "/src/assets/Daco.png",
  "/src/assets/Damam.png",
  "/src/assets/Fawaz.png",
  "/src/assets/Flow.png",
  "/src/assets/Hi Kids.png",
  "/src/assets/Kaefer.png",
  "/src/assets/OPM.png",
  "/src/assets/Pan Gulf Holding.png",
  "/src/assets/RAJHI Steel.png",
  "/src/assets/Saco.png",
  "/src/assets/SMSA.png",
  "/src/assets/Sraco.png",
  // Add more image paths as needed
];

const OurPartners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 bg-white">
      <h2 className="text-4xl font-bold text-center text-black mb-8">
        Our Partners
      </h2>
      <div className="max-w-7xl mx-auto px-4">
        <Slider {...settings}>
          {partnerLogos.map((logo, index) => (
            <div key={index} className="px-4">
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-24 mx-auto object-contain  hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurPartners;
