const About = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden 
    text-gray-900 dark:text-white transition-colors duration-300">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 
      gap-10 md:gap-16 items-center">

        {/* Left Content */}
        <div>
          <h1
            className="
              text-3xl sm:text-4xl md:text-5xl
              font-bold
              mb-6
              bg-gradient-to-r from-indigo-700 to-cyan-800
              dark:from-indigo-400 dark:to-cyan-400
              text-transparent bg-clip-text
            "
          >
            WHO AM I?
          </h1>

          <p className="text-gray-600 dark:text-gray-400 
          leading-relaxed mb-8 
          text-base sm:text-lg">
            I am a passionate{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Frontend Developer
            </span>{" "}
            with over{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              3+ years of experience
            </span>{" "}
            building scalable, responsive, and high-performance web applications.
            <br /><br />
            I specialize in React.js, JavaScript, and Tailwind CSS, focusing on
            clean architecture, reusable components, and seamless user experiences.
          </p>
        </div>

        {/* Right Side - Terminal Card */}
        <div
          className="
          bg-gray-50 dark:bg-white/5
          backdrop-blur-xl
          border border-gray-200 dark:border-white/10
          rounded-2xl
          p-5 sm:p-6 md:p-8
          shadow-lg hover:shadow-2xl
          transition duration-500
        "
        >
          {/* Terminal Header */}
          <div className="flex gap-2 mb-4 sm:mb-6">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          <pre
            className="
            text-xs sm:text-sm md:text-base
            leading-relaxed
            text-gray-800 dark:text-gray-300
            overflow-x-auto
          "
          >
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
  goal: "Build impactful web applications"
};`}
          </pre>
        </div>

      </div>
    </section>
  );
};

export default About;