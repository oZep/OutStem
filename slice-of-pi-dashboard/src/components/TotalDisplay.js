import React from 'react';
import CountUpToggle from './CountUpToggle';
//import PricingData from '../data/pricing_data.json';
import OrderData from '../data/order_data.json';




const TotalDisplay = () => {

    // gandTotal, KanataTotal, OrleansTotal, SandyHillTotal, TheGlebe
    const ordersPlaced = {};

    OrderData.forEach((order) => {  
        const store = order.store; 
        const type = order.items.type;
        const size = order.items.zie;


        if (!ordersPlaced[store]) {  
            ordersPlaced[store] = {}; 
        } 
        
        if (!ordersPlaced[store][order.items.type]) {
            ordersPlaced[store][order.items.size] = 1;
        }
        else {
            ordersPlaced[store][order.items.size] += 1;
        }
    });

    // Organized like {Store: {"L": , "W": }}

    console.log(ordersPlaced)

    /*
    const totals = {}
    PricingData.forEach((price) => {
        if (price.type === "Pepperoni") {
            totals[price.type] = 0
        }
    })
    */
    

    return (
        <div>
            <CountUpToggle grandTotal/>
            <CountUpToggle KanataTotal/>
            <CountUpToggle OrleansTotal/>
            <CountUpToggle SandyHillTotal/>
            <CountUpToggle TheGlebe/>
        </div>
  );
};

export default TotalDisplay;
