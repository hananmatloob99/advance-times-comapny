import React from "react";
import Header from "../../components/Header.jsx";
import HeroSection from "../../components/HeroSection.jsx";
import Footer from "../../components/Footer.jsx";
import OurPartners from "../../components/OurPartners.jsx";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "../../components/ContactUsModal.jsx";
import Featured from "../../components/Featured.jsx";
import { ContainerScroll } from "../../components/ContainerScrollAnimation.jsx";
import image2 from "../../assets/image2.jpg";
// import { BentoGrid, BentoGridItem } from "../../components/BentoGrid.jsx";
import pic1 from "../../assets/1.jpg";
import HighlightsCarousel from "../../components/Highlights.jsx";
import { BrowserRouter } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="">
      <Header />
      <main className="">
        <HeroSection />

        <ContainerScroll
          titleComponent={
            <h1 className="text-4xl md:text-6xl font-bold text-center">
              العمل معكم... فخر لنا
            </h1>
          }
        >
          <div className="h-full w-full flex items-center justify-center">
            <img
              src={image2}
              alt="Scroll Card"
              className="w-full h-full object-contain"
            />
          </div>
        </ContainerScroll>
        <HighlightsCarousel />

        <Featured />
        <OurPartners />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
