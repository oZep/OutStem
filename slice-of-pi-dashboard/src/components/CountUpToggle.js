import React from 'react';
import CountUp  from 'react-countup';

const CountUpToggle = ({total}) => {

    return (
        <div style={{ fontSize: "50px" }}>
            <CountUp 
                start={0}
                end={total}
                duration={1}
            />
        </div>
  );
};
export default CountUpToggle;
