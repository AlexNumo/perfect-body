'use client';
import {
  Wrapper,
  StyleIMG,
  JackpotStyle,
  WrapperInfoJackpot,
  ParticipateBTN
} from './Prize.styled';
import Crabs from '../../../public/photo/crabs.gif';
import Button from '../Button/Button';

const Prize = () => {
  const linkTake = 'https://docs.google.com/forms/d/e/1FAIpQLSfEEBfrFO9F7eD7uTBGdnjORvt3eo_r8sIk2VMQCsUnX1pEBQ/viewform?usp=sf_link';
  const jackpot = '20 000';

  const handleClick = (e) => {
    console.log(e.target.value)
  }
  return (
    <Wrapper>
      <h3>Головний приз</h3>
      <JackpotStyle>{jackpot} грн</JackpotStyle>
      <StyleIMG
        src={Crabs}
        alt='Mr. Crabs money'
        width='100%'
        height='100%'
      />
      <WrapperInfoJackpot>
        <p>За найкращий результат у схудненні ви отримаєте {jackpot} грн за перше місце та багато цінних призів за інші призові місця!</p>
      </WrapperInfoJackpot>
      <Button
        link={linkTake}
        nameBTN='Взяти участь'
        onClick={handleClick}
      />
    </Wrapper>
  )
};

export default Prize;