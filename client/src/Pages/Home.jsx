import BottomBanner from "../Dashboard/BottomBanner";
import MainContent from "../Dashboard/MainContent";

function Home() {
  return (
    <div className="h-fit flex flex-col justify-between bg-bg-fourth">
      <div className=" sm:flex w-full flex-col md:mx-auto justify-between lg:w-10/12 xl:w-7/12 ">
        <div className="h-fit pr-2 pl-2">
          <MainContent />
        </div>
        <BottomBanner />
      </div>
      <p className="text-text-secondary flex h-10 flex-col text-sm justify-center w-screen bg-bg-third mt-2 text-center p-1 md:p-2">
        &copy; 2023 Shubham Dhoot
      </p>
    </div>
  );
}

export default Home;
