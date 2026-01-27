import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const project = [
    {
      id: 1,
      title: "Travel Platform",
      description: "A modern travel booking platform with interactive maps, hotel booking, and itinerary planning features.",
      image: "./photo/travel.png",
      tags: ["React", "Node.js", "MongoDB", "Mapbox"],
<<<<<<< HEAD
      liveLink: "https://lux-traveller.vercel.app/home",
      githubLink: "https://github.com/Hammad-000/lux-traveller"
=======
      liveLink: "https://lux-traveller.vercel.app/",
      githubLink: "#"
>>>>>>> 36195fb6280d228078169ef60af5a801862503b4
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      description: "Real-time data visualization dashboard with customizable charts, metrics tracking, and reporting tools.",
      image: "./photo/dashboard.png",
<<<<<<< HEAD
      tags: ["Chart.js", "React", "TailwindCSS", "PostgreSQL"],
      liveLink: "https://admin-dashboard-seven-gamma-65.vercel.app/dashboard",
      githubLink: "https://github.com/Hammad-000/admin-dashboard"
    },
    {
      id: 3,
      title: "Inferno Grill",
      description: "Full-stack food ordering application with restaurant discovery, cart management, and payment integration.",
      image: "./photo/foodmain.png",
      tags: ["React Native", "Firebase", "Stripe", "Redux"],
      liveLink: "https://inferno-grill.vercel.app/login",
      githubLink: "https://github.com/Hammad-000/inferno-grill"
=======
      tags: ["Chart.js", "D3.js", "TailwindCSS", "React"],
      liveLink: "https://admin-dashboard-seven-gamma-65.vercel.app/dashboard",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Food Delivery App",
      description: "Food ordering application with restaurant discovery, cart management.",
      image: "./photo/foodmain.png",
      tags: ["React Native", "Firebase", "Stripe", "Redux"],
      liveLink: "https://inferno-grill.vercel.app/",
      githubLink: "#"
>>>>>>> 36195fb6280d228078169ef60af5a801862503b4
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">My Projects</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Here are some of my recent works. Each project showcases different technologies and problem-solving approaches.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
        {project.map((project) => (
          <div 
            key={project.id}
            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
          >
            <div className="relative overflow-hidden h-56">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
             
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                {project.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  <span className="font-medium">Live Demo</span>
                </a>
                
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300"
                >
                  <FaGithub className="text-lg" />
                  <span className="font-medium">Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
        
      </div>
      

      <div className="text-center mt-12">
        <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-all duration-300">
          View All Projects
        </button>
      </div>
    </div>
  );
};

export default Projects;