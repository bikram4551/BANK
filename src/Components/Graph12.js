import React from 'react'
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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [250,150,300,200,50,200,200],
      backgroundColor: 'rgba(57, 191, 60)',
    },
    {
      label: 'Dataset 2',
      data:  [190,150,300,200,50 ,45 ,280],
      backgroundColor: 'rgba(237, 227, 225)',
    },
  ],
};

const Graph12 = () => {

    return (
        <div>
             <Bar options={options} data={data} />
        </div>
    )
}

export default Graph12