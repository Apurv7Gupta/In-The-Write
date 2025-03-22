const ButtonBlack = ({ Label, className = "", child = <></> }) => {
  return (
    <button
      className={`px-[5px] font-josefin text-white rounded-[7px] bg-black shadow-buttonBlack active:shadow-none ${className}`}
    >
      {Label} {child}
    </button>
  );
};

export { ButtonBlack };

const ButtonWhite = ({ Label, className = "", child = <></> }) => {
  return (
    <button
      className={`px-[5px] font-josefin text-black rounded-[7px] bg-[#e2e2e2] border-none shadow-buttonWhite active:shadow-none ${className}`}
    >
      {Label} {child}
    </button>
  );
};

export { ButtonWhite };
