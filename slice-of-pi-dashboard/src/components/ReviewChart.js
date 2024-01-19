import React from 'react';
import ReviewData from '../data/review_data.json';
import { Chart as ChartJS, ArcElement, Tooltip, Title, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


/* 
fix for: 
Canvas is already in use. Chart with ID '0'
must be destroyed before the 
canvas with ID '' can be reused
AND
"arc" is not a registered element.
*/
ChartJS.register(ArcElement, Tooltip, Title, Legend);


const ReviewChart = () => {
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
                data: Object.values(reviewsTotal),
                backgroundColor: [        
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(153, 102, 255, 0.4)',
                'rgba(255, 159, 64, 0.4)',
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
        cutout: "0%",
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    boxWidth: 36,
                    fontColor: 'black',
                },
            },
            title: {
                display: true,
                text: 'Reviews at the Slices of Pi'
            }
        },
    };
    

    return (
        <div className="center-text">
            <h2>Review Chart</h2>
            <div>
                <div className='pi-container'>
                    <Pie data={data} options={options}/>
                </div>
            </div>
        </div>
  );
};

export default ReviewChart;
