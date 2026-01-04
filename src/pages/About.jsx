import React from 'react';
import { FaGraduationCap, FaBriefcase, FaAward, FaHeart, FaCode, FaPalette, FaRocket, FaUsers, FaLightbulb, FaChartLine, FaGlobeAmericas, FaTools, FaBookOpen, FaGamepad, FaMusic, FaCamera, FaHiking, FaCoffee } from 'react-icons/fa';

const About = () => {
  const timeline = [
    {
      year: "2023 - Present",
      title: "Senior Frontend Developer",
      company: "TechVision Inc.",
      description: "Leading frontend team for enterprise SaaS products",
      icon: <FaBriefcase className="text-blue-500" />
    },
    {
      year: "2021 - 2023",
      title: "Frontend Developer",
      company: "Digital Solutions LLC",
      description: "Built responsive web applications for various clients",
      icon: <FaCode className="text-green-500" />
    },
    {
      year: "2019 - 2021",
      title: "UI/UX Designer & Developer",
      company: "Creative Minds Agency",
      description: "Designed and implemented user interfaces for mobile apps",
      icon: <FaPalette className="text-purple-500" />
    },
    {
      year: "2018",
      title: "Computer Science Degree",
      company: "Stanford University",
      description: "Bachelor's in Computer Science with honors",
      icon: <FaGraduationCap className="text-yellow-500" />
    }
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"],
      icon: <FaCode className="text-blue-500" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Design",
      items: ["UI/UX Design", "Figma", "Adobe XD", "Prototyping", "Wireframing", "Design Systems"],
      icon: <FaPalette className="text-pink-500" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      category: "Tools",
      items: ["Git/GitHub", "VS Code", "Webpack", "Jest", "Cypress", "Docker"],
      icon: <FaTools className="text-green-500" />,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Always exploring new technologies and approaches",
      icon: <FaLightbulb className="text-yellow-500" />
    },
    {
      title: "Collaboration",
      description: "Believer in teamwork and open communication",
      icon: <FaUsers className="text-blue-500" />
    },
    {
      title: "Quality",
      description: "Committed to writing clean, maintainable code",
      icon: <FaAward className="text-purple-500" />
    },
    {
      title: "Growth",
      description: "Continuous learning and skill improvement",
      icon: <FaChartLine className="text-green-500" />
    }
  ];

  const hobbies = [
    { name: "Photography", icon: <FaCamera />, color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400" },
    { name: "Hiking", icon: <FaHiking />, color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400" },
    { name: "Music", icon: <FaMusic />, color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400" },
    { name: "Gaming", icon: <FaGamepad />, color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" },
    { name: "Reading", icon: <FaBookOpen />, color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400" },
    { name: "Coffee Brewing", icon: <FaCoffee />, color: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400" }
  ];

  const stats = [
    { number: "30+", label: "Projects Completed", icon: <FaRocket /> },
    { number: "30+", label: "Happy Clients", icon: <FaHeart /> },
    { number: "Fresher", label: "Years Experience", icon: <FaBriefcase /> },
    { number: "100k+", label: "Lines of Code", icon: <FaCode /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-300">

      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              My Journey
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              Passionate developer with over 5 years of experience creating beautiful, 
              functional web applications. I combine technical expertise with creative 
              design thinking.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow flex items-center gap-2">
                View My Work
              </button>
              <button className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-2">
                Download Resume
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Hammad working" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-2xl text-blue-500">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

 
      <section className="bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
        
            <div>
              <h2 className="text-3xl font-bold mb-8">My Journey</h2>
              <div className="relative">
          
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-16 pb-10 last:pb-0">
                    <div className="absolute left-4 flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-800 rounded-full border-4 border-white dark:border-gray-900 z-10">
                      {item.icon}
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <div className="text-gray-600 dark:text-gray-400 mb-2">{item.company}</div>
                      <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-xl">
                        {skill.icon}
                      </div>
                      <h3 className="text-xl font-bold">{skill.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <span 
                          key={i}
                          className="px-4 py-2 bg-gradient-to-r bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium hover:scale-105 transition-transform"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">My Values</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Principles that guide my work and collaboration
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-3xl mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

 
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
    
            <div>
              <h2 className="text-3xl font-bold mb-8">Beyond Coding</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                When I'm not writing code, you can find me exploring the outdoors, 
                capturing moments with my camera, or experimenting with new coffee brewing methods.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {hobbies.map((hobby, index) => (
                  <div key={index} className="flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow">
                    <div className={`p-3 rounded-full ${hobby.color} mb-3`}>
                      <span className="text-xl">{hobby.icon}</span>
                    </div>
                    <span className="font-medium">{hobby.name}</span>
                  </div>
                ))}
              </div>
            </div>

         
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <FaGlobeAmericas className="text-blue-500 text-2xl" />
                <h3 className="text-2xl font-bold">My Philosophy</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Continuous Learning</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Technology evolves rapidly. I dedicate time each week to learn 
                    new tools, frameworks, and best practices to stay at the forefront 
                    of web development.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-2">Problem-Solving Approach</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    I believe in understanding the problem deeply before jumping to 
                    solutions. This approach helps create more effective and 
                    user-friendly applications.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-2">Work-Life Balance</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Maintaining a healthy balance between work and personal life 
                    fuels creativity and prevents burnout. This balance makes me 
                    more productive and innovative.
                  </p>
                </div>
              </div>

     
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 rounded-xl">
                <h4 className="font-bold mb-2">Fun Fact</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  I've visited 15 countries and love incorporating design 
                  inspirations from different cultures into my work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Amazing Together</h2>
          <p className="text-gray-600 dark:text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
            Interested in collaborating or learning more about my work? 
            I'm always open to discussing new projects and opportunities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow">
              View Projects
            </button>
            <button className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              Get In Touch
            </button>
          </div>
        </div>
      </section>

   
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 md:mb-0">
              Hammad.dev
            </div>
            <div className="text-sm">
              © {new Date().getFullYear()} Hammad. All rights reserved.
            </div>
            <div className="text-sm mt-4 md:mt-0">
              Crafted with passion and attention to detail
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;