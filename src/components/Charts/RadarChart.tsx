import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);


interface RadarChartProps {
    data:{
        labels: Array<string>,
        datasets: Array<{
            label: string,
            data: Array<number>,
            backgroundColor: string,
            borderColor: string,
            borderWidth: number,
        }>
    }

}

const options = {
    scales: {
        r: {
            min: -1,
            max: 1,
            ticks: {
              
                font:{
                    size: 16
                },
                stepSize: 0.2,
                backdropColor: "rgba(255, 99, 132, 0)"
            },
            pointLabels: {
                font: {
                size: 16,
                }
            }
        }
    },
    tension: 0.5
}

export const RadarChart = (props:RadarChartProps) => {

    return <Radar data={props.data} options={options}/>
}

