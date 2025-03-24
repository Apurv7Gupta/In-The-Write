import React, { useState } from "react";

const Edit = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleSave = () => {
    alert("Blog saved!");
  };

  return (
    <>
      <link
        rel="stylesheet"
        href={`${import.meta.env.BASE_URL}CSS/Edit_Blog.css`}
      />
      <div className={`edit-blog ${darkMode ? "dark-mode" : ""}`}>
        <header id="header">Compose Blog</header>

        <div className="btn_container">
          <button className="bt" onClick={handleSave}>
            Save
          </button>
          <button className="bt" id="bt2" onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Title Section */}
        <div className="Title">
          <p>Title:</p>
          <input type="text" id="Title" placeholder="Enter blog title..." />
        </div>

        {/* Content Section */}
        <div className="content">
          <textarea
            placeholder="休 みに した ことを ブログに 書きましょう。"
            id="content"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Edit;
