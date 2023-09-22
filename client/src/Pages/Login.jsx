import { useEffect, useState } from "react";
import LoginForm from "../Components/LoginForm";
import Footer from "../Dashboard/Footer";

function Login() {
  // const [contentHeight, setContentHeight] = useState(window.innerHeight);

  // useEffect(() => {
  //   // Function to update the content height when the window is resized
  //   const updateContentHeight = () => {
  //     setContentHeight(window.innerHeight);
  //   };

  //   // Attach an event listener for window resize
  //   window.addEventListener("resize", updateContentHeight);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("resize", updateContentHeight);
  //   };
  // }, []);

  return (
    <div className="overflow-x-hidden">
      <div
        className="lg:py-4 lg:px-5 py-3 w-full lg:flex h-[100vh] px-5 bg-bg-primary items-center justify-center"
        // style={{ height: `${contentHeight}px` }}
      >
        {/* Left */}
        <div className="lg:w-6/12 bg-bg-secondary gap-6 items-center lg:flex-col flex flex-col sm:flex-row sm:gap-20 rounded-t-xl lg:rounded-l-xl lg:rounded-r-none lg:h-full h-2/4 justify-center ">
          <img src="Logo.png" className="h-32 sm:h-40 lg:h-60 animate-bounce" />
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <h1 className="text-text-primary text-2xl sm:text-4xl md:text-5xl  font-bold">Migrainer.</h1>
            <p className="text-text-light text-xs md:text-base italic self-start">Your migraine assistant...</p>
          </div>

          {/* Right */}
        </div>
        <div className="lg:w-6/12  gap-6 sm:gap-20 bg-bg-third items-center lg:flex-col sm:flex-row flex flex-col rounded-b-xl lg:rounded-r-xl lg:rounded-l-none lg:h-full h-2/4 justify-center p-6 w-full">
          <LoginForm />
        </div>
      </div>
      <div className="pt-5 w-full pb-3 bg-bg-primary">
        <Footer />
      </div>
      <p className="text-sm w-screen bg-bg-third text-text-secondary text-center p-1">&copy; 2023 Shubham Dhoot</p>
    </div>
  );
}

export default Login;
