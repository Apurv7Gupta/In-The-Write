import { Link } from "react-router-dom";
const ButtonBlack = ({
  Label,
  className = "",
  children,
  Path = "",
  onClick = () => {},
}) => {
  const DarkClasses =
    "dark:bg-[#e2e2e2] dark:shadow-buttonWhite dark:text-black dark:active:shadow-buttonWhiteActive dark:hover:bg-gray-100";

  return (
    <Link
      to={Path}
      className={`inline-flex items-center justify-center px-[5px] font-josefin text-white rounded-[7px] bg-black shadow-buttonBlack active:shadow-buttonBlackActive ${DarkClasses}  ${className}`}
      onClick={onClick}
    >
      {Label} {children}
    </Link>
  );
};

export { ButtonBlack };

const ButtonWhite = ({
  Label,
  className = "",
  children,
  Path = "",
  onClick = () => {},
}) => {
  const DarkClasses = "dark:text-white dark:bg-black";
  return (
    <Link
      to={Path}
      className={`inline-flex items-center justify-center px-[5px] font-josefin text-black rounded-[7px] bg-[#e2e2e2] border-none shadow-buttonWhite active:shadow-buttonWhiteActive hover:bg-gray-100  ${DarkClasses} ${className}`}
      onClick={onClick}
    >
      {Label} {children}
    </Link>
  );
};

export { ButtonWhite };
