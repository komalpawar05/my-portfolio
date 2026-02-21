import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  darkMode,
  setDarkMode,
}) => {
  return (
    <button
  onClick={() => setDarkMode(!darkMode)}
  className="group p-2 rounded-full bg-white dark:bg-gray-700 transition hover:scale-110 hover:bg-indigo-800"
>
  {darkMode ? (
    <Sun
      size={20}
      className="text-yellow-400 transition group-hover:text-white"
    />
  ) : (
    <Moon
      size={20}
      className="text-gray-800 transition group-hover:text-white"
    />
  )}
</button>

  );
};

export default ThemeToggle;
