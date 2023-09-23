import { useDispatch, useSelector } from "react-redux";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import EpisodeItems from "../MainComponents/EpisodeItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import Loading from "../Loading";
import { getEpisodes } from "../../Utils/index.js";
import { setIsLoadingEpisode } from "../../Redux/episodeSice";

function EpisodePreview() {
  const dispatch = useDispatch();
  const episodes = useSelector(state => state.episode.episode);
  const isLoadingEpisodes = useSelector(state => state.episode.isLoadingEpisodes);

  useEffect(() => {
    // Fetch episodes when the component mounts or re-renders
    dispatch(setIsLoadingEpisode(true));
    dispatch(getEpisodes())
      .then(() => {
        dispatch(setIsLoadingEpisode(false));
      })
      .catch(error => {
        console.error("Error fetching episodes:", error);
        dispatch(setIsLoadingEpisode(false));
      });
  }, [dispatch]);

  return (
    <div className="mt-3 mx-3 sm:mr-0 rounded-lg sm:w-full bg-bg-third h-fit ">
      <h2 className="flex items-center py-3 border-b border-bg-secondary pl-4 font-semibold text-sm  font tracking-wider">
        Migraine Episodes recorded: {episodes?.length}
      </h2>
      <ul className=" h-80  mb-3 overflow-auto">
        {episodes.length === 0 && !isLoadingEpisodes ? (
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
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
            <span
              className={`sm:hidden down-arrow pr-1 flex text-links-hover text-2xl items-center justify-end col-start-4 row-start-1 row-span-2 animate-[d-arrow_1s_ease-out_infinite]`}
            >
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </div>
        ) : isLoadingEpisodes && !episodes.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <Loading />
          </div>
        ) : (
          episodes?.map((episode, index) => <EpisodeItems item={episode} i={index} key={episode._id} />)
        )}
      </ul>
    </div>
  );
}
export default EpisodePreview;
