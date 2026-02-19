import React from "react";

const About = () => {
  return (
    <section className="relative py-6 px-6 overflow-hidden  text-gray-900  dark:text-white transition-colors duration-300">

      {/* Background Text - Perfect Center */}
      {/* <h1 className="absolute inset-0 flex items-center justify-center
        text-[80px] sm:text-[120px] md:text-[180px]
        font-extrabold tracking-widest
        opacity-5
        z-0 
        select-none pointer-events-none">
        DEVELOPER
        </h1> */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Side */}
        <div>
          <h1
            className="
              text-4xl md:text-5xl
              text-3xl font-semibold
              mb-6
              bg-gradient-to-r from-indigo-700 to-cyan-800
              text-transparent bg-clip-text font-header  
            "
          >
            WHO AM I?
          </h1>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-lg">
            I am a passionate <span className="font-semibold text-indigo-500">Frontend Developer</span> 
            with over <span className="font-semibold text-indigo-500">3+ years of experience</span> 
            building scalable, responsive, and high-performance web applications.
            <br /><br />
            I specialize in React.js, JavaScript, and Tailwind CSS, focusing on 
            clean architecture, reusable components, and seamless user experiences.
          </p>
          
        </div>

        {/* Right Side - Terminal Card */}
        <div className="bg-blue-30 dark:bg-white/5 
          backdrop-blur-xl 
          border border-gray-200 dark:border-white/10 
          rounded-2xl p-8 shadow-xl 
          hover:shadow-indigo-500/10 transition duration-500">

          {/* Terminal Header */}
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          <pre className="text-sm leading-relaxed text-gray-800 dark:text-gray-300 overflow-x-auto">
  {`const developer = {
    name: "Komal Pawar",
    role: "Frontend Developer",
    experience: "3+ Years",
    techStack: ["React.js", "JavaScript", "Tailwind CSS"],
    strengths: [
      "Responsive UI Development",
      "Performance Optimization",
      "Scalable Architecture"
    ],
    goal: "Build impactful and user-focused web applications"
  };`}
            </pre>
        </div>

      </div>
    </section>
  );
};

export default About;
