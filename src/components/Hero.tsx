import { motion } from "framer-motion";
import Profile_Image from "../assets/2.png";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import Resume from "../assets/Komal Resume Fronend Developerr 022026.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center 
      overflow-x-hidden px-4 sm:px-6 py-12 md:py-0"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-full h-full 
          bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 
          opacity-10 dark:opacity-20"></div>
        </div>

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <p className="text-indigo-600 font-medium mb-4 tracking-wide uppercase text-sm sm:text-base">
            Frontend Developer | Web Designer | UI/UX Enthusiast
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-700 bg-clip-text text-transparent">
              Komal Pawar
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
            I build clean, responsive and high-performance web applications
            using React.js and Tailwind CSS.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap justify-center md:justify-start">

            <a
              href="#projects"
              className="px-6 sm:px-8 py-3 
              bg-indigo-600 text-white 
              rounded-xl shadow-lg 
              hover:bg-indigo-500 
              hover:scale-105 
              transition duration-300"
            >
              View Projects
            </a>

            <motion.a
              href={Resume}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-6 sm:px-8 py-3 
              rounded-xl 
              bg-white/70 dark:bg-white/10
              backdrop-blur-lg
              border border-indigo-500/40
              text-indigo-700 dark:text-indigo-400
              font-medium
              flex items-center gap-2
              shadow-lg
              hover:shadow-indigo-500/30
              transition-all duration-300"
            >
              <FaDownload className="group-hover:animate-bounce" />
              Resume
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mt-10 md:mt-0"
        >
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div
              className="
              w-64 sm:w-72 md:w-96
              h-64 sm:h-72 md:h-96
              bg-indigo-900
              rounded-[60%_40%_30%_70%/60%_30%_70%_40%]
              overflow-hidden
              drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)]
              drop-shadow-[0_0_60px_rgba(99,102,241,0.6)]
            "
            >
              <img
                src={Profile_Image}
                alt="Komal Pawar"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Social Bar (Desktop Only) */}
      <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-50">

        <div className="rotate-90 text-sm text-gray-600 dark:text-gray-400 tracking-wide">
          Pune, India
        </div>

        <div className="w-px h-10 bg-gray-300 dark:bg-gray-600"></div>
        <a
          href="https://github.com/komalpawar05"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-xl
          bg-white dark:bg-white/5
          border border-gray-200 dark:border-white/10
          shadow-md hover:shadow-lg transition"
        >
          <FaGithub className="text-lg text-gray-900 dark:text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/komalpawar05/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-xl
          bg-white dark:bg-white/5
          border border-gray-200 dark:border-white/10
          shadow-md hover:shadow-lg transition"
        >
          <FaLinkedin className="text-lg text-[#0A66C2]" />
        </a>
      </div>
    </section>
  );
};

export default Hero;