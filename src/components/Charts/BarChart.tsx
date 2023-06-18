import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export interface BarChartProps {
    data:{
            labels: Array<string>,
            datasets: Array<{
                label: string,
                data: Array<number>,
                backgroundColor: string,
            }>
        }
}

export const options = {
  responsive: true,
  scales: {
   y:{
    title:{
      display: true,
      text: 'Value'
    }
   },
   x:{
    title:{
      display: true,
      text: 'Feature'
    }
   }
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Features of selected tracks',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => [1,2,3,4,5,6,7]),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => [1,2,3,4,5,6,7]),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function BarChart(props: BarChartProps) {
  return <Bar options={options} data={props.data} />;
}
