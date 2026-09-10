import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiHostinger,
  SiGoogleanalytics,
  SiGoogleads,
  SiBootstrap,
  SiGithub,
  SiVite,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

import SectionHeading from "./common/SectionHeading";

const experiences = [
  {
    title: "Frontend Developer & Digital Marketing Specialist",
    company: "Tritan EV Dock Pvt Ltd",
    period: "June 2022 – Present",
    description:
      "Building responsive web applications, dashboards, and digital experiences while supporting performance and marketing initiatives.",
    points: [
      "Developed responsive web applications using React.js and Tailwind CSS.",
      "Built reusable components and scalable UI layouts.",
      "Integrated REST APIs and supported frontend-backend communication.",
      "Developed operational dashboards and charger monitoring interfaces.",
      "Improved frontend performance and overall UI efficiency.",
      "Managed CMS, Google Analytics, Google Ads, and Google Business Profile.",
    ],
    technologies: [
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiHostinger, name: "Hostinger" },
      { icon: SiGoogleanalytics, name: "Analytics" },
      { icon: SiGoogleads, name: "Google Ads" },
    ],
  },

  {
    title: "Frontend Developer",
    company: "Eatab Dashboard",
    period: "Personal Project",
    description:
      "A responsive admin dashboard focused on reusable components, clean UI architecture, and modern development workflows.",
    points: [
      "Designed and developed a structured admin dashboard using React.",
      "Created reusable and maintainable UI components.",
      "Implemented responsive layouts using Tailwind CSS and Bootstrap.",
      "Configured Vite for a modern development workflow.",
      "Implemented GitHub-based version control and CI/CD workflow.",
    ],
    technologies: [
      { icon: SiReact, name: "React" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiBootstrap, name: "Bootstrap" },
      { icon: SiVite, name: "Vite" },
      { icon: SiGithub, name: "GitHub" },
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        py-16 sm:py-20 lg:py-24
        px-4 sm:px-6 lg:px-8
        text-gray-900 dark:text-gray-100
        transition-colors duration-500
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          -top-32 -right-32
          w-72 h-72
          rounded-full
          bg-indigo-300/20
          blur-[100px]
          dark:bg-indigo-600/10
          pointer-events-none
        "
      />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Heading */}
        <div className="mb-14 md:mb-20">
          <SectionHeading
            centered
            title="WHERE"
            highlight="I'VE WORKED?"
            description="My professional experience and frontend projects."
          />
        </div>

        {/* Experience Cards */}
        <div className="relative">

          {/* Timeline Line */}
          <div
            className="
              absolute
              left-[15px]
              sm:left-[19px]
              top-0
              bottom-0
              w-px
              bg-gradient-to-b
              from-indigo-500
              via-cyan-400
              to-transparent
              hidden sm:block
            "
          />

          <div className="space-y-10 sm:space-y-14">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${index}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                className="relative sm:pl-14"
              >
                {/* Timeline Dot */}
                <div
                  className="
                    hidden sm:flex
                    absolute
                    left-0
                    top-7
                    w-9 h-9
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    dark:bg-neutral-950
                    border
                    border-indigo-500/40
                    dark:border-cyan-400/40
                    shadow-[0_0_20px_rgba(99,102,241,0.15)]
                  "
                >
                  <span
                    className="
                      w-2.5 h-2.5
                      rounded-full
                      bg-gradient-to-r
                      from-indigo-600
                      to-cyan-500
                    "
                  />
                </div>

                {/* Card */}
                <div
                  className="
                    group
                    relative
                    rounded-2xl
                    border
                    border-gray-200
                    dark:border-white/10
                    bg-white/70
                    dark:bg-white/[0.03]
                    backdrop-blur-xl
                    p-5 sm:p-7 md:p-8
                    shadow-sm
                    hover:shadow-xl
                    hover:-translate-y-1
                    transition-all
                    duration-500
                  "
                >
                  {/* Top Gradient */}
                  <div
                    className="
                      absolute
                      top-0 left-8 right-8
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-indigo-500
                      to-transparent
                      opacity-60
                    "
                  />

                  {/* Header */}
                  <div
                    className="
                      flex flex-col
                      md:flex-row
                      md:items-start
                      md:justify-between
                      gap-3
                      mb-5
                    "
                  >
                    <div>
                      <h3
                        className="
                          text-lg sm:text-xl md:text-2xl
                          font-semibold
                          text-gray-900
                          dark:text-white
                          group-hover:text-indigo-600
                          dark:group-hover:text-cyan-400
                          transition-colors
                        "
                      >
                        {experience.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          text-sm sm:text-base
                          font-medium
                          bg-gradient-to-r
                          from-indigo-600
                          to-cyan-600
                          bg-clip-text
                          text-transparent
                        "
                      >
                        {experience.company}
                      </p>
                    </div>

                    {/* Date */}
                    <span
                      className="
                        w-fit
                        rounded-full
                        px-3 py-1.5
                        text-xs sm:text-sm
                        font-medium
                        text-indigo-600
                        dark:text-cyan-400
                        bg-indigo-50
                        dark:bg-cyan-400/10
                        border
                        border-indigo-100
                        dark:border-cyan-400/20
                      "
                    >
                      {experience.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="
                      mb-5
                      text-sm
                      sm:text-base
                      leading-relaxed
                      text-gray-600
                      dark:text-gray-400
                    "
                  >
                    {experience.description}
                  </p>

                  {/* Responsibilities */}
                  <ul className="space-y-2.5">
                    {experience.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="
                          flex
                          items-start
                          gap-3
                          text-sm
                          sm:text-base
                          leading-relaxed
                          text-gray-700
                          dark:text-gray-300
                        "
                      >
                        <span
                          className="
                            mt-2
                            h-1.5
                            w-1.5
                            shrink-0
                            rounded-full
                            bg-gradient-to-r
                            from-indigo-500
                            to-cyan-500
                          "
                        />

                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="mt-7 pt-5 border-t border-gray-200 dark:border-white/10">
                    <p
                      className="
                        mb-3
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wider
                        text-gray-400
                      "
                    >
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2.5">
                      {experience.technologies.map(
                        ({ icon: Icon, name }) => (
                          <div
                            key={name}
                            title={name}
                            className="
                              flex
                              items-center
                              gap-2
                              rounded-lg
                              border
                              border-gray-200
                              dark:border-white/10
                              bg-gray-50
                              dark:bg-white/5
                              px-2.5
                              py-2
                              text-gray-600
                              dark:text-gray-400
                              hover:text-indigo-600
                              dark:hover:text-cyan-400
                              hover:border-indigo-200
                              dark:hover:border-cyan-400/30
                              transition-all
                              duration-300
                            "
                          >
                            <Icon className="text-base sm:text-lg" />

                            <span className="hidden sm:inline text-xs font-medium">
                              {name}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}