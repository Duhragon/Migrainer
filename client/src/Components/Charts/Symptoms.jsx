import { useSelector } from "react-redux";
import { VictoryPie, VictoryVoronoiContainer } from "victory";

function Symptoms() {
  const episodes = useSelector(state => state.episode.episode);

  const symptoms = episodes.map(item => item.symptoms);
  const symptomArray = symptoms.join(",").split(",");

  // Creates the array needed to dynamically update the chart
  const finalSymptoms = symptomArray.reduce((prevV, currV) => {
    if (!prevV[currV]) prevV[currV] = 1;
    else prevV[currV]++;
    return prevV;
  }, {});

  //Converting the final array into a variable that the chart will use to visualize data
  const symptomsData = Object.keys(finalSymptoms).map(symptom => ({
    x: symptom,
    y: finalSymptoms[symptom],
  }));

  //Colors array needed to assign to labels in chart
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
      <div className="chart-container h-fit flex flex-col md:flex-row md:justify-between">
        <div className="  w-full h-fit md:w-7/12  sm:px-6 flex-col justify-center items-center">
          <div className=" rounded px-6 pb-2  flex flex-col justify-center" style={{ minHeight: "16rem" }}>
            <h2 className="py-2  bg-bg-duration text-center px-3 font-semibold text-sm rounded">
              Symptom pattern in {episodes.length} episodes
            </h2>
            <ul className="tracking-wider">
              {symptomsData.map((item, i) => (
                <li
                  key={i}
                  className={` ${
                    i % 2 !== 0 ? "bg-bg-duration" : ""
                  } flex text-text-secondary text-sm  py-1 px-3 items-center`}
                >
                  {`${item.x.slice(0, 1).toUpperCase() + item.x.slice(1)} `}{" "}
                  <span className="inline-block  ml-auto mr-2">{item.y}x</span>
                  <span className={` w-3 h-3`} style={{ backgroundColor: colorData[i] }}></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="chart mx-auto">
          <VictoryPie
            style={{ labels: { fill: "none" } }}
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
            data={symptomsData}
          />

          <ul>
            <></>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Symptoms;
