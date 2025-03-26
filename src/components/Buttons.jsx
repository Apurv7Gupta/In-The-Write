import { Link } from "react-router-dom";
const ButtonBlack = ({
  Label,
  className = "",
  child = <></>,
  Path = "",
  onClick = () => {},
}) => {
  return (
    <button
      className={`px-[5px] font-josefin text-white rounded-[7px] bg-black shadow-buttonBlack active:shadow-none dark:bg-[#e2e2e2] dark:shadow-buttonWhiteDark dark:text-black dark:active:shadow-none ${className}`}
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
  return (
    <button
      className={`px-[5px] font-josefin text-black rounded-[7px] bg-[#e2e2e2] border-none shadow-buttonWhite active:shadow-none dark:text-white dark:shadow-buttonBlackDark dark:bg-black ${className}`}
      onClick={onClick}
    >
      {Label} {child}
    </button>
  );
};

export { ButtonWhite };
