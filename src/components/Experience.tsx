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
} from "react-icons/si";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 md:py-24 px-4 sm:px-6
      text-gray-900 dark:text-gray-100
      transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Title */}
        <h1
          className="
          text-3xl sm:text-4xl md:text-5xl
          font-semibold
          mb-12 text-center
          bg-gradient-to-r from-indigo-700 to-cyan-800
          text-transparent bg-clip-text
        "
        >
          Professional Experience
        </h1>

        <div className="space-y-12">

          {/* EV Dock Experience */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="
              relative
              border-l-2
              border-indigo-500 dark:border-indigo-400
              pl-5 sm:pl-8
            "
          >
            <span className="absolute -left-[7px] top-2 w-3 h-3 bg-indigo-500 dark:bg-indigo-400 rounded-full"></span>

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Tritan EV Dock Pvt Ltd
            </h3>

            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4">
              Frontend Developer & Digital Marketing Specialist · June 2022 – Present
            </p>

            <ul className="space-y-2 text-sm sm:text-base leading-relaxed">
              <li>• Developed & maintained EV Dock website using React.js & Tailwind CSS.</li>
              <li>• Led CMS management, UI enhancements & frontend performance optimization.</li>
              <li>• Monitored charger live logs & server connection logs.</li>
              <li>• Integrated APIs and supported backend operations.</li>
              <li>• Performance Marketing & Google Business Profile setup.</li>
            </ul>

            <div className="flex flex-wrap gap-3 mt-6 text-lg sm:text-xl">
              <SiReact />
              <SiTailwindcss />
              <SiHostinger />
              <SiGoogleanalytics />
              <SiGoogleads />
            </div>
          </motion.div>

          {/* Eatab Project */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="
              relative
              border-l-2
              border-cyan-500 dark:border-cyan-400
              pl-5 sm:pl-8
            "
          >
            <span className="absolute -left-[7px] top-2 w-3 h-3 bg-cyan-500 dark:bg-cyan-400 rounded-full"></span>

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Eatab Dashboard (Personal Project)
            </h3>

            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4">
              Admin Dashboard & CI/CD Implementation
            </p>

            <ul className="space-y-2 text-sm sm:text-base leading-relaxed">
              <li>• Designed structured admin dashboard layout.</li>
              <li>• Built reusable components using React & Tailwind.</li>
              <li>• Used Bootstrap for UI enhancements.</li>
              <li>• Configured Vite build optimization.</li>
              <li>• Implemented CI/CD workflow using GitHub.</li>
            </ul>

            <div className="flex flex-wrap gap-3 mt-6 text-lg sm:text-xl">
              <SiReact />
              <SiTailwindcss />
              <SiBootstrap />
              <SiGithub />
              <SiVite />
            </div>
          </motion.div>

        </div>
      </div>
   </section>
  );
}