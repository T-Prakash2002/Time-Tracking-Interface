import React, { useState, useEffect } from "react";
import { formatTime } from "./TimeConvert";

const Timer = ({project}) => {
  const [timeElapsed, setTimeElapsed] = useState(project.time);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);


  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive]);

  const handleStart = () => {
    setIsActive(!isActive);
  };
  const handleStartPause = () => {
    setIsActive(!isActive);
    setIsPaused(!isPaused)
  };

  const handleStop = () => {
    setTimeElapsed(0);
    setIsActive(false);
  };



  return (
    <div className="timer d-flex gap-3">
      
      <div className="timerCount px-4">{formatTime(timeElapsed)}</div>
      <div className="timerBtn">
        {timeElapsed!=0 ? (
        <>
          <button className="btn btn-secondary" onClick={handleStartPause}>
            {isPaused ? "Continue" : "Pause"}
          </button>
          <button className="btn btn-dark" onClick={handleStop}>Stop</button>
        </>
      ) : (
        <button className="btn startBtn" onClick={handleStart}>
            Start
        </button>
      )}
      </div>
    </div>
  );
};

export default Timer;
