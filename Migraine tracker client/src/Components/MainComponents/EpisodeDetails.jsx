// import { AiOutlineRight } from "react-icons/ai";

import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EpisodeDetails({ item, i }) {
  const dateString = item.createdAt;
  const date = new Date(dateString);
  const { duration, severity } = item;

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthName = monthNames[monthIndex];

  const formattedDate = `${day}th of ${monthName}, ${year}`;

  // console.log(formattedDate);

  return (
    <div className=" border-t border-bg-secondary ">
      <li className="cursor-pointer bg-bg-third md:text-lg p-4 transition-all hover:bg-bg-hover">
        {/* <div className="flex justify-between font-thin"> */}
        <div className="grid grid-cols-4 text-text-secondary hover:text-text-primary justify-between transition-all">
          <p className="col-span-3  text-base">{formattedDate}</p>
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
              } ml-3 tracking-wide`}
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
  );
}

export default EpisodeDetails;
