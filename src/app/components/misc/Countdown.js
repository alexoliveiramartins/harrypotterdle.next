import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilNextDay());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilNextDay());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function getTimeUntilNextDay() {
    const now = new Date();
    const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    return nextDay - now;
  }

  function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours}h ${minutes}m ${seconds}s`;
  }

  return (
    <div>
      <p>{formatTime(timeLeft)}</p>
    </div>
  );
};

export default Countdown;
