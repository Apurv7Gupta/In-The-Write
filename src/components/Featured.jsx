const Featured = () => {
  const blogData = Array.from({ length: 10 }, (_, i) => ({
    img: `https://picsum.photos/390/196?random=${i + 1}`,
    desc: "Blog Description",
  }));
  return (
    <>
      {/* Container */}
      <div className="flex pt-[30px] pl-[20px] w-full gap-[30px] overflow-x-auto scroll-smooth snap-x">
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="shrink-0 h-[392px] w-[390px] bg-white dark:bg-black rounded-3xl shadow-box snap-start"
          >
            <div
              className="rounded-t-3xl h-[50%] w-full bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${blog.img})` }}
            ></div>
            <div className="h-[50%] w-full">
              <p className="font-josefin font-light dark:text-white">
                {blog.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Featured;
