// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import image1 from "../assets/image1.jpg";

// import {
//   LearnMoreModal,
//   LearnMoreTrigger,
//   LearnMoreBody,
// } from "../components/LearnMore.jsx";

// const slides = [
//   {
//     id: 1,
//     image: image1,
//     title: "Advanced Times Company for General Contracting",
//     subtitle: "شركة الأزمنة المتقدمة للمقاولات العامة",
//   },
// ];

// const HeroSection = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 800,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     arrows: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     fade: true,
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       <LearnMoreModal>
//         <Slider {...settings}>
//           {slides.map((slide) => (
//             <div key={slide.id}>
//               <div
//                 className="w-full h-screen bg-center bg-cover flex items-center justify-center"
//                 style={{ backgroundImage: `url(${slide.image})` }}
//               >
//                 <div className="bg-black/20 backdrop-blur-md p-6 sm:p-10 rounded-xl text-center text-white max-w-2xl mx-4 sm:mx-auto z-10">
//                   <h1 className=" text-orange-700 text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
//                     {slide.title}
//                   </h1>
//                   <p className="text-lg sm:text-xl mb-6">{slide.subtitle}</p>

//                   {/* Only the trigger inside the slide */}
//                   <LearnMoreTrigger className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
//                     Learn More
//                   </LearnMoreTrigger>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>

//         {/* Modal Body outside the loop */}
//         <LearnMoreBody />
//       </LearnMoreModal>
//     </div>
//   );
// };

// export default HeroSection;
























import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/image1.jpg";

import {
  LearnMoreModal,
  LearnMoreTrigger,
  LearnMoreBody,
} from "../components/LearnMore.jsx";

const slides = [
  {
    id: 1,
    image: image1,
    title: "Advanced Times Company for General Contracting",
    subtitle: "شركة الأزمنة المتقدمة للمقاولات العامة",
  },
];

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if (isInView) {
      setStartTyping(true);
    }
  }, [isInView]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <LearnMoreModal>
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id}>
              <div
                className="w-full h-screen bg-center bg-cover flex items-center justify-center"
                style={{ backgroundImage: `url(${slide.image})` }}
                ref={sectionRef}
              >
                <motion.div
                  className="bg-black/20 backdrop-blur-md p-6 sm:p-10 rounded-xl text-center text-white max-w-3xl mx-4 sm:mx-auto z-10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h1 className="text-orange-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                    {startTyping && (
                      <TypeAnimation
                        sequence={[slide.title]}
                        wrapper="span"
                        speed={50}
                        repeat={0} // play once
                        cursor={false}
                      />
                    )}
                  </h1>

                  <p className="text-base sm:text-lg md:text-xl mb-6">
                    {startTyping && (
                      <TypeAnimation
                        sequence={[slide.subtitle]}
                        wrapper="span"
                        speed={60}
                        repeat={0} // play once
                        cursor={false}
                      />
                    )}
                  </p>

                  <LearnMoreTrigger className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                    Learn More
                  </LearnMoreTrigger>
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>

        <LearnMoreBody />
      </LearnMoreModal>
    </div>
  );
};

export default HeroSection;

