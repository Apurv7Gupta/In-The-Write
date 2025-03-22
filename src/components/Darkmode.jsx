import React from "react";
import { ButtonBlack, ButtonWhite } from "./Buttons";
import { useState } from "react";

export default function Darkmode() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    if (darkMode) {
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
    }
  };
  return darkMode ? (
    <ButtonBlack onClick={toggleDarkMode} className="size-10">
      <img
        src="https://cdn-icons-png.flaticon.com/128/8215/8215216.png" // Moon icon (dark mode)
        alt="Mode Icon"
      />
    </ButtonBlack>
  ) : (
    <ButtonWhite onClick={toggleDarkMode} className="size-10">
      <img
        src="https://cdn-icons-png.flaticon.com/128/869/869869.png" // Sun icon (light mode)
        alt="Mode Icon"
      />
    </ButtonWhite>
  );
}
