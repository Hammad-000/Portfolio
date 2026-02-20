import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCode, FaPalette, FaMobile, FaServer, FaArrowRight, FaDownload, FaBolt, FaDatabase, FaNetworkWired } from 'react-icons/fa';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiGit, SiTailwindcss, SiSupabase, SiFramer, SiAxios, SiReactquery,
  SiNodedotjs, SiMongodb, SiExpress   // <-- added new icons
} from 'react-icons/si';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { IoLogoGithub } from "react-icons/io5";
import { useRef } from 'react';

const Home = () => {
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const homeInView = useInView(homeRef, { once: true, amount: 0.3 });
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.3 });
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.3 });
  const contactInView = useInView(contactRef, { once: true });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.01,
        y: (e.clientY - window.innerHeight / 2) * 0.01
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "Inferno Grill",
      description: "FastFood orders website with React & Tailwind",
      tech: ["React", "Firebase", "Motion", "TailwindCSS"],
      image: "./photo/foodmain.png",
      liveLink: "https://inferno-grill.vercel.app/",
      githubLink: "https://github.com/Hammad-000/inferno-grill",
    },
    {
      title: "Lux Travel Web",
      description: "Mobile app for tracking health metrics and workouts",
      image: "./photo/travel.png",
      tech: ["React Native", "Firebase", "TailwindCSS"],
      githubLink: "https://github.com/Hammad-000/lux-traveller",
      liveLink: "https://lux-traveller.vercel.app/"
    },
    {
      title: "Admin Dashboard",
      description: "AdminDashboard Design",
      tech: ["Chart.js", "Tailwind", "Framer Motion"],
      image: "./photo/dashboard.png",
      liveLink: "https://admin-dashboard-seven-gamma-65.vercel.app",
      githubLink: "https://github.com/Hammad-000/admin-dashboard"
    }
  ];

  const languages = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" />, level: 90 },
    { name: "CSS", icon: <SiCss3 className="text-blue-500" />, level: 85 },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 75 },
    { name: "React", icon: <SiReact className="text-cyan-400" />, level: 80 },
  ];

  // Updated tools array with Node.js, MongoDB, Express
  const tools = [
    { name: "Git", icon: <SiGit className="text-red-500" />, level: 70 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, level: 80 },
    { name: "Supabase", icon: <SiSupabase className="text-green-500" />, level: 75 },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" />, level: 75 },
    { name: "Express", icon: <SiExpress className="text-gray-600 dark:text-gray-400" />, level: 70 },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: 70 },
  ];

  const floatingIcons = [
    { icon: <SiReact />, color: "text-cyan-400", delay: 0 },
    { icon: <SiTailwindcss />, color: "text-cyan-300", delay: 0.5 },
    { icon: <SiJavascript />, color: "text-yellow-500", delay: 1 },
    { icon: <FaCode />, color: "text-blue-400", delay: 1.5 },
    { icon: <IoLogoGithub />, color: "text-blue-400", delay: 2 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const scaleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const slideInVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.3
      }
    })
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(59, 130, 246, 0.5)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  const floatingAnimation = {
    initial: { y: 0 },
    animate: (delay) => ({
      y: [0, -20, 0],
      transition: {
        duration: 3,
        delay: delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-300 overflow-hidden"
    >
      {/* Floating Background Elements */}
      {floatingIcons.map((icon, index) => (
        <motion.div
          key={index}
          custom={icon.delay}
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          className={`absolute ${icon.color} text-4xl `}
          style={{
            left: `${23 + index * 3}%`,
            top: `${34 + index * 1}%`
          }}
        >
          {icon.icon}
        </motion.div>
      ))}

      {/* Hero Section */}
      <motion.section
        ref={homeRef}
        initial="hidden"
        animate={homeInView ? "visible" : "hidden"}
        variants={containerVariants}
        id="home"
        className="container mx-auto px-6 py-20 md:py-32 relative"
      >
        {/* ... (hero section remains unchanged) ... */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            variants={itemVariants}
            className="md:w-1/2 mb-12 md:mb-0"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6"
            >
              Frontend Developer & UI Designer
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Hello! <br />
              I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Hammad</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
            >
              I create beautiful, functional web experiences. Passionate about clean code,
              intuitive design, and cutting-edge technologies.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold transition-shadow flex items-center gap-2"
              >
                View Projects <FaArrowRight />
              </motion.button>
              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                <FaDownload /> Download CV
              </motion.button>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="flex space-x-6"
            >
              {[FaGithub, FaLinkedin, FaTwitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href="#"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-2xl"
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src="/photo/dp.jpg"
                  alt="Hammad - Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll down</span>
            <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"></div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        ref={skillsRef}
        initial="hidden"
        animate={skillsInView ? "visible" : "hidden"}
        variants={containerVariants}
        id="languages-tools"
        className="bg-white dark:bg-gray-900 py-20 overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-4"
            >
              Languages & Tools
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              variants={slideInVariants}
            >
              <h3 className="text-2xl font-bold mb-8 text-center md:text-left">Programming Languages</h3>
              <div className="space-y-6">
                {languages.map((language, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="text-2xl"
                        >
                          {language.icon}
                        </motion.div>
                        <h4 className="text-lg font-semibold">{language.name}</h4>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400">{language.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        custom={language.level}
                        initial="hidden"
                        animate={skillsInView ? "visible" : "hidden"}
                        variants={progressBarVariants}
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={slideInVariants}
            >
              <h3 className="text-2xl font-bold mb-8 text-center md:text-left">Tools & Technologies</h3>
              <div className="space-y-6">
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="text-2xl"
                        >
                          {tool.icon}
                        </motion.div>
                        <h4 className="text-lg font-semibold">{tool.name}</h4>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400">{tool.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        custom={tool.level}
                        initial="hidden"
                        animate={skillsInView ? "visible" : "hidden"}
                        variants={progressBarVariants}
                        className="h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={skillsInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                  className="mt-8"
                >
                  <h4 className="text-lg font-semibold mb-4">Tools I Use</h4>
                  <div className="flex flex-wrap gap-3">
                    {["VS Code", "Figma", "GitHub", "Npm", "Framer Motion", "Axios", "TanStack Query"].map((tool, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={skillsInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.9 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full text-sm font-medium cursor-pointer"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        ref={projectsRef}
        id="projects"
        className="py-20"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A selection of my recent work showcasing my skills and approach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <motion.div
                  className="p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-2"
                    >
                      View Live
                      <FaArrowRight />
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 font-semibold flex items-center gap-2"
                    >
                      GitHub
                      <FaGithub />
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        ref={contactRef}
        id="contact"
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={contactInView ? { opacity: 1, scale: 1 } : {}}
          className="container mx-auto px-6"
        >
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              className="text-4xl font-bold mb-6"
            >
              Let's Work Together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={contactInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-blue-100 mb-8"
            >
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold"
              >
                Get In Touch
              </motion.button>
              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-3 border-2 border-white/30 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Schedule a Call
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Home;