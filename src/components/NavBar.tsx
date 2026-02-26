import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";
import Logo from "../assets/logo_1.png";

interface NavBarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<NavBarProps> = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems = ["Home", "About", "Experience", "Projects", "Skills", "Contact"];

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg 
        bg-white/70 dark:bg-gray-900/70 
        border-b border-gray-200 dark:border-gray-700">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
          h-16 flex justify-between items-center">

          {/* Logo */}
          <img 
            src={Logo} 
            alt="Komal Logo" 
            className="h-7 sm:h-8 md:h-9 w-auto"
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10 
            text-sm font-medium text-gray-700 dark:text-gray-300">

            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group transition duration-300"
              >
                {item}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 
                  bg-indigo-600 transition-all duration-300 
                  group-hover:w-full"></span>
              </a>
            ))}

            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md 
              text-gray-900 dark:text-white 
              hover:bg-gray-200 dark:hover:bg-gray-800 
              transition duration-300"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          ref={menuRef}
          className={`md:hidden fixed top-16 left-0 w-full h-[calc(100vh-4rem)]
          bg-white dark:bg-gray-900
          border-t border-gray-200 dark:border-gray-700
          shadow-xl
          transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex flex-col px-6 py-8 space-y-6
            text-gray-700 dark:text-gray-300
            text-lg font-medium">

            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-indigo-600 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

      </nav>

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
};

export default NavBar;