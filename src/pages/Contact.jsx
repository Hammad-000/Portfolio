import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaPaperPlane, FaClock } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-blue-500" />,
      title: "Email Address",
      details: "syedhammad283@gmail.com",
      link: "mailto:syedhammad283@gmail.com",
      description: "For project inquiries and collaborations"
    },
    {
      icon: <FaPhone className="text-green-500" />,
      title: "Phone Number",
      details: "+923110250787",
      link: "tel:+923110250787",
      description: "Available Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: <FaMapMarkerAlt className="text-red-500" />,
      title: "Location",
      details: "Karachi, Pakistan",
      link: "https://maps.app.goo.gl/u52mro6TxcvmUmhT6",
      description: "Open to remote positions worldwide"
    },
    {
      icon: <FaCalendarAlt className="text-purple-500" />,
      title: "Schedule Meeting",
      details: "Book a call",
      link: "#",
      description: "10-min consultation slot"
    }
  ];

  const socialLinks = [
    { platform: "GitHub", icon: <FaGithub />, username: "@Hammad-000", link: "https://github.com/Hammad-000", color: "hover:text-gray-800 dark:hover:text-white" },
    { platform: "LinkedIn", icon: <FaLinkedin />, username: "Syed Hammad Ahmed", link: "https://www.linkedin.com/in/syed-hammad-ahmed-412834287/", color: "hover:text-blue-700 dark:hover:text-blue-400" },
    { platform: "Twitter", icon: <BsTwitterX />, username: "@Syed__Hammad", link: "https://x.com/Syed__Hammad", color: "hover:text-blue-400 dark:hover:text-blue-300" }
  ];

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              Let's Connect
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              Have a project in mind? Let's discuss how we can bring your ideas to life. 
              I'm always open to new opportunities and interesting challenges.
            </p>
            <div className="flex space-x-6 mb-8">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 text-xl ${social.color} transition-all hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Contact Hammad" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">24h</div>
                <div className="text-sm">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactInfo.map((info, index) => (
            <a 
              key={index}
              href={info.link}
              className="group bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-2xl">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold">{info.title}</h3>
              </div>
              <p className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">
                {info.details}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {info.description}
              </p>
              <div className="mt-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <FaPaperPlane className="inline mr-2" />
                Click to connect
              </div>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-8">Send me a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Project Type</label>
                <select className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                  <option value="">Select a project type</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile App</option>
                  <option value="ui">UI/UX Design</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <div className="flex items-center gap-4">
                <input type="checkbox" id="newsletter" className="w-4 h-4" />
                <label htmlFor="newsletter" className="text-gray-600 dark:text-gray-400">
                  Subscribe to my newsletter for updates
                </label>
              </div>
              
              <button 
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                Send Message <FaPaperPlane />
              </button>
            </form>
          </div>


          <div>
    
        


            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Connect on Social Media</h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.link}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${
                        social.platform === 'GitHub' ? 'bg-gray-100 dark:bg-gray-700' :
                        social.platform === 'LinkedIn' ? 'bg-blue-100 dark:bg-blue-900/30' :
                        'bg-blue-50 dark:bg-blue-900/20'
                      }`}>
                        <span className={`text-xl ${
                          social.platform === 'GitHub' ? 'text-gray-600 dark:text-gray-300' :
                          social.platform === 'LinkedIn' ? 'text-blue-600 dark:text-blue-400' :
                          'text-blue-400 dark:text-blue-300'
                        }`}>
                          {social.icon}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold">{social.platform}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{social.username}</p>
                      </div>
                    </div>
                    <div className="text-gray-400 group-hover:text-blue-500 transition-colors">
                      <FaPaperPlane />
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
                <h4 className="font-bold mb-2">Join My Newsletter</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  Get weekly updates on web development tips and projects
                </p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-4">Based in San Francisco</h3>
              <p className="text-blue-100 mb-6">
                Serving clients globally with a focus on innovative web solutions and digital transformation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">Quick Response</h4>
                  <p className="text-blue-100 text-sm">Typically replies within 2 hours</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Remote Work</h4>
                  <p className="text-blue-100 text-sm">Available for remote projects worldwide</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <h4 className="font-bold mb-4">Office Hours</h4>
              <p className="mb-2">Mon-Fri: 9AM-6PM PST</p>
              <p className="text-sm text-blue-200">
                For urgent matters outside office hours, please email directly.
              </p>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
};

export default Contact;