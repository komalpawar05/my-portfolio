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
    // live: "#",
    // github: "#",
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
    // live: "#",
    // github: "#",
  },
  {
    title: "Digital Marketing Campaign",
    description:
      "Managed performance campaigns using conversion-focused landing pages and paid ads.",
    tech: [
      { icon: SiGoogleads },
      { icon: SiMeta },
    ],
    // live: "#",
    // github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden
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

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl
          font-semibold
          mb-12 text-center
          bg-gradient-to-r from-indigo-700 to-cyan-800
          text-transparent bg-clip-text"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="relative p-[1px] rounded-2xl
              bg-gradient-to-r from-indigo-500/40 to-cyan-500/40"
            >
              <div className="flex flex-col
                p-6 rounded-2xl
                bg-white dark:bg-neutral-900
                h-full
                shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)]
                dark:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)]
                transition duration-300">

                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base
                  text-gray-600 dark:text-gray-400
                  mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-5">
                  {project.tech.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={i}
                        className="p-2 rounded-lg
                        bg-gray-100 dark:bg-white/10
                        text-gray-700 dark:text-gray-300
                        text-lg hover:scale-110
                        transition duration-300"
                      >
                        <Icon />
                      </div>
                    );
                  })}
                </div>

                {/* <div className="flex gap-6 text-sm font-medium">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:opacity-80"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:opacity-80"
                  >
                    Code
                  </a>
                </div> */}
              
              </div>
              
            </motion.div>
            
          ))}

        </div>
      </div>
      {/* Responsive Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none ">
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
}