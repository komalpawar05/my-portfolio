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

const sections = [
  {
    title: "Frontend Development",
    desc: "Building responsive and high-performance web applications",
    skills: [
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { icon: SiTailwindcss, name: "Tailwind", color: "#38BDF8" },
      { icon: SiVite, name: "Vite", color: "#646CFF" },
      { icon: SiGit, name: "Git", color: "#F05032" },
      { icon: SiGithub, name: "GitHub", color: "#181717" },
    ],
  },
  {
    title: "UI / UX Design",
    desc: "Designing clean and user-friendly interfaces",
    skills: [
      { icon: SiFigma, name: "Figma", color: "#F24E1E" },
      { icon: SiTailwindcss, name: "UI Systems", color: "#38BDF8" },
    ],
  },
  {
    title: "Digital Marketing",
    desc: "Running performance-driven ad campaigns",
    skills: [
      { icon: SiGoogleads, name: "Google Ads", color: "#4285F4" },
      { icon: SiMeta, name: "Meta Ads", color: "#1877F2" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-24 px-6 transition-colors duration-500">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Section Title */}
        <h1 className="text-4xl md:text-5xl
              text-3xl font-semibold
              mb-6 p-6
              bg-gradient-to-r from-indigo-700 to-cyan-800
              text-transparent bg-clip-text font-header  text-center
">
          Skills & Expertise
        </h1>

        {sections.map((section, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                {section.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400">
                {section.desc}
              </p>
            </motion.div>

            {/* Right Skills Pills */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              {section.skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={i}
                    className="
                      flex items-center gap-2 px-4 py-2 rounded-full
                      bg-gray-100 dark:bg-white/10
                      border border-gray-200 dark:border-white/10
                      hover:scale-105 transition duration-300
                    "
                  >
                    <Icon
                      className="text-lg"
                      style={{ color: skill.color }}
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        ))}

      </div>
    </section>
  );
}