import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const AboutMe = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
    
    // Add scroll event listener for animations
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const certifications = [
    { 
      title: "Computer Networks And Internet Protocol", 
      issuer: "NPTEL", 
      year: "Jan-Apr 2024", 
      logo: "./images/nptel.jpg",
      certificateUrl: "./images/nptel.jpg",
      description: "Comprehensive study of network protocols, TCP/IP architecture, and internet communication standards."
    },
    { 
      title: "Certificate in Data Structures and Algorithms (DSA)", 
      issuer: "Developer Student Club (DevTown)", 
      year: "September 2022", 
      logo: "./images/DSA DevTown.jpg",
      certificateUrl: "./images/DSA DevTown.jpg",
      description: "Mastery of fundamental data structures and algorithm design principles for efficient problem-solving."
    },
    { 
      title: "Certificate in Foundation of Web Application Development", 
      issuer: "Parul University (Department of Computer Science & Engineering, PIET)", 
      year: "January 2024", 
      logo: "./images/webdevelopment.jpg",
      certificateUrl: "./images/webdevelopment.jpg",
      description: "Core concepts of web development including HTML, CSS, JavaScript and responsive design principles."
    },
    { 
      title: "Certificate in Database and SQL", 
      issuer: "Infosys", 
      year: "September 2023", 
      logo: "./images/Infosys.jpg",
      certificateUrl: "./images/Infosys.jpg",
      description: "Advanced SQL concepts, database design, and query optimization techniques for data management."
    },
  ];

  const scrollToFooter = () => {
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  };

  const achievements = [
    "Winner of Vadodara Hackathon 5.0 2024",
    "Recognized as Top 5 HEREvolution CODEFEST HACKATHON by HERE Technolgoies 2024",
    
  ];

  const education = [
    { degree: "B.Tech. in Computer Science", school: "Parul Institute of Engineering and Technology", year: "2026", logo: "./images/parul.png" },
   ];

  const skills = [
    { 
      name: "UI/UX Design", 
      description: "Creating intuitive interfaces that delight users across platforms",
      icon: "🎨",
      tags: ["Wireframing", "Prototyping", "User Research"]
    },
    { 
      name: "React.js", 
      description: "Crafting interactive components and building responsive web applications",
      icon: "⚛️",
      tags: ["Hooks", "Context API", "State Management"]
    },
    { 
      name: "Node.js", 
      description: "Developing robust backend systems and RESTful APIs",
      icon: "🚀",
      tags: ["Express", "API Design", "Authentication"]
    },
    { 
      name: "Data Analytics", 
      description: "Transforming raw data into meaningful insights and visualizations",
      icon: "📊",
      tags: ["Dashboards", "Data Visualization", "Reporting"]
    },
    { 
      name: "Python", 
      description: "Automating workflows and building data-driven applications",
      icon: "🐍",
      tags: ["Automation", "Data Processing", "Scripts"]
    },
  ];
  const viewCertificate = (cert) => {
    setSelectedCertificate(cert);
  };

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "30px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        }
      }
    ],
    dotsClass: "slick-dots custom-dots",
    customPaging: function() {
      return (
        <div className="mt-5 w-3 h-3 bg-blue-500 rounded-full opacity-50 hover:opacity-100"></div>
      );
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-300 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-purple-300 blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 backdrop-blur-md bg-gray-900/80 font-bold text-xl flex justify-center items-center p-6 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}>
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
              className={`text-l uppercase relative overflow-hidden group cursor-pointer ${item.path === "/about" ? "text-white" : "text-white"}`}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className={`py-20 px-8  transition-opacity duration-1000 ${activeSection === "about" ? "opacity-100" : "opacity-70"}`}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 items-center ">
          {/* Left Side - About (7 columns) */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 p-8 rounded-3xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-xl h-140"
          >
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 bg-clip-text text-transparent leading-tight mb-8">
              I'M A <br /> FULL-STACK DEVELOPER
            </h1>

            <div className="grid md:grid-cols-2 gap-10 mt-10">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-blue-400 font-semibold text-lg mb-3 flex items-center">
                  <span className="w-6 h-0.5 bg-blue-400 mr-2"></span>
                  WHERE I'VE BEEN
                </h2>
                <p className="text-lg leading-relaxed text-gray-400">
                Born and raised in Dahod, Gujarat. Completed my schooling at St. Stephen's School, Dahod, before stepping into the world of engineering. My journey has been a fusion of technical learning and creative exploration, shaping me into a well-rounded individual.
                </p>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-blue-400 font-semibold text-lg mb-3 flex items-center">
                  <span className="w-6 h-0.5 bg-blue-400 mr-2"></span>
                  WHAT I'M DOING
                </h2>
                <p className="text-lg leading-relaxed text-gray-400">
                Currently pursuing a Bachelor's in Computer Science Engineering at Parul University,Vadodara, while honing my skills in software development. Beyond tech, I'm channeling my passion for poetry and creative expression, crafting words that resonate and inspire.
                </p>
              </div>
            </div>

          
          </motion.div>
          {/* Right Side - Image (5 columns) */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 w-full flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-500 via-purple-400 to-gray-700 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative w-80 h-96 md:w-full md:h-auto rounded-xl overflow-hidden transform group-hover:scale-105 transition duration-700">
                <img 
                  src="./images/WhatsApp Image 2025-03-06 at 19.52.39_73d9a897.jpg" 
                  alt="Designer" 
                  className="w-140 h-140 object-cover aspect-[3/4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-50"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`py-24 px-8 transition-opacity duration-1000 ${activeSection === "certifications" ? "opacity-100" : "opacity-70"}`}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-4xl font-bold mb-2">
            <span className="text-white bg-clip-text">Certifications</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Professional credentials that validate my expertise and commitment to continuous learning in the tech industry.</p>
          
          <div className="max-w-8xl mx-auto">
            <Slider {...settings} className="certification-slider">
              {certifications.map((cert, index) => (
                <div key={index} className="px-2">
                  <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                    <div className="flex items-center justify-center mb-4 h-12">
                      <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
                        {cert.logo ? (
                          <img src={cert.logo} alt={cert.issuer} className="h-8 w-8 object-contain" />
                        ) : (
                          <span className="text-lg font-bold text-blue-400">{cert.issuer.charAt(0)}</span>
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white text-center mb-2">{cert.title}</h3>
                    <p className="text-gray-400 text-center mb-6">{cert.issuer} • {cert.year}</p>
                    <div className="flex justify-center">
                      <button 
                        onClick={() => viewCertificate(cert)}
                        className="px-6 py-2 bg-blue-900 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform group-hover:scale-105 shadow-lg"
                      >
                        View Certificate
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-800 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">{selectedCertificate.title}</h3>
              <button 
                onClick={closeCertificateModal} 
                className="text-gray-400 hover:text-blue-400 text-2xl font-bold"
              >
                &times;
              </button>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-3/4">
                <img 
                    src={selectedCertificate.certificateUrl} 
                    alt={`${selectedCertificate.title} Certificate`} 
                    className="w-full h-auto rounded-lg border-2 border-gray-700 shadow-lg" 
                  />
                </div>
                <div className="md:w-1/4">
                  <div className="bg-gray-800 p-4 rounded-lg mb-4">
                    <h4 className="text-blue-400 font-medium mb-2">Issuer</h4>
                    <p className="text-white">{selectedCertificate.issuer}</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg mb-4">
                    <h4 className="text-blue-400 font-medium mb-2">Date Issued</h4>
                    <p className="text-white">{selectedCertificate.year}</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="text-blue-400 font-medium mb-2">Description</h4>
                    <p className="text-gray-300 text-sm">{selectedCertificate.description}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <button 
                  onClick={closeCertificateModal}
                  className="px-6 py-3 bg-red-500 hover:bg-red-400 text-white font-medium rounded-lg transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Achievements Section */}
      <section id="achievements" className={`py-24 px-8 transition-opacity duration-1000 ${activeSection === "achievements" ? "opacity-100" : "opacity-70"}`}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-4xl font-bold mb-2">
            <span className=" bg-clip-text text-white">Achievements</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Recognition of excellence and notable accomplishments throughout my professional journey.</p>
          
          <div className="max-w-4xl mx-auto">
            {achievements.map((ach, index) => (
              <motion.div 
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg mb-6 border border-gray-700 transform transition-all duration-300 hover:scale-105 hover:border-blue-500 group">
                  <div className="mr-6 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center text-2xl text-blue-400 font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-lg text-white group-hover:text-blue-400 transition-colors duration-300">{ach}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-24 px-8 transition-opacity duration-1000 ${activeSection === "education" ? "opacity-100" : "opacity-70"}`}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-4xl font-bold mb-2">
            <span className="bg-clip-text text-white">Education</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Academic foundations that have shaped my expertise and professional perspective.</p>
          
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg mb-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 group">
                  <div className="flex items-center">
                    {edu.logo ? (
                      <div className="w-16 h-16 rounded-full bg-white p-2 mr-6 flex-shrink-0 shadow-md">
                        <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain" />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-gray-700 mr-6 flex-shrink-0 flex items-center justify-center">
                        <span className="text-xl font-bold text-blue-400">{edu.school.charAt(0)}</span>
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{edu.degree}</h3>
                      <p className="text-gray-400">{edu.school}</p>
                    </div>
                  </div>
                  <div className="bg-gray-900 px-4 py-2 rounded-lg shadow-inner flex-shrink-0">
                    <span className="text-blue-400 font-medium">{edu.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <svg className="w-16 h-16 text-blue-500/20 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-2xl font-light text-gray-300 italic mb-8">
            "Design is not just what it looks like and feels like. Design is how it works."
          </p>
          <p className="text-blue-400 font-medium">- Steve Jobs</p>
        </div>
      </section>

   
      {/* Footer */}
      <footer id="footer" className="p-10 bg-gray-900 text-gray-400 text-center border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/prerna-s-a9680321a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            >
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shadow-lg">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-6 h-6" />
              </div>
              <span>LinkedIn</span>
            </a>

            {/* Email */}
            <a
              href="mailto:prernasharma9327@gmail.com"
              className="flex items-center gap-2 hover:text-red-400 transition-all duration-300 transform hover:scale-110"
            >
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shadow-lg">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Email" className="w-6 h-6" />
              </div>
              <span>E-mail</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/PrernaSharma9327"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shadow-lg">
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="w-6 h-6" />
              </div>
              <span>GitHub</span>
            </a>

            {/* Contact Number */}
            <a
              href="tel:+91 6355077255"
              className="flex items-center gap-2 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            >
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shadow-lg">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Circle-icons-phone.svg" alt="Phone" className="w-6 h-6" />
              </div>
              <span>Contact</span>
            </a>
          </div>

          <div className="pt-8 border-t border-gray-800">
            <p className="text-sm">© 2025 Prerna Sharma. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutMe;