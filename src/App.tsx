import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import ScrollToTop from "./components/ScrollToTop";
import Experience from "./components/Experience";

function App() {
  const [darkMode, setDarkMode] = useState(true); // default dark mode

  useEffect(() => {
    const html = document.documentElement;

    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <div className="py-2">
        <Hero />
      </div>

      <About />
      <Experience />
      <Project />
      <Skills />
      <ScrollToTop />
    </div>
  );
}

export default App;
