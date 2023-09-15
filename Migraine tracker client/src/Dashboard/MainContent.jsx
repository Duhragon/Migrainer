import CalendarComp from "../Components/MainComponents/CalendarComp";
import Charts from "../Components/Charts/Charts";
import EpisodePreview from "../Components/MainComponents/EpisodePreview";
// import Summary from "./MainComponents/Summary";

function MainContent() {
  return (
    <div className="min-h-fit overflow-hidden">
      <div className="flex min-h-fit flex-col w-full sm:flex-row gap-4 md:gap-1">
        <EpisodePreview />
        <CalendarComp />
      </div>
      <Charts />
    </div>
  );
}

export default MainContent;
