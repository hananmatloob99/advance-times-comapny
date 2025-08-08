import React from 'react';
import { FaLaptop, FaThLarge, FaCogs } from 'react-icons/fa';

const MissionVisionSupport = () => {
  const items = [
    {
      icon: <FaLaptop className="text-white text-4xl mb-4" />,
      title: 'MISSION',
      description:
        'To empower customer to secure life, environment, property and business by delivering high quality & innovative protection solutions.',
    },
    {
      icon: <FaThLarge className="text-white text-4xl mb-4" />,
      title: 'VISION',
      description:
        'To be the world’s no. 1 provider of innovative solutions in protecting life, environment & property.',
    },
    {
      icon: <FaCogs className="text-white text-4xl mb-4" />,
      title: 'OUTSTANDING SUPPORT',
      description:
        'Use an inbuilt Fire system, email or call our 24/7 support department directly to deal with any issue.',
    },
  ];

  return (
    <section className="bg-red-900 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3 text-center text-white">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center px-2">
            {item.icon}
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm sm:text-base leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionVisionSupport;
