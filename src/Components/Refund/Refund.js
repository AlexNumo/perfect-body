import Image from 'next/image';
import Button from '../Button/Button';
import Cashback from '../../../public/photo/return-money.gif';
import {
  Wrapper,
  ContainerStyleIMG,
  // WrapperImage
} from './Refund.styled';

const Refund = () => {
  const linkTake = 'https://docs.google.com/forms/d/e/1FAIpQLSfEEBfrFO9F7eD7uTBGdnjORvt3eo_r8sIk2VMQCsUnX1pEBQ/viewform?usp=sf_link';
  const handleClick = (e) => {
    console.log(e.target.value);
  };

  return (
    <Wrapper>
      <h3>У нас все просто  <br /> СХУДНИ та ОТРИМАЙ КОШТИ назад.</h3>
      <p>Це нетиповий марафон! Ми зібрали корпорацію унікальних спеціалістів для тебе. Завдяки нашому досвіду ми впевнені, що наш контроль та мотивація допоможуть тобі схуднути.</p>
      <ContainerStyleIMG>
        <Image
          layout="fill"
          objectFit="cover"
          src={Cashback}
          alt='coocking food'
        />
      </ContainerStyleIMG>
      <Button
        link={linkTake}
        nameBTN='Умови повернення'
        onClick={handleClick}
      />
    </Wrapper>
  )
};

export default Refund;