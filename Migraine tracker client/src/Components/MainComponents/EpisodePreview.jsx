import { useSelector } from "react-redux";
import EpisodeDetails from "../../Pages/EpisodeDetails";

function EpisodePreview() {
  const { user } = useSelector(state => state.user);
  const { episodes } = user;
  console.log(episodes);

  return (
    // <div className="m-2 bg-bg-third md:w-6/12">
    <div className="mt-3 mx-3 sm:mr-0 rounded-lg sm:w-full bg-bg-third h-fit ">
      <h2 className="flex items-center py-3 border-b border-bg-secondary pl-4 font-semibold text-sm  font tracking-wider">
        Migraine Episodes:
      </h2>
      <ul className=" h-80  mb-3 overflow-auto">
        {episodes?.length === 0 ? (
          <p className="h-full flex items-center justify-center p-5">
            Have you been experiencing migraines ? Let's start tracking them by selecting a date
          </p>
        ) : (
          episodes?.map((episode, index) => <EpisodeDetails item={episode} i={index} key={episode._id} />)
        )}
      </ul>
    </div>
  );
}
export default EpisodePreview;
