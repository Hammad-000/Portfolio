import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCode, FaPalette, FaMobile, FaServer, FaArrowRight, FaDownload, FaBolt, FaDatabase, FaNetworkWired } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiGit, SiTailwindcss, SiSupabase, SiFramer, SiAxios, SiReactquery } from 'react-icons/si';

const Home = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React & Node.js",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Health Tracker App",
      description: "Mobile app for tracking health metrics and workouts",
      tech: ["React Native", "Firebase", "Redux"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w-500&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio with animations and dark mode",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&auto=format&fit=crop",
      link: "#"
    }
  ];

  const languages = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" />, level: 95 },
    { name: "CSS", icon: <SiCss3 className="text-blue-500" />, level: 90 },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 88 },
    { name: "React", icon: <SiReact className="text-cyan-400" />, level: 85 },
  ];

  const tools = [
    { name: "Git", icon: <SiGit className="text-red-500" />, level: 85 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, level: 90 },
    { name: "Supabase", icon: <SiSupabase className="text-green-500" />, level: 80 },
  ];

  const frameworks = [
    { 
      name: "Framer Motion", 
      icon: <SiFramer className="text-pink-500" />, 
      description: "Animation library for React",
      features: ["Smooth animations", "Gesture support", "Declarative API"]
    },
    { 
      name: "Axios", 
      icon: <FaNetworkWired className="text-blue-400" />, 
      description: "HTTP client for browser & Node.js",
      features: ["Promise based", "Request/response interceptors", "Auto JSON transform"]
    },
    { 
      name: "TanStack Query", 
      icon: <SiReactquery className="text-red-400" />, 
      description: "Data fetching & synchronization",
      features: ["Server state management", "Auto caching", "Background updates"]
    },
    { 
      name: "React Router", 
      icon: <FaBolt className="text-orange-400" />, 
      description: "Routing library for React",
      features: ["Nested routing", "Dynamic segments", "Route protection"]
    },
  
 
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      
      {/* Hero Section */}
      <section id="home" className="container mx-auto px-6 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              Frontend Developer & UI Designer
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hello! <br />
              I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Hammad</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              I create beautiful, functional web experiences. Passionate about clean code, 
              intuitive design, and cutting-edge technologies.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow flex items-center gap-2">
                View Projects <FaArrowRight />
              </button>
              <button className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-2">
                <FaDownload /> Download CV
              </button>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-2xl">
                <FaGithub />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-2xl">
                <FaLinkedin />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-2xl">
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Hammad - Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">2+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages & Tools Section */}
      <section id="languages-tools" className="bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Languages & Tools</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Technologies I use to bring ideas to life
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Languages Column */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center md:text-left">Programming Languages</h3>
              <div className="space-y-6">
                {languages.map((language, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">
                          {language.icon}
                        </div>
                        <h4 className="text-lg font-semibold">{language.name}</h4>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400">{language.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" 
                        style={{ width: `${language.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Column */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center md:text-left">Tools & Technologies</h3>
              <div className="space-y-6">
                {tools.map((tool, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">
                          {tool.icon}
                        </div>
                        <h4 className="text-lg font-semibold">{tool.name}</h4>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400">{tool.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" 
                        style={{ width: `${tool.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
                
               
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4"> Tools i Use</h4>
                  <div className="flex flex-wrap gap-3">
                    {["VS Code", "Figma", "GitHub", "Npm", " Motion", " Axios", "TanStack Query"].map((tool, index) => (
                      <span 
                        key={index} 
                        className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full text-sm font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

    
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills and approach
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    View Project <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-blue-100 mb-8">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Get In Touch
              </button>
              <button className="px-8 py-3 border-2 border-white/30 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 md:mb-0">
              Hammad.dev
            </div>
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="hover:text-white transition-colors">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaEnvelope />
              </a>
            </div>
            <div className="text-sm">
              © {new Date().getFullYear()} Hammad. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;