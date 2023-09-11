import Footer from "../Dashboard/Footer";
import LeftPane from "../Dashboard/LeftPane";
import MainContent from "../Dashboard/MainContent";
import TopBanner from "../Dashboard/TopBanner";

function Home() {
  return (
    <div className="bg-bg-primary flex flex-col mx-auto justify-between lg:w-10/12 xl:w-7/12 h-screen">
      <div className="">
        {/* <LeftPane /> */}
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
