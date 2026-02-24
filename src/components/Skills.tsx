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
  SiLinkedin,
  SiGoogleanalytics,
  SiCanva,
} from "react-icons/si";

import { FaSearch } from "react-icons/fa";
const sections = [
  {
    title: "Frontend Development",
    desc: "Crafting scalable, modern and performance-optimized applications.",
    skills: [
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "#38BDF8" },
      { icon: SiVite, name: "Vite", color: "#646CFF" },
      { icon: SiGit, name: "Git", color: "#F05032" },
      { icon: SiGithub, name: "GitHub", color: "#181717" },
    ],
  },
  {
    title: "UI / UX Design",
    desc: "Designing elegant and intuitive user interfaces.",
    skills: [
      { icon: SiFigma, name: "Figma", color: "#F24E1E" },
      { icon: SiTailwindcss, name: "Design Systems", color: "#38BDF8" },
      { icon: SiCanva, name: "Canva", color: "#00C4CC" },
    ],
  },
  {
  title: "Digital Marketing",
  desc: "Driving traffic, leads and business growth through paid ads and SEO strategies.",
  skills: [
    { icon: SiGoogleads, name: "Google Ads", color: "#4285F4" },
    { icon: SiMeta, name: "Meta Ads", color: "#1877F2" },
    { icon: SiLinkedin, name: "LinkedIn Ads", color: "#0A66C2" },
    { icon: FaSearch, name: "SEO", color: "#16A34A" },
    { icon: SiGoogleanalytics, name: "Google Analytics", color: "#F9AB00" },
    { icon: SiGoogleads, name: "Google Business Profile", color: "#34A853" },
  ],
}
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-10 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            text-4xl md:text-5xl py-12
              text-3xl font-semibold
              mb-6 text-center
              bg-gradient-to-r from-indigo-700 to-cyan-800
              text-transparent bg-clip-text font-header
          "
        >
          Skills & Expertise
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="
                p-8 rounded-3xl
                bg-white/70 dark:bg-white/5
                backdrop-blur-xl
                border border-gray-200 dark:border-white/10
                shadow-lg dark:shadow-none
                hover:shadow-2xl
                hover:-translate-y-3
                transition-all duration-500
              "
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                {section.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-8">
                {section.desc}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {section.skills.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={i}
                      className="
                        flex items-center gap-3
                        px-4 py-3 rounded-xl
                        bg-gray-100 dark:bg-white/5
                        hover:bg-indigo-50 dark:hover:bg-indigo-500/10
                        transition duration-300
                      "
                    >
                      <Icon
                        className="text-xl"
                        style={{ color: skill.color }}
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}