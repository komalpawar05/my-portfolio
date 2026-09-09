import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiVite,
  SiGoogleads,
  SiMeta,
  SiYoutube,
} from "react-icons/si";
import { ArrowUpRight } from "lucide-react";
import YouTubeImg from "../assets/project/youtube.png";
import Project6 from "../assets/project/upcoming_project.webp";

type ProjectPreview = "iframe" | "image";

type Project = {
  title: string;
  category: string;
  description: string;
  live: string;
  image: string;
  previewType: ProjectPreview;
  tech: {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
};

const projects: Project[] = [
  {
    title: "EV Dock",
    category: "EV Charging Platform",
    description:
      "Modern EV charging platform with responsive UI, API integration and optimized frontend performance.",
    live: "https://tritanev.com/",
    image: "/projects/ev-dock.png",
    previewType: "iframe",
    tech: [
      { name: "React", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
    ],
  },

  {
    title: "MATHLETE",
    category: "Website & Admin CMS",
    description:
      "Modern online learning platform with responsive UI, Admin CMS, API integration and reusable React components.",
    live: "https://mathlete.co.in/home",
    image: "/projects/admin-dashboard.png",
    previewType: "iframe",
    tech: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },

  {
    title: "EV Dock Marketing",
    category: "Performance Marketing",
    description:
      "Pan-India Meta Ads campaigns focused on lead generation, audience targeting, campaign optimization and conversion growth.",
    live: "https://www.youtube.com/@tritanevdock",
    image: YouTubeImg,
    previewType: "image",
    tech: [
      { name: "Google Ads", icon: SiGoogleads },
      { name: "Meta Ads", icon: SiMeta },
      { name: "YouTube Ads", icon: SiYoutube },
    ],
  },

  {
    title: "Mankoli",
    category: "Business Website",
    description:
      "Modern responsive business website with clean UI and mobile-first development.",
    live: "https://www.mankoli.com/",
    image: "/projects/business.png",
    previewType: "iframe",
    tech: [
      { name: "React", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },

  {
    title: "Tritan",
    category: "Business Website",
    description:
      "Modern responsive business website with clean UI and mobile-first development.",
    live: "https://www.tritan.co.in/",
    image: "/projects/business.png",
    previewType: "iframe",
    tech: [
      { name: "React", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
  title: "Upcoming Project",
  category: "Coming Soon",
  description:
    "A new project in development, focused on modern UI, smooth user experience and scalable frontend architecture.",
  live: "#",
  image: Project6,
  previewType: "image",
  tech: [
    { name: "React", icon: SiReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind", icon: SiTailwindcss },
  ],
},
];

function DesktopPreview({ project }: { project: Project }) {
  const [error, setError] = useState(false);

  const showImage = project.previewType === "image" || error;

  return (
    <div className="relative h-full w-full overflow-hidden bg-neutral-200 dark:bg-neutral-800">
      {/* Browser Header */}
      <div
        className="
          absolute
          left-0
          right-0
          top-0
          z-30
          flex
          h-8
          items-center
          gap-2
          border-b
          border-black/10
          bg-white
          px-3
          dark:border-white/10
          dark:bg-neutral-900
        "
      >
        <div className="flex gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
        </div>

        <div
          className="
            mx-auto
            h-4
            w-[55%]
            rounded-full
            bg-neutral-100
            dark:bg-white/10
          "
        />
      </div>

      {/* Preview */}
      {showImage ? (
        <div className="absolute inset-x-0 bottom-0 top-8 overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="
              h-full
              w-full
              object-cover
              object-top
              transition-transform
              duration-500
              group-hover:scale-[1.02]
            "
          />
        </div>
      ) : (
        <div className="absolute bottom-0 left-0 right-0 top-8 overflow-hidden">
          <iframe
            src={project.live}
            title={`${project.title} desktop preview`}
            onError={() => setError(true)}
            loading="lazy"
            className="
              absolute
              left-0
              top-0
              h-[900px]
              w-[1440px]
              origin-top-left
              scale-[0.28]
              border-0
              bg-white
              sm:scale-[0.32]
            "
          />
        </div>
      )}

      {/* Bottom Gradient */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-20
          h-20
          bg-gradient-to-t
          from-black/25
          to-transparent
        "
      />

      {/* LIVE Badge */}
      <div
        className="
          absolute
          right-3
          top-11
          z-40
          flex
          items-center
          gap-1.5
          rounded-full
          border
          border-white/20
          bg-black/60
          px-2.5
          py-1
          text-[9px]
          font-semibold
          tracking-wide
          text-white
          backdrop-blur-md
        "
      >
        <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
        LIVE
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-indigo-50
        via-white
        to-white
        px-4
        py-16
        sm:px-6
        sm:py-20
        lg:px-8
        lg:py-24
        dark:from-neutral-950
        dark:via-neutral-950
        dark:to-black
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          -left-32
          -top-32
          h-72
          w-72
          rounded-full
          bg-indigo-300/30
          blur-[120px]
          dark:hidden
        "
      />

      <div
        className="
          absolute
          -bottom-32
          -right-32
          hidden
          h-80
          w-80
          rounded-full
          bg-indigo-600/20
          blur-[130px]
          dark:block
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >

          <div
            className="
              mt-2
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-end
              justify-center

            "
          >
            <h1
              className="
              text-3xl sm:text-4xl md:text-5xl
              font-semibold
              mb-12 text-center
              bg-gradient-to-r from-indigo-700 to-cyan-800
              text-transparent bg-clip-text
            "
            >
              Featured Projects
            </h1>

          </div>
        </motion.div>

        {/* Project Grid */}
        <div
          className="
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {projects.map((project, index) => (
            <motion.article
              key={`${project.title}-${index}`}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -5,
              }}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-black/[0.06]
                bg-white
                shadow-[0_15px_40px_-20px_rgba(0,0,0,0.25)]
                transition-all
                duration-300
                hover:shadow-[0_25px_55px_-20px_rgba(0,0,0,0.3)]
                dark:border-white/[0.08]
                dark:bg-neutral-900
                dark:shadow-[0_15px_40px_-20px_rgba(0,0,0,0.7)]
              "
            >
              {/* Preview */}
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  block
                  h-[190px]
                  overflow-hidden
                "
              >
                <DesktopPreview project={project} />
              </a>

              {/* Content */}
              <div className="p-5">
                {/* Number + Category */}
                <div className="flex items-center justify-between gap-3">
                  <span
                    className="
                      shrink-0
                      text-[10px]
                      font-semibold
                      tracking-[0.15em]
                      text-neutral-400
                    "
                  >
                    {String(index + 1).padStart(2, "0")} / 05
                  </span>

                  <span
                    className="
                      truncate
                      text-right
                      text-[10px]
                      font-medium
                      text-neutral-400
                      dark:text-neutral-500
                    "
                  >
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-3
                    text-lg
                    font-semibold
                    tracking-[-0.025em]
                    text-neutral-900
                    dark:text-white
                  "
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-2
                    line-clamp-2
                    min-h-[36px]
                    text-xs
                    leading-relaxed
                    text-neutral-500
                    dark:text-neutral-400
                  "
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((item) => {
                    const Icon = item.icon;

                    return (
                      <span
                        key={item.name}
                        title={item.name}
                        className="
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-lg
                          border
                          border-black/5
                          bg-neutral-50
                          text-neutral-600
                          transition
                          duration-300
                          hover:scale-110
                          hover:border-indigo-300
                          hover:text-indigo-600
                          dark:border-white/10
                          dark:bg-white/5
                          dark:text-neutral-300
                          dark:hover:border-indigo-400
                          dark:hover:text-indigo-400
                        "
                      >
                        <Icon className="text-sm" />
                      </span>
                    );
                  })}
                </div>

                {/* CTA */}
                <div
                  className="
                    mt-5
                    border-t
                    border-black/5
                    pt-4
                    dark:border-white/10
                  "
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-xs
                      font-semibold
                      text-neutral-900
                      transition-colors
                      hover:text-indigo-600
                      dark:text-white
                      dark:hover:text-indigo-400
                    "
                  >
                    {project.previewType === "image"
                      ? "View Campaign"
                      : "View Live Website"}

                    <span
                      className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        bg-neutral-900
                        text-white
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        dark:bg-white
                        dark:text-neutral-900
                      "
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Bottom Wave */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          w-full
          overflow-hidden
          leading-none
        "
      >
        <svg
          className="
            relative
            block
            h-[45px]
            w-full
            sm:h-[65px]
            md:h-[80px]
          "
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