const Searchbox = () => {
  return (
    <>
      <div className="flex items-center">
        <img
          className="relative left-7 size-3.5 lg:size-5.5"
          src="https://cdn-icons-png.flaticon.com/128/2676/2676824.png"
          alt="filter"
        />

        <input
          className="text-center text-lg bg-white border-none rounded-[12px]"
          type="text"
          placeholder="Search Blogs"
        />
      </div>
    </>
  );
};
export default Searchbox;
