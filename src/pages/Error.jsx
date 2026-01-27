import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex flex-col items-center justify-center px-6 py-12">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        <div className="relative mb-8">
          <div className="text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 opacity-90 animate-bounce">
            404
          </div>
          <div className="absolute inset-0 text-[12rem] font-extrabold text-white opacity-5 animate-ping">
            404
          </div>
        </div>

        <div className="mb-10 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-300 max-w-xl mx-auto leading-relaxed">
            Oops! It seems you've ventured into uncharted territory. The page you're looking for might have been moved, deleted, or never existed.
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-4 bg-gray-900 rounded-full flex items-center justify-center">
              <svg 
                className="w-16 h-16 text-purple-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.5" 
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={handleGoHome}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-1 transition-all duration-300 hover:scale-105 min-w-[200px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center justify-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Homepage
            </span>
          </button>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 mb-4">Need help? Here are some helpful links:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="text-purple-400 hover:text-purple-300 hover:underline transition-colors">
              Contact Support
            </a>
            <a href="/faq" className="text-purple-400 hover:text-purple-300 hover:underline transition-colors">
              FAQs
            </a>
            <a href="/sitemap" className="text-purple-400 hover:text-purple-300 hover:underline transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Error;