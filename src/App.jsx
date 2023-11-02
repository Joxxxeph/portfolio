import { useEffect, useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Stack from "./components/Stack";

function App() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });
  useEffect(() => {
    if (theme === "light") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <main className="font-['Lato'] dark:bg-[radial-gradient(ellipse_at_bottom,_#cee3fb_10%,_#e6eaff_100%)] duration-500 bg-[radial-gradient(ellipse_at_bottom,_#1b2735_10%,_#090a0f_100%)]  ">
      <div className="max-w-[950px] mx-auto pb-[15rem]">
        <Header />
        <Home />
        <NavBar handleChangeTheme={handleChangeTheme} theme={theme}/>
        <Projects />
        <Stack />
        <AboutMe />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

export default App;
