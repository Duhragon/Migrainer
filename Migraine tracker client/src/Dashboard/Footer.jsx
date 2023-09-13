import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="">
      <div className=" flex bg-bg-third rounded-xl hover:bg-bg-third transition-all  mx-6 justify-end mb-1 ">
        <div className="text-text-secondary  text-sm p-2 sm:pl-6 sm:py-2 flex flex-col justify-center items-end ">
          <p className="    py-1 px-2 rounded ">
            <span className=" cursor-pointer hover:text-text-primary transition-all  ">About</span>
          </p>
          <p className="    py-1 px-2 rounded ">
            <span className="cursor-pointer hover:text-text-primary transition-all  ">Terms of use</span>
          </p>
          <p className="    py-1 px-2 rounded ">
            <span
              className=" curso
            r-pointer hover:text-text-primary transition-all "
            >
              Privacy Policy
            </span>
          </p>
          <p className="    py-1 px-2 rounded ">
            <span className=" cursor-pointer hover:text-text-primary transition-all ">Contact & Feedback</span>
          </p>
          <p className="text-xl  py-1 px-2 rounded flex gap-2">
            <span className="cursor-pointer  hover:text-text-primary transition-all">
              <FaGithubSquare />
            </span>
            <span className="cursor-pointer  hover:text-text-primary transition-all">
              <FaLinkedinIn />
            </span>
          </p>
          <p className="  mb-1  py-1 px-2 rounded ">
            <span className=" cursor-pointer hover:text-text-primary transition-all ">&copy; 2023 Shubham Dhoot</span>
          </p>
        </div>
        <div className="pr-3 sm:pr-4 md:pr-4 sm:my-4 pl-1 sm:pl-3 flex items-center justify-center">
          <img src="Logo.png" className="h-40 md:h-44 py-3 px-6  rounded-xl bg-bg-secondary" />
        </div>
      </div>

      {/* Copyright footer */}
      {/* <p className="flex h-10 flex-col  justify-center w-screen absolute left-0 bottom-0 grow bg-bg-third mt-2 text-center p-1 md:p-2">
        &copy; 2023 Shubham Dhoot
      </p> */}
    </footer>
  );
}

export default Footer;
