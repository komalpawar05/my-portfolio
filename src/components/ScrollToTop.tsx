import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percent = (scrollTop / docHeight) * 100;

      setScrollPercent(percent);
      setVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 cursor-pointer"
      >
        <div className="relative w-14 h-14">

          {/* Progress Circle */}
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="28"
              cy="28"
              r="25"
              stroke="currentColor"
              strokeWidth="4"
              fill="transparent"
              className="text-gray-300 dark:text-gray-700"
            />
            <circle
              cx="28"
              cy="28"
              r="25"
              stroke="currentColor"
              strokeWidth="4"
              fill="transparent"
              strokeDasharray="157"
              strokeDashoffset={157 - (157 * scrollPercent) / 100}
              className="text-indigo-600 dark:text-indigo-400 transition-all duration-200"
            />
          </svg>

          {/* Arrow */}
          <div className="absolute inset-0 flex items-center justify-center
            text-indigo-600 dark:text-indigo-400">
            <FaArrowUp />
          </div>
        </div>
      </motion.div>
    )
  );
}
