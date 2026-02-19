import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiVite,
  SiGithub,
  SiGit,
  SiFigma,
  SiGoogleads,
  SiMeta,
} from "react-icons/si";
import { FaCodeBranch } from "react-icons/fa";

const sections = [
  {
    title: "Web Developer",
    bgText: "DEVELOPER",
    icons: [
      SiReact,
      SiTypescript,
      SiJavascript,
      SiTailwindcss,
      SiVite,
      SiGit,
      SiGithub,
      FaCodeBranch,
    ],
  },
  {
    title: "Web Designer",
    bgText: "DESIGN",
    icons: [SiFigma, SiTailwindcss],
  },
  {
    title: "Digital Marketing",
    bgText: "MARKETING",
    icons: [SiGoogleads, SiMeta],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 px-6
       text-gray-900
       dark:text-white
      transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto space-y-32">

        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Big Text */}
            <h2
              className="absolute top-0 left-0 text-7xl md:text-9xl font-bold
              opacity-5 select-none pointer-events-none"
            >
              {section.bgText}
            </h2>

            <div className="relative z-10 pt-20">

              {/* Role Title */}
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                {section.title}
              </h3>

              {/* Gradient Line */}
              <div className="w-24 h-1 mb-10
                bg-gradient-to-r from-indigo-500 to-cyan-400
                rounded-full">
              </div>

              {/* Logo Row */}
              <div className="flex flex-wrap gap-10">
                {section.icons.map((Icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Icon
                      className="text-5xl md:text-6xl
                      text-gray-400
                      dark:text-gray-500
                      hover:text-indigo-600
                      dark:hover:text-indigo-400
                      transition duration-300 cursor-pointer"
                    />
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
