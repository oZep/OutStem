import React from 'react';
import OrderData from '../data/order_data.json';
import pricingData from '../data/pricing_data.json';
import { Chart as ChartJS, Title, Tooltip, Legend, LineController, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(Title, Tooltip, Legend, LineController, CategoryScale, LinearScale, PointElement, LineElement);


const MoneyChart = () => {
    const pricingChart = pricingData;
    const orderData = OrderData;
    const moneyPerMonth = {
        Kanata: Array(12).fill(0),
        Orleans: Array(12).fill(0),
        'Sandy Hill': Array(12).fill(0),
        'The Glebe': Array(12).fill(0),
        Downtown: Array(12).fill(0), 
    };

    orderData.forEach((order) => {
        const store = order.store;
        const month = new Date(order.date).getMonth();
        order.items.forEach((item) => {
            const type = item.type;
            const size = item.size;
            const price = pricingChart[type][size];
            moneyPerMonth[store][month] += price;
        });
    });

    // Colors sourced from ChatGPT becuase I am tired

    const getBorderColor = (index) => {
        const colors = ['rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];
        return colors[index % colors.length];
    };
    
    // Colors sourced from ChatGPT becuase I am tired
    const getBackgroundColor = (index) => {
        const colors = ['rgba(54, 162, 235, 0.4)', 'rgba(255, 206, 86, 0.4)', 'rgba(75, 192, 192, 0.4)', 'rgba(153, 102, 255, 0.4)', 'rgba(255, 159, 64, 0.4)'];
        return colors[index % colors.length];
    };

    const data = {
        labels: Array.from({ length: 12 }, (_, i) => i + 1),
        datasets: Object.keys(moneyPerMonth).map((store, index) => ({
            label: store,
            data: moneyPerMonth[store],
            borderColor: getBorderColor(index), 
            backgroundColor: getBackgroundColor(index),
        })),
    };


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Total Money Made Per Month for Each Company',
            },
        },
    };

  return (
    <div className='center-text'>
        <h2>Money Chart</h2>
        <div>
        <div className='line-container bar-container'>
            <Line data={data} options={options} />
        </div>
        </div>
    </div>
    );
};

export default MoneyChart;
