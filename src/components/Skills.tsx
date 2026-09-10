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
  SiVercel,
} from "react-icons/si";
import { FaSearch } from "react-icons/fa";

import SectionHeading from "./common/SectionHeading";

const sections = [
  {
    number: "01",
    title: "Frontend Development",
    desc: "Building responsive and scalable web applications.",
    skills: [
      { icon: SiReact, name: "React" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiVite, name: "Vite" },
      { icon: SiGit, name: "Git" },
      { icon: SiGithub, name: "GitHub" },
      { icon: SiVercel, name: "Vercel" },
    ],
  },
  {
    number: "02",
    title: "UI / UX Design",
    desc: "Creating clean, intuitive and user-focused interfaces.",
    skills: [
      { icon: SiFigma, name: "Figma" },
      { icon: SiTailwindcss, name: "Design Systems" },
      { icon: SiCanva, name: "Canva" },
    ],
  },
  {
    number: "03",
    title: "Digital Marketing",
    desc: "Improving visibility, traffic and digital growth.",
    skills: [
      { icon: SiGoogleads, name: "Google Ads" },
      { icon: SiMeta, name: "Meta Ads" },
      { icon: SiLinkedin, name: "LinkedIn Ads" },
      { icon: FaSearch, name: "SEO" },
      { icon: SiGoogleanalytics, name: "Analytics" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        py-16 sm:py-20 lg:py-24
        px-4 sm:px-6 lg:px-8
        transition-colors duration-500
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-20
          left-1/2
          -translate-x-1/2
          w-[450px]
          h-[250px]
          rounded-full
          bg-indigo-300/20
          dark:bg-indigo-600/10
          blur-[120px]
          pointer-events-none
        "
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <div className="mb-14 md:mb-20">
          <SectionHeading
            centered
            title="WHAT"
            highlight="I DO?"
            description="Frontend development, UI design, and digital experiences."
          />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {sections.map((section, index) => (
            <motion.article
              key={section.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                p-6 sm:p-7
                bg-white/70
                dark:bg-white/[0.03]
                backdrop-blur-xl
                border
                border-gray-200
                dark:border-white/10
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-500
              "
            >
              {/* Top Gradient Line */}
              <div
                className="
                  absolute
                  top-0
                  left-8
                  right-8
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-indigo-500
                  to-cyan-500
                  opacity-60
                "
              />

              {/* Number */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  mb-7
                "
              >
                <span
                  className="
                    text-xs
                    font-semibold
                    tracking-[0.2em]
                    text-indigo-500
                    dark:text-cyan-400
                  "
                >
                  {section.number}
                </span>

                <span
                  className="
                    w-8
                    h-px
                    bg-gray-200
                    dark:bg-white/10
                  "
                />
              </div>

              {/* Title */}
              <h3
                className="
                  text-xl
                  sm:text-2xl
                  font-semibold
                  text-gray-900
                  dark:text-white
                "
              >
                {section.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-2
                  text-sm
                  leading-relaxed
                  text-gray-600
                  dark:text-gray-400
                "
              >
                {section.desc}
              </p>

              {/* Skills */}
              <div className="mt-7 flex flex-wrap gap-2.5">
                {section.skills.map(({ icon: Icon, name }) => (
                  <div
                    key={name}
                    className="
                      group/skill
                      flex
                      items-center
                      gap-2
                      px-3
                      py-2
                      rounded-xl
                      border
                      border-gray-200
                      dark:border-white/10
                      bg-gray-50
                      dark:bg-white/5
                      text-gray-600
                      dark:text-gray-400
                      hover:text-indigo-600
                      dark:hover:text-cyan-400
                      hover:border-indigo-200
                      dark:hover:border-cyan-400/30
                      hover:bg-indigo-50
                      dark:hover:bg-cyan-400/5
                      transition-all
                      duration-300
                    "
                  >
                    <Icon
                      className="
                        text-base
                        group-hover/skill:scale-110
                        transition-transform
                        duration-300
                      "
                    />

                    <span className="text-xs sm:text-sm font-medium">
                      {name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Accent */}
              <div
                className="
                  absolute
                  -bottom-16
                  -right-16
                  w-32
                  h-32
                  rounded-full
                  bg-indigo-500/5
                  dark:bg-cyan-500/5
                  blur-2xl
                  group-hover:scale-150
                  transition-transform
                  duration-700
                "
              />
            </motion.article>
          ))}

        </div>

        {/* Bottom Tech Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="
            mt-5
            rounded-2xl
            border
            border-gray-200
            dark:border-white/10
            bg-white/50
            dark:bg-white/[0.02]
            backdrop-blur-xl
            px-5
            py-4
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-6
            gap-y-3
            text-xs
            sm:text-sm
            text-gray-500
            dark:text-gray-400
          "
        >
          <span className="font-medium text-gray-700 dark:text-gray-300">
            Core Focus
          </span>

          <span>Responsive UI</span>
          <span>•</span>
          <span>Reusable Components</span>
          <span>•</span>
          <span>API Integration</span>
          <span>•</span>
          <span>Performance</span>
        </motion.div>
      </div>
    </section>
  );
}