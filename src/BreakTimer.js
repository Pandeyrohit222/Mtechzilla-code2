import React, { useState, useEffect } from 'react';
import './App.css'; 

const BreakTimer = () => {
  const [time, setTime] = useState(300); 
  const [isActive, setIsActive] = useState(true); 

  useEffect(() => {
    let interval;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <div className="break-timer-container">
      <h1 className="timer-heading">Break Timer</h1>
      <div className="timer-display">
        {Math.floor(time / 60)}:{time % 60 < 10 ? '0' : ''}{time % 60}
      </div>
    </div>
  );
};

export default BreakTimer;
