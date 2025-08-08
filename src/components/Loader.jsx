// src/components/FireLoader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative flex flex-col items-center">
        {/* Fire flame animation */}
        <div className="relative w-20 h-20">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-orange-500 rounded-full animate-pulse blur-md"></div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full animate-bounce blur-sm"></div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
        </div>

        {/* Loading text */}
        <p className="mt-4 text-orange-500 font-bold text-lg animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loader;
