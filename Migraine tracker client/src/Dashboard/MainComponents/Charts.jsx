// import React from "react";
// import ReactDOM from "react-dom";
// import { VictoryPie, VictoryTooltip } from "victory";

// function Charts() {
//   return (
//     <div className="h-screen bg-bg-third m-3 rounded">
//       <h1 className="">Analysis</h1>
//       <div className=" flex p-3 w-full">
//         <div
//           style={{ height: "400px" }}
//           className="w-screen flex flex-col  p-3 md:flex-row md:justify-around justify-start items-center"
//         >
//           <div className="w-6/12 bg-bg-primary">
//             <h1>hey</h1>
//             <h1>hey</h1>
//             <h1>hey</h1>
//             <h1>hey</h1>
//             <h1>hey</h1>
//             <h1>hey</h1>
//             <h1>hey</h1>
//             <h1>hey</h1>
//             <h1>hey</h1>
//             <h1>hey</h1>
//             <h1>hey</h1>
//             <h1>hey</h1>
//             <h1>hey</h1>
//             <h1>hey</h1>
//           </div>

//           <div>
//             <VictoryPie
//               width={400} // Set the width here (e.g., 400 pixels)
//               height={400}
//               labelComponent={<VictoryTooltip />}
//               colorScale={["#46424f", "#ba9ffb", "#908d96", "cyan", "navy"]}
//               data={[
//                 { x: "Cats", y: 10, label: "10" },
//                 { x: "Dogs", y: 40 },
//                 { x: "Birds", y: 55 },
//               ]}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Charts;

// // const CustomLabel = props => {
// //   return (
// //     <g>
// //       <VictoryLabel {...props} />
// //       <VictoryTooltip
// //         {...props}
// //         x={200}
// //         y={250}
// //         orientation="top"
// //         pointerLength={0}
// //         cornerRadius={50}
// //         flyoutWidth={100}
// //         flyoutHeight={100}
// //         flyoutStyle={{ fill: "black" }}
// //       />
// //     </g>
// //   );
// // };

// // CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;

// // function Charts() {
// //   return (
// //     <div className="bg-bg-third m-3 rounded ">
// //       <div className="max-fit flex justify-around items-center">
// //         <div>
// //           <h1 className="py-3 px-6">Analysis</h1>
// //           <p>You have reported so far 6 episodes.</p>
// //           <p>In these episodes, you have experienced some recurring symptoms..</p>
// //         </div>
// //         <div style={{ height: "350px" }}>
// //           <VictoryPie
// //             style={{ labels: { fill: "white" } }}
// //             innerRadius={100}
// //             labelRadius={120}
// //             labels={({ datum }) => `# ${datum.y}`}
// //             labelComponent={<CustomLabel />}
// //             data={[
// //               { x: 1, y: 5 },
// //               { x: 2, y: 4 },
// //               { x: 3, y: 2 },
// //               { x: 4, y: 3 },
// //               { x: 5, y: 1 },
// //             ]}
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

import React from "react";
import { VictoryPie, VictoryTooltip } from "victory";
// import "../../index.css";
// Import your CSS file for styling

function Charts() {
  const customTooltipStyle = {
    // fill: "white",
    stroke: "black",
    strokeWidth: 2,
    fontSize: 25, // Adjust the font size as needed
    // padding: 2, // Adjust the padding as needed
  };

  return (
    <div className="bg-bg-third m-3 h-full rounded">
      <div className="chart-container h-full flex flex-col md:flex-row md:justify-between">
        <div className="  w-full h-fit md:w-7/12  md:mx-6 flex flex-col justify-center items-center">
          <h1 className="p-6 text-3xl font-bold  tacking-wider">Analysis</h1>
          <div>
            <p>So far you have experience 10 episides.</p>
            <p>So far you have experience 10 episides.</p>
            <p>So far you have experience 10 episides.</p>
            <p>So far you have experience 10 episides.</p>
            <p>So far you have experience 10 episides.</p>
          </div>
        </div>
        <div className="chart mx-auto">
          <VictoryPie
            width={450} // Set the width here (e.g., 400 pixels)
            height={450} // Set the height here (e.g., 400 pixels)
            // labelComponent={<VictoryTooltip />}
            colorScale={["#46424f", "#ba9ffb", "#908d96", "cyan", "navy"]}
            labelComponent={
              <VictoryTooltip
                flyoutWidth={100} // Set the tooltip width as needed
                flyoutHeight={100} // Set the tooltip height as needed
                style={customTooltipStyle} // Apply custom styles
              />
            }
            data={[
              { x: "Cats", y: 10, label: "10" },
              { x: "Dogs", y: 40 },
              { x: "Birds", y: 55 },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Charts;
