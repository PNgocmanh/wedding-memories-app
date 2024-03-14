import React, { useState, useEffect } from "react";
import { Statistic, Row, Col } from "antd";

import * as S from "./Timer.style";

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2024-03-17T00:00:00Z").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setCountdown(0);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <S.Container>
      <Row gutter={[16, 16]}>
        <Col xs={12} sm={12} md={6}>
          <Statistic title="Days" value={countdown.days} />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Statistic title="Hours" value={countdown.hours} />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Statistic title="Minutes" value={countdown.minutes} />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Statistic title="Seconds" value={countdown.seconds} />
        </Col>
      </Row>
    </S.Container>
  );
};

export default CountdownTimer;
