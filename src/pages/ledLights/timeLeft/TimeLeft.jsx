import React, { useState, useEffect } from 'react';
import s from './timeleft.module.scss'

//Щоб задати таймер, передай в функцію пропс: 
// let day = 2.5
//     const expiryDate = new Date();
//     expiryDate.setHours(expiryDate.getHours() + (day * 24));

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
      <div className={s.timeBlock}><span className={s.time}>{timeLeft.days}</span><span className={s.descr}>Днів</span></div>
      <div className={s.timeBlock}><span className={s.time}>{timeLeft.hours}</span><span className={s.descr}>Годин</span></div>
      <div className={s.timeBlock}><span className={s.time}>{timeLeft.minutes}</span><span className={s.descr}>Хвилин</span></div>
      <div className={s.timeBlock}><span className={s.time}>{timeLeft.seconds}</span><span className={s.descr}>Секунд</span></div>
    </div>
  );
};

export default TimeLeft;