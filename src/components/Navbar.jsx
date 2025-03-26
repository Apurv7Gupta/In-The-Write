import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-[60px] lg:top-[120px] left-0 w-full font-playfair flex justify-evenly font-light text-white shadow-light bg-[#000000] dark:bg-[#c5c5c5] dark:text-black">
      <Link to="/Home">Home</Link>
      <Link to="/Themes">Themes</Link>
      <Link to="/Download">Download</Link>
      <Link to="/About">About</Link>
    </nav>
  );
};

export default Navbar;
