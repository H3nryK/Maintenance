import { useState, useEffect } from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import Layout from './layout';
import Logo from '../assets/logo.png';

const MaintenancePage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const endDate = new Date('2025-01-31T23:59:59');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="relative group">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-500">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {String(value).padStart(2, '0')}
          </div>
          <div className="text-sm font-medium text-blue-200 uppercase tracking-wider">
            {label}
          </div>
        </div>
        <div className="absolute inset-0 bg-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="relative min-h-screen overflow-hidden">
        <div className="relative min-h-screen flex flex-col items-center justify-center p-6 z-10">
          <div className="max-w-4xl w-full space-y-16 text-center">
            {/* Maintenance Icon */}
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping-slow blur-xl" />
              <div className="relative animate-float">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-full">
                <img src={Logo} alt="Logo" className="w-16 h-16 transform -rotate-12" />
              </div>
              </div>
            </div>

            {/* Title and Description */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
                Under Maintenance
              </h1>
              <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
                We're enhancing your experience with some magical improvements. 
                Our digital elves are hard at work!
              </p>
            </div>

            {/* Countdown */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
              <TimeUnit value={timeLeft.days} label="Days" />
              <TimeUnit value={timeLeft.hours} label="Hours" />
              <TimeUnit value={timeLeft.minutes} label="Minutes" />
              <TimeUnit value={timeLeft.seconds} label="Seconds" />
            </div>

            {/* Contact Button */}
            <div>
              <button
                onClick={() => window.location.href = 'mailto:support@olpmonitor.com'}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Need Help? Contact Support</span>
                <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const style = document.createElement('style');
style.textContent = `
  @keyframes ping-slow {
    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(-10px);
    }
    50% {
      transform: translateY(10px);
    }
  }

  @keyframes gradient-x {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .animate-ping-slow {
    animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-gradient-x {
    background-size: 200% 200%;
    animation: gradient-x 15s ease infinite;
  }
`;
document.head.appendChild(style);

export default MaintenancePage;