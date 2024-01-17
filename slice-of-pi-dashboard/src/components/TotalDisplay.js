import React from 'react';
import CountUpToggle from './CountUpToggle';
import PricingData from '../data/pricing_data.json';
import OrderData from '../data/order_data.json';




const TotalDisplay = () => {

    // gandTotal, KanataTotal, OrleansTotal, SandyHillTotal, TheGlebe
    const ordersPlaced = {};
    const moneyMade = {};
    let grandTotal = 0;

    OrderData.forEach((order) => {  
        const store = order.store; 
        order.items.forEach((items) => {
            const type = items.type;
            const size = items.size;
            ordersPlaced[store] = ordersPlaced[store] || {};
            ordersPlaced[store][type] = ordersPlaced[store][type] || {};
            ordersPlaced[store][type][size] = (ordersPlaced[store][type][size] || 0) + 1; // set the value or initalize

            moneyMade[store] = moneyMade[store] || 0; // set a standard count
            moneyMade[store] += PricingData[type][size];
            grandTotal += PricingData[type][size];

        });
    });

    /*
    const data = {
        // i want this to auto generate the couuptoggle depending on the # of keys in the dictionary
    }
    */
    
    return (
        <div>
            <CountUpToggle value={grandTotal}/>
            <CountUpToggle value={moneyMade['Kanata']}/>
            <CountUpToggle value={moneyMade['Orleans']}/>
            <CountUpToggle value={moneyMade['Downtown']}/>
            <CountUpToggle value={moneyMade['Sandy Hill']}/>
            <CountUpToggle value={moneyMade['The Glebe']}/>
        </div>
  );
};

export default TotalDisplay;
