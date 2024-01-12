import React from 'react';
import OrderData from '../data/order_data.json';
import ReviewData from '../data/review_data.json';
import PricingData from '../data/pricing_data.json';

const Chart = () => {
  const firstOrder = OrderData.length > 0 ? OrderData[0] : null;
  const firstReview = ReviewData.length > 0 ? ReviewData[0] : null;
  const firstPricing = PricingData.length > 0 ? PricingData[0] : null;

  return (
    <div>
      <h2>First Index of Each File</h2>
      {firstOrder && (
        <div>
          <h3>First Order:</h3>
          <pre>{JSON.stringify(firstOrder, null, 2)}</pre>
        </div>
      )}

      {firstReview && (
        <div>
          <h3>First Review:</h3>
          <pre>{JSON.stringify(firstReview, null, 2)}</pre>
        </div>
      )}

      {firstPricing && (
        <div>
          <h3>First Pricing:</h3>
          <pre>{JSON.stringify(firstPricing, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Chart;
