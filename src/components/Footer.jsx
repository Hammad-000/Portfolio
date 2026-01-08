import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaChevronUp, FaExternalLinkAlt } from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs'

function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { 
      platform: "GitHub", 
      icon: <FaGithub />, 
      username: "@Hammad-000", 
      link: "https://github.com/Hammad-000", 
      bgColor: "bg-gray-900",
      textColor: "text-gray-300",
      hoverBg: "hover:bg-gray-800"
    },
    { 
      platform: "LinkedIn", 
      icon: <FaLinkedin />, 
      username: "Syed Hammad Ahmed", 
      link: "https://www.linkedin.com/in/syed-hammad-ahmed-412834287/", 
      bgColor: "bg-blue-900/30",
      textColor: "text-blue-400",
      hoverBg: "hover:bg-blue-900/50"
    },
    { 
      platform: "Twitter", 
      icon: <BsTwitterX />, 
      username: "@Syed__Hammad", 
      link: "https://x.com/Syed__Hammad", 
      bgColor: "bg-blue-900/20",
      textColor: "text-blue-300",
      hoverBg: "hover:bg-blue-900/30"
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="relative bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-12 pb-6 overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Brand & Social Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Hammad<span className="text-blue-400">.</span>
              </h2>
              <p className="text-gray-400 mt-2 max-w-xs">
                Crafting exceptional digital experiences with creativity and precision.
              </p>
            </div>
            
            {/* Social Links - Horizontal Row Design */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Connect with me</h3>
              
              {/* Option 1: Simple Icon Links in Row */}
             

              {/* Option 2: Compact Cards in Row */}
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg ${social.bgColor} ${social.hoverBg} transition-all duration-300 group flex flex-col items-center justify-center text-center`}
                  >
                    <div className="mb-2">
                      <span className={`text-2xl ${social.textColor}`}>
                        {social.icon}
                      </span>
                    </div>
                    <p className="text-xs text-white font-medium truncate w-full">
                      {social.platform}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center text-gray-400 hover:text-white transition-all duration-300 hover:pl-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaEnvelope className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:syedhammad283@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  syedhammad283@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/5m13mBoz1D8jRcvY7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-sm flex items-center gap-1"
                >
                  View on Google Maps
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-8">
              <h4 className="text-md font-semibold text-white mb-3">Stay Updated</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-grow px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © {currentYear} <span className="text-blue-400">Hammad</span>. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Made with ❤️ using React & Tailwind
            </p>
          </div>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a 
              href="#" 
              className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-full transition-all duration-300 hover:shadow-lg"
          >
            <FaChevronUp size={12} />
            Back to Top
          </button>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
    </motion.footer>
  )
}

export default Footer