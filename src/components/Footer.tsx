import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-indigo-950 text-white">

      {/* Abstract Shapes */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-16 text-center">

        {/* Name */}
        <h3 className="text-2xl font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">
          Komal Pawar
        </h3>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6 text-xl text-gray-300">
          <a
            href="https://github.com/komalpawar05"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition"
          >
            <FiGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/komalpawar05/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition"
          >
            <FiLinkedin />
          </a>

          <a
            href="mailto:komalpawar05051997@gmail.com"
            className="hover:text-white hover:scale-110 transition"
          >
            <FiMail />
          </a>
        </div>

        {/* Divider */}
        <div className="mt-10 h-[1px] bg-indigo-800 opacity-40"></div>

        {/* Copyright */}
        <p className="mt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} Komal Pawar. All rights reserved.
        </p>

      </div>
    </footer>
  );
}