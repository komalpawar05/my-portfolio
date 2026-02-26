import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden
      py-14 sm:py-20 lg:py-24
      px-4 sm:px-6 lg:px-8
      bg-gradient-to-b 
      from-indigo-50 via-white to-white
      dark:from-neutral-950 dark:via-neutral-950 dark:to-black
      transition-colors duration-500"
    >
      {/* Light Glow */}
      <div className="absolute -top-24 -left-24 
      w-48 h-48 sm:w-72 sm:h-72 lg:w-[350px] lg:h-[350px]
      bg-indigo-300/40 rounded-full blur-[90px] sm:blur-[120px]
      dark:hidden"></div>

      {/* Dark Glow */}
      <div className="absolute -bottom-24 -right-24
      w-48 h-48 sm:w-72 sm:h-72 lg:w-[350px] lg:h-[350px]
      bg-indigo-600/20 rounded-full blur-[100px] sm:blur-[140px]
      hidden dark:block"></div>

      <div className="max-w-7xl mx-auto grid 
      grid-cols-1 md:grid-cols-2
      gap-10 md:gap-16 
      items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-semibold mb-6
            bg-gradient-to-r from-indigo-700 to-cyan-800
            text-transparent bg-clip-text"
          >
            WHO AM I?
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400
            leading-relaxed
            text-sm sm:text-base md:text-lg"
          >
            I am a passionate{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Frontend Developer
            </span>{" "}
            with over{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              4 years of experience
            </span>{" "}
           designing and building responsive web applications using React.js and modern JavaScript.
            <br />
           I enjoy creating clean, scalable component architectures and delivering smooth, high-quality user experiences.
            <br />My work includes developing operational dashboards, optimizing performance, and continuously improving 
            UI efficiency through modern development practices.
          </motion.p>
        </motion.div>


        {/* RIGHT TERMINAL CARD */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="bg-white/70 dark:bg-white/5
          backdrop-blur-xl
          border border-gray-200 dark:border-white/10
          rounded-2xl
          p-4 sm:p-6 lg:p-8
          shadow-xl
          transition duration-500"
        >
          {/* Terminal Dots */}
          <div className="flex gap-2 mb-4 sm:mb-6">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          <pre
            className="text-[10px] sm:text-xs md:text-sm lg:text-base
            text-gray-800 dark:text-gray-300
            leading-relaxed
            overflow-x-auto whitespace-pre-wrap break-words"
          >
{`const developer = {
  name: "Komal Pawar",
  role: "Frontend Developer",
  experience: "3+ Years",
  techStack: ["React.js", "JavaScript", "Tailwind CSS"],
  strengths: [
    "Responsive UI",
    "Performance Optimization",
    "Clean Architecture"
  ],
  goal: "Build impactful web applications"
};`}
          </pre>
        </motion.div>
      </div>

      {/* Responsive Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full
          h-[70px] sm:h-[90px] md:h-[110px] lg:h-[120px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            className="block dark:hidden"
            fill="#f9fafb"
            d="M0,160L60,186.7C120,213,240,267,360,256C480,245,600,171,720,154.7C840,139,960,181,1080,208C1200,235,1320,245,1380,250.7L1440,256L1440,320L0,320Z"
          />

          <path
            className="hidden dark:block"
            fill="#0f172a"
            d="M0,160L60,186.7C120,213,240,267,360,256C480,245,600,171,720,154.7C840,139,960,181,1080,208C1200,235,1320,245,1380,250.7L1440,256L1440,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default About;