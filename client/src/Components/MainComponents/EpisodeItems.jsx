// import { AiOutlineRight } from "react-icons/ai";

import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { createDate } from "../../helperFunc";
import moment from "moment";

function EpisodeDetails({ item, i }) {
  const { duration, severity } = item;

  return (
    <Link to={"/episode/" + item._id}>
      <div className=" border-b border-bg-secondary ">
        <li className="cursor-pointer flex justify-center items-center bg-bg-third md:text-lg p-3 transition-all hover:bg-bg-hover">
          <span className="p-3 bg-bg-duration mr-2 rounded-md font-bold">{i + 1}</span>
          <div className="grid grid-cols-4 w-full text-text-secondary hover:text-text-primary justify-between transition-all">
            <p className="col-span-3  text-base">{moment(item.date).format("MMM Do YY")}</p>
            <p className=" text-text-light md:mt-1 text-xs col-start-1 col-span-3 pr-1 flex items-center">
              <span className="bg-bg-duration py-1 px-2 rounded-md">
                {duration} {duration > 1 ? "hours" : "hour"}{" "}
              </span>
              <span
                className={`${
                  severity === "Moderate"
                    ? "text-moderate"
                    : severity === "Mild"
                    ? "text-mild"
                    : severity === "Severe"
                    ? "text-severe"
                    : ""
                } ml-1 tracking-wide`}
              >
                ({severity})
              </span>
            </p>
            <span
              className={` pr-1 flex text-links-hover text-2xl items-center justify-end col-start-4 row-start-1 row-span-2 animate-[r-arrow_1s_ease-out_infinite]`}
              // } text-sm font-thin pr-1 flex items-center justify-end`}
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </div>
        </li>
      </div>
    </Link>
  );
}

export default EpisodeDetails;
