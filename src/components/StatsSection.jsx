import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    label: "PERFORMANCE",
    percentage: 100,
    color: "bg-lime-500",
  },
  {
    label: "CUSTOMER FOCUS",
    percentage: 100,
    color: "bg-red-600",
  },
  {
    label: "QUALITY",
    percentage: 100,
    color: "bg-yellow-400",
  },
];

const StatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <section className="bg-white py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16" ref={ref}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Left Text */}
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6 leading-snug">
            Everything you wanted to know about Advanced Times Corporation
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            As a matter of delicacy and inherent principle of safety and reliability, we always
            select reputable products in compliance with international standards like UL, ULC, FM,
            MEA, LPCB, VDS, CE etc. The Group follows international professional codes such as
            NFPA, NFSA, FSSA, BFPSA, FPA, SASO and Saudi Civil Defense.
          </p>
        </div>

        {/* Right Progress Bars */}
        <div className="flex flex-col gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="w-full">
              <div className="text-right font-medium text-gray-700 mb-1 text-sm sm:text-base">
                {stat.percentage}%
              </div>
              <div className="w-full h-4 rounded bg-gray-300 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: inView ? `${stat.percentage}%` : 0 }}
                  transition={{ duration: 1.2, delay: 0.2 * index }}
                  className={`h-full ${stat.color}`}
                />
              </div>
              <div className="text-center text-xs sm:text-sm font-medium mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
