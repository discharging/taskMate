import { useState } from "react";
import Logo from "../assets/logo.png";
import { useEffect } from "react";

export default function Header() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "light"
  );

  useEffect(() => {
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", JSON.stringify(theme));
    // Use a callback function with setTheme to remove the previous theme
    return () => {
      document.documentElement.classList.remove(theme);
    };
  }, [theme]);
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Taskmate Logo" />
        <span>TaskMate</span>
      </div>
      <div className="themeSelector">
        <span
          onClick={() => setTheme("light")}
          className={theme === "light" ? "activeTheme light" : "light"}
        ></span>
        <span
          onClick={() => setTheme("medium")}
          className={theme === "medium" ? "activeTheme medium" : "medium"}
        ></span>
        <span
          onClick={() => setTheme("dark")}
          className={theme === "dark" ? "activeTheme dark" : "dark"}
        ></span>
        <span
          onClick={() => setTheme("gOne")}
          className={theme === "gOne" ? "activeTheme gOne" : "gOne"}
        ></span>
        <span
          onClick={() => setTheme("gTwo")}
          className={theme === "gTwo" ? "activeTheme gTwo" : "gTwo"}
        ></span>
        <span
          onClick={() => setTheme("gThree")}
          className={theme === "gThree" ? "activeTheme gThree" : "gThree"}
        ></span>
      </div>
    </header>
  );
}
