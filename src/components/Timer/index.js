import React, { useState, useEffect } from 'react';
import { Statistic, Row, Col } from 'antd';

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2024-03-17T00:00:00Z').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setCountdown(0);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      textAlign: 'center',
      display: "flex",
      width: "100%",
      justifyContent: "center",
      flexWrap: 'wrap',
      background: "white"
    }}>
      <div>
        <Statistic title="Days" value={countdown.days} />
      </div>
      <div>
        <Statistic title="Hours" value={countdown.hours} />
      </div>
      <div>
        <Statistic title="Minutes" value={countdown.minutes} />
      </div>
      <div>
        <Statistic title="Seconds" value={countdown.seconds} />
      </div>
    </div>
  );
};

export default CountdownTimer;
