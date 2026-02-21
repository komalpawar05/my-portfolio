
const projects = [
  {
    title: "EV Dock Web Platform",
    description: "Modern EV charging management platform with API integration and responsive dashboard UI.",
    image: "/projects/evdock.jpg",
    tech: ["React.js", "Tailwind", "API"],
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description: "Personal developer portfolio with modern animations and performance optimization.",
    image: "/projects/portfolio.jpg",
    tech: ["React", "Framer Motion", "Vite"],
    live: "#",
    github: "#",
  },
  {
    title: "Landing Page System",
    description: "High-converting landing page built with clean UI and responsive structure.",
    image: "/projects/landing.jpg",
    tech: ["React", "Tailwind", "SEO"],
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section  id="projects" className=" py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 mb-16 text-center  bg-gradient-to-r from-indigo-700 to-cyan-800
              text-transparent bg-clip-text uppercase font-header">
          Featured Projects
        </h1>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:scale-105"
            >
              
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-indigo-500/20 text-indigo-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    className="text-sm px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="text-sm px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
