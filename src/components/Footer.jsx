// import React from "react";
// import logo from "../assets/logo.png"; // Adjust the path as necessary

// const Footer = () => {
//   return (
//     <footer className="bg-white dark:bg-red-900">
//       <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
//         <div className="lg:flex lg:items-start lg:gap-8">
//           <div className="text-teal-600 dark:text-teal-300">
//             {/* Logo SVG */}
//              <img src={logo} alt="Logo" className="h-14 w-20" />
//           </div>

//           <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
//             {/* Newsletter Signup */}
//             <div className="col-span-2">
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
//                   Advanced Times Company for General Contracting
//                 </h2>

//               </div>
//             </div>

//             <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
//               {/* <form className="w-full">
//                 <label htmlFor="UserEmail" className="sr-only">Email</label>
//                 <div className="border border-gray-100 p-2 focus-within:ring-3 sm:flex sm:items-center sm:gap-4 dark:border-gray-800">
//                   <input
//                     type="email"
//                     id="UserEmail"
//                     placeholder="john@rhcp.com"
//                     className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm dark:bg-gray-900 dark:text-white"
//                   />
//                   <button
//                     type="submit"
//                     className="mt-1 w-full bg-teal-500 px-6 py-3 text-sm font-bold tracking-wide text-white uppercase transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0"
//                   >
//                     Sign Up
//                   </button>
//                 </div>
//               </form> */}
//             </div>

//             {/* Columns */}
//             {[
//               {
//                 title: "Services",
//                 links: ["1on1 Coaching", "Company Review",]
//               },
//               {
//                 title: "Company",
//                 links: ["About"]
//               },
//               {
//                 title: "Helpful Links",
//                 links: ["Contact", "FAQs",]
//               },
//               // {
//               //   title: "Legal",
//               //   links: ["Accessibility", "Returns Policy", "Refund Policy", "Hiring-3 Statistics"]
//               // },

//             ].map((section, idx) => (
//               <div key={idx} className="col-span-2 sm:col-span-1">
//                 <p className="font-medium text-gray-900 dark:text-white">{section.title}</p>
//                 <ul className="mt-6 space-y-4 text-sm">
//                   {section.links.map((link, i) => (
//                     <li key={i}>
//                       <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
//                         {link}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}

//             {/* Social Icons */}
//             <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end text-white">
//               {[
//                 { name: "Facebook", sr: "Facebook", svgPath: "M22 12c0-5.523-4.477-10..." },
//                 { name: "Instagram", sr: "Instagram", svgPath: "M12.315 2c2.43 0..." },
//                 { name: "Twitter", sr: "Twitter", svgPath: "M8.29 20.251c7.547..." },
//                 { name: "GitHub", sr: "GitHub", svgPath: "M12 2C6.477 2..." },
//                 { name: "Dribbble", sr: "Dribbble", svgPath: "M12 2C6.48 2..." }
//               ].map((icon, idx) => (
//                 <li key={idx}>
//                   <a href="#" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
//                     <span className="sr-only">{icon.sr}</span>
//                     <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path fillRule="evenodd" d={icon.svgPath} clipRule="evenodd" />
//                     </svg>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-8 border-t border-white pt-8 dark:border-white">
//           <div className="sm:flex sm:justify-between">
//             <p className="text-xs text-white dark:text-white ">
//               &copy; 2025. Advanced Times Company for General Contracting. All rights reserved.
//             </p>

//             <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
//               {["Terms & Conditions", "Privacy Policy", "Cookies"].map((item, idx) => (
//                 <li key={idx}>
//                   <a href="#" className="text-white transition hover:opacity-75 dark:text-white">
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





















// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";

// const footerNav = [
//   { name: "Home", href: "/" },
//   { name: "About Us", href: "/about-us" },
//   { name: "Our Supply Products", href: "/our-supply-products" },
//   { name: "Services", href: "/our-services" },
// ];

// export default function Footer() {
//   return (
//     <footer className="bg-red-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Logo & Description */}
//           <div className="space-y-4">
//             <img src={logo} alt="Company Logo" className="h-14 w-auto" />
//             <p className="text-sm text-gray-200">
//               Providing reliable fire safety and protection solutions for
//               buildings and facilities.
//             </p>
//           </div>

//           {/* Navigation Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               {footerNav.map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     to={item.href}
//                     className="text-gray-300 hover:text-white transition duration-200"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
//             <ul className="space-y-2 text-sm text-gray-200">
//               {/* <li>123 Fire Safety Ave, City Name</li> */}

//               <li>
//                 Office No.14A-2nd FloorRasheed &amp; Othaim Center Salah Al-ain
//                 St 60 Malaz P.O Box 12642 Riyadh 4018-KSA
//               </li>

//               <li>Phone: (+966) 50 393 4758</li>
//               <li>Email: info@firesafety.com</li>
//             </ul>
//           </div>

         
//         </div>

//         {/* Divider */}
//         <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
//           © {new Date().getFullYear()}. Advanced Times Company for
//           General Contracting. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }




































import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const footerNav = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Our Supply Products", href: "/our-supply-products" },
  { name: "Services", href: "/our-services" },
];

const emailList = [
  { address: "Info@advancedtimescompany.com" },
  {  address: "AliShadab@advancedtimescompany.com" },
  {  address: "Binaz@advancedtimescompany.com" },
  { address: "Shamshul@advancedtimescompany.com" },
  {  address: "Nazbin@advancedtimescompany.com" },
];

export default function Footer() {
  return (
    <footer className="bg-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div className="space-y-4">
            <img src={logo} alt="Company Logo" className="h-14 w-auto" />
            <p className="text-sm text-gray-200">
              Providing reliable fire safety and protection solutions for
              buildings and facilities.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerNav.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white transition duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                Office No.14A-2nd Floor, Rasheed &amp; Othaim Center, Salah Al-ain
                St 60, Malaz, P.O Box 12642 Riyadh 4018-KSA
              </li>
              <li>Phone: (+966) 50 393 4758</li>
            </ul>
          </div>

          {/* Email Addresses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Emails</h3>
            <ul className="space-y-2 text-sm">
              {emailList.map((email) => (
                <li key={email.address}>
                  <a
                    href={`mailto:${email.address}`}
                    className="text-gray-300 hover:text-white transition duration-200"
                  >
                    {email.address}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()}. Advanced Times Company for
          General Contracting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

