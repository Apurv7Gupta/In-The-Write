import { useTheme } from "../context/ThemeContext";
import { ButtonBlack } from "./Buttons";

const Darkmode = () => {
  const { toggleTheme } = useTheme();

  const DarkClasses =
    "dark:bg-[url(https://cdn-icons-png.flaticon.com/128/869/869869.png)] dark:bg-blend-multiply dark:bg-cover";

  return (
    <ButtonBlack
      onClick={toggleTheme}
      className={`size-10 bg-[url(https://cdn-icons-png.flaticon.com/128/8215/8215216.png)] bg-cover ${DarkClasses}`}
    ></ButtonBlack>
  );
};

export default Darkmode;
