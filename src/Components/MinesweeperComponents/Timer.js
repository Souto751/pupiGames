//React
import React from 'react';
import TimeUp from 'react-countup';

//Component
export default function Timer() {
    return (
        <div>
            <TimeUp     
                start={0}
                end={999}
                duration={999}
                separator=" "
                decimals={0}
                decimal=","
                prefix=""
                suffix="   "
                onEnd={() => console.log('Ended! 👏')}
                onStart={() => console.log('Started! 💨')} 
                delay={0}
                
            >
                {({ countUpRef, start }) => (
                    <div>
                        <span ref={countUpRef} />
                    </div>
                )}
            </TimeUp>
        </div>
    )
}
