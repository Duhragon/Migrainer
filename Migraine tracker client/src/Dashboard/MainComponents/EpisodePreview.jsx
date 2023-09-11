import { useSelector } from "react-redux";
import EpisodeDetails from "../../Pages/EpisodeDetails";

function EpisodePreview() {
  const { user } = useSelector(state => state.user);
  const { episodes } = user;
  console.log(episodes);

  return (
    // <div className="m-2 bg-bg-third md:w-6/12">
    <div className=" py-1 mt-5 pb-4 mx-3 md:mr-0 rounded bg-bg-third md:w-full h-fit ">
      <h2 className="flex items-center py-2  px-8 text-lg font-semibold tracking-wider">Episodes:</h2>
      <ul className="min-h-fit max-h-80  px-1 sm:px-3 sm:py-1 overflow-auto">
        {episodes.map((episode, index) => (
          <EpisodeDetails item={episode} i={index} key={episode._id} />
        ))}
      </ul>
    </div>
  );
}
export default EpisodePreview;
