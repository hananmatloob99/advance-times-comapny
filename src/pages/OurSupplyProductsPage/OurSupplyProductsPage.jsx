// import React from "react";
// import Header from "../../components/Header.jsx";
// import OurPartners from "../../components/OurPartners.jsx";
// import Footer from "../../components/Footer.jsx";
// import { HoverEffect } from "../../components/CardHoverEffect.jsx"; // Adjust path as needed
// import HeroSection from "../../components/HeroSection.jsx";

// const OurSupplyProductsPage = () => {
//   const cardItems = [
//   {
//     id: "fm200-gas-cylinders",
//     title: "Fm200 Gas Cylinders (Any Capacity)",
//     description: "High-capacity FM200 cylinders for fire suppression.",
//     image: "/src/assets/Fm200 Gas Cylinders (Any Capacity).jpeg",
//   },
//   {
//     id: "Novec Gas Cylinders",
//     title: "Novec Gas Cylinders (Any Capacity)",
//     description: "High-capacity Novec Gas Cylinders for fire suppression. ",
//     image: "/src/assets/Novec Gas Cylinders (Any Capacity).webp",
//   },
//   {
//     id: "consultation",
//     title: "Consultation",
//     description: "Our experts can help design fire safety systems.",
//     image: "/assets/pr3.jpg",
//   },
//   {
//     id: "consultation2",
//     title: "Consultation",
//     description: "Another consultation service example.",
//     image: "/assets/pr3.jpg",
//   },
// ];

//   return (
//     <>
//       <Header />
//       <HeroSection/>
//       <HoverEffect items={cardItems} />
//       <OurPartners />
//       <Footer />
//     </>
//   );
// };

// export default OurSupplyProductsPage;






// import React, { useState } from "react";
// import Header from "../../components/Header.jsx";
// import OurPartners from "../../components/OurPartners.jsx";
// import Footer from "../../components/Footer.jsx";
// import { HoverEffect } from "../../components/CardHoverEffect.jsx";
// import HeroSection from "../../components/HeroSection.jsx";

// const OurSupplyProductsPage = () => {
//   const [searchTerm, setSearchTerm] = useState("");
 

//   const cardItems = [
//     {
//       id: "fm200-gas-cylinders",
//       title: "Fm200 Gas Cylinders (Any Capacity)",
//       description: "High-capacity FM200 cylinders for fire suppression.",
//       image: "/src/assets/Fm200 Gas Cylinders (Any Capacity).jpeg",
//     },
//     {
//       id: "novec-gas-cylinders",
//       title: "Novec Gas Cylinders (Any Capacity)",
//       description: "High-capacity Novec Gas Cylinders for fire suppression.",
//       image: "/src/assets/Novec Gas Cylinders (Any Capacity).webp",
//     },
//     {
//       id: "Solenoid (Tyco)",
//       title: "Solenoid (Tyco)",
//       description: "Our experts can help design fire safety systems.",
//       image: "/src/assets/Solenoid (Tyco).webp",
//     },
//     {
//       id: "Solenoid (Kidde)",
//       title: "Solenoid (Kidde)",
//       description: "Another consultation service example.",
//       image: "/src/assets/Solenoid (Kidde).webp",
//     },
//      {
//       id: "Solenoid (Fike)",
//       title: "Solenoid (Fike)",
//       description: "Another consultation service example.",
//       image: "/src/assets/Solenoid (Kidde).webp",
//     },
//      {
//       id: "Pressure Switch",
//       title: "Pressure Switch",
//       description: "Another consultation service example.",
//       image: "/src/assets/Solenoid (Kidde).webp",
//     },
//      {
//       id: "Pressure Switch",
//       title: "Pressure Switch",
//       description: "Another consultation service example.",
//       image: "/src/assets/Solenoid (Kidde).webp",
//     },
//      {
//       id: "Pressure Switch",
//       title: "Pressure Switch",
//       description: "Another consultation service example.",
//       image: "/src/assets/Solenoid (Kidde).webp",
//     },
//      {
//       id: "Pressure Switch",
//       title: "Pressure Switch",
//       description: "Another consultation service example.",
//       image: "/src/assets/Solenoid (Kidde).webp",
//     },
//   ];

//   const filteredItems = cardItems.filter((item) =>
//     item.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <Header />
//       <HeroSection />

//       {/* Search Input */}
//       <div className="max-w-4xl mx-auto px-4 py-8">
//         <input
//           type="text"
//           placeholder="Search products..."
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {/* Product Cards */}
//       <HoverEffect items={filteredItems} />

//       <OurPartners />
//       <Footer />
//     </>
//   );
// };

// export default OurSupplyProductsPage;







import React, { useState } from "react";
import Header from "../../components/Header.jsx";
import OurPartners from "../../components/OurPartners.jsx";
import Footer from "../../components/Footer.jsx";
import { HoverEffect } from "../../components/CardHoverEffect.jsx";
import HeroSectionProduct from "../../components/HeroSectionProduct.jsx";

const OurSupplyProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const cardItems = [
    {
      id: "fm200-gas-cylinders",
      title: "Fm200 Gas Cylinders (Any Capacity)",
      image: "/Fm200 Gas Cylinders (Any Capacity).jpeg",
    },
    {
      id: "novec-gas-cylinders",
      title: "Novec Gas Cylinders (Any Capacity)",
      image: "/novec-system-500x500-removebg-preview.png",
    },
    {
      id: "Solenoid Tyco",
      title: "Solenoid Tyco",
      image: "/Solenoid_Valve_120V_150PSI_NSMP_398ff367-8c00-42ea-a07a-51b104bda12a-removebg-preview.png",
    },
    {
      id: "Solenoid Kidde",
      title: "Solenoid Kidde",
      image: "/Solenoid-kidde.png",
    },
    {
      id: "Solenoid Fike",
      title: "Solenoid Fike",
      image: "/Solenoid Fike.png",
    },
    {
      id: "Pressure Switch",
      title: "Pressure Switch",
      image: "/Solenoid-kidde.png",
    },
    {
      id: "Rapture Dist",
      title: "Rapture Dist",
      image: "/Butterfly Valve.png",
    },
    {
      id: "Abort Switch",
      title: "Abort Switch",
      image: "/Abort-Switch-LF1823-10-removebg-preview.png",
    },
    {
      id: "Manuel Release",
      title: "Manuel Release",
      image: "/Manuel Release.png",
    },
    {
      id: "Nozzel",
      title: "Nozzel",
      image: "/nz.png",
    },
    {
      id: "Electric Fire Pump",
      title: "Electric Fire Pump",
      image: "/Electric Fire Pump.png",
    },
    {
      id: "Diesel Fire Pump",
      title: "Diesel Fire Pump",
      image: "/Diesel Fire Pump.png",
    },
    {
      id: "Jockey Fire Pump",
      title: "Jockey Fire Pump",
      image: "/Jockey Fire Pump.png",
    },
    {
      id: "Butterfly Valve",
      title: "Butterfly Valve",
      image: "/Butterfly Valve.png",
    },
    {
      id: "Ball Valve",
      title: "Ball Valve",
      image: "/ball-valve-500x500-removebg-preview.png",
    },
    {
      id: "Gate Valve",
      title: "Gate Valve",
      image: "/gate-valve-all-300x300-removebg-preview.png",
    },
    {
      id: "Foot Valve",
      title: "Foot Valve",
      image: "/foot-valves-removebg-preview.png",
    },
    {
      id: "Fire Hose Cabinet (All Types)",
      title: "Fire Hose Cabinet (All Types)",
      image: "/Phlox-fire-hose-reel-cabinet-2-removebg-preview.png",
    },
    {
      id: "Sprinkler",
      title: "Sprinkler",
      image: "/Sprinkler.png",
    },
    {
      id: "Heat Detector",
      title: "Heat Detector",
      image: "/Heat Detector.png",
    },
    {
      id: "Smoke Detector",
      title: "Smoke Detector",
      image: "/Smoke_detector-removebg-preview.png",
    },
    {
      id: "Multi Detector",
      title: "Multi Detector",
      image: "/Multi Detector.png",
    },
    {
      id: "Break Glass",
      title: "Break Glass",
      image: "/break-glass-unit-500x500-removebg-preview.png",
    },
    {
      id: "Alarm Bell",
      title: "Alarm Bell",
      image: "/fire-alarm-bell-500x500-removebg-preview.png",
    },
    {
      id: "Emergency Light",
      title: "Emergency Light",
      image: "/Emergency Light.png",
    },
    {
      id: "Exit Light",
      title: "Exit Light",
      image: "/Exit Light.png",
    },
    {
      id: "Adressable Fire Alarm Control Panel",
      title: "Adressable Fire Alarm Control Panel",
      image: "/Adressable Fire Alarm Control Panel.png",
    },
    {
      id: "Conventional Fire Alarm Control Panel",
      title: "Conventional Fire Alarm Control Panel",
      image: "/Conventional Fire Alarm Control Panel.png",
    },
    {
      id: "Fire Extinguisher Dry Powder",
      title: "Fire Extinguisher Dry Powder",
      image: "/Fire Extinguisher Dry Powder.png",
    },
    {
      id: "Fire Extinguisher CO2",
      title: "Fire Extinguisher CO2",
      image: "/co2-fire-extinguisher-removebg-preview.png",
    },
    {
      id: "Fire Extinguiser Foam",
      title: "Fire Extinguiser Foam",
      image: "/Fire Extinguiser Foam.png",
    },
    {
      id: "Fire Extinguisher Wet Chemical",
      title: "Fire Extinguisher Wet Chemical",
      image: "/Fire Extinguisher Wet Chemical.png",
    },
    // Add more items up to 32 here...
  ];

  const filteredItems = cardItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleItems = filteredItems.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <>
      <Header />
      <HeroSectionProduct />

      {/* Search Input */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 border border-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setVisibleCount(6); // Reset visible count on new search
          }}
        />
      </div>

      {/* Product Cards */}
      <HoverEffect items={visibleItems} />

      {/* Show More Button */}
      {visibleCount < filteredItems.length && (
        <div className="text-center my-6">
          <button
            onClick={handleShowMore}
            className="px-6 py-2 bg-red-900 text-white rounded-md hover:bg-red-700 transition"
          >
            Show More
          </button>
        </div>
      )}

      <OurPartners />
      <Footer />
    </>
  );
};

export default OurSupplyProductsPage;
