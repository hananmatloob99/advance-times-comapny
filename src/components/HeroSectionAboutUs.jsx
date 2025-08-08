import React from "react";
import gridImage from "../assets/6121009-removebg-preview.png"; // replace with your image path
import logoImage from "../assets/logo.png"; // replace with your company logo


const HeroSectionAboutUs = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Passion to Protect is more than just a slogan
          </h2>
          <p className="text-gray-700 mb-4">
            Passion to Protect is more than just a slogan, it’s a way of life for Advanced Times
            Corporation. Keeping you safe and your property secure is our business.
          </p>
          <p className="text-gray-700 mb-4">
            With a global network spanning over 100 countries, Advanced Times Corporation has been
            recognized as the unparalleled leader in fire safety. In recognition of our outstanding
            growth and commitment to quality, we have been certified with ISO 14001.
          </p>
          <p className="text-gray-700 mb-6">
            With your continued support and trust, Advanced Times Corporation is now poised to
            further grow its international network. To that end, we appreciate your business and
            your commitment to safety in the workplace and look forward to serving you for decades
            to come.
          </p>
          {/* <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded transition duration-300">
            Learn more
          </button> */}
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          {/* <img
            src={logoImage}
            alt="Advanced Times Corporation"
            className="w-48 h-auto mb-2"
          /> */}
          <img
            src={gridImage}
            alt="Service Icons Grid"
            className="w-full max-w-md h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionAboutUs;




















// import React from "react";
// import gridImage from "../assets/6121009-removebg-preview.png"; // replace with your image path
// import logoImage from "../assets/logo.png"; // replace with your company logo

// const HeroSectionAboutUs = () => {
//   return (
//     <section className="bg-white py-12 px-4 md:px-8 overflow-x-hidden">
//       <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 w-full">
        
//         {/* Left Content */}
//         <div className="w-full lg:w-1/2 text-center lg:text-left">
//           <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
//             Passion to Protect is more than just a slogan
//           </h2>
//           <p className="text-gray-700 mb-4">
//             Passion to Protect is more than just a slogan, it’s a way of life for Advanced Times
//             Corporation. Keeping you safe and your property secure is our business.
//           </p>
//           <p className="text-gray-700 mb-4">
//             With a global network spanning over 100 countries, Advanced Times Corporation has been
//             recognized as the unparalleled leader in fire safety. In recognition of our outstanding
//             growth and commitment to quality, we have been certified with ISO 14001.
//           </p>
//           <p className="text-gray-700 mb-6">
//             With your continued support and trust, Advanced Times Corporation is now poised to
//             further grow its international network. To that end, we appreciate your business and
//             your commitment to safety in the workplace and look forward to serving you for decades
//             to come.
//           </p>
//         </div>

//         {/* Right Image */}
//         <div className="w-full lg:w-1/2 flex flex-col items-center">
//           {/* <img
//             src={logoImage}
//             alt="Advanced Times Corporation"
//             className="w-48 h-auto mb-2"
//           /> */}
//           <img
//             src={gridImage}
//             alt="Service Icons Grid"
//             className="w-full max-w-md h-auto max-w-full"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSectionAboutUs;
