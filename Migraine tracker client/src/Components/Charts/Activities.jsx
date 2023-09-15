// import React from "react";
// import { useSelector } from "react-redux";
// import { VictoryPie, VictoryTooltip } from "victory";

// function Activities() {
//   const customTooltipStyle = {
//     // fill: "white",
//     stroke: "black",
//     strokeWidth: 1,
//     fontSize: 25, // Adjust the font size as needed
//     padding: 0, // Adjust the padding as needed
//   };

//   const { episodes } = useSelector(state => state.user.user);

//   const activities = episodes.map(item => item.activities);
//   const activitiesArray = activities.join(",").split(",");

//   // Creates the array needed to dynamically update the chart
//   const finalActivities = activitiesArray.reduce((prevV, currV) => {
//     if (!prevV[currV]) prevV[currV] = 1;
//     else prevV[currV]++;
//     return prevV;
//   }, {});

//   //Converting the final array into a variable that the chart will use to visualize data
//   const activitiesData = Object.keys(finalActivities).map(activity => ({
//     x: activity,
//     y: finalActivities[activity],
//   }));

//   const colorData = [
//     "#5f8baf",
//     "#a688fa",
//     "#6b6aaf",
//     "#ba88fa",
//     "#88c7fa",
//     "#e6e6ff",
//     "#ceccff",
//     "#e2fa88",
//     "#908d96",
//     "#965faf",
//   ];

//   return (
//     <div className="md:border rounded border-links mx-3 my-6 h-fit">
//       <div className="chart-container h-full flex flex-col items-start md:flex-row md:justify-between">
//         <div className="  w-full h-fit md:w-7/12  md:mx-6 flex flex-col justify-center items-center">
//           <div className="border md:border-none rounded px-6 pb-2 border-links">
//             <h2 className="py-3 md:text-xl text-lg font-bold  tacking-wider">
//               Analysis for {episodes.length} episodes
//             </h2>
//             <ul className="tracking-wider ">
//               {activitiesData.map((item, i) => (
//                 <li key={i} className="flex hover:bg-gray-900 pb-1 items-center rounded">
//                   {`${item.x.slice(0, 1).toUpperCase() + item.x.slice(1)}`}{" "}
//                   <span className="inline-block ml-auto mr-2">{item.y} times</span>
//                   <span className={` w-3 h-3`} style={{ backgroundColor: colorData[i] }}></span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div className="chart mx-auto my-auto">
//           <VictoryPie
//             width={450} // Set the width here (e.g., 400 pixels)
//             height={450} // Set the height here (e.g., 400 pixels)
//             // labelComponent={<VictoryTooltip />}
//             colorScale={colorData}
//             labelComponent={
//               <VictoryTooltip
//                 // flyoutWidth={75} // Set the tooltip width as needed
//                 flyoutHeight={50} // Set the tooltip height as needed
//                 style={customTooltipStyle} // Apply custom styles
//               />
//             }
//             data={activitiesData}
//           />
//           <ul>
//             <></>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Activities;

import React from "react";
import { useSelector } from "react-redux";
import { VictoryPie, VictoryTooltip, VictoryVoronoiContainer } from "victory";

function Activities() {
  const customTooltipStyle = {
    // fill: "white",
    stroke: "black",
    strokeWidth: 1,
    fontSize: 25, // Adjust the font size as needed
    padding: 0, // Adjust the padding as needed
  };

  const { episodes } = useSelector(state => state.user.user);

  const activities = episodes.map(item => item.activities);
  const activitiesArray = activities.join(",").split(",");

  // Creates the array needed to dynamically update the chart
  const finalActivities = activitiesArray.reduce((prevV, currV) => {
    if (!prevV[currV]) prevV[currV] = 1;
    else prevV[currV]++;
    return prevV;
  }, {});

  // Converting the final array into a variable that the chart will use to visualize data
  const activitiesData = Object.keys(finalActivities).map(activity => ({
    x: activity,
    y: finalActivities[activity],
  }));

  const colorData = [
    "#5f8baf",
    "#a688fa",
    "#6b6aaf",
    "#ba88fa",
    "#88c7fa",
    "#e6e6ff",
    "#ceccff",
    "#e2fa88",
    "#908d96",
    "#965faf",
  ];

  return (
    <div className="mx-3 my-3 sm:px-10 h-full ">
      <div className="chart-container h-full flex flex-col items-start md:flex-row md:justify-between">
        <div className="  w-full md:w-7/12  sm:px-6 ">
          <div className=" rounded px-6 pb-2  flex flex-col justify-center" style={{ minHeight: "16rem" }}>
            <h2 className="py-2 text-sm text-center bg-bg-duration px-3 rounded font-semibold ">
              Activity pattern {episodes.length} episodes
            </h2>
            <ul className="tracking-wider">
              {activitiesData.map((item, i) => (
                <li
                  key={i}
                  className={` ${
                    i % 2 !== 0 ? "bg-bg-duration" : ""
                  } flex text-text-secondary text-sm  py-1 px-3 items-center`}
                >
                  {`${item.x.slice(0, 1).toUpperCase() + item.x.slice(1)}`}{" "}
                  <span className="inline-block ml-auto mr-2">{item.y}x</span>
                  <span className={` w-3 h-3`} style={{ backgroundColor: colorData[i] }}></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="chart mx-auto" style={{ display: "flex", justifyContent: "center" }}>
          <VictoryPie
            style={{ labels: { display: "none" } }}
            containerComponent={
              <VictoryVoronoiContainer
                style={{
                  touchAction: "auto",
                }}
              />
            }
            width={450} // Set the width here (e.g., 400 pixels)
            height={450} // Set the height here (e.g., 400 pixels)
            // labelComponent={<VictoryTooltip />}
            colorScale={colorData}
            data={activitiesData}
          />
          <ul>
            <></>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Activities;
