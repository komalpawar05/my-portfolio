import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({
  title,
  highlight,
  description,
  centered = false,
  className = "",
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`${centered ? "text-center mx-auto" : ""} ${className}`}
    >
      <h2
        className="
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          font-semibold mb-4
          bg-gradient-to-r from-indigo-700 to-cyan-800
          text-transparent bg-clip-text
        "
      >
        {title}{" "}
        {highlight && <span>{highlight}</span>}
      </h2>

      {description && (
        <p
          className="
            max-w-2xl
            mx-auto
            text-sm sm:text-base
            text-gray-600 dark:text-gray-400
            leading-relaxed
          "
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;