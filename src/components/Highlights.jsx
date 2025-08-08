// components/HighlightsCarousel.jsx
import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const highlights = [
  {
    title: "Supply & Installation Fm200 Fire Suppression System",
    desc: "SFFECOs Prime Series Clean Agent Fire Extinguishing Systems",
    image: "/pr1.jpg", // place your image in public/images/
  },
  {
    title: "Supply & Installation Novec Fire Suppression System",
    desc: "New Fire Pump Packages with HMI Control Panels",
    image: "/pr2.jpg",
  },
  {
    title: "Supply & Installation CO2 Fire Supperssion System",
    desc: "It was a remarkable event to meet our valuable clients and consultants",
    image: "/pr3.jpg",
  },
  {
    title: "Supply & Installation of Electric Emergency Door",
    desc: "SFFECO Pre-Packaged Pump House",
    image: "/pr4.jpg",
  },
  {
    title: "Supply & Installation Kichen Hood Fire Suppression Sysmtem",
    desc: "SFFECOs Prime Series Clean Agent Fire Extinguishing Systems",
    image: "/pr5.jpg", // place your image in public/images/
  },
  {
    title: "Supply & Instllation Of Fire Hydrant",
    desc: "New Fire Pump Packages with HMI Control Panels",
    image: "/pr6.png",
  },
  {
    title: "Supply & Installation Of Cladding Work",
    desc: "It was a remarkable event to meet our valuable clients and consultants",
    image: "/pr7.jpg",
  },
  {
    title: "Supply & Installation Of Glass Work",
    desc: "SFFECO Pre-Packaged Pump House",
    image: "/pr8.jpg",
  },
  {
    title: "Supply & Installation Of Civil Work",
    desc: "SFFECOs Prime Series Clean Agent Fire Extinguishing Systems",
    image: "/pr9.webp", // place your image in public/images/
  },
  {
    title: "Fire Extinguisher Dry Powder Refilling",
    desc: "New Fire Pump Packages with HMI Control Panels",
    image: "/pr10.webp",
  },
  {
    title: "Fire Extinguisher CO2 Refilling",
    desc: "It was a remarkable event to meet our valuable clients and consultants",
    image: "/pr11.webp",
  },
  {
    title: "Fire Extinguisher Wet Chemical Refilling",
    desc: "SFFECO Pre-Packaged Pump House",
    image: "/pr10.webp",
  },
];

const HighlightsCarousel = () => {
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-semibold text-center mb-6">Highlights</h2>
      <Slider {...settings}>
        {highlights.map((item, index) => (
          <div
            key={index}
            className="px-4 cursor-pointer"
            onClick={() => navigate("/our-supply-products")}
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-red-700 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HighlightsCarousel;
