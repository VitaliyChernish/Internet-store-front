import React, { useState, useEffect } from 'react';
import s from './timeleft.module.scss'

const TimeLeft = ({ expiryDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const targetDate = new Date(expiryDate).getTime();
    const timeLeft = targetDate - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [expiryDate]);

  return (
    <div className={s.main}>
        <div className={s.timeBlock}><span className={s.time}>{timeLeft.days}</span><span className={s.descr}>days</span></div>
        <div className={s.timeBlock}><span className={s.time}>{timeLeft.hours}</span><span className={s.descr}>hours</span></div>
        <div className={s.timeBlock}><span className={s.time}>{timeLeft.minutes}</span><span className={s.descr}>minutes</span></div>
        <div className={s.timeBlock}><span className={s.time}>{timeLeft.seconds}</span><span className={s.descr}>seconds</span></div>
    </div>
  );
};

export default TimeLeft;