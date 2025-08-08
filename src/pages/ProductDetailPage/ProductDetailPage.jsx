import React from "react";
import { useParams } from "react-router-dom";
// import { Header } from "../../components/ContainerScrollAnimation";
import Footer from "../../components/Footer";
import Header from "../../components/Header.jsx"; // Ensure you have a Header component

const products = [
  {
    id: "fm200-gas-cylinders",
    title: "Fm200 Gas Cylinders (Any Capacity)",
    description: "High-capacity FM200 cylinders for fire suppression.",
    image: "/Fm200 Gas Cylinders (Any Capacity).jpeg",
    details: "FM200 gas cylinders are designed to store and discharge HFC-227ea, a clean, fast-acting fire suppression agent. Available in various capacities, these cylinders offer effective protection for critical areas like server rooms, data centers, and electrical panels—ensuring rapid fire suppression without leaving residue or causing damage to sensitive equipment.",
  },
  {
    id: "novec-gas-cylinders",
    title: "Novec Gas Cylinders (Any Capacity)",
    description: "Inspections and maintenance services.",
    image: "/novec-system-500x500-removebg-preview.png",
    details: "Novec Gas Cylinders are advanced fire suppression containers designed to store and discharge 3M™ Novec™ 1230 Fire Protection Fluid. Available in various capacities, these cylinders are ideal for protecting sensitive equipment in data centers, control rooms, and other high-value environments. They offer fast-acting, clean, and residue-free fire suppression with minimal downtime.",
  },
  {
    id: "Solenoid Tyco",
    title: "Solenoid Tyco",
    description: "Fire safety system design and compliance support.",
    image: "/Solenoid_Valve_120V_150PSI_NSMP_398ff367-8c00-42ea-a07a-51b104bda12a-removebg-preview.png",
    details: "Tyco, a well-known brand under TE Connectivity, manufactures high-performance solenoids used in various industrial and automotive applications. A solenoid is an electromechanical device that converts electrical energy into linear mechanical motion. Tyco solenoids are recognized for their reliability, compact design, and durability, making them ideal for tasks like controlling valves, switches, or locking mechanisms in systems requiring precise actuation. They are commonly used in automotive ignition systems, HVAC controls, and industrial automation.",
  },
  {
    id: "Solenoid Kidde",
    title: "Solenoid Kidde",
    description: "Extra consultation support.",
    image: "/Solenoid-kidde.png",
    details: "A Kidde solenoid is an electromechanical device used in Kidde fire suppression systems to control the release of extinguishing agents. When activated electrically, the solenoid triggers the valve mechanism in a suppression system cylinder, allowing the fire suppression agent (such as FM-200 or CO₂) to be discharged rapidly. It plays a critical role in automated fire protection, ensuring fast and reliable system activation during fire emergencies.",
  },






   {
    id: "Solenoid Fike",
    title: "Solenoid Fike",
    description: "High-capacity FM200 cylinders for fire suppression.",
    image: "/Solenoid Fike.png",
    details: "FM200 gas cylinders are designed to store and discharge HFC-227ea, a clean, fast-acting fire suppression agent. Available in various capacities, these cylinders offer effective protection for critical areas like server rooms, data centers, and electrical panels—ensuring rapid fire suppression without leaving residue or causing damage to sensitive equipment.",
  },
  {
    id: "Pressure Switch",
    title: "Pressure Switch",
    description: "Inspections and maintenance services.",
    image: "/Pressure Switch.png",
    details: "Novec Gas Cylinders are advanced fire suppression containers designed to store and discharge 3M™ Novec™ 1230 Fire Protection Fluid. Available in various capacities, these cylinders are ideal for protecting sensitive equipment in data centers, control rooms, and other high-value environments. They offer fast-acting, clean, and residue-free fire suppression with minimal downtime.",
  },
  {
    id: "Rapture Dist",
    title: "Rapture Dist",
    description: "Fire safety system design and compliance support.",
    image: "/Butterfly Valve.png",
    details: "Tyco, a well-known brand under TE Connectivity, manufactures high-performance solenoids used in various industrial and automotive applications. A solenoid is an electromechanical device that converts electrical energy into linear mechanical motion. Tyco solenoids are recognized for their reliability, compact design, and durability, making them ideal for tasks like controlling valves, switches, or locking mechanisms in systems requiring precise actuation. They are commonly used in automotive ignition systems, HVAC controls, and industrial automation.",
  },
  {
    id: "Abort Switch", 
    title: "Abort Switch",
    description: "Extra consultation support.",
    image: "/Abort-Switch-LF1823-10-removebg-preview.png",
    details: "A Kidde solenoid is an electromechanical device used in Kidde fire suppression systems to control the release of extinguishing agents. When activated electrically, the solenoid triggers the valve mechanism in a suppression system cylinder, allowing the fire suppression agent (such as FM-200 or CO₂) to be discharged rapidly. It plays a critical role in automated fire protection, ensuring fast and reliable system activation during fire emergencies.",
  },
   {
    id: "Manuel Release",
    title: "Manuel Release",
    description: "High-capacity FM200 cylinders for fire suppression.",
    image: "/Manuel Release.png",
    details: "FM200 gas cylinders are designed to store and discharge HFC-227ea, a clean, fast-acting fire suppression agent. Available in various capacities, these cylinders offer effective protection for critical areas like server rooms, data centers, and electrical panels—ensuring rapid fire suppression without leaving residue or causing damage to sensitive equipment.",
  },
  {
    id: "Nozzel",
    title: "Nozzel",
    description: "Inspections and maintenance services.",
    image: "/Nozzel.png",
    details: "Novec Gas Cylinders are advanced fire suppression containers designed to store and discharge 3M™ Novec™ 1230 Fire Protection Fluid. Available in various capacities, these cylinders are ideal for protecting sensitive equipment in data centers, control rooms, and other high-value environments. They offer fast-acting, clean, and residue-free fire suppression with minimal downtime.",
  },
  {
    id: "Electric Fire Pump",
    title: "Electric Fire Pump",
    description: "Fire safety system design and compliance support.",
    image: "/Electric Fire Pump.png",
    details: "Tyco, a well-known brand under TE Connectivity, manufactures high-performance solenoids used in various industrial and automotive applications. A solenoid is an electromechanical device that converts electrical energy into linear mechanical motion. Tyco solenoids are recognized for their reliability, compact design, and durability, making them ideal for tasks like controlling valves, switches, or locking mechanisms in systems requiring precise actuation. They are commonly used in automotive ignition systems, HVAC controls, and industrial automation.",
  },
  {
    id: "Diesel Fire Pump",
    title: "Diesel Fire Pump",
    description: "Extra consultation support.",
    image: "/Diesel Fire Pump.png",
    details: "A Kidde solenoid is an electromechanical device used in Kidde fire suppression systems to control the release of extinguishing agents. When activated electrically, the solenoid triggers the valve mechanism in a suppression system cylinder, allowing the fire suppression agent (such as FM-200 or CO₂) to be discharged rapidly. It plays a critical role in automated fire protection, ensuring fast and reliable system activation during fire emergencies.",
  },
   {
    id: "Jockey Fire Pump",
    title: "Jockey Fire Pump",
    description: "High-capacity FM200 cylinders for fire suppression.",
    image: "/Jockey Fire Pump.png",
    details: "FM200 gas cylinders are designed to store and discharge HFC-227ea, a clean, fast-acting fire suppression agent. Available in various capacities, these cylinders offer effective protection for critical areas like server rooms, data centers, and electrical panels—ensuring rapid fire suppression without leaving residue or causing damage to sensitive equipment.",
  },
  {
    id: "Butterfly Valve",
    title: "Butterfly Valve",
    description: "Inspections and maintenance services.",
    image: "/Butterfly Valve.png",
    details: "Novec Gas Cylinders are advanced fire suppression containers designed to store and discharge 3M™ Novec™ 1230 Fire Protection Fluid. Available in various capacities, these cylinders are ideal for protecting sensitive equipment in data centers, control rooms, and other high-value environments. They offer fast-acting, clean, and residue-free fire suppression with minimal downtime.",
  },
  {
    id: "Ball Valve",
    title: "Ball Valve",
    description: "Fire safety system design and compliance support.",
    image: "/ball-valve-500x500-removebg-preview.png",
    details: "Tyco, a well-known brand under TE Connectivity, manufactures high-performance solenoids used in various industrial and automotive applications. A solenoid is an electromechanical device that converts electrical energy into linear mechanical motion. Tyco solenoids are recognized for their reliability, compact design, and durability, making them ideal for tasks like controlling valves, switches, or locking mechanisms in systems requiring precise actuation. They are commonly used in automotive ignition systems, HVAC controls, and industrial automation.",
  },
  {
    id: "Gate Valve",
    title: "Gate Valve",
    description: "Extra consultation support.",
    image: "/gate-valve-all-300x300-removebg-preview.png",
    details: "A Kidde solenoid is an electromechanical device used in Kidde fire suppression systems to control the release of extinguishing agents. When activated electrically, the solenoid triggers the valve mechanism in a suppression system cylinder, allowing the fire suppression agent (such as FM-200 or CO₂) to be discharged rapidly. It plays a critical role in automated fire protection, ensuring fast and reliable system activation during fire emergencies.",
  },
   {
    id: "Foot Valve",
    title: "Foot Valve",
    description: "High-capacity FM200 cylinders for fire suppression.",
    image: "/foot-valves-removebg-preview.png",
    details: "FM200 gas cylinders are designed to store and discharge HFC-227ea, a clean, fast-acting fire suppression agent. Available in various capacities, these cylinders offer effective protection for critical areas like server rooms, data centers, and electrical panels—ensuring rapid fire suppression without leaving residue or causing damage to sensitive equipment.",
  },
  {
    id: "Fire Hose Cabinet All Types",
    title: "Fire Hose Cabinet All Types",
    description: "Inspections and maintenance services.",
    image: "/Phlox-fire-hose-reel-cabinet-2-removebg-preview.png",
    details: "Novec Gas Cylinders are advanced fire suppression containers designed to store and discharge 3M™ Novec™ 1230 Fire Protection Fluid. Available in various capacities, these cylinders are ideal for protecting sensitive equipment in data centers, control rooms, and other high-value environments. They offer fast-acting, clean, and residue-free fire suppression with minimal downtime.",
  },
  {
    id: "Sprinkler",
    title: "Sprinkler",
    description: "Fire safety system design and compliance support.",
    image: "/Sprinkler.png",
    details: "Tyco, a well-known brand under TE Connectivity, manufactures high-performance solenoids used in various industrial and automotive applications. A solenoid is an electromechanical device that converts electrical energy into linear mechanical motion. Tyco solenoids are recognized for their reliability, compact design, and durability, making them ideal for tasks like controlling valves, switches, or locking mechanisms in systems requiring precise actuation. They are commonly used in automotive ignition systems, HVAC controls, and industrial automation.",
  },
  {
    id: "Heat Detector",
    title: "Heat Detector",
    description: "Extra consultation support.",
    image: "/Heat Detector.png",
    details: "A Kidde solenoid is an electromechanical device used in Kidde fire suppression systems to control the release of extinguishing agents. When activated electrically, the solenoid triggers the valve mechanism in a suppression system cylinder, allowing the fire suppression agent (such as FM-200 or CO₂) to be discharged rapidly. It plays a critical role in automated fire protection, ensuring fast and reliable system activation during fire emergencies.",
  },
   {
    id: "Smoke Detector",
    title: "Smoke Detector",
    description: "High-capacity FM200 cylinders for fire suppression.",
    image: "/Smoke_detector-removebg-preview.png",
    details: "FM200 gas cylinders are designed to store and discharge HFC-227ea, a clean, fast-acting fire suppression agent. Available in various capacities, these cylinders offer effective protection for critical areas like server rooms, data centers, and electrical panels—ensuring rapid fire suppression without leaving residue or causing damage to sensitive equipment.",
  },
  {
    id: "Multi Detector",
    title: "Multi Detector",
    description: "Inspections and maintenance services.",
    image: "/Multi Detector.png",
    details: "Novec Gas Cylinders are advanced fire suppression containers designed to store and discharge 3M™ Novec™ 1230 Fire Protection Fluid. Available in various capacities, these cylinders are ideal for protecting sensitive equipment in data centers, control rooms, and other high-value environments. They offer fast-acting, clean, and residue-free fire suppression with minimal downtime.",
  },
  {
    id: "Break Glass",
    title: "Break Glass",
    description: "Fire safety system design and compliance support.",
    image: "/break-glass-unit-500x500-removebg-preview.png",
    details: "Tyco, a well-known brand under TE Connectivity, manufactures high-performance solenoids used in various industrial and automotive applications. A solenoid is an electromechanical device that converts electrical energy into linear mechanical motion. Tyco solenoids are recognized for their reliability, compact design, and durability, making them ideal for tasks like controlling valves, switches, or locking mechanisms in systems requiring precise actuation. They are commonly used in automotive ignition systems, HVAC controls, and industrial automation.",
  },
  {
    id: "Alarm Bell",
    title: "Alarm Bell",
    description: "Extra consultation support.",
    image: "/fire-alarm-bell-500x500-removebg-preview.png",
    details: "A Kidde solenoid is an electromechanical device used in Kidde fire suppression systems to control the release of extinguishing agents. When activated electrically, the solenoid triggers the valve mechanism in a suppression system cylinder, allowing the fire suppression agent (such as FM-200 or CO₂) to be discharged rapidly. It plays a critical role in automated fire protection, ensuring fast and reliable system activation during fire emergencies.",
  },
   {
    id: "Emergency Light",
    title: "Emergency Light",
    description: "High-capacity FM200 cylinders for fire suppression.",
    image: "/Emergency Light.png",
    details: "FM200 gas cylinders are designed to store and discharge HFC-227ea, a clean, fast-acting fire suppression agent. Available in various capacities, these cylinders offer effective protection for critical areas like server rooms, data centers, and electrical panels—ensuring rapid fire suppression without leaving residue or causing damage to sensitive equipment.",
  },
  {
    id: "Exit Light",
    title: "Exit Light",
    description: "Inspections and maintenance services.",
    image: "/Exit Light.png",
    details: "Novec Gas Cylinders are advanced fire suppression containers designed to store and discharge 3M™ Novec™ 1230 Fire Protection Fluid. Available in various capacities, these cylinders are ideal for protecting sensitive equipment in data centers, control rooms, and other high-value environments. They offer fast-acting, clean, and residue-free fire suppression with minimal downtime.",
  },
  {
    id: "Adressable Fire Alarm Control Panel",
    title: "Adressable Fire Alarm Control Panel",
    description: "Fire safety system design and compliance support.",
    image: "/Adressable Fire Alarm Control Panel.png",
    details: "Tyco, a well-known brand under TE Connectivity, manufactures high-performance solenoids used in various industrial and automotive applications. A solenoid is an electromechanical device that converts electrical energy into linear mechanical motion. Tyco solenoids are recognized for their reliability, compact design, and durability, making them ideal for tasks like controlling valves, switches, or locking mechanisms in systems requiring precise actuation. They are commonly used in automotive ignition systems, HVAC controls, and industrial automation.",
  },
  {
    id: "Conventional Fire Alarm Control Panel",
    title: "Conventional Fire Alarm Control Panel",
    description: "Extra consultation support.",
    image: "/Conventional Fire Alarm Control Panel.png",
    details: "A Kidde solenoid is an electromechanical device used in Kidde fire suppression systems to control the release of extinguishing agents. When activated electrically, the solenoid triggers the valve mechanism in a suppression system cylinder, allowing the fire suppression agent (such as FM-200 or CO₂) to be discharged rapidly. It plays a critical role in automated fire protection, ensuring fast and reliable system activation during fire emergencies.",
  },
   {
    id: "Fire Extinguisher Dry Powder",
    title: "Fire Extinguisher Dry Powder",
    description: "High-capacity FM200 cylinders for fire suppression.",
    image: "/Fire Extinguisher Dry Powder.png",
    details: "FM200 gas cylinders are designed to store and discharge HFC-227ea, a clean, fast-acting fire suppression agent. Available in various capacities, these cylinders offer effective protection for critical areas like server rooms, data centers, and electrical panels—ensuring rapid fire suppression without leaving residue or causing damage to sensitive equipment.",
  },
  {
    id: "Fire Extinguisher CO2",
    title: "Fire Extinguisher CO2",
    description: "Inspections and maintenance services.",
    image: "/co2-fire-extinguisher-removebg-preview.png",
    details: "Novec Gas Cylinders are advanced fire suppression containers designed to store and discharge 3M™ Novec™ 1230 Fire Protection Fluid. Available in various capacities, these cylinders are ideal for protecting sensitive equipment in data centers, control rooms, and other high-value environments. They offer fast-acting, clean, and residue-free fire suppression with minimal downtime.",
  },
  {
    id: "Fire Extinguiser Foam",
    title: "Fire Extinguiser Foam",
    description: "Fire safety system design and compliance support.",
    image: "/Fire Extinguiser Foam.png",
    details: "Tyco, a well-known brand under TE Connectivity, manufactures high-performance solenoids used in various industrial and automotive applications. A solenoid is an electromechanical device that converts electrical energy into linear mechanical motion. Tyco solenoids are recognized for their reliability, compact design, and durability, making them ideal for tasks like controlling valves, switches, or locking mechanisms in systems requiring precise actuation. They are commonly used in automotive ignition systems, HVAC controls, and industrial automation.",
  },
  {
    id: "Fire Extinguisher Wet Chemical",
    title: "Fire Extinguisher Wet Chemical",
    description: "Extra consultation support.",
    image: "/Fire Extinguisher Wet Chemical.png",
    details: "A Kidde solenoid is an electromechanical device used in Kidde fire suppression systems to control the release of extinguishing agents. When activated electrically, the solenoid triggers the valve mechanism in a suppression system cylinder, allowing the fire suppression agent (such as FM-200 or CO₂) to be discharged rapidly. It plays a critical role in automated fire protection, ensuring fast and reliable system activation during fire emergencies.",
  },
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <div className="p-10 text-center">Product not found.</div>;

  return (
    <>
    <Header />
    <div className="max-w-3xl mx-auto p-8">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-contain rounded-xl mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-gray-500">{product.details}</p>
    </div>
    <Footer/>
    </>
  );
};

export default ProductDetailPage;
