import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-white dark:bg-neutral-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 py-2
          bg-gradient-to-r from-indigo-600 to-cyan-500
          text-transparent bg-clip-text">
            Let’s Work Together
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            I’m currently open to Frontend Developer & Web Developer roles.
            If you have an exciting opportunity or project, feel free to reach out.
          </p>

          <div className="space-y-4 text-gray-700 dark:text-gray-300">

            <div className="flex items-center gap-3">
              <FiMail />
              <span><a href="mailto:komalpawar05051997@gmail.com">komalpawar05051997@gmail.com</a></span>
            </div>

            <div className="flex items-center gap-3">
              <FiLinkedin />
              <span><a href="https://www.linkedin.com/in/komalpawar05/e" target="_blank" rel="noopener noreferrer">LinkedIn </a></span>
            </div>

            <div className="flex items-center gap-3">
              <FiGithub />
              <span><a href="https://github.com/komalpawar05" target="_blank" rel="noopener noreferrer">GitHub </a></span>
            </div>

          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative p-[1px] rounded-3xl
          bg-gradient-to-r from-indigo-500/40 to-cyan-500/40"
        >
          <div className="p-10 rounded-3xl
            bg-white/90 dark:bg-neutral-900/80
            backdrop-blur-xl
            border border-gray-200 dark:border-neutral-800
            shadow-2xl dark:shadow-black/40">

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl
                bg-transparent
                border border-gray-300 dark:border-neutral-700
                text-gray-900 dark:text-gray-100
                outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl
                bg-transparent
                border border-gray-300 dark:border-neutral-700
                text-gray-900 dark:text-gray-100
                outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full p-4 rounded-xl
                bg-transparent
                border border-gray-300 dark:border-neutral-700
                text-gray-900 dark:text-gray-100
                outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 rounded-xl font-semibold text-white
                bg-gradient-to-r from-indigo-600 to-cyan-500
                shadow-lg hover:shadow-indigo-500/40 transition"
              >
                Send Message →
              </motion.button>

            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}