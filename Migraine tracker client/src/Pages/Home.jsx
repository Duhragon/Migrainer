import Footer from "../Dashboard/Footer";
import LeftPane from "../Dashboard/LeftPane";
import MainContent from "../Dashboard/MainContent";
import TopBanner from "../Dashboard/TopBanner";

function Home() {
  return (
    // <div className="bg-bg-primary px-2 sm: flex flex-col mx-auto justify-between lg:w-10/12 xl:w-7/12 h-screen">
    <div className="h-screen flex flex-col justify-between">
      <div className=" sm:flex w-full flex-col md:mx-auto justify-between lg:w-10/12 xl:w-7/12 ">
        <div className="h-fit pr-2 pl-2">
          {/* <LeftPane /> */}
          <MainContent />
        </div>
        <Footer />
      </div>
      <p className="text-text-secondary flex h-10 flex-col text-sm justify-center w-screen bg-bg-third mt-2 text-center p-1 md:p-2">
        &copy; 2023 Shubham Dhoot
      </p>
    </div>
  );
}

export default Home;
