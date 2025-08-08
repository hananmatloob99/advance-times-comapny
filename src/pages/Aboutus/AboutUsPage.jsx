import React from "react";
import Header from "../../components/Header.jsx";
import OurPartners from "../../components/OurPartners.jsx";
import Footer from "../../components/Footer.jsx";
import HeroSectionAboutUs from "../../components/HeroSectionAboutUs.jsx";
import SecurityFeatureSection from "../../components/SecurityFeatureSection.jsx";
import StatsSection from "../../components/StatsSection.jsx";
import MissionVisionSupport from "../../components/MissionVisionSupport.jsx";
 


const AboutUsPage = () => {
  return (
    <>
      <Header />
      <HeroSectionAboutUs />
      <SecurityFeatureSection />
      <StatsSection />
      <MissionVisionSupport />
      

      












      <OurPartners />
      <Footer />
    </>
  );
};

export default AboutUsPage;
