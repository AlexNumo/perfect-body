'use client'

import Countdown from "react-countdown";
// import { useTimer } from 'react-timer-hook';
import {
  Wrapper,
  InfoTimerGo,
  WrapperTimer
} from './Timer.styled';

const Timer = () => {
  // const today = new Date();
  const finishTimer = Date.now() + 10000;
  // finishTimer.setDate(today.getDate() + 2);
  // const finishTimer = today.setDate(today.getDate() + 2);
  // console.log(finishTimer)
  return (
    <Wrapper>
      <InfoTimerGo>
        <p>COME ON - унікальний спортивний челендж для схуднення!</p>
        <WrapperTimer>
          <Countdown date={finishTimer} />
        </WrapperTimer>
      </InfoTimerGo>
    </Wrapper>
  )
};

export default Timer;