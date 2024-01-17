import React from 'react';
import { CountUp } from 'use-count-up'

const CountUpToggle = ({total}) => {

    return (
        <div>
            <CountUp 
            end={total}
            duration={3}
            />
        </div>
  );
};
export default CountUpToggle;
