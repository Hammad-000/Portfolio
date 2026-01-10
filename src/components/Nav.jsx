import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = ({ toggleMenu, isMenuOpen, closeMenu }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200/30 dark:border-gray-700/30 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <NavLink 
            to="/" 
            className="flex items-center space-x-2 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30 transition-shadow">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
              Hammad Ahmed
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {['/', '/about', '/projects', '/contact'].map((path, index) => (
              <NavLink 
                key={index}
                to={path} 
                end={path === '/'}
                className={({ isActive }) => 
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`
                }
              >
                {path === '/' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2)}
              </NavLink>
            ))}
            {/* CTA Button */}
            <a 
              href="#contact" 
              className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-200"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="py-4 border-t border-gray-200/30 dark:border-gray-700/30">
            <div className="flex flex-col space-y-2">
              {['/', '/about', '/projects', '/contact'].map((path, index) => (
                <NavLink 
                  key={index}
                  to={path} 
                  end={path === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) => 
                    `px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md' 
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`
                  }
                >
                  {path === '/' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2)}
                </NavLink>
              ))}
              {/* Mobile CTA Button */}
              <a 
                href="#contact" 
                onClick={closeMenu}
                className="mt-4 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg text-center shadow-lg hover:shadow-xl transition-all"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
