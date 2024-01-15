import React from 'react';
import ReviewChart from './ReviewChart';
import OrderChart from './OrderChart';
import TotalDisplay from './TotalDisplay';

const Dashboard = () => {
  return (
    <div>
      <ReviewChart />
      <OrderChart />
      <TotalDisplay />
    </div>
  );
};

export default Dashboard;
