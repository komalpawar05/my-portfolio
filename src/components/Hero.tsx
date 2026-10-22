import { motion } from "framer-motion";
import Profile_Image from "../assets/profile_photoo.png";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import Resume from "../assets/komal_resume05.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-x-hidden px-4 sm:px-6 py-12 md:py-0"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute inset-0
            bg-gradient-to-br
            from-indigo-600
            via-purple-600
            to-pink-500
            opacity-10
            dark:opacity-20
          "
        />

        {/* Animated background blobs */}
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -top-20
            -right-20
            w-72
            h-72
            rounded-full
            bg-purple-500/20
            blur-3xl
          "
        />

        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 50, -30, 0],
            scale: [1, 0.8, 1.15, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-0
            left-0
            w-80
            h-80
            rounded-full
            bg-indigo-500/20
            blur-3xl
          "
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* ================= LEFT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="
              text-indigo-600
              font-medium
              mb-4
              tracking-wide
              uppercase
              text-sm sm:text-base
            "
          >
            Frontend Developer | Web Designer | UI/UX Enthusiast
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="
              text-3xl sm:text-5xl md:text-6xl
              font-bold
              leading-tight
              text-gray-900 dark:text-white
            "
          >
            Hi, I'm{" "}
            <span
              className="
                bg-gradient-to-r
                from-indigo-600
                via-purple-600
                to-pink-500
                bg-clip-text
                text-transparent
              "
            >
              Komal Pawar
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="
              mt-6
              text-base sm:text-lg
              text-gray-600 dark:text-gray-300
              max-w-xl
              mx-auto md:mx-0
            "
          >
            I build clean, responsive and high-performance web applications
            using React.js and Tailwind CSS.
          </motion.p>

          {/* ================= BUTTONS ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="
              mt-8
              flex gap-4 flex-wrap
              justify-center md:justify-start
            "
          >
            {/* Projects Button */}
            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.07,
                boxShadow: "0px 10px 30px rgba(99,102,241,0.35)",
              }}
              whileTap={{ scale: 0.95 }}
              className="
                px-6 sm:px-8
                py-3
                bg-indigo-600
                text-white
                rounded-xl
                shadow-lg
                transition
              "
            >
              View Projects
            </motion.a>

            {/* Resume Button */}
            <motion.a
              href={Resume}
              download
              whileHover={{
                scale: 1.07,
                boxShadow: "0px 10px 30px rgba(99,102,241,0.25)",
              }}
              whileTap={{ scale: 0.95 }}
              className="
                group
                px-6 sm:px-8
                py-3
                rounded-xl
                bg-white/70
                dark:bg-white/10
                backdrop-blur-lg
                border border-indigo-500/40
                text-indigo-700
                dark:text-indigo-400
                font-medium
                flex items-center gap-2
                shadow-lg
                transition-all
              "
            >
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                <FaDownload />
              </motion.span>

              Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="
            flex
            justify-center
            items-center
            mt-10
            md:mt-0
          "
        >
          <div className="relative flex items-center justify-center">

            {/* ================= OUTER ROTATING RING ================= */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                w-72
                h-72
                sm:w-80
                sm:h-80
                md:w-[430px]
                md:h-[430px]
                rounded-full
                border-2
                border-dashed
                border-indigo-500/40
              "
            />

            {/* ================= SECOND ROTATING RING ================= */}
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                w-80
                h-80
                sm:w-96
                sm:h-96
                md:w-[470px]
                md:h-[470px]
                rounded-full
                border
                border-purple-500/20
              "
            />

            {/* ================= GLOW ================= */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                w-72
                h-72
                sm:w-80
                sm:h-80
                md:w-[410px]
                md:h-[410px]
                rounded-full
                bg-gradient-to-r
                from-indigo-500
                via-purple-500
                to-pink-500
                blur-3xl
              "
            />

            {/* ================= FLOATING IMAGE ================= */}
            <motion.div
              animate={{
                y: [0, -15, 0, 15, 0],
                rotate: [0, 1.5, 0, -1.5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              {/* Animated Gradient Border */}
              <motion.div
                animate={{
                  background: [
                    "linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899)",
                    "linear-gradient(135deg, #ec4899, #6366f1, #8b5cf6)",
                    "linear-gradient(225deg, #8b5cf6, #ec4899, #6366f1)",
                    "linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899)",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  p-1.5
                  shadow-[0_0_50px_rgba(99,102,241,0.5)]
                "
                style={{
                  borderRadius:
                    "55% 45% 60% 40% / 45% 55% 45% 55%",
                }}
              >
                {/* ================= ANIMATED IMAGE SHAPE ================= */}
                <motion.div
                  animate={{
                    borderRadius: [
                      "55% 45% 60% 40% / 45% 55% 45% 55%",
                      "40% 60% 45% 55% / 55% 40% 60% 45%",
                      "60% 40% 55% 45% / 40% 60% 45% 55%",
                      "45% 55% 40% 60% / 60% 45% 55% 40%",
                      "55% 45% 60% 40% / 45% 55% 45% 55%",
                    ],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    w-64
                    h-64
                    sm:w-72
                    sm:h-72
                    md:w-96
                    md:h-96
                    overflow-hidden
                    bg-indigo-900
                    border-4
                    border-white/20
                    dark:border-white/10
                  "
                >
                  <img
                    src={Profile_Image}
                    alt="Komal Pawar"
                    className="
                      w-full
                      h-full
                      object-cover
                    "
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* ================= FLOATING DOTS ================= */}

            <motion.div
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                top-5
                right-5
                md:right-0
                w-5
                h-5
                rounded-full
                bg-purple-500
                shadow-lg
                shadow-purple-500/50
              "
            />

            <motion.div
              animate={{
                y: [0, 20, 0],
                x: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-10
                left-0
                md:left-5
                w-4
                h-4
                rounded-full
                bg-indigo-500
                shadow-lg
                shadow-indigo-500/50
              "
            />

            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-20
                right-0
                w-3
                h-3
                rounded-full
                bg-pink-500
              "
            />
          </div>
        </motion.div>
      </div>

      {/* ================= SOCIAL BAR ================= */}
      <div
        className="
          hidden md:flex
          fixed
          right-6
          top-1/2
          -translate-y-1/2
          flex-col
          items-center
          gap-6
          z-50
        "
      >
        {/* Location */}
        <div
          className="
            rotate-90
            text-sm
            text-gray-600
            dark:text-gray-400
            tracking-wide
          "
        >
          Pune, India
        </div>

        {/* Divider */}
        <div className="w-px h-10 bg-gray-300 dark:bg-gray-600"></div>

        {/* GitHub */}
        <motion.a
          href="https://github.com/komalpawar05"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, y: -3 }}
          className="
            w-10
            h-10
            flex
            items-center
            justify-center
            rounded-xl
            bg-white
            dark:bg-white/5
            border
            border-gray-200
            dark:border-white/10
            shadow-md
            transition
          "
        >
          <FaGithub className="text-lg text-gray-900 dark:text-white" />
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/komalpawar05/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, y: -3 }}
          className="
            w-10
            h-10
            flex
            items-center
            justify-center
            rounded-xl
            bg-white
            dark:bg-white/5
            border
            border-gray-200
            dark:border-white/10
            shadow-md
            transition
          "
        >
          <FaLinkedin className="text-lg text-[#0A66C2]" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;