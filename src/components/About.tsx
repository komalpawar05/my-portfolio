import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6 overflow-hidden
      bg-gradient-to-b 
      from-indigo-50 via-white to-white
      dark:from-neutral-950 dark:via-neutral-950 dark:to-black
      transition-colors duration-500">

      {/* Light Mode Glow */}
      <div className="absolute top-[-120px] left-[-120px] 
      w-[350px] h-[350px] 
      bg-indigo-300/40 
      rounded-full blur-[120px] 
      dark:hidden"></div>

      {/* Dark Mode Glow */}
      <div className="absolute bottom-[-120px] right-[-120px] 
      w-[350px] h-[350px] 
      bg-indigo-600/20 
      rounded-full blur-[140px] 
      hidden dark:block"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl 
              text-3xl font-semibold
              mb-6 
              bg-gradient-to-r from-indigo-700 to-cyan-800
              text-transparent bg-clip-text font-header">
            WHO AM I?
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 
            leading-relaxed text-lg"
          >
            I am a passionate{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Frontend Developer
            </span>{" "}
            with over{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              3+ years of experience
            </span>{" "}
            building scalable, responsive, and high-performance web applications.

            <br /><br />

            I specialize in React.js, JavaScript, and Tailwind CSS, focusing on
            clean architecture, reusable components, and seamless user experiences.
          </motion.p>
        </motion.div>

        {/* RIGHT SIDE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          className="bg-white/70 dark:bg-white/5
          backdrop-blur-xl
          border border-gray-200 dark:border-white/10
          rounded-2xl
          p-8
          shadow-xl
          transition duration-500"
        >
          {/* Terminal Header */}
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          <pre className="text-sm md:text-base 
          text-gray-800 dark:text-gray-300 leading-relaxed">
{`const developer = {
  name: "Komal Pawar",
  role: "Frontend Developer",
  experience: "3+ Years",
  techStack: ["React.js", "JavaScript", "Tailwind CSS"],
  strengths: [
    "Responsive UI",
    "Performance Optimization",
    "Clean Architecture"
  ],
  goal: "Build impactful web applications"
};`}
          </pre>
</motion.div>

      </div>
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[120px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          {/* Light Mode Wave */}
          <path
            className="block dark:hidden"
            fill="#f9fafb" 
            d="M0,160L60,186.7C120,213,240,267,360,256C480,245,600,171,720,154.7C840,139,960,181,1080,208C1200,235,1320,245,1380,250.7L1440,256L1440,320L0,320Z"
          />

          {/* Dark Mode Wave */}
          <path
            className="hidden dark:block shadow-lg-indigo-700/20"
            fill="#0f172a"
            d="M0,160L60,186.7C120,213,240,267,360,256C480,245,600,171,720,154.7C840,139,960,181,1080,208C1200,235,1320,245,1380,250.7L1440,256L1440,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default About;