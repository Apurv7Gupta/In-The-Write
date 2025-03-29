import { Link } from "react-router-dom";
const ButtonBlack = ({
  Label,
  className = "",
  child = <></>,
  Path = "",
  onClick = () => {},
}) => {
  const DarkClasses =
    "dark:bg-[#e2e2e2] dark:shadow-buttonWhite dark:text-black dark:active:shadow-buttonWhiteActive dark:hover:bg-gray-100";

  return (
    <button
      className={`px-[5px] font-josefin text-white rounded-[7px] bg-black shadow-buttonBlack active:shadow-buttonBlackActive ${DarkClasses}  ${className}`}
      onClick={onClick}
    >
      <Link to={`${Path}`}>{Label} </Link> <Link to={`${Path}`}>{child}</Link>
    </button>
  );
};

export { ButtonBlack };

const ButtonWhite = ({
  Label,
  className = "",
  child = <></>,
  onClick = () => {},
}) => {
  const DarkClasses =
    "dark:text-white dark:shadow-buttonBlackdark {<---how is this working???} dark:bg-black";
  return (
    <button
      className={`px-[5px] font-josefin text-black rounded-[7px] bg-[#e2e2e2] border-none shadow-buttonWhite active:shadow-buttonWhiteActive hover:bg-gray-100  ${DarkClasses} ${className}`}
      onClick={onClick}
    >
      {Label} {child}
    </button>
  );
};

export { ButtonWhite };
