import Header from "./src/components/Header";
import Navbar from "./src/components/Navbar";
import Searchbox from "./src/components/Searchbox";
import { ButtonBlack, ButtonWhite } from "./src/components/Buttons";
import LoginImage from "./src/assets/login.png";
import StartBlogging from "./src/assets/StartBlogging.png";
import Featured from "./src/components/Featured";
import Darkmode from "./src/components/Darkmode";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <div className="block">
        <Navbar />
      </div>
      <div className="flex p-[10px]">
        <div className="p-[10px] flex gap-[30px] items-center">
          <ButtonBlack
            onClick={() => console.error("Button clicked!")}
            Label="Login"
            className="items-center flex w-20 justify-between"
            child={
              <div className="size-5">
                <img src={LoginImage} />
              </div>
            }
          />
          <ButtonWhite
            Label="SignUp"
            className="items-center flex w-22 justify-between"
            child={
              <div className="size-5">
                <img src="https://cdn-icons-png.flaticon.com/128/748/748137.png" />
              </div>
            }
          />
        </div>
        <div className="p-[10px] flex size-full justify-center">
          <Searchbox />
        </div>
        <div className="items-center">
          <ButtonBlack //Replace with DarkMode Button
            className="size-10"
            child={
              <img src="https://cdn-icons-png.flaticon.com/128/8215/8215216.png" />
            }
          />
        </div>
      </div>
      <div className="flex p-[10px] w-full justify-center">
        <Link to="/StartBlogging">
          <ButtonBlack
            Label="Start Blogging"
            className="items-center flex justify-evenly p-[10px] w-[165px] ml-43"
            child={
              <div className="size-6.5">
                <img src={StartBlogging} />
              </div>
            }
          />
        </Link>
      </div>
      <div>
        <p className="flex font-playfair text-4xl pl-[20px] text-shadow">
          FEATURED
        </p>
        <div>
          <Featured />
        </div>
      </div>
    </>
  );
};

export default App;
