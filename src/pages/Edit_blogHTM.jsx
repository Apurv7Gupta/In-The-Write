import { useTheme } from "../context/ThemeContext";
import { ButtonWhite, ButtonBlack } from "../components/Buttons";
import Darkmode from "../components/Darkmode";

const Edit = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const handleSave = () => {
    alert("Blog saved!");
  };

  return (
    <>
      <div className="bg-[#2f2d2d29] font-NotoSansJP">
        <header className="flex items-center w-full h-[30px] bg-black pl-[8px] text-[#d5d1c7]">
          Compose Blog
        </header>
        <div className="flex p-[10px] justify-between">
          <ButtonWhite onClick={handleSave}>Save</ButtonWhite>
          <Darkmode onClick={toggleTheme}></Darkmode>
        </div>

        {/* Title */}
        <div className="flex p-[10px] pl-[10px] items-center dark:text-white">
          <p className="pr-5">Title</p>
          <input
            type="text"
            className="p-[10px] w-full shadow-[inset 1px 1px 2px black] bg-[#2f2d2d29] dark:bg-black"
            placeholder="Enter blog title..."
          />
        </div>

        {/* Content */}
        <div className="flex-col p-[10px] dark:text-white">
          <div className="pb-5">Content</div>
          <textarea
            placeholder="Start Writing..."
            className="w-full h-[100vh] shadow-[inset 1px 1px 2px black] pl-[10px] align-top bg-[#2f2d2d29] dark:bg-black"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Edit;
