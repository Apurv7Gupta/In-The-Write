const Header = () => {
  return (
    // Header
    <div className="flex items-start sticky z-10 top-0 left-0 h-[60px] lg:h-[120px] font-light overflow-hidden bg-[url(https://images.unsplash.com/photo-1529251333259-d36cccaf22ea?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover">
      {/* header txt */}
      <div className="flex flex-col justify-center w-[50%] text-white font-playfair">
        {/* Main txt */}
        <h1 className="flex pb-[10px] pl-[10px] lg:text-5xl">In The Write</h1>
        {/* Sub txt */}
        <div className="flex sm:text-[10px] text-sm lg:text-base pl-[20px]">
          A platform where individuals or groups share regularly updated content
          on various topics, often in an informal style. Your ideas matter,write
          them down!
        </div>
      </div>
      {/* Col Container */}
      <div className="flex flex-row w-[50%] h-[120px] justify-around">
        <div className="w-[180px] h-[120px] bg-[url(https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover transform skew-x-[-30deg] shadow-skewedGlass"></div>
        <div className="w-[180px] h-[120px] bg-[url(https://images.unsplash.com/photo-1566125882500-87e10f726cdc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover transform skew-x-[-30deg] shadow-skewedGlass"></div>
        <div className="w-[180px] h-[120px] bg-[url(https://images.unsplash.com/photo-1461773518188-b3e86f98242f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover transform skew-x-[-30deg] shadow-skewedGlass"></div>
      </div>
    </div>
  );
};

export default Header;
