import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    id: "01",
    title: "Right Features for the Situation",
    description:
      "The security needs of a business differ greatly depending on several different factors, including location, the type of business, and its size. Where the business is located plays a big part in determining what features are the best for it. A business in a small town may require fewer security features than one on a busy city street.",
    reverse: false,
  },
  {
    id: "02",
    title: "Extra Security Sensors",
    description:
      "For some businesses, the most advanced security features they require are the door chimes and stickers warning of security monitoring. Some businesses and offices just do not keep enough merchandise or equipment on-site to make it beneficial to go to extreme levels of security.",
    reverse: true,
  },
];

const SecurityFeatureSection = () => {
  return (
    <div className="w-full bg-white pt-2.5">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className={`flex flex-col ${
            feature.reverse ? "md:flex-row-reverse" : "md:flex-row"
          } w-full`}
          initial={{
            opacity: 0,
            x: feature.reverse ? 100 : -100, // move from right or left
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }} // triggers every time when 30% visible
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Red Number Section */}
          <div className="w-full md:w-1/2 bg-red-900 text-white flex flex-col justify-center items-center relative p-8 min-h-[250px]">
            <div className="text-5xl font-bold">{feature.id}</div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 p-8 flex items-center justify-center text-center md:text-left bg-white">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-base md:text-lg">
                {feature.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SecurityFeatureSection;
