import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Supply & Installation Fm200 Fire Suppression System",
    description:
      "We provide complete supply and professional installation of FM200 fire suppression systems, ensuring rapid fire extinguishing without causing damage to equipment. Our solutions are ideal for data centers, server rooms, and sensitive areas where water-based systems are unsuitable.",
  },
  {
    id: "02",
    title: "Supply & Installation Novec Fire Suppression System",
    description:
      "Professional supply and installation of Novec Fire Suppression Systems, designed to provide fast, clean, and effective protection for critical assets without leaving any residue or causing damage to equipment.",
  },
  {
    id: "03",
    title: "Supply & Installation CO2 Fire Supperssion System",
    description:
      "We provide complete supply and installation of CO₂ fire suppression systems, designed for rapid and effective fire control in critical areas. Our solutions ensure minimal downtime, protect valuable assets, and meet international safety standards.",
  },
  {
    id: "04",
    title: "Supply & Installation of Electric Emergency Door",
    description:
      "Professional supply and installation of electric emergency doors designed for quick, safe, and reliable access during emergencies. Ensures compliance with safety standards while providing durability and efficient operation.",
  },
  {
    id: "05",
    title: "Supply & Installation Kichen Hood Fire Suppression Sysmtem",
    description:
      "Supply and installation of kitchen hood fire suppression systems designed to detect and extinguish fires quickly, ensuring safety and compliance with industry standards.",
  },
  {
    id: "06",
    title: "Supply & Instllation Of Fire Hydrant",
    description:
      "Professional supply and installation of fire hydrant systems, ensuring reliable water access for firefighting and compliance with safety standards.",
  },
  {
    id: "07",
    title: "Supply & Installation Of Cladding Work",
    description:
      "We provide high-quality supply and professional installation of cladding systems, enhancing the durability, weather resistance, and aesthetic appeal of buildings.",
  },
  
  {
    id: "08",
    title: "Supply & Installation Of Glass Work",
    description:
      "We provide professional supply and installation of high-quality glass work, including partitions, doors, and panels, ensuring precision, durability, and a sleek finish for residential, commercial, and industrial spaces.",
  },
  {
    id: "9",
    title: "Supply & Installation Of Civil Work",
    description:
      "Supply & Installation of Civil Work – Comprehensive civil work solutions including supply of quality materials, skilled labor, and professional installation to ensure durable and precise construction tailored to your project requirements.",
  },
  {
    id: "10",
    title: "Fire Extinguisher Dry Powder Refilling",
    description:
      "Professional dry powder fire extinguisher refilling service to ensure your extinguishers are fully charged, effective, and ready for emergencies. Suitable for all standard dry powder types and capacities.",
  },
  {
    id: "11",
    title: "Fire Extinguisher CO2 Refilling",
    description:
      "Professional CO2 fire extinguisher refilling services to ensure maximum safety and compliance with fire protection standards.",
  },
  {
    id: "12",
    title: "Fire Extinguisher Wet Chemical Refilling",
    description:
      "Professional wet chemical fire extinguisher refilling service, designed to effectively combat high-temperature cooking oil and fat fires in kitchens, restaurants, and industrial food preparation areas. Ensures safety, compliance, and optimal performance.",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Number Box */}
            <div className="bg-red-600 text-white text-lg font-bold w-14 h-14 flex items-center justify-center relative">
              {service.id}
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[12px] border-b-[12px] border-l-[10px] border-t-transparent border-b-transparent border-l-red-600"></div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mt-4">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
