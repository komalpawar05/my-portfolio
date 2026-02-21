import { motion } from "framer-motion";
import Profile_Image from "../assets/2.png";

const Hero = () => {
  return (
    <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden px-6"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
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
          <p className="text-indigo-600 font-medium mb-4 tracking-wide">
            FRONTEND DEVELOPER
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

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-8 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-500 hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-3 border border-gray-400 dark:border-gray-600 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Contact Me
            </a>
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
      </div>
    </section>
  );
};

export default Hero;
