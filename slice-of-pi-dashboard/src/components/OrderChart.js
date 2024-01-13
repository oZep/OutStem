import React from 'react';
import OrderData from '../data/order_data.json';
import { Chart as ChartJS, ArcElement, Tooltip, CategoryScale, LinearScale, BarElement, Title, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Tooltip, CategoryScale, LinearScale, BarElement, Title, Legend);


const OrderChart = () => {
    const ordersPlaced = {};

    OrderData.forEach((order) => {  // Could just make this into a FN and let Bar + Order call it
        const store = order.store;
        if (!ordersPlaced[store]) {
            ordersPlaced[store] = 1;
        } else {
            ordersPlaced[store] += 1;
        }
    });



    const data = {
        labels: Object.keys(ordersPlaced),
        datasets: [
            {
                data: Object.values(ordersPlaced),
                backgroundColor: [        
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ]
            },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'left',
                labels: {
                    boxWidth: 36,
                    fontColor: 'black',
                },
            },
            title: {
                display: true,
                text: 'Orders Placed at Pizza Locations'
            }
        },
    };
    

    return (
        <div>
            <h2>Order Chart</h2>
            <div>
                <div className='bar-container'>
                    <Bar data={data} options={options}/>
                </div>
            </div>
        </div>
  );
};

export default OrderChart;

