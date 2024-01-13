import React from 'react';
import ReviewData from '../data/review_data.json';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


/* 
fix for: 
Canvas is already in use. Chart with ID '0'
must be destroyed before the 
canvas with ID '' can be reused
AND
"arc" is not a registered element.
*/
ChartJS.register(ArcElement, Tooltip, Legend);


const ReviewChart = () => {

    const firstReview = ReviewData.length > 0 ? ReviewData[0] : null;
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
        cutout: "0%",
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'left',
                labels: {
                    boxWidth: 36,
                    fontColor: 'black',
                },
            },
        },
    };
    

    return (
        <div>
            <h2>Review Chart</h2>

            {firstReview && (
            <div>
                <h3>Reviews:</h3>
                <div className='pi-container'>
                    <Pie data={data} options={options}/>
                </div>
            </div>
            )}
        </div>
  );
};

export default ReviewChart;
