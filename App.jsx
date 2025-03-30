import Header from "./src/components/Header";
import Navbar from "./src/components/Navbar";
import Searchbox from "./src/components/Searchbox";
import { ButtonBlack, ButtonWhite } from "./src/components/Buttons";
import LoginImage from "./src/assets/login.png";
import StartBlogging from "./src/assets/StartBlogging.png";
import Featured from "./src/components/Featured";
import Darkmode from "./src/components/Darkmode";
import { useTheme } from "./src/context/ThemeContext";
import { ThemeProvider } from "./src/context/ThemeContext";

const Application = () => {
  const { isDarkMode } = useTheme();
  return (
    <>
      <Header />
      <div className="block">
        <Navbar />
      </div>
      <div className="relative flex px-[10px] py-[10px] pt-[35px]">
        <div className="p-[3px] lg:p-[10px] flex gap-[30px] items-center">
          <ButtonBlack
            onClick={() => console.error("Button clicked!")}
            Label="Login"
            className="items-center flex w-20 justify-between"
          >
            <div className="size-5">
              <img
                src={
                  isDarkMode
                    ? "https://cdn-icons-png.flaticon.com/128/1000/1000997.png"
                    : LoginImage
                }
              />
            </div>
          </ButtonBlack>
          <ButtonWhite
            Label="SignUp"
            className="items-center flex w-22 justify-between"
          >
            <div className="size-5">
              <img
                src={
                  isDarkMode
                    ? "https://cdn-icons-png.flaticon.com/128/9293/9293643.png"
                    : "https://cdn-icons-png.flaticon.com/512/9333/9333864.png"
                }
              />
            </div>
          </ButtonWhite>
        </div>
        <div className="p-[10px] flex w-full justify-center">
          <Searchbox />
        </div>
        <div className="items-center ml-[40px]">
          <Darkmode />
        </div>
      </div>
      <div className="flex p-[10px] justify-center">
        <ButtonBlack
          Label="Start Blogging"
          Path={"/StartBlogging"}
          className="items-center flex justify-evenly p-[10px] w-[165px] ml-41"
        >
          <div className="size-3.5 lg:size-6.5">
            <img src={StartBlogging} />
          </div>
        </ButtonBlack>
      </div>
      <div>
        <p className="flex font-playfair text-2xl lg:text-4xl pl-[20px] text-shadow dark:text-white">
          FEATURED
        </p>
        <div>
          <Featured />
        </div>
      </div>
    </>
  );
};

const App = () => (
  <ThemeProvider>
    <Application />
  </ThemeProvider>
);
export default App;
