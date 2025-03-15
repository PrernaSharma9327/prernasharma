import React, { useState, useEffect } from "react";
import { FaArrowRight, FaPaintBrush, FaLaptopCode, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdEvent } from "react-icons/md";

const Work = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  // Project data
  const groupProjects = [
    {
      title: "Relief Bridge - Emergency Coordination Platform",
      description: "Designed the system architecture and implemented core functionalities. Developed algorithms for predictive analysis and resource allocation. Ensured data privacy, compliance with emergency regulations, and system reliability. Worked closely with NGOs, government agencies, and relief organizations.",
      icon: <MdEvent className="text-white bg-black p-2 rounded-full w-8 h-8" />,
      image: "./images/reliefbridge.png",
      link: "https://github.com/PrernaSharma9327/RELIEFBRIDGE"
    },
    {
      title: "Far and Away - A Tourism Website",
      description: "Designed and developed core functionalities, ensuring a smooth user experience. Crafted a visually appealing and intuitive interface, optimizing user interaction. Managed API integrations for real-time booking and data synchronization. Enhanced site visibility and ensured fast loading speeds.",
      icon: <FaLaptopCode className="text-white bg-black p-2 rounded-full w-8 h-8" />,
      image: "./images/farandaway.jpg",
      link: "https://projectx0616.github.io/"
    },
    {
      title: "Saloni Collections - E-Commerce Platform",
      description: "Conceptualized, designed, and developed the platform from scratch. Implemented product listing, cart, and checkout functionalities. Managed SEO, social media campaigns, and influencer collaborations. Ensured a seamless shopping journey through UI enhancements and user feedback analysis.",
      icon: <FaPaintBrush className="text-white bg-black p-2 rounded-full w-8 h-8" />,
      image: "./images/SALONI COLLECTIONS.jpg",
      link: "https://example.com/saloni-collections" // Added placeholder link - replace with actual link
    }
  ];

  const individualProjects = [
    
    {
      title: "FreshEra Careers",
      description: "Details →",
      image:"./images/Preview-xYG55Dbii-transformed.jpeg",
      icon: <FaLaptopCode className="text-white bg-black p-2 rounded-full w-8 h-8" />,
      link: "https://example.com/techno-network" // Added placeholder link - replace with actual link
    },
    {
      title: "Prerna Sharma's Portfolio",
      description: "Details →",
      image:"./images/Prerna’s.png",
      icon: <FaPaintBrush className="text-white bg-black p-2 rounded-full w-8 h-8" />,
      link: "https://example.com/workshop-artists" // Added placeholder link - replace with actual link
    }
  ];

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
    
    // Auto-changing carousel
    const carouselInterval = setInterval(() => {
      setActiveProject((prev) => (prev === groupProjects.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(carouselInterval); // Cleanup on unmount
  }, []);

  const scrollToFooter = () => {
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  };

  const nextProject = () => {
    setActiveProject((prev) => (prev === groupProjects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? groupProjects.length - 1 : prev - 1));
  };

  // Function to open project link
  const openProjectLink = (link) => {
    if (link) {
      window.open(link, "_blank", "noopener noreferrer");
    }
  };

  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen">
      {/* Navigation */}
      <nav className={`font-bold text-xl flex justify-center items-center p-6 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}>
        <div className="flex space-x-20">
          {[
            { name: "Home", path: "/" },
            { name: "Works", path: "/work" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "#footer", action: scrollToFooter }
          ].map((item, index) => (
            <a 
              key={index} 
              href={item.path !== "#footer" ? item.path : "#"} 
              onClick={item.action || null} 
              className="text-l uppercase relative overflow-hidden group cursor-pointer"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </nav>

      {/* Main Section */}
      <div className="mb-20 bg-gray-900 min-h-screen flex flex-col md:flex-row items-center justify-center pt-8 px-4 md:px-8 lg:px-16 relative">
        <div className="flex flex-col md:flex-row w-full max-w-6xl gap-6 justify-between ">
          {/* Left Side: Group Projects with Carousel */}
          <div className="bg-white/20 backdrop-blur-lg p-6 md:p-8 rounded-3xl border border-gray-200 w-full md:w-3/5 h-full shadow-xl">
            <div className="flex justify-between items-center mb-6  ">
              <div className="flex items-center gap-3">
                <img
                  src="./images/group.jpg"
                  alt="Group Icon"
                  className="w-12  rounded-full border border-white shadow-lg"
                />
                <span className= "text-white text-2xl md:text-3xl font-bold font-serif">Group Projects</span>
              </div>
              <span className="text-green-400 text-sm font-bold bg-green-900/30 px-3 py-1 rounded-full">{groupProjects.length}</span>
            </div>

            {/* Carousel - Fixed height container */}
            <div className="relative mb-28 ">
              <div 
                className="overflow-hidden rounded-3xl shadow-lg h-80 cursor-pointer " 
                onClick={() => openProjectLink(groupProjects[activeProject].link)}
              >
                {groupProjects.map((project, index) => (
                  <div 
                    key={index}
                    className={`transition-opacity duration-1000 w-full h-100 rounded-3xl absolute top-0 left-0 ${activeProject === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Hover overlay with link indicator */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300 ">
                      <div className="text-white text-lg font-bold bg-blue-500/70 px-4 py-2 rounded-lg">
                        Visit Project
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <button 
                  onClick={prevProject}
                  className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-transform hover:scale-110"
                >
                  <FaChevronLeft />
                </button>
                <div className="flex space-x-3">
                  {groupProjects.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${activeProject === index ? "bg-white scale-125" : "bg-gray-600 hover:bg-gray-400"}`}
                      onClick={() => setActiveProject(index)}
                    ></div>
                  ))}
                </div>
                <button 
                  onClick={nextProject}
                  className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-transform hover:scale-110 "
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>

            {/* Project Info */}
            <div 
              className="p-3 bg-gray-800/50 rounded-xl cursor-pointer hover:bg-gray-800/70 transition-all duration-300 " 
              onClick={() => openProjectLink(groupProjects[activeProject].link)}
            >
              <div className="flex justify-between items-center text-white mb-3">
                <h3 className="text-xl font-bold">{groupProjects[activeProject].title}</h3>
                {groupProjects[activeProject].icon}
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">{groupProjects[activeProject].description}</p>
              <div className="mt-3 text-blue-400 text-sm font-semibold">Click to view project →</div>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-lg p-6 rounded-3xl border border-white w-full md:w-2/5 flex flex-col shadow-xl mt-8 md:mt-0">
  <div className="flex justify-between items-center mb-6">
    <div className="flex items-center gap-3">
      <img
        src="/images/WhatsApp Image 2025-03-06 at 19.52.39_73d9a897.jpg"
        alt="Profile"
        className="w-12 rounded-full border border-white shadow-lg"
      />
      <span className="text-white text-2xl font-bold font-serif">Individual Projects</span>
    </div>
    <span className="text-yellow-400 text-sm font-bold bg-yellow-900/30 px-3 py-1 rounded-full">{individualProjects.length}</span>
  </div>

  <div className="space-y-5 flex-grow">
    {individualProjects.map((project, index) => (
      <div 
        key={index} 
        className="bg-gray-800/40 rounded-xl overflow-hidden hover:bg-gray-800/60 transition-all duration-300 cursor-pointer "
        onClick={() => openProjectLink(project.link)}
      >
        {/* Project Image */}
        <div className="relative h-49 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {/* Hover overlay with link indicator */}
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
            <div className="text-white text-lg font-bold bg-blue-500/70 px-4 py-2 rounded-lg">
              Visit Project
            </div>
          </div>
        </div>
        
        {/* Project Info */}
        <div className="p-4">
          <div className="flex justify-between items-center text-white mb-3">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            {project.icon}
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">{project.description}</p>
          <div className="mt-3 text-blue-400 text-sm font-semibold">Click to view project →</div>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
</div>
      {/* Footer */}
      <footer id="footer" className="p-10 bg-gray-900 text-gray-400 text-center border-t border-gray-800">
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/prerna-s-a9680321a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition duration-300"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-6 h-6" />
            LinkedIn
          </a>

          {/* Email */}
          <a
            href="mailto:prernasharma9327@gmail.com"
            className="flex items-center gap-2 hover:text-red-400 transition duration-300"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Email" className="w-6 h-6" />
            E-mail
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/PrernaSharma9327"
            className="flex items-center gap-2 hover:text-white transition duration-300"
          >
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="w-6 h-6" />
            GitHub
          </a>

          {/* Contact Number */}
          <a
            href="tel:+91 6355077255"
            className="flex items-center gap-2 hover:text-green-400 transition duration-300"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Circle-icons-phone.svg" alt="Phone" className="w-6 h-6" />
            Contact
          </a>
        </div>

        <p className="text-sm">© 2025 Prerna Sharma. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Work;