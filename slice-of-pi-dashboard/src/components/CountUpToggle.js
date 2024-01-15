import React from 'react';
import { CountUp } from 'use-count-up'

const CountUpToggle = (total) => {

    return (
        <div>
            <CountUp 
            isCounting end={total} 
            duration={3.2}
            />
        </div>
  );
};
export default CountUpToggle;
