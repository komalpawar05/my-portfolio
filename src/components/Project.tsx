import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiVite,
  SiNetlify,
  SiGoogleads,
  SiMeta,
} from "react-icons/si";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Website Design and Development for EV Charging Platform",
    description:
      "Developed and deployed EV charging platform website with API integration and optimized frontend performance.",
    tech: [
      { icon: SiReact },
      { icon: SiJavascript },
      { icon: SiTailwindcss },
      { icon: SiVite },
      { icon: SiNetlify },
    ],
    live: "#",
    github: "#",
  },
  {
    title: "Admin Dashboard System",
    description:
      "Built structured analytics dashboard with clean UI and performance monitoring features.",
    tech: [
      { icon: SiReact },
      { icon: SiTypescript },
      { icon: SiTailwindcss },
    ],
    live: "#",
    github: "#",
  },
  {
    title: "Digital Marketing Campaign",
    description:
      "Managed performance campaigns using conversion-focused landing pages and paid ads.",
    tech: [
      { icon: SiGoogleads },
      { icon: SiMeta },
    ],
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section className="py-16 px-6">
  <div className="max-w-5xl mx-auto">

    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl md:text-5xl py-12
              text-3xl font-semibold
              mb-6 text-center
              bg-gradient-to-r from-indigo-700 to-cyan-800
              text-transparent bg-clip-text font-header"
    >
      Featured Projects
    </motion.h2>

    <div className="grid sm:grid-cols-2 gap-8">

  {projects.map((project, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="
        relative
        p-[1px]
        rounded-2xl
        bg-gradient-to-r from-indigo-500/40 to-cyan-500/40
      "
    >
      {/* Inner Card */}
      <div className="
        p-6
        rounded-2xl
        bg-white dark:bg-neutral-900
        backdrop-blur-xl
        h-full
      ">

        <h3 className="text-xl font-semibold mb-3">
          {project.title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-5">
          {project.tech.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="
                  p-2
                  rounded-lg
                  bg-gray-100 dark:bg-white/10
                  text-gray-700 dark:text-gray-300
                  text-lg
                  hover:scale-110
                  transition duration-300
                "
              >
                <Icon />
              </div>
            );
          })}
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm font-medium">
          <a
            href={project.live}
            className="text-indigo-600 hover:opacity-80"
          >
            Live
          </a>
          <a
            href={project.github}
            className="text-gray-700 dark:text-gray-300 hover:opacity-80"
          >
            Code
          </a>
        </div>

      </div>
    </motion.div>
  ))}

</div>
  </div>
</section>
  );
}