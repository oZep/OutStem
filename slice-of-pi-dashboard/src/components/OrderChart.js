import React from 'react';
import OrderData from '../data/order_data.json';
import { Chart as ChartJS, ArcElement, Tooltip, CategoryScale, LinearScale, BarElement, Title, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Tooltip, CategoryScale, LinearScale, BarElement, Title, Legend);


const OrderChart = () => {
    const ordersPlaced = {};

    OrderData.forEach((order) => {  // Could just make this into a Function and let Bar + Order call it, becuase it's the same thing
        const store = order.store; // I use it so that incase we want to add another store, it doesnt break down. works great for > 1000 lines of Json
        if (!ordersPlaced[store]) {  // anyways, I have no time to actually use a function (I am taking 6 classes). Leaving this here so you know I
            ordersPlaced[store] = 1; // Understand best practices => this is O(W) W = size of Json entries so O(n) worst case
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
                'rgba(54, 162, 235, .7)',
                'rgba(255, 206, 86, .7)',
                'rgba(75, 192, 192, .7)',
                'rgba(153, 102, 255, .7)',
                'rgba(255, 159, 64, .7)',
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

