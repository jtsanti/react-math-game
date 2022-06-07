import React, {useEffect} from 'react';

function Timer({timeLeft, setTimeLeft}) {
    
  useEffect(() => {
    const timer = setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
      }, 1000);
    return () => {
      clearInterval(timer); 
    }
  }, []);

    return (
        <strong>Time: {timeLeft}</strong>
    )
}

export default Timer;