import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonWhite } from "./Buttons";
import { Link } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-cover bg-[url(https://unsplash.com/photos/95BLOvTwJqs/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQyODU3MTQ2fA&force=true&w=1920)] dark:bg-cover dark:bg-[url(https://unsplash.com/photos/m_MdXo-axyg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fHN0YXJyeSUyMHNreXxlbnwwfDB8fHwxNzQyODEwNzYzfDA&force=true&w=1920)] min-h-screen flex items-center justify-center">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl text-black font-josefin drop-shadow-lg dark:text-white">
          404
        </h1>
        <p className="mt-4 text-black text-2xl md:text-4xl lg:text-5xl font-playfair text-shadow dark:text-gray-300">
          Oops! You’ve wandered into the cosmic void.
        </p>
        <Link to="/Home">
          <ButtonWhite
            Label="Return Home"
            className="mt-6 w-full max-w-xs md:max-w-md lg:max-w-lg px-6 py-3 
              text-lg md:text-xl lg:text-2xl font-playfair hover:bg-gray-100 hover:shadow-lg 
              dark:shadow-xl 
            dark:hover:bg-blend-hard-light transition-colors duration-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
