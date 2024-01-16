import React from 'react';
import CountUpToggle from './CountUpToggle';
import PricingData from '../data/pricing_data.json';
import OrderData from '../data/order_data.json';




const TotalDisplay = () => {

    // gandTotal, KanataTotal, OrleansTotal, SandyHillTotal, TheGlebe
    const ordersPlaced = {};

    OrderData.forEach((order) => {  
        const store = order.store; 
        const type = order.items[0].type;
        const size = order.items[0].zie;

        // try directly matching to the same values in the other json file 
        if (!ordersPlaced[store]) {  
            ordersPlaced[store] = {}; 
        } 
        if (!ordersPlaced[store][type]) {
            ordersPlaced[store][type] = {};
        }
        if (!ordersPlaced[store][type][size]) {
            ordersPlaced[store][type][size] = 1;
        }
        else {
            ordersPlaced[store][type][size] += 1;
        }
    });

    

    // Organized like {Store: {"Cheese": {"S": 3, "L": 2}, "Pepperoni": {"

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
