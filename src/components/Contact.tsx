import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import SectionHeading from "./common/SectionHeading";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact - ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        py-20 sm:py-24 lg:py-28
        px-4 sm:px-6 lg:px-8
        bg-gray-50
        dark:bg-neutral-950
        transition-colors duration-500
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[300px]
          rounded-full
          bg-indigo-300/20
          dark:bg-indigo-600/10
          blur-[120px]
          pointer-events-none
        "
      />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Heading */}
        <SectionHeading
          centered
          title="LET'S"
          highlight="CONNECT"
          description="Have an opportunity or project in mind? I'd love to hear from you."
        />

        {/* Contact Content */}
        <div className="mt-12 grid lg:grid-cols-[0.85fr_1.15fr] gap-6">

          {/* LEFT CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              relative
              overflow-hidden
              rounded-3xl
              p-7 sm:p-8
              bg-gradient-to-br
              from-indigo-600
              to-cyan-600
              text-white
              shadow-xl
            "
          >
            {/* Decorative Circle */}
            <div
              className="
                absolute
                -right-20
                -top-20
                w-52
                h-52
                rounded-full
                border
                border-white/20
              "
            />

            <div
              className="
                absolute
                -right-10
                -top-10
                w-32
                h-32
                rounded-full
                border
                border-white/10
              "
            />

            <div className="relative z-10">

              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-xs
                  font-semibold
                  tracking-[0.2em]
                  uppercase
                  text-white/70
                "
              >
                <span className="w-2 h-2 rounded-full bg-white" />
                Available for opportunities
              </span>

              <h3
                className="
                  mt-8
                  text-3xl
                  sm:text-4xl
                  font-semibold
                  leading-tight
                "
              >
                Let's build
                <br />
                something great.
              </h3>

              <p className="mt-5 text-sm sm:text-base text-white/75 leading-relaxed">
                I'm open to frontend development roles, freelance projects,
                and interesting collaborations.
              </p>

              {/* Email */}
              <a
                href="mailto:your-email@example.com"
                className="
                  mt-8
                  flex
                  items-center
                  justify-between
                  gap-3
                  p-4
                  rounded-2xl
                  bg-white/10
                  border
                  border-white/10
                  hover:bg-white/15
                  transition
                "
              >
                <div className="flex items-center gap-3">
                  <FiMail className="text-lg" />

                  <div>
                    <p className="text-xs text-white/60">
                      Email
                    </p>

                    <p className="text-sm font-medium">
                      komalpawar05051997@gmail.com
                    </p>
                  </div>
                </div>

                <FiArrowUpRight />
              </a>

              {/* Social Links */}
              <div className="flex gap-3 mt-4">

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="
                    w-11 h-11
                    flex items-center justify-center
                    rounded-xl
                    bg-white/10
                    border border-white/10
                    hover:bg-white/20
                    transition
                  "
                >
                  <FiGithub />
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    w-11 h-11
                    flex items-center justify-center
                    rounded-xl
                    bg-white/10
                    border border-white/10
                    hover:bg-white/20
                    transition
                  "
                >
                  <FiLinkedin />
                </a>

              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              p-6 sm:p-8
              bg-white
              dark:bg-white/[0.03]
              border
              border-gray-200
              dark:border-white/10
              shadow-sm
              dark:shadow-black/20
            "
          >
            <div className="mb-7">
              <h3 className="text-xl sm:text-2xl font-semibold">
                Send me a message
              </h3>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                I'll get back to you as soon as possible.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="
                    w-full
                    px-4 py-3.5
                    rounded-xl
                    bg-gray-50
                    dark:bg-white/5
                    border
                    border-gray-200
                    dark:border-white/10
                    outline-none
                    text-gray-900
                    dark:text-white
                    placeholder:text-gray-400
                    focus:border-indigo-500
                    dark:focus:border-cyan-400
                    focus:ring-2
                    focus:ring-indigo-500/10
                    transition
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="
                    w-full
                    px-4 py-3.5
                    rounded-xl
                    bg-gray-50
                    dark:bg-white/5
                    border
                    border-gray-200
                    dark:border-white/10
                    outline-none
                    text-gray-900
                    dark:text-white
                    placeholder:text-gray-400
                    focus:border-indigo-500
                    dark:focus:border-cyan-400
                    focus:ring-2
                    focus:ring-indigo-500/10
                    transition
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  className="
                    w-full
                    px-4 py-3.5
                    rounded-xl
                    bg-gray-50
                    dark:bg-white/5
                    border
                    border-gray-200
                    dark:border-white/10
                    outline-none
                    resize-none
                    text-gray-900
                    dark:text-white
                    placeholder:text-gray-400
                    focus:border-indigo-500
                    dark:focus:border-cyan-400
                    focus:ring-2
                    focus:ring-indigo-500/10
                    transition
                  "
                />
              </div>

              {/* Button */}
              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="
                  group
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-2
                  py-3.5
                  rounded-xl
                  font-semibold
                  text-white
                  bg-gradient-to-r
                  from-indigo-600
                  to-cyan-500
                  shadow-lg
                  hover:shadow-indigo-500/25
                  transition-all
                  duration-300
                "
              >
                Send Message

                <FiArrowUpRight
                  className="
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition-transform
                  "
                />
              </motion.button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}