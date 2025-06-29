"use client";

import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-10-26T09:00:00') - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) {
    return null;
  }
  
  const timerComponents = Object.keys(timeLeft).map((interval) => {
    const value = timeLeft[interval as keyof typeof timeLeft];
    return (
      <div key={interval} className="flex flex-col items-center mx-2 p-3 bg-white/10 backdrop-blur-sm rounded-lg min-w-[70px]">
        <span className="text-4xl font-bold">{String(value).padStart(2, '0')}</span>
        <span className="text-sm uppercase">{interval}</span>
      </div>
    );
  });

  return (
    <div className="flex justify-center text-white">
      {timerComponents.length ? timerComponents : <span>Event has started!</span>}
    </div>
  );
};

export default CountdownTimer;
