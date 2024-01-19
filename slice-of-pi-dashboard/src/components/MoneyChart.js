import React from 'react';
import ReviewData from '../data/review_data.json';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';


ChartJS.register(ArcElement, Tooltip, Title, Legend);


const MoneyChart = () => { // get data values for each place for each month and calculate the total 
    const reviewsTotal = {};

    ReviewData.forEach((review) => {
        const sentiment = review.sentiment;
        if (!reviewsTotal[sentiment]) {
            reviewsTotal[sentiment] = 1;
        } else {
            reviewsTotal[sentiment] += 1;
        }
    });

// console.log("ReviewData:", reviewsTotal);
console.log("ReviewData:", Object.keys(reviewsTotal));
// console.log("ReviewData:", Object.values(reviewsTotal));


    const data = {
        labels: Object.keys(reviewsTotal),
        datasets: [
            {
                label: 'Total',
                data: dataValues,
                borderColor: 'rgba(54, 162, 235, 0.4)',
                backgroundColor: 'rgba(54, 162, 235, 1)',
              },
              {
                label: 'Kanata',
                data: dataValues,
                borderColor: 'rgba(255, 206, 86, .7)',
                backgroundColor: 'rgba(255, 206, 86, 1)',
              },
              {
                label: 'Orleans',
                data: dataValues,
                borderColor: 'rgba(75, 192, 192, 0.4)',
                backgroundColor: 'rgba(75, 192, 192, 1)',
              },
              {
                label: 'Sandy Hill',
                data: dataValues,
                borderColor: 'rgba(153, 102, 255, 0.4)',
                backgroundColor: 'rgba(153, 102, 255, 1)',
              },
              {
                label: 'The Glebe',
                data: dataValues,
                borderColor: 'rgba(255, 159, 64, 0.4)',
                backgroundColor: 'rgba(255, 159, 64, 1)',
              },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Total Money Made Per Month',
                },
        },
    };
    

    return (
        <div className='center-text'>
            <h2>Review Chart</h2>
            <div>
                <div className='pi-container'>
                    <Pie data={data} options={options}/>
                </div>
            </div>
        </div>
  );
};

export default MoneyChart;
