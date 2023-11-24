import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



export default function LineChart({label,open,close}){
const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };
      
      const labels = label;
      
const data = {
        labels,
        datasets: [
          {
            label: 'Open',
            data: open,
            borderColor: '#148F77',
            backgroundColor: '#148F77',
          },
          {
            label: 'Close',
            data: close,
            borderColor: '#E67E22',
            backgroundColor: '#E67E22',
          }
        ],
      };
      
    return (<Line options={options} data={data} />);
 
}