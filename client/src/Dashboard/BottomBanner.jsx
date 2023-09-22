function BottomBanner() {
  return (
    <footer className="">
      <div className=" flex bg-gradient-to-r from-bg-secondary from-1% via-bg-third via-60% to-bg-third rounded-lg  transition-all  mx-5 justify-between mb-1 ">
        <p className="text-text-secondary text-xl items-start md:text-4xl  font-bold p-2 sm:pl-6 sm:py-2 flex flex-col sm:flex-row sm:gap-2 sm:text-3xl sm:items-center justify-center ">
          <span>It's</span>
          <span>not</span>
          <span>in</span>
          <span>your</span>
          <span>head.</span>
        </p>
        <div className="pr-3 sm:pr-3 md:pr-3 pl-1 sm:pl-3 flex items-center justify-center">
          <img src="Logo.png" className="h-36 my-3 md:h-40 py-3 px-6  rounded-xl bg-bg-secondary " />
        </div>
      </div>
    </footer>
  );
}

export default BottomBanner;
