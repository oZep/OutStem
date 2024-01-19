import React from 'react';
import PricingData from '../data/pricing_data.json';
import OrderData from '../data/order_data.json';
import CountUp  from 'react-countup';




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
