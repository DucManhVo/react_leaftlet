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
import Axios from 'axios';
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
            data: [5, 6, 7, 1, 2, 5, 9],
            backgroundColor: 'rgba(255, 99, 132)',
        },
        {
            label: 'Dataset 2',
            data: [3, 4, 2, 5, 7, 1, 9],
            backgroundColor: 'rgba(53, 162, 235)',
        },
    ],
};

const Charts = () => {
    return (



        <div className='container mx-5 my-5'>
            <Bar options={options} data={data} />
        </div>
    )
}

export default Charts