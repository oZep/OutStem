import React from 'react';
import PricingData from '../data/pricing_data.json';
import OrderData from '../data/order_data.json';
import CountUp  from 'react-countup';




const TotalDisplay = () => {

    // gandTotal, KanataTotal, OrleansTotal, SandyHillTotal, TheGlebe -- easy to copy and paste to keep track of places
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
            ordersPlaced[store][type][size] = (ordersPlaced[store][type][size] || 0) + 1; // initalize values so i dont get errors 
            // basically get the # of pizzas ordered by each type and size
            /*
              Kanata: {
                Cheese: {
                    S: 5,
                    M: 8,
                    L: 3
                },
            */

            moneyMade[store] = moneyMade[store] || 0; // set a base coutnt
            moneyMade[store] += PricingData[type][size]; // access price of each directly from json
            grandTotal += PricingData[type][size];

        });
    });

    /* did not even use
    const data = {
        // i want this to auto generate the couuptoggle depending on the # of keys in the dictionary
    }
    */
    
    return (
        <div className="center-text">
            <div style={{ fontSize: "40px" }}>
                <div>Total</div>
                <CountUp
                        start={0}
                        end={grandTotal}
                        duration={5}
                />
            </div>
            <div style={{ fontSize: "20px", display: "inline-block", margin: "10px" }}>
                <div>Kanata</div>
                <CountUp
                        start={0}
                        end={moneyMade['Kanata']}
                        duration={3}
                />
            </div>
            <div style={{ fontSize: "20px", display: "inline-block", margin: "10px" }}>
                <div>Orleans</div>
                <CountUp
                        start={0}
                        end={moneyMade['Orleans']}
                        duration={3}
                />
            </div>
            <div style={{ fontSize: "20px", display: "inline-block", margin: "10px" }}>
                <div>Downtown</div>
                <CountUp
                        start={0}
                        end={moneyMade['Downtown']}
                        duration={3}
                />
            </div> 
            <div style={{ fontSize: "20px", display: "inline-block", margin: "10px" }}>
                <div>Sandy Hill</div>
                <CountUp
                        start={0}
                        end={moneyMade['Sandy Hill']}
                        duration={3}
                />
            </div>
            <div style={{ fontSize: "20px", display: "inline-block", margin: "10px" }}>
                <div>The Glebe</div>
                <CountUp
                        start={0}
                        end={moneyMade['The Glebe']}
                        duration={3}
                />
            </div>
        </div>
  );
};

export default TotalDisplay;
