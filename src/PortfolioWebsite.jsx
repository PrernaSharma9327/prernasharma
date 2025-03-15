import React, { useState, useEffect } from "react";


const PortfolioWebsite = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    

  const handleCardHover = (index) => {
    setActiveCard(index);
  };
 
  const projects = [
    {
      title: "Far and Away",
      img: "./images/farandaway.jpg",
      link: "https://projectx0616.github.io/",
    },
    {
      title: "Relief Bridge",
      img: "./images/reliefbridge.png",
      link: "https://github.com/PrernaSharma9327/RELIEFBRIDGE",
    },
    {
      title: "Saloni Collections",
      img: "./images/SALONI COLLECTIONS.jpg",
    },
  ];
  const [showForm, setShowForm] = useState(false);
  const scrollToFooter = () => {
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900 text-white w-full h-full overflow-x-hidden">
      {/* Page Loader */}
      <div
        className={`fixed inset-0 bg-gray-900 z-50 flex items-center justify-center transition-opacity duration-1000 ${
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-700 ${
            isLoaded ? "scale-150" : "scale-100"
          }`}
        >
          <circle cx="20" cy="20" r="15" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      {/* Navigation */}
      <nav className={`font-bold text-xl flex justify-center items-center p-8 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}>
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


      {/* Hero Section */}
            <section
        className={`flex flex-col items-center justify-center mt-16 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
        >
        <div className="relative w-full max-w-xl h-100 mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
            {/* Outer Gradient Circle */}
            <div className="w-120 h-120 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transform rotate-45 blur-sm animate-pulse"></div>

            {/* Inner Circle with Image */}
            <div className="absolute w-120 h-120 bg-gray-900 rounded-full  overflow-hidden flex items-center justify-center">
                <img
                src="./images/WhatsApp Image 2025-03-06 at 19.52.39_73d9a897.jpg" // Replace with your image path
                alt="Profile"
                className="w-full h-full object-cover "
                />
            </div>
            </div>
        </div>

        <h1 className="text-4xl  font-bold uppercase mt-12 mb-6">Prerna Sharma</h1>
        <p className="text-xl font-bold font-poppins tracking-widest uppercase text-gray-400 mb-5">
            Full-Stack Developer
        </p>
        </section>

{/* Portfolio Grid */}
<h2 className="text-3xl font-italic text-center mt-14 animate-fade-in">Team Works</h2>
<section className="grid grid-cols-2 md:grid-cols-3 gap-4 px-6 mb-16 mt-18">
  
  {projects.map((project, index) => (
    <div
      key={index}
      className="bg-gray-800 p-8 flex flex-col items-center justify-center text-center cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
      onMouseEnter={() => handleCardHover(index)}
      onMouseLeave={() => handleCardHover(null)}
    >
      {/* Link Wrapper (if link exists) */}
      {project.link ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <img
            src={project.img}
            alt={project.title}
            className="w-56 h-46 object-cover rounded-lg mb-4 transition-all duration-500 hover:scale-110 "
          />
          <h3 className="text-lg font-bold mb-2 text-blue-400">{project.title}</h3>
        </a>
      ) : (
        <>
          <img
            src={project.img}
            alt={project.title}
            className="w-56 h-46 object-cover rounded-lg mb-4 transition-all duration-500 hover:scale-110"
          />
          <h3 className="text-lg font-bold mb-2 text-blue-400">{project.title}</h3>
        </>
      )}

      {/* Subtitle (optional) */}
      {project.subtitle && <p className="text-sm uppercase">{project.subtitle}</p>}
    </div>
  ))}
</section>


      
    {/* Personal Project Section */}
<section className="px-6 py-12 bg-gray-900 text-white">
  <h2 className="text-3xl font-italic text-center mb-6 animate-fade-in">
    Personal Project
  </h2>
  
  <div className="flex flex-col md:flex-row items-center justify-center bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-700 hover:scale-105 hover:shadow-blue-500/20">
    
    {/* Image Container with Smaller Logo */}
    <div className="w-full md:w-1/3 flex justify-center p-6">
      <img 
        src="./images/Preview-xYG55Dbii-transformed.jpeg" 
        alt="FreshEra Careers" 
        className="w-44 h-44 object-cover rounded-lg transform transition-all duration-500 hover:scale-110"
      />
    </div>

    {/* Text Content */}
    <div className="w-full md:w-2/3 p-6">
      <h3 className="text-2xl font-semibold mb-4 text-blue-400 text-center transition-all duration-500 hover:text-blue-300">
        FreshEra Careers
      </h3>
      <p className="text-gray-300 text-lg leading-relaxed">
      FreshEra Careers is a specialized job portal that aggregates and organizes company details, such as packages, roles, eligibility, and locations, to help freshers make informed decisions. It also includes features like sorting, filtering, and comparing companies based on salary, roles, and more.
       
        </p>
      
    </div>

  </div>
</section>



<div className="flex gap-6 p-6">
      {/* Left Side: My Expert Area */}
      <section className="bg-gray-800 p-6 rounded-xl shadow-lg w-3/5 ">
        <h2 className="text-2xl font-semibold text-white-800 mb-5 text-center ">My Expert Area👩‍💻</h2>
        
        <div className="grid grid-cols-3 gap-4">
          {[
            { name: "Angular", image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" },
            { name: "React.js", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
            { name: "Node.js", image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
            { name: "JavaScript", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
            { name: "React Native", image: "https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png" },
            { name: "MongoDB", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAtFBMVEX///9DmTRFpThAlDNGoDdPqkFXrkdKpzxgsk9Rq0RZr0parUtis1JWq0c+ozA4myUznyI7lioqjBfe7Ny+2rtTrT/3+/ZBnjEzmh7x9/DP5cyKwYMunhu117E5oSno8eeurY2/vqPf3s6ezZZ3tm6n0aBUpkhmrVx1umuRwoqv1anX6dSqzKVjpllMnD8jmwkfjAB9tHVknlNxoF5hqU+FpW2Oo3J0ql+iq4SVv5CEqmvLyrScklZNAAADOElEQVRogeXZ6XKbMBAHcJAFAmzwfQZ8H7Gd2jnapG3e/70qcUqC9sNKmmmn+wC/2fl7tQhsWf9HDU3iO5N6sDdnH9zYWOvJuINNtX4Ye144Gxmxd9T2jni2MmV7IcZd/Xpmez7GUzzXbF8ym3WOp1O9+nCZ2V4bM/040WhPAjfoVDienjTij2PX5XHcPWuzL5HrulXmrLSN+5XZeS4FjmNNA9lx0xJxTbEnyyDF+cxZME86cJ9knae5VDieaZj2S+T4QZkLh0/VF+QEOY5T5cLheHZVxc8VzlrnceXfdB5Rm8uFx/FsoYYnKV7lIuCqrZ+Qz/ByXgRcMfVVj/hCLqGATx9U8F1EHC4XGcddlVmPCHF8h5sXGU/g9mJJiJiLmDl9bMDxB0RxPhevI+Iqd4E2IUXrxbxwsE2rD15fq7jC/Uxvl2xeX6D4qIccKZe2LVUfOi+7KMWJ/wd8AH3ePUaIyyVo7hz6qO4hJOdSw+0bzJ7cc5yblzr+DMOHMcWleQnrOOx1YMRikXKp4wPYUk+WSMilGe/DxmWX4uK8NOCwM/oQoaJ1v8jFr+M/VPFyXhpw2KC/ZLgwL0Edf1HpXMilIXMYfubwYl60dX5YIikXJ6ifUGDmSY7zuTTgsGnJTqg4L56uOU93izQv9c67wIV+R1zr+X6p4cDFZTmolkv9EAFXbjnoiDi/x20gXv6iXC6SfLNhw8KuobVcqhN6a91atIDrnNapzIXHb3arKvDVojyjVS7tllTgS5E1j+VcQsmGX+fSm4uYC5bwgcJb+iKWcpE7h6dCqy3lIuHwWWFVjnqeixQL8LpVlC/mInY+UHhrYVWmnuUidt5Xsy1rH/H75SY0rvy5aMU/MhwBV0yc1VOPy4XHB8pfLaxywxCpc+DDU6p5dcUIX7WGwup6L1o/vmk5+EJd4mxe0Ndvxbp91vcdfZe9B6DTe44PtHyby2vPdII+vvczW8uPWelLhv9c9w3Yee/v61cTNr309lC0XtNcDNj0YnoP1+vNm/pGaazRB8U3Jv5tYbWl+NaQbc1p4zr/rhDLKL7ZfBqzre0/jBsbFvpA/TSIz83ips4nq4nuvyv/0voFkANGiQq34SkAAAAASUVORK5CYII=" },
            { name: "GitHub", image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
            { name: "HTML", image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
            { name: "CSS", image: "data:image/jpeg;base64,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" },
        ].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-800 px-6 py-4 rounded-md shadow-md border border-gray-200"
            >
              <img src={skill.image} alt={skill.name} className="w-12 h-12 mb-2" />
              <p className="text-sm font-semibold mb-auto">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Right Side: Blank Container */}
      <div className="w-2/5 bg-gray-800 rounded-xl flex flex-col items-center justify-center p-6 shadow-lg">
      <div className="text-2xl font-semibold  mb-5"><h3>Let's Get Connected🚀</h3></div>
    {/* Marquee Effect for Quotes */}
    <div className="w-full bg-gray-600 text-white text-center p-3 rounded-md shadow-md">
      <marquee behavior="scroll" direction="left" scrollamount="5" className="text-lg font-semibold">
      🚀 Let's Build the Future Together | 💡 Innovate. Inspire. Impact. | 🌍 Transform Ideas into Reality
      </marquee>
    </div>

  <h2 className="text-2xl font-bold text-gray-800 mb-4">Let's Connect</h2>
    <a href="/Prerna_Sharma_Resume.pdf" download="Prerna_Sharma_Resume.pdf">
    <button className="text-xl bg-blue-900 text-white px-26 py-5 rounded-md shadow-md hover:bg-blue-700 transition-all duration-300 w-full mb-3">
      📄 Download Resume
    </button>
     </a>
    <button 
    onClick={() => setShowForm(true)}
    className="text-xl bg-green-800 text-white px-38 py-5 rounded-md shadow-md hover:bg-green-700 transition-all duration-300  mb-3">
      🤝 Hire Me
    </button>
    <a href="mailto:prernasharma9327@gmail.com">
    <button className="text-xl bg-purple-900 text-white px-34 py-5 rounded-md shadow-md hover:bg-purple-700 transition-all duration-300 w-full">
      ✉️ Contact Me
    </button>

    </a>
<div>
    {/* Popup Contact Form */}
    {showForm && (
        <div className="fixed inset-0  bg-opacity-10 flex justify-center items-center" onClick={() => setShowForm(false)}>
          <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800 w-96 ">
            <h2 className="text-xl font-bold mb-4">Hire Me</h2>
            <form>
              <label className="block mb-2">Your Name</label>
              <input type="text" className="w-full border px-3 py-2 mb-4 rounded-md" placeholder="Enter your name" />
              <label className="block mb-2">Your Email</label>
              <input type="email" className="w-full border px-3 py-2 mb-4 rounded-md" placeholder="Enter your email" />
              <label className="block mb-2">Phone Number</label>
              <input type="phone-number" className="w-full border px-3 py-2 mb-4 rounded-md" placeholder="Enter your phone number" />

              <label className="block mb-2">Project Details</label>
              <textarea className="w-full border px-3 py-2 mb-4 rounded-md" placeholder="Describe your project"></textarea>

              
              <button className="bg-green-600 text-white px-4 py-2 rounded-md w-full hover:bg-green-500">Submit</button>
            </form>

            <button
              onClick={() => setShowForm(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md w-full hover:bg-red-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
  </div>

</div>

</div>
      
     {/* Footer */}
<footer id="footer" className="p-10 bg-gray-900 text-gray-400 text-center">
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

     {/* Email */}
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

export default PortfolioWebsite;
