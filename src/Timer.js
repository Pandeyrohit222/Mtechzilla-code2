import React, { useState, useEffect } from 'react';
import BreakTimer from './BreakTimer';
import './App.css'; 

const Timer = () => {
  const [time, setTime] = useState(1500);
  const [isActive, setIsActive] = useState(false);

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

  const handleStartPause = () => {
    setIsActive(prevIsActive => !prevIsActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(1500);
  };

  return (
    <div className="timer-container">
      <h1>Timer</h1>
      <div className="time-display">
        {Math.floor(time / 60)}:{time % 60 < 10 ? '0' : ''}{time % 60}
      </div>
      <div className="button-container">
        <button className={`start-pause-button ${isActive ? 'pause' : 'start'}`} onClick={handleStartPause}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>
      {time === 0 && <BreakTimer />}
    </div>
  );
};

export default Timer;
