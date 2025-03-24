import { Link } from "react-router-dom";

// Navbar.jsx (No need for Navbar.css)
const Navbar = () => {
  return (
    <nav className="font-playfair flex justify-evenly shadow-light font-light bg-[#c5c5c5]">
      <Link to="/Home">Home</Link>
      <Link to="/Themes">Themes</Link>
      <Link to="/Download">Download</Link>
      <Link to="/About">About</Link>
    </nav>
  );
};

export default Navbar;
