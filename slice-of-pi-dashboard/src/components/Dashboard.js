import React from 'react';
import ReviewChart from './ReviewChart';
import OrderChart from './OrderChart'

const Dashboard = () => {
  return (
    <div>
      <h1>Slice of Pi Dashboard</h1>
      <ReviewChart />
      <OrderChart />
    </div>
  );
};

export default Dashboard;
