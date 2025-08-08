import React from "react";
import Header from "../../components/Header.jsx";
import OurPartners from "../../components/OurPartners.jsx";
import Footer from "../../components/Footer.jsx";
import ServicesGrid from "../../components/ServicesGrid.jsx";
import HeroSectionServices from "../../components/HeroSectionServices.jsx";
import Services from "../../components/Services.jsx";
import { LampDemo } from "../../components/LampDemo.jsx";

const ServicesPage = () => {
  return (
    <>
      <Header />
      <HeroSectionServices />
      <div>
      

      {/* Rest of your services content here */}
    </div>
      <Services />
      <LampDemo/>
      <OurPartners />
      <Footer />
    </>
  );
};

export default ServicesPage;
