import CalendarComp from "./MainComponents/CalendarComp";
import Charts from "./MainComponents/Charts";
import EpisodePreview from "./MainComponents/EpisodePreview";
import Summary from "./MainComponents/Summary";

function MainContent() {
  return (
    <div className="h-fit overflow-x-hidden">
      <div className="flex flex-col md:flex-row gap-4 md:gap-1">
        <EpisodePreview />
        <CalendarComp />
      </div>
      <Summary />
      <Charts />
    </div>
  );
}

export default MainContent;
