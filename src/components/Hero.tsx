import { motion } from "framer-motion";
import Profile_Image from "../assets/2.png";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <section
  id="home"
  className="relative min-h-screen flex items-center 
    overflow-hidden px-4 sm:px-6 py-10 sm:py-0 
    transition-colors duration-500"
    >
  
  <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Diagonal Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-full h-full 
        bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 
        clip-diagonal opacity-15 dark:opacity-25 animate-gradient"></div>
      </div>

        {/* LEFT SIDE TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        >
        <p className="text-indigo-600 font-medium mb-4 tracking-wide uppercase">
           FRONTEND DEVELOPER | web designer | UI/UX enthusiast
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
          Hi, I'm{" "}
        <span className="bg-gradient-to-r from-indigo-700 to-purple-900 bg-clip-text text-transparent">
            Komal Pawar
        </span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-lg">
          I build clean, responsive and high-performance web applications
          using React.js and Tailwind CSS.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap items-center">

        {/* View Projects */}
        <a
          href="#projects"
          className="px-8 py-3 
          bg-indigo-600 text-white 
          rounded-xl shadow-lg 
          hover:bg-indigo-500 
          hover:scale-105 
          transition duration-300"
        >
          View Projects
        </a>

        {/* Contact Me */}
        {/* <a
          href="#contact"
          className="px-8 py-3 
          border border-gray-400 dark:border-gray-600 
          rounded-xl 
          hover:bg-gray-100 dark:hover:bg-gray-800 
          transition duration-300"
        >
          Contact Me
        </a> */}

        {/* 🔥 Resume Button (Premium Glass Effect) */}
        <motion.a
          href="/Komal_Pawar_Resume.pdf"   // Put resume inside public folder
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          target="_blank"
          className="group px-8 py-3 
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
          className="flex justify-center relative"
        >
          {/* Animated Glow Blob */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-80 h-80 "
          />

          {/* 🔵 Indigo Shape + Shadow */}
          <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative flex justify-center"
        >
          {/* 🔵 Blob shape + SHADOW */}
         <div
          className="
            blob-shape
            w-100 md:w-96 h-92 md:h-96
            bg-indigo-900
            relative
            z-10
            pt-2
            filter
            drop-shadow-[0_35px_45px_rgba(0,0,0,0.6)]
            drop-shadow-[0_0_70px_rgba(99,102,241,0.6)]
          "
        >
          <div className="blob-shape w-full h-full overflow-hidden">
            <img
              src={Profile_Image}
              alt="Komal Pawar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
      {/* Right Vertical Social Bar */}
      <div className="
        hidden md:flex
        fixed right-6 top-1/2 -translate-y-1/2
        flex-col items-center gap-6
        z-50
      ">

        {/* Location */}
        <div className="
          rotate-90
          text-sm
          text-gray-600 dark:text-gray-400
          tracking-wide
        ">
          Pune, India
        </div>

        {/* Line */}
        <div className="w-px h-10 bg-gray-300 dark:bg-gray-600"></div>

        {/* GitHub */}
        <a
          href="https://github.com/komalpawar05"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            w-10 h-10
            flex items-center justify-center
            rounded-xl
            bg-white dark:bg-white/5
            border border-gray-200 dark:border-white/10
            shadow-md
            hover:shadow-lg
            transition-all duration-300
          "
        >
          <FaGithub className="
            text-lg
            text-gray-900 dark:text-white
            group-hover:scale-110
            transition duration-300
          " />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/komalpawar05/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            w-10 h-10
            flex items-center justify-center
            rounded-xl
            bg-white dark:bg-white/5
            border border-gray-200 dark:border-white/10
            shadow-md
            hover:shadow-lg
            transition-all duration-300
          "
        >
          <FaLinkedin className="
            text-lg
            text-[#0A66C2]
            group-hover:scale-110
            transition duration-300
          " />
        </a>

      </div>
            </div>
    </section>
  );
};

export default Hero;
