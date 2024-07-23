import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './index.css';

const languages = ['TypeScript', 'Python', 'TailwindCSS', 'JavaScript'];

const Countdown: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
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
      <h2 className="text-2xl">Website will be back in:</h2>
      <div className="text-4xl mt-3">
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500 text-white">
      <header className="py-5">
        <h1 className="text-4xl font-bold">Milimani High School</h1>
        <p className="text-xl mt-2">Our website is undergoing maintenance and security updates.</p>
      </header>
      <main className="flex flex-col items-center my-10">
        <Countdown targetDate={new Date('2024-12-31T00:00:00')} />
        <div className="flex flex-wrap justify-center mt-10">
          {languages.map((language, index) => (
            <motion.div
              key={index}
              className="m-3 p-3 bg-white text-gray-800 shadow-lg rounded"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: [0, 360, 0], transition: { duration: 2, repeat: Infinity } }}
            >
              {language}
            </motion.div>
          ))}
        </div>
      </main>
      <footer className="mt-auto py-5">
        <p>Contact us: info@milimanihighschool.co.ke</p>
        <div className="flex space-x-4 mt-2">
          <a href="#" className="text-blue-300">Twitter</a>
          <a href="#" className="text-blue-600">Facebook</a>
          <a href="#" className="text-red-600">YouTube</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
