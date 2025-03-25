import { Link } from "react-router-dom";

// Navbar.jsx (No need for Navbar.css)
const Navbar = () => {
  return (
    <nav className="fixed z-10 top-[120px] left-0 w-full font-playfair flex justify-evenly font-light text-white shadow-light bg-[#000000]">
      <Link to="/Home">Home</Link>
      <Link to="/Themes">Themes</Link>
      <Link to="/Download">Download</Link>
      <Link to="/About">About</Link>
    </nav>
  );
};

export default Navbar;
