import { useEffect, useState } from "react";
import "./timer.css";

const Timer = () => {
  const [time, setTime] = useState(0);
  let interval;

  const timerHandler = () => {
    interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };

  useEffect(() => {
    timerHandler();
    return () => clearInterval(interval);
  }, [time]);
  return <div className="timer">{time}</div>;
};

export default Timer;
