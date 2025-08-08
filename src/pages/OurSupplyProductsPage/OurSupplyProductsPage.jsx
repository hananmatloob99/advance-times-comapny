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
      image: "/src/assets/Fm200 Gas Cylinders (Any Capacity).jpeg",
    },
    {
      id: "novec-gas-cylinders",
      title: "Novec Gas Cylinders (Any Capacity)",
      image: "/src/assets/Novec Gas Cylinders (Any Capacity).webp",
    },
    {
      id: "Solenoid Tyco",
      title: "Solenoid Tyco",
      image: "/src/assets/Solenoid (Tyco).webp",
    },
    {
      id: "Solenoid Kidde",
      title: "Solenoid Kidde",
      image: "/src/assets/Solenoid (Kidde).webp",
    },
    {
      id: "Solenoid Fike",
      title: "Solenoid Fike",
      image: "/src/assets/Solenoid (Kidde).webp",
    },
    {
      id: "Pressure Switch",
      title: "Pressure Switch",
      image: "/src/assets/Solenoid (Kidde).webp",
    },
    {
      id: "Rapture Dist",
      title: "Rapture Dist",
      image: "/src/assets/Solenoid (Kidde).webp",
    },
    {
      id: "Abort Switch",
      title: "Abort Switch",
      image: "/src/assets/Solenoid (Kidde).webp",
    },
    {
      id: "Manuel Release",
      title: "Manuel Release",
      image: "/src/assets/Solenoid (Kidde).webp",
    },
    {
      id: "Nozzel",
      title: "Nozzel",
      image: "/src/assets/Solenoid (Kidde).webp",
    },
    {
      id: "Electric Fire Pump",
      title: "Electric Fire Pump",
      image: "/src/assets/Solenoid (Kidde).webp",
    },
    {
      id: "Diesel Fire Pump",
      title: "Diesel Fire Pump",
      image: "/src/assets/Solenoid (Kidde).webp",
    },
    {
      id: "Jockey Fire Pump",
      title: "Jockey Fire Pump",
      image: "/src/assets/Solenoid (Kidde).webp",
    },
    {
      id: "Butterfly Valve",
      title: "Butterfly Valve",
      image: "/src/assets/Solenoid (Kidde).webp",
    },
    {
      id: "Ball Valve",
      title: "Ball Valve",
      image: "/src/assets/Solenoid (Kidde).webp",
    },
    {
      id: "Gate Valve",
      title: "Gate Valve",
      image: "/src/assets/Solenoid (Kidde).webp",
    },
    {
      id: "Foot Valve",
      title: "Foot Valve",
      image: "/src/assets/Solenoid (Kidde).webp",
    },
    {
      id: "Fire Hose Cabinet (All Types)",
      title: "Fire Hose Cabinet (All Types)",
      image: "/src/assets/Solenoid (Kidde).webp",
    },
    {
      id: "Sprinkler",
      title: "Sprinkler",
      image: "/src/assets/Solenoid (Kidde).webp",
    },
    {
      id: "Heat Detector",
      title: "Heat Detector",
      image: "/src/assets/Solenoid (Kidde).webp",
    },
    {
      id: "Smoke Detector",
      title: "Smoke Detector",
      image: "/src/assets/Solenoid (Kidde).webp",
    },
    {
      id: "Multi Detector",
      title: "Multi Detector",
      image: "/src/assets/Solenoid (Kidde).webp",
    },
    {
      id: "Break Glass",
      title: "Break Glass",
      image: "/src/assets/Solenoid (Kidde).webp",
    },
    {
      id: "Alarm Bell",
      title: "Alarm Bell",
      image: "/src/assets/Solenoid (Kidde).webp",
    },
    {
      id: "Emergecnt Light",
      title: "Emergecnt Light",
      image: "/src/assets/Solenoid (Kidde).webp",
    },
    {
      id: "Exit Light",
      title: "Exit Light",
      image: "/src/assets/Solenoid (Kidde).webp",
    },
    {
      id: "Adressable Fire Alarm Control Panel",
      title: "Adressable Fire Alarm Control Panel",
      image: "/src/assets/Solenoid (Kidde).webp",
    },
    {
      id: "Conventional Fire Alarm Control Panel",
      title: "Conventional Fire Alarm Control Panel",
      image: "/src/assets/Solenoid (Kidde).webp",
    },
    {
      id: "Fire Extinguisher Dry Powder",
      title: "Fire Extinguisher Dry Powder",
      image: "/src/assets/Solenoid (Kidde).webp",
    },
    {
      id: "Fire Extinguisher CO2",
      title: "Fire Extinguisher CO2",
      image: "/src/assets/Solenoid (Kidde).webp",
    },
    {
      id: "Fire Extinguiser Foam",
      title: "Fire Extinguiser Foam",
      image: "/src/assets/Solenoid (Kidde).webp",
    },
    {
      id: "Fire Extinguisher Wet Chemical",
      title: "Fire Extinguisher Wet Chemical",
      image: "/src/assets/Solenoid (Kidde).webp",
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
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red"
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
