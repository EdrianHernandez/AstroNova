import React, { useState, useEffect } from 'react';
import { Rocket, Timer } from 'lucide-react';

const MissionCountdown = () => {
  // Set target date to 3 days from now for demo purposes
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    date.setHours(date.getHours() + 14);
    return date.getTime();
  });

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center mx-2 md:mx-6">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-space-800 border border-space-700 w-20 h-24 md:w-32 md:h-40 rounded-lg flex items-center justify-center shadow-2xl launch-timer">
          <span className="font-mono text-4xl md:text-7xl font-bold text-white tracking-widest">
            {value.toString().padStart(2, '0')}
          </span>
        </div>
      </div>
      <span className="mt-4 font-mono text-xs md:text-sm text-accent-cyan tracking-[0.2em] uppercase">{label}</span>
    </div>
  );

  return (
    <section className="relative w-full py-16 px-4 flex flex-col items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="z-10 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-8 animate-fade-in-down">
          <Rocket className="w-6 h-6 text-accent-cyan" />
          <h2 className="font-mono text-lg md:text-xl text-gray-300 tracking-widest uppercase">
            Next Mission: <span className="text-white font-bold">Artemis II Orbital Test</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-start mb-10">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>

        <div className="flex gap-4">
          <button className="px-8 py-3 bg-transparent border border-accent-cyan text-accent-cyan font-mono text-sm tracking-wider uppercase hover:bg-accent-cyan hover:text-black transition-all duration-300 rounded">
            Mission Details
          </button>
          <button className="px-8 py-3 bg-accent-purple text-white font-mono text-sm tracking-wider uppercase hover:bg-white hover:text-accent-purple transition-all duration-300 rounded shadow-[0_0_15px_rgba(112,0,255,0.5)]">
            Set Reminder
          </button>
        </div>
      </div>
    </section>
  );
};

export default MissionCountdown;
