import React from "react";
import { BarChart } from "../../../../../components/Charts/BarChart";
import { zip } from "../../../../../lib/sortingObjects";
import { selectRandomColor } from "../../../../../components/Charts/chartUtils";
import { useSelectedTrack } from "../../../Home";
import { FeaturesChartContainer, FeaturesChartTitle } from "./FeaturesChart.style";

interface FeaturesChartProps {
  data: { [feature: string]: number }[];
}

export const FeaturesChart = (props: FeaturesChartProps) => {
  const { selectedTracks } = useSelectedTrack();

  // const data = {
  // labels,
  // datasets: [
  //     {
  //     label: 'Dataset 1',
  //     data: labels.map(() => [1,2,3,4,5,6,7]),
  //     backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //     },
  //     {
  //     label: 'Dataset 2',
  //     data: labels.map(() => [1,2,3,4,5,6,7]),
  //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  // ],
  // };
  return (
    <>
    <FeaturesChartTitle>Features Chart</FeaturesChartTitle>
    <BarChart
        data={{
          labels: props.data.length > 0 ? Object.keys(props.data[0]) : [""],
          datasets: zip([props.data, selectedTracks]).map(
            ([genres, selectedTrack]) => {
              const randomColor = selectRandomColor();
  
              return {
                label: selectedTrack.name,
                data: Object.values(genres),
                backgroundColor: randomColor + "6F",
                borderColor: randomColor,
                borderWidth: 1,
              };
            }
          ),
        }}
      />
  </>
  );
};
