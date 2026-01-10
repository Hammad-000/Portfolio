import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaSun, FaMoon, FaArrowRight } from 'react-icons/fa';

const Nav = ({ toggleMenu, isMenuOpen, closeMenu }) => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dark mode
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-2xl shadow-black/5 py-2' 
            : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo/Brand */}
            <NavLink 
              to="/" 
              className="flex items-center space-x-3 group relative"
              onClick={closeMenu}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/30 transition-all duration-500 transform group-hover:rotate-[10deg]">
                  <span className="text-white font-bold text-xl">HA</span>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent bg-300% animate-gradient">
                  Hammad Ahmed
                </span>
<<<<<<< HEAD
              
=======
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wider">
                  Full Stack Developer
                </span>
>>>>>>> 01512c90a872594a082a1360fb201cdb29d61ccd
              </div>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink 
                  key={item.path}
                  to={item.path} 
                  end={item.path === '/'}
                  className="relative px-1"
                >
                  {({ isActive }) => (
                    <>
                      <span className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive 
                          ? 'text-white' 
                          : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}>
                        {item.label}
                      </span>
                      {/* Active indicator */}
                      {isActive && (
                        <>
                          <div className="absolute inset-0  rounded-xl shadow shadow-blue-500 p-5  "></div>
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                        </>
                      )}
                      {/* Hover effect */}
                      {!isActive && (
                        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                      )}
                    </>
                  )}
                </NavLink>
              ))}
              
              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                className="ml-4 p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:rotate-12"
                aria-label="Toggle theme"
              >
                {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
              </button>
              
              {/* CTA Button */}
              <a 
                href="#contact" 
                className="ml-2 group relative overflow-hidden px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center">
                  Let's Connect
                  <FaArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
            </div>

            {/* Mobile Menu Button with Theme Toggle */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={toggleDarkMode}
                className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
              </button>
              <button 
                onClick={toggleMenu}
                className="p-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-all duration-300 transform hover:scale-105"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <FaTimes className="w-6 h-6 animate-spin-in" />
                ) : (
                  <FaBars className="w-6 h-6 animate-pulse-once" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none delay-300'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={closeMenu}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-500 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 h-full flex flex-col">
            {/* Menu Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Menu
                </h2>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
            </div>

            {/* Menu Items */}
            <div className="flex-1 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) => `
                    flex items-center justify-between px-4    py-3.5 rounded-xl transition-all duration-300 transform hover:scale-[1.02]
                    ${isActive 
                      ? 'bg-gradient-to-r from-blue-500/10  to-purple-500/10  text-blue-600 dark:text-blue-400 border-l-4 border-blue-500' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }
                  `}
                >
                  <span className="font-medium">{item.label}</span>
                  {location.pathname === item.path && (
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
              <a
                href="#contact"
                onClick={closeMenu}
                className="group relative overflow-hidden block w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Start a Project
                  <FaArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              
              {/* Contact Info */}
              <div className="mt-6 space-y-3 text-sm">
                <p className="text-gray-600 dark:text-gray-400">Ready to bring your ideas to life?</p>
                <a 
                  href="mailto:hello@example.com" 
                  className="block text-blue-600 dark:text-blue-400 hover:underline"
                >
                  hello@hammad.dev
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-20"></div>
    </>
  );
};

export default Nav;