import React, { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function getTimeLeft() {
    const difference = +targetDate - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <div className="text-center mt-5">
      <h2 className="text-2xl font-bold">Website will be back in:</h2>
      <div className="flex justify-center text-4xl mt-3 space-x-2">
        <div className="p-2 bg-primary rounded-lg">
          <span>{timeLeft.days}</span>
          <span className="block text-sm">Days</span>
        </div>
        <div className="p-2 bg-primary rounded-lg">
          <span>{timeLeft.hours}</span>
          <span className="block text-sm">Hours</span>
        </div>
        <div className="p-2 bg-primary rounded-lg">
          <span>{timeLeft.minutes}</span>
          <span className="block text-sm">Minutes</span>
        </div>
        <div className="p-2 bg-primary rounded-lg">
          <span>{timeLeft.seconds}</span>
          <span className="block text-sm">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
