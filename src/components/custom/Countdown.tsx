import React, { useEffect, useState } from "react";
import FlipNumbers from "react-flip-numbers";

interface CountdownProps {
  targetDate: string; // target date for countdown
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // If countdown finished
  if (timeLeft.total <= 0) {
    return <div className="text-center text-xl">Time's up!</div>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {/* Days */}
      <CountdownCard label="DAYS" value={timeLeft.days} />
      {/* Hours */}
      <CountdownCard label="HOURS" value={timeLeft.hours} />
      {/* Minutes */}
      <CountdownCard label="MINUTES" value={timeLeft.minutes} />
      {/* Seconds */}
      <CountdownCard label="SECONDS" value={timeLeft.seconds} />
    </div>
  );
};

// Card component for each time unit
interface CardProps {
  label: string;
  value: number;
}

const CountdownCard: React.FC<CardProps> = ({ label, value }) => {
  // Pad single digit numbers with zero
  const displayValue = String(value).padStart(2, "0");

  return (
    <div>
      <FlipNumbers
        height={50}
        width={40}
        color="#000"
        play
        numbers={displayValue}
      />
      <span className="text-xs mt-1">{label}</span>
    </div>
  );
};

// Helper function to calculate remaining time
function getTimeLeft(target: string) {
  const now = new Date().getTime();
  const end = new Date(target).getTime();
  const total = end - now;

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { total, days, hours, minutes, seconds };
}
