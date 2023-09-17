import { useSelector } from "react-redux";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import EpisodeItems from "../MainComponents/EpisodeItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EpisodePreview() {
  const { user } = useSelector(state => state.user);
  const { episodes } = user;

  return (
    // <div className="m-2 bg-bg-third md:w-6/12">
    <div className="mt-3 mx-3 sm:mr-0 rounded-lg sm:w-full bg-bg-third h-fit ">
      <h2 className="flex items-center py-3 border-b border-bg-secondary pl-4 font-semibold text-sm  font tracking-wider">
        Migraine Episodes recorded: {episodes?.length}
      </h2>
      <ul className=" h-80  mb-3 overflow-auto">
        {episodes?.length === 0 ? (
          <div
            className={`px-3 h-full flex flex-col sm:flex-row text-text-light overflow-y-hidden overflow-x-hidden items-center justify-center`}
          >
            <p className="flex flex-col h-full text-center items-center justify-center gap-2 text-sm px-4 md:px-10">
              Migraines rank as the third most prevalent illness in the entire world. Don't suffer in silence.
              <span className="text-center bg-bg-hover text-text-primary p-2 px-2 rounded">
                Add your episodes here by clicking on the plus icon.
              </span>
            </p>
            <span
              className={` right-arrow pr-1 hidden sm:flex text-links-hover text-2xl items-center justify-end animate-[r-arrow_1s_ease-out_infinite]`}
              // } text-sm font-thin pr-1 flex items-center justify-end`}
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
            <span
              className={`sm:hidden down-arrow pr-1 flex text-links-hover text-2xl items-center justify-end col-start-4 row-start-1 row-span-2 animate-[d-arrow_1s_ease-out_infinite]`}
              // } text-sm font-thin pr-1 flex items-center justify-end`}
            >
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </div>
        ) : (
          episodes?.map((episode, index) => <EpisodeItems item={episode} i={index} key={episode._id} />)
        )}
      </ul>
    </div>
  );
}
export default EpisodePreview;
