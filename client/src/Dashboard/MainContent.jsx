import AddEpisode from "../Components/MainComponents/AddEpisode";
import Charts from "../Components/Charts/Charts";
import EpisodePreview from "../Components/MainComponents/EpisodePreview";

function MainContent() {
  return (
    <div className="min-h-fit overflow-hidden">
      <div className="flex min-h-fit flex-col w-full sm:flex-row gap-4 md:gap-1">
        <EpisodePreview />
        <AddEpisode />
      </div>
      <Charts />
    </div>
  );
}

export default MainContent;
