import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { ButtonWhite, ButtonBlack } from "../components/Buttons";
import Darkmode from "../components/Darkmode";

const Edit = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = async () => {
    const blogData = {
      title: title,
      content: content,
    };

    try {
      const response = await fetch("http://localhost:5000/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });

      if (!response.ok) throw new Error("Failed to save blog");

      alert("Blog saved!");
    } catch (err) {
      console.error("Save error:", err);
      alert("Error saving blog");
    }
  };

  return (
    <>
      <div className="bg-[#2f2d2d29] font-NotoSansJP">
        <header className="flex items-center w-full h-[30px] bg-black pl-[8px] text-[#d5d1c7]">
          Compose Blog
          <div className="px-[20px]">
            <ButtonBlack Path={"/Home"}>Return Home</ButtonBlack>
          </div>
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        {/* Content */}
        <div className="flex-col p-[10px] dark:text-white">
          <div className="pb-5">Content</div>
          <textarea
            placeholder="Start Writing..."
            className="w-full h-[100vh] shadow-[inset 1px 1px 2px black] pl-[10px] align-top bg-[#2f2d2d29] dark:bg-black"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Edit;
