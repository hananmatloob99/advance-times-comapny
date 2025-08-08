import React from "react";
import gridImage from "../assets/Product-page-herosection.png"; // replace with your image path
// import logoImage from "../assets/logo.png"; // Optional logo

const HeroSectionProduct = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        
        {/* Left Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-lg sm:text-xl text-red-700 font-medium mb-2">
            Precaution Against Fire Is Important
          </h2>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-4 leading-tight">
            Always Be A Step Ahead
          </h1>

          <p className="text-base sm:text-lg text-black mb-2">
            At Advanced Times Company for General Contracting, we take pride in offering a comprehensive range of top-quality fire safety supply products tailored to meet the needs of residential, commercial, and industrial spaces. Our inventory includes fire extinguishers, fire alarm systems, smoke detectors, fire hose reels, emergency lights, fire blankets, sprinkler systems, and other critical firefighting and fire prevention equipment. Each product is sourced from trusted manufacturers and meets international safety standards, ensuring reliability in emergency situations. Whether you are outfitting a new building or upgrading your current safety infrastructure, our expert team is here to guide you in selecting the right equipment to protect lives and property.


          </p>

          {/* <p className="text-base sm:text-lg text-black mb-6">
            We Are The Leading Supplier Of Fire Safety Products
          </p> */}

          {/* CTA Button (Optional) */}
          {/* 
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded transition duration-300">
            Learn More
          </button>
          */}
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={gridImage}
            alt="Fire Safety"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionProduct;
