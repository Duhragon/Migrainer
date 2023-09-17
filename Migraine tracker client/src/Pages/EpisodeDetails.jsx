import { useSelector } from "react-redux";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { createDate } from "../helperFunc";
import { PiDotFill } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";

function EpisodeDetails() {
  const { episodes } = useSelector(state => state.user.user);
  const { episodeId } = useParams();
  const [topBannerRef] = useOutletContext();

  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    // Function to update the content height when the window is resized
    const updateContentHeight = () => {
      const navbarHeight = topBannerRef.current ? topBannerRef.current.clientHeight : 0;
      setContentHeight(window.innerHeight - navbarHeight);
    };

    // Attach an event listener for window resize
    window.addEventListener("resize", updateContentHeight);

    // Initial content height calculation
    updateContentHeight();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateContentHeight);
    };
  }, [topBannerRef]);

  const currEpisode = episodes.find(item => {
    return item._episodeId === episodeId;
  });

  const currDate = createDate(currEpisode);
  if (!currEpisode) return <span>No episode found!!</span>;

  return (
    // <div className="h-full flex w-full bg-gradient-to-r from-bg-secondary from-1% via-bg-hover via-60% to-bg-hover items-center justify-center">
    <div
      className="overflow-y-auto flex w-full h-full items-center justify-center"
      style={{ height: `${contentHeight}px` }}
    >
      <section className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]  flex flex-col mx-3 justify-center items-center">
        <h2 className="bg-bg-third rounded-md m-2 mt-4 w-full px-4 py-2 text-text-secondary text-xl font-semibold">
          Episode Details
        </h2>
        <div className=" px-2 py-10 text-text-light h-full flex flex-col gap-4 bg-bg-third w-full mb-4 rounded-md">
          <p className="flex items-center">
            <span className="pr-1 text-links-hover">
              <PiDotFill />
            </span>
            Occurred on <span className="px-1 text-text-secondary font-semibold ">{currDate}</span>
          </p>
          <p className="flex items-center">
            <span className="pr-1 text-links-hover">
              <PiDotFill />
            </span>
            It was{" "}
            <span
              className={`${
                currEpisode.severity === "Moderate"
                  ? "text-moderate"
                  : currEpisode.severity === "Mild"
                  ? "text-mild"
                  : currEpisode.severity === "Severe"
                  ? "text-severe"
                  : ""
              } px-1 font-semibold `}
            >
              {currEpisode.severity}
            </span>{" "}
            in severity.
          </p>
          <p className="flex items-center">
            <span className="pr-1 text-links-hover">
              <PiDotFill />
            </span>
            It lasted for <span className=" p-1 text-text-secondary font-semibold ">{currEpisode.duration}</span>{" "}
            {currEpisode.duration < 2 ? "hour" : "hours"}.
          </p>
          <div className="">
            <p className="flex items-center">
              <span className="pr-1 text-links-hover">
                <PiDotFill />
              </span>
              The symptoms observed were{" "}
            </p>
            <div className="flex flex-wrap ">
              {currEpisode.symptoms.map(item => (
                <span
                  key={item}
                  className="flex flex-1 justify-center flex-wrap py-1 px-2 m-1 rounded min-w-fit text-text-primary text-sm font-semibold bg-bg-hover wi-fit"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="">
            <p className="flex items-center">
              <span className="pr-1 text-links-hover">
                <PiDotFill />
              </span>
              Potential trigger points recorded are{" "}
            </p>
            <div className="flex flex-wrap ">
              {currEpisode.activities.map(item => (
                <span
                  key={item}
                  className="flex flex-1 justify-center flex-wrap py-1 px-2 m-1 rounded min-w-fit text-text-primary text-sm font-semibold bg-bg-hover wi-fit"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-row gap-3 my-auto justify-center">
            <Link to={"/"} className="button-style">
              Go Back
            </Link>
            <button className="button-dark">Delete Episode</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EpisodeDetails;
