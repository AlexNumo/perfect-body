'use client'

import Countdown from "react-countdown";
import {
  Wrapper,
  InfoTimerGo,
  WrapperTimer,
  Separation,
  ListInfoTimer
} from './Timer.styled';

const Timer = () => {
  const finishTimer = Date.now() + 1000000;

  // Власний renderer для Countdown
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Час вийшов!</span>;
    } else {

      const addLeadingZero = (value) => {
        return value < 10 ? `0${value}` : value;
      };

      return (
        <WrapperTimer>
          <div>
            <span>{addLeadingZero(days)}</span>
            <p>Днів</p>
          </div>
          <Separation>:</Separation>
          <div>
            <span>{addLeadingZero(hours)}</span>
            <p>Годин</p>
          </div>
          <Separation>:</Separation>
          <div>
            <span>{addLeadingZero(minutes)}</span>
            <p>Хвилин</p>
          </div>
          <Separation>:</Separation>
          <div>
            <span>{addLeadingZero(seconds)}</span>
            <p>Секунд</p>
          </div>
        </WrapperTimer>
      );
    }
  };


  return (
    <Wrapper>
      <InfoTimerGo>
        <p>COME ON - унікальний спортивний челендж для схуднення!</p>
        <Countdown date={finishTimer} renderer={renderer} />
        <p>Старт 26 лютого</p>
      </InfoTimerGo>
    </Wrapper>
  )
};

export default Timer;
