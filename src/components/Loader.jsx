import React from "react";

const colors = [
  "bg-red-600",
  "bg-yellow-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-indigo-600",
  "bg-red-900",
];

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 space-y-6">
      <div className="relative w-24 h-24">
        {/* Container for dots */}
        {colors.map((color, index) => {
          const angle = (index * 60) * (Math.PI / 180); // angle in radians
          const radius = 40;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <div
              key={index}
              className={`${color} rounded-full w-5 h-5 absolute`}
              style={{
                top: "50%",
                left: "50%",
                marginTop: "-10px",
                marginLeft: "-10px",
                transform: `translate(${x}px, ${y}px)`,
                animation: `bounceScale 1.2s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`,
              }}
            />
          );
        })}
      </div>

      <div className="text-gray-700 text-lg font-semibold">
        Loading...
      </div>

      <style>{`
        @keyframes bounceScale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.5);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
