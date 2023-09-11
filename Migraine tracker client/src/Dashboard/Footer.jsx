function Footer() {
  return (
    <footer className="">
      <div className=" flex border-2 rounded hover:bg-bg-third transition-all border-links mx-3 justify-end">
        <div className="p-2 sm:pl-6 sm:py-3 flex flex-col items-end text-sm sm:text-base">
          <p className="  mb-1  py-1 px-2 rounded ">
            <span className="hover:underline cursor-pointer hover:text-links-hover transition-all text-links ">
              About
            </span>
          </p>
          <p className="  mb-1  py-1 px-2 rounded ">
            <span className="cursor-pointer hover:text-links-hover transition-all text-links hover:underline">
              Terms of use
            </span>
          </p>
          <p className="  mb-1  py-1 px-2 rounded ">
            <span
              className="hover:underline curso
            r-pointer hover:text-links-hover transition-all text-links"
            >
              Privacy Policy
            </span>
          </p>
          <p className="  mb-1  py-1 px-2 rounded ">
            <span className="hover:underline cursor-pointer hover:text-links-hover transition-all text-links">
              Contact & Feedback
            </span>
          </p>
          <p className="  mb-1  py-1 px-2 rounded ">
            <span className="hover:underline cursor-pointer hover:text-links-hover transition-all text-links">
              Social Media
            </span>
          </p>
        </div>
        <div className="pr-2 sm:pr-6 pl-3 flex items-center justify-center">
          <img src="../../public/Logo.png" className="h-40 sm:py-3 py-1 sm:px-6 px-3 rounded-xl bg-bg-secondary" />
        </div>
      </div>
      <p className=" text-center p-1 sm:text-lg md:p-2">&copy; 2023 Shubham Dhoot</p>
    </footer>
  );
}

export default Footer;
