import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

interface NavBarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<NavBarProps> = ({
  darkMode,
  setDarkMode,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-blue-100 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-gray-900 dark:text-white">
          Komal<span className="text-indigo-600">.</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-700 dark:text-gray-300">

          {["Home", "About", "Projects", "Skills"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Theme Toggle */}
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        {/* Mobile Section */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-900 dark:text-white"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm">
          {["Home", "About", "Projects", "Skills"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block hover:text-indigo-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
