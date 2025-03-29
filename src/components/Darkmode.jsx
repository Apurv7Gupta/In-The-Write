import React, { useState, useEffect } from "react";
import { ButtonBlack } from "./Buttons";

const Darkmode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for the user's theme preference from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  // Function to toggle dark mode
  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
    localStorage.setItem("theme", newTheme); // Store the theme preference in localStorage
  };

  const DarkClasses =
    "dark:bg-[url(https://cdn-icons-png.flaticon.com/128/869/869869.png)] dark:bg-blend-multiply dark:bg-cover";
  return (
    <ButtonBlack
      onClick={toggleTheme}
      className={`size-10 bg-[url(https://cdn-icons-png.flaticon.com/128/8215/8215216.png)] bg-cover ${DarkClasses}`}
    >
      Toggle Dark Mode
    </ButtonBlack>
  );
};

export default Darkmode;
