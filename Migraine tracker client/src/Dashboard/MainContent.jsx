import CalendarComp from "./MainComponents/CalendarComp";
import Charts from "./MainComponents/Charts/Charts";
import EpisodePreview from "./MainComponents/EpisodePreview";
import Summary from "./MainComponents/Summary";

function MainContent() {
  return (
    <div className="min-h-fit overflow-hidden">
      <div className="flex min-h-fit flex-col md:flex-row gap-4 md:gap-1">
        <EpisodePreview />
        <CalendarComp />
      </div>
      <Charts />
    </div>
  );
}

export default MainContent;
