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
    description: "High-capacity Novec Gas Cylinders for fire suppression.",
    image: "/novec-system-500x500-removebg-preview.png",
    details: "Novec Gas Cylinders are advanced fire suppression containers designed to store and discharge 3M™ Novec™ 1230 Fire Protection Fluid. Available in various capacities, these cylinders are ideal for protecting sensitive equipment in data centers, control rooms, and other high-value environments. They offer fast-acting, clean, and residue-free fire suppression with minimal downtime.",
  },
  {
    id: "Solenoid Tyco",
    title: "Solenoid Tyco",
    description: "High-quality Tyco solenoid for reliable and efficient control of fluid or gas flow.",
    image: "/Solenoid_Valve_120V_150PSI_NSMP_398ff367-8c00-42ea-a07a-51b104bda12a-removebg-preview.png",
    details: "Tyco, a well-known brand under TE Connectivity, manufactures high-performance solenoids used in various industrial and automotive applications. A solenoid is an electromechanical device that converts electrical energy into linear mechanical motion. Tyco solenoids are recognized for their reliability, compact design, and durability, making them ideal for tasks like controlling valves, switches, or locking mechanisms in systems requiring precise actuation. They are commonly used in automotive ignition systems, HVAC controls, and industrial automation.",
  },
  {
    id: "Solenoid Kidde",
    title: "Solenoid Kidde",
    description: "Electromagnetic actuator for fire suppression systems.",
    image: "/Solenoid-kidde.png",
    details: "A Kidde solenoid is an electromechanical device used in Kidde fire suppression systems to control the release of extinguishing agents. When activated electrically, the solenoid triggers the valve mechanism in a suppression system cylinder, allowing the fire suppression agent (such as FM-200 or CO₂) to be discharged rapidly. It plays a critical role in automated fire protection, ensuring fast and reliable system activation during fire emergencies.",
  },






   {
    id: "Solenoid Fike",
    title: "Solenoid Fike",
    description: "Electromechanical device used in Fike systems to control the release of suppression agents.",
    image: "/Solenoid Fike.png",
    details: "A Fike solenoid is an electromechanical component designed to activate the release mechanism in fire suppression systems. When energized, the solenoid triggers the valve or actuator, allowing the suppression agent to discharge quickly and effectively in response to a fire event. Built for precision and reliability, Fike solenoids are engineered to perform under critical conditions, ensuring fast system response while meeting safety and compliance standards. They are widely used in industrial, commercial, and special hazard environments where dependable fire protection is essential.",
  },
  {
    id: "Pressure Switch",
    title: "Pressure Switch",
    description: "Automatic pressure monitoring and control device.",
    image: "/Pressure Switch.png",
    details: "A Pressure Switch is a compact, reliable device designed to monitor fluid or air pressure in a system and activate or deactivate equipment based on preset pressure limits. It automatically senses when the pressure reaches a specified threshold and triggers a switch to control pumps, compressors, or alarms. Commonly used in industrial, commercial, and safety applications, it helps protect equipment from damage, ensures operational efficiency, and maintains system safety. Built with durable materials, the pressure switch offers long-lasting performance even in demanding environments.",
  },
  {
    id: "Rapture Dist",
    title: "Rapture Dist",
    description: "Pressure relief safety device for fire suppression systems.",
    image: "/Butterfly Valve.png",
    details: "A rupture disc is a critical safety component used in fire suppression systems to protect equipment and piping from overpressure conditions. Designed to burst at a predetermined pressure, it allows for the rapid release of pressure in emergency situations, ensuring the safe operation of cylinders and tanks containing fire-extinguishing agents. In fire safety applications, rupture discs help prevent catastrophic failures, maintain system integrity, and provide a reliable safeguard against pressure build-up caused by heat or other hazardous conditions.",
  },
  {
    id: "Abort Switch", 
    title: "Abort Switch",
    description: "A manual emergency switch used to instantly cut off power or activate fire safety systems during emergencies.",
    image: "/Abort-Switch-LF1823-10-removebg-preview.png",
    details: "The Abort Switch is an essential component in fire safety systems, designed to provide immediate manual control during an emergency. Typically used in clean agent fire suppression systems, this switch allows operators to delay or abort the automatic release of fire suppression agents in case of a false alarm or when evacuation is still in progress. Its bright, clearly marked design ensures quick identification, while its robust build guarantees reliability in critical situations. By giving users the ability to manually override the system, the Abort Switch plays a vital role in preventing unnecessary discharges, reducing potential damage, and enhancing overall safety.",
  },
   {
    id: "Manuel Release",
    title: "Manuel Release",
    description: "Manual activation device for fire suppression systems.",
    image: "/Manuel Release.png",
    details: "The Manual Release is a crucial component in fire safety systems, allowing immediate manual activation of the fire suppression process in emergency situations. Designed for reliability and ease of use, it ensures that personnel can quickly trigger the suppression system if automatic sensors fail or when rapid intervention is required. Its robust construction and clear labeling make it an essential safeguard in commercial, industrial, and high-risk environments, helping protect lives, property, and critical assets from fire damage.",
  },
  {
    id: "Nozzel",
    title: "Nozzel",
    description: "High-performance fire safety nozzle for precise water flow control.",
    image: "/nz.png",
    details: "This fire safety nozzle is designed to deliver powerful, controlled water flow for effective firefighting operations. Made from durable, heat-resistant materials, it ensures long-lasting performance even under extreme conditions. Its adjustable spray pattern allows firefighters to switch between a concentrated stream and a wide-angle spray, making it suitable for various fire suppression needs. Lightweight yet robust, this nozzle is an essential tool for quick response and maximum safety in emergency situations.",
  },
  {
    id: "Electric Fire Pump",
    title: "Electric Fire Pump",
    description: "Reliable electric fire pump designed to provide consistent water pressure for fire protection systems.",
    image: "/Electric Fire Pump.png",
    details: "An Electric Fire Pump is a critical component in fire safety systems, engineered to deliver a steady and powerful water supply during emergencies. Powered by electricity, it activates automatically when system pressure drops, ensuring rapid response to fire incidents. Built with durable materials and precision engineering, this pump maintains optimal water pressure for sprinkler systems, hydrants, and other firefighting equipment. Its dependable performance, low maintenance requirements, and quick start-up make it an ideal choice for commercial, industrial, and residential fire protection applications, helping safeguard lives and property.",
  },
  {
    id: "Diesel Fire Pump",
    title: "Diesel Fire Pump",
    description: "Reliable diesel-powered fire pump for critical fire protection systems.",
    image: "/Diesel Fire Pump.png",
    details: "A Diesel Fire Pump is a vital component of fire protection systems, designed to provide a dependable water supply during emergencies, especially when electric power is unavailable. Powered by a diesel engine, it ensures continuous and high-pressure water flow to fire sprinkler systems, hydrants, and standpipes, helping to control and extinguish fires efficiently. Built for durability and compliance with international fire safety standards, diesel fire pumps are commonly used in industrial facilities, commercial buildings, and remote locations where uninterrupted fire protection is essential.",
  },
   {
    id: "Jockey Fire Pump",
    title: "Jockey Fire Pump",
    description: "A small, high-pressure pump used to maintain water pressure in fire protection systems.",
    image: "/Jockey Fire Pump.png",
    details: "A Jockey Fire Pump is a crucial component of a fire protection system, designed to maintain constant pressure in the fire water piping network. It operates automatically to compensate for small pressure drops caused by minor leaks or system testing, preventing unnecessary activation of the main fire pump. By keeping the system pressurized at all times, the jockey pump ensures instant water delivery in case of a fire emergency. Compact, efficient, and reliable, it plays a vital role in keeping firefighting systems ready for immediate use while reducing wear on the main pump.",
  },
  {
    id: "Butterfly Valve",
    title: "Butterfly Valve",
    description: "Butterfly Valve – A compact, efficient valve used to control water flow in fire protection systems.",
    image: "/Butterfly Valve.png",
    details: "A butterfly valve is a vital component in fire protection systems, designed to regulate or isolate water flow with quick and reliable operation. It features a circular disc mounted on a rotating shaft, which turns to open or close the water passage. Lightweight yet durable, butterfly valves are often used in fire sprinkler and hydrant systems due to their space-saving design, low pressure drop, and ease of operation. Their ability to provide fast shut-off makes them essential for ensuring safety, efficiency, and compliance in fire safety installations.",
  },
  {
    id: "Ball Valve",
    title: "Ball Valve",
    description: "Reliable ball valve for fire protection systems.",
    image: "/ball-valve-500x500-removebg-preview.png",
    details: "A ball valve is a crucial component in fire protection systems, designed to control the flow of water or other fire-suppressing agents with precision and reliability. It features a spherical disc that rotates to open or close the valve, ensuring quick shut-off in emergency situations. Built from durable, corrosion-resistant materials, this valve withstands high pressure and harsh environments commonly found in fire safety applications. Easy to operate and maintain, the ball valve ensures dependable performance, making it an essential choice for safeguarding life and property.",
  },
  {
    id: "Gate Valve",
    title: "Gate Valve",
    description: "Durable gate valve for reliable fire protection systems.",
    image: "/gate-valve-all-300x300-removebg-preview.png",
    details: "A gate valve is a robust and dependable control valve designed for use in fire protection systems to regulate or completely stop the flow of water. In fire safety applications, gate valves are typically installed in pipelines to ensure smooth water delivery to sprinklers, hydrants, and other firefighting equipment. Built from corrosion-resistant materials, these valves provide a tight seal when closed and minimal pressure loss when open, ensuring effective water flow during emergencies. Their easy operation and long service life make them a trusted choice for maintaining the integrity and reliability of fire suppression systems.",
  },
   {
    id: "Foot Valve",
    title: "Foot Valve",
    description: "A non-return valve installed at the pump’s suction side to maintain prime and ensure efficient water flow in fire safety systems.",
    image: "/foot-valves-removebg-preview.png",
    details: "A Foot Valve is a vital component in fire safety pump systems, designed to allow water to flow in only one direction—from the water source to the pump—while preventing backflow. Installed at the end of the pump’s suction line, typically submerged in the water source, the valve maintains the pump’s prime and prevents loss of suction when the pump is turned off. Its built-in strainer helps prevent debris from entering the system, ensuring smooth operation and protecting the pump from damage. In fire safety applications, the foot valve ensures a reliable and uninterrupted water supply during emergencies, making it an essential safeguard for firefighting operations.",
  },
  {
    id: "Fire Hose Cabinet All Types",
    title: "Fire Hose Cabinet All Types",
    description: "Durable fire safety cabinet for storing and protecting fire hoses.",
    image: "/Phlox-fire-hose-reel-cabinet-2-removebg-preview.png",
    details: "A Fire Hose Cabinet is a protective enclosure designed to store fire hoses, nozzles, and related firefighting equipment in an organized and accessible manner. Made from high-quality, corrosion-resistant materials, these cabinets ensure the fire hose remains secure, clean, and ready for immediate use during emergencies. Available in various types—surface-mounted, recessed, or customized—they are widely used in commercial buildings, industrial facilities, and public spaces as part of essential fire safety systems. By keeping the equipment safe from dust, weather, and physical damage, fire hose cabinets play a crucial role in ensuring quick response and effective firefighting when every second counts.",
  },
  {
    id: "Sprinkler",
    title: "Sprinkler",
    description: "Automatic water-based fire suppression device.",
    image: "/Sprinkler.png",
    details: "A sprinkler is an essential fire safety device designed to automatically activate in the presence of high heat, releasing water to control or extinguish a fire. Commonly installed in commercial, industrial, and residential buildings, sprinklers play a critical role in minimizing fire damage and protecting lives. They work by detecting heat from a fire, which triggers the sprinkler head to discharge water directly onto the affected area, helping to suppress flames before they can spread. Reliable, efficient, and always on standby, sprinklers are a proven first line of defense in comprehensive fire protection systems.",
  },
  {
    id: "Heat Detector",
    title: "Heat Detector",
    description: "Heat Detector – Reliable fire safety device that senses temperature changes to detect potential fire hazards.",
    image: "/Heat Detector.png",
    details: "A heat detector is a fire safety device designed to sense abnormal temperature increases in its surroundings, indicating the presence of a potential fire. Unlike smoke detectors, which respond to airborne particles, heat detectors activate when the temperature reaches a preset threshold or rises rapidly within a short time. They are ideal for environments where smoke detectors may give false alarms, such as kitchens, garages, or dusty areas. Heat detectors play a crucial role in fire detection systems, providing early warning to initiate alarms, activate sprinklers, and ensure timely evacuation, ultimately protecting lives and property.",
  },
   {
    id: "Smoke Detector",
    title: "Smoke Detector",
    description: "Reliable smoke detector for early fire warning and enhanced safety.",
    image: "/Smoke_detector-removebg-preview.png",
    details: "A smoke detector is an essential fire safety device designed to sense smoke, a primary indicator of fire, and alert occupants through a loud alarm. By detecting potential fire hazards at an early stage, it provides valuable time to evacuate, call emergency services, and take immediate action. Suitable for homes, offices, and commercial buildings, smoke detectors play a critical role in preventing loss of life and property. Compact, easy to install, and highly sensitive, they form a vital part of any comprehensive fire safety system.",
  },
  {
    id: "Multi Detector",
    title: "Multi Detector",
    description: "Multi Detector – Advanced fire and smoke detection system.",
    image: "/Multi Detector.png",
    details: "The Multi Detector is a versatile fire safety device designed to detect multiple indicators of a fire, including smoke, heat, and in some models, carbon monoxide. By combining different sensing technologies in one unit, it ensures faster and more accurate detection, reducing the risk of false alarms. Ideal for commercial, industrial, and residential settings, the Multi Detector provides early warning signals, giving occupants valuable time to evacuate and allowing prompt firefighting action. Its reliable performance and easy installation make it a vital component in any fire protection system.",
  },
  {
    id: "Break Glass",
    title: "Break Glass",
    description: "Break Glass – Emergency Fire Safety Activation",
    image: "/break-glass-unit-500x500-removebg-preview.png",
    details: "A Break Glass Unit is a crucial fire safety device designed to provide quick access to fire alarms or emergency equipment in critical situations. By breaking the protective glass panel, users can instantly trigger the fire alarm system or unlock essential firefighting tools, ensuring a rapid response to emergencies. Built from durable materials with clear visibility, it is easy to locate and operate during high-stress situations. Widely installed in commercial buildings, factories, and public spaces, this device plays a vital role in safeguarding lives and property during fire incidents.",
  },
  {
    id: "Alarm Bell",
    title: "Alarm Bell",
    description: "Reliable fire alarm bell for quick and clear emergency alerts.",
    image: "/fire-alarm-bell-500x500-removebg-preview.png",
    details: "The fire alarm bell is an essential component of any fire safety system, designed to provide a loud and distinctive sound in the event of a fire emergency. Its robust and durable construction ensures reliable operation in all conditions, instantly alerting occupants to evacuate the premises. Easy to install and highly effective, the fire alarm bell plays a critical role in ensuring quick response during fire incidents, helping to protect lives and property.",
  },
   {
    id: "Emergency Light",
    title: "Emergency Light",
    description: "Reliable emergency lighting for fire safety and evacuation.",
    image: "/Emergency Light.png",
    details: "Emergency lights are an essential component of any fire safety system, providing reliable illumination during power outages or emergencies. Designed to activate automatically when the main power fails, they guide occupants safely towards exits, reducing the risk of accidents in low-visibility conditions. Built with durable materials and long-lasting LED technology, these lights ensure continuous operation during critical situations, making them a vital part of any building’s fire protection plan.",
  },
  {
    id: "Exit Light",
    title: "Exit Light",
    description: "Emergency fire safety exit light.",
    image: "/Exit Light.png",
    details: "The Exit Light is a crucial safety device designed to clearly mark escape routes during emergencies such as fires, power outages, or hazardous situations. Built with high-visibility LED illumination, it ensures that occupants can quickly locate exits even in low-light or smoke-filled environments. Its durable construction and long battery backup make it reliable for fire safety compliance in commercial, industrial, and residential buildings. Easy to install and maintain, this exit light is an essential component of any effective fire safety system.",
  },
  {
    id: "Adressable Fire Alarm Control Panel",
    title: "Adressable Fire Alarm Control Panel",
    description: "A smart fire detection system that identifies the exact location of alarms, ensuring rapid and accurate emergency response.",
    image: "/Adressable Fire Alarm Control Panel.png",
    details: "An Addressable Fire Alarm Control Panel is an advanced fire detection and safety system designed to monitor and control multiple fire alarm devices in a building. Unlike conventional systems, each connected device—such as smoke detectors, heat detectors, or manual call points—has a unique address, allowing the panel to pinpoint the exact location of any alarm activation. This precision enables faster emergency response, minimizes false alarms, and enhances safety for occupants. Commonly used in commercial buildings, hospitals, schools, and large facilities, it serves as a critical part of modern fire protection strategies, ensuring compliance with safety regulations and providing peace of mind.",
  },
  {
    id: "Conventional Fire Alarm Control Panel",
    title: "Conventional Fire Alarm Control Panel",
    description: "Reliable fire detection and alarm system controller designed to ensure quick response during emergencies.",
    image: "/Conventional Fire Alarm Control Panel.png",
    details: "A Conventional Fire Alarm Control Panel is a vital component of any fire safety system, responsible for monitoring and controlling multiple fire detection zones within a building. It receives signals from connected smoke detectors, heat detectors, and manual call points, and then activates alarms or other emergency systems when a fire is detected. These panels are widely used in commercial, residential, and industrial facilities for their reliability and ease of installation. By providing clear zone indication and rapid response, a conventional fire alarm control panel plays a crucial role in safeguarding lives and property during fire emergencies.",
  },
   {
    id: "Fire Extinguisher Dry Powder",
    title: "Fire Extinguisher Dry Powder",
    description: "A reliable dry powder fire extinguisher designed for quick and effective fire suppression in emergency situations.",
    image: "/Fire Extinguisher Dry Powder.png",
    details: "The Dry Powder Fire Extinguisher is a versatile and highly effective fire safety device, ideal for combating Class A (ordinary combustibles), Class B (flammable liquids), and Class C (flammable gases) fires. It works by releasing a fine powder that blankets the flames, cutting off the oxygen supply and stopping the chemical reaction that sustains the fire. This extinguisher is suitable for use in homes, offices, warehouses, factories, and vehicles, making it a vital part of any fire safety plan. Easy to operate and maintain, the dry powder extinguisher provides fast action in emergencies, ensuring safety and minimizing potential damage.",
  },
  {
    id: "Fire Extinguisher CO2",
    title: "Fire Extinguisher CO2",
    description: "CO₂ Fire Extinguisher – Reliable fire safety for electrical and flammable liquid fires.",
    image: "/co2-fire-extinguisher-removebg-preview.png",
    details: "The CO₂ Fire Extinguisher is an essential fire safety device designed to quickly and effectively combat fires involving electrical equipment and flammable liquids. Using carbon dioxide as the extinguishing agent, it displaces oxygen around the fire, suffocating the flames without leaving any residue, making it ideal for use in offices, server rooms, laboratories, and industrial settings. Lightweight, easy to operate, and maintenance-friendly, the CO₂ Fire Extinguisher ensures rapid response in critical moments, helping protect both property and lives.",
  },
  {
    id: "Fire Extinguiser Foam",
    title: "Fire Extinguiser Foam",
    description: "Effective foam-based extinguisher for tackling Class A and B fires.",
    image: "/Fire Extinguiser Foam.png",
    details: "The Fire Extinguisher Foam is a reliable and highly effective firefighting solution designed to combat Class A fires involving solid materials like wood, paper, and textiles, as well as Class B fires caused by flammable liquids such as petrol and oil. The foam works by forming a thick blanket over the burning material, cutting off the oxygen supply and preventing the fire from reigniting. Widely used in industrial, commercial, and residential settings, this extinguisher is an essential safety device for environments where both solid combustibles and flammable liquids are present. Its quick action, ease of use, and ability to cool down hot surfaces make it a vital part of any fire safety plan.",
  },
  {
    id: "Fire Extinguisher Wet Chemical",
    title: "Fire Extinguisher Wet Chemical",
    description: "Specialized extinguisher for kitchen oil and grease fires.",
    image: "/Fire Extinguisher Wet Chemical.png",
    details: "The Wet Chemical Fire Extinguisher is specifically designed for tackling Class F fires, which involve cooking oils and fats. Ideal for commercial kitchens, restaurants, and food preparation areas, it works by cooling the flames and forming a soapy layer over the burning oil to prevent re-ignition. This extinguisher is an essential part of any fire safety plan in environments where deep fryers and high-temperature cooking take place, ensuring quick, effective, and safe suppression of dangerous kitchen fires.",
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
