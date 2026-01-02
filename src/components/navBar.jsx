// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "#home" },
//     { name: "Skills", href: "#languages-tools" },
//     { name: "Projects", href: "#projects" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm">
//       <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
//         {/* Logo */}
//         <a
//           href="#home"
//           className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
//         >
//           Hammad.dev
//         </a>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center space-x-8 font-medium">
//           {navLinks.map((link, i) => (
//             <li key={i}>
//               <a
//                 href={link.href}
//                 className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* CTA Button (Desktop) */}
//         <a
//           href="#contact"
//           className="hidden md:inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg transition"
//         >
//           Hire Me
//         </a>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-2xl text-gray-700 dark:text-gray-300"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
//           <ul className="flex flex-col px-6 py-6 space-y-4 font-medium">
//             {navLinks.map((link, i) => (
//               <li key={i}>
//                 <a
//                   href={link.href}
//                   onClick={() => setOpen(false)}
//                   className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
//                 >
//                   {link.name}
//                 </a>
//               </li>
//             ))}

//             <a
//               href="#contact"
//               onClick={() => setOpen(false)}
//               className="mt-4 text-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold"
//             >
//               Hire Me
//             </a>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
