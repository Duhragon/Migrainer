import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="">
      <div className=" flex bg-gradient-to-r from-bg-secondary from-1% via-bg-third via-60% to-bg-third rounded-xl hover:bg-bg-third transition-all  mx-5 justify-end mb-1 ">
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
        </div>
        <div className="pr-3 sm:pr-3 md:pr-3 pl-1 sm:pl-3 flex items-center justify-center">
          <img src="Logo.png" className="h-36 my-3 md:h-40 py-3 px-6  rounded-xl bg-bg-secondary " />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
