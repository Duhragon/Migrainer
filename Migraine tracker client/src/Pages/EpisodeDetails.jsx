function EpisodeDetails({ item, i }) {
  console.log(item);
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
    <div className=" mt-1 pb-1 px-2">
      <li className="bg-bg-secondary md:text-lg p-4 transition-all hover:bg-bg-primary rounded">
        {/* <div className="flex justify-between font-thin"> */}
        <div className="grid grid-cols-4  justify-between font-thin">
          <span className="col-span-3 ">{formattedDate}</span>
          <span className="text-text-light  text-sm col-start-1 col-span-2 font-thin pr-1 flex items-center">
            duration: {duration}
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
            } text-sm font-thin pr-1 flex lg:text-base items-center justify-end col-start-4 row-start-1`}
            // } text-sm font-thin pr-1 flex items-center justify-end`}
          >
            {severity}
          </span>
        </div>
      </li>
    </div>
  );
}

export default EpisodeDetails;
