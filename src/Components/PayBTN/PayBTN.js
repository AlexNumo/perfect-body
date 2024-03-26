import {
  BTN,
  SaleWrapper,
  PositionAnimation,
  RedBox,
  WrapperPositionSalesOrder
} from './PayBTN.styled';
import Sale from '../../../public/photo/sale.gif';
import Button from '../Button/Button';

const PayBTN = ({ oldPrice, newPrice }) => {
  const linkTake = 'https://docs.google.com/forms/d/e/1FAIpQLSfEEBfrFO9F7eD7uTBGdnjORvt3eo_r8sIk2VMQCsUnX1pEBQ/viewform?usp=sf_link';
  const checkPercentage = (oldPrice, newPrice) => {
    const discount = Math.round((oldPrice - newPrice) / oldPrice * 100);
    return discount;
  };

  const handleClick = (e) => {
    console.log(e.target)
  }
  return (
    <SaleWrapper>
      <Button
        link={linkTake}
        nameBTN='Оплатити'
        onClick={handleClick}
      />
      <WrapperPositionSalesOrder>
        <PositionAnimation
          src={Sale}
          alt='Sale'
          width='100%'
          height='100%'
        />
        <RedBox />
        <p>-{checkPercentage(oldPrice, newPrice)}%</p>
      </WrapperPositionSalesOrder>
    </SaleWrapper>
  )
};

export default PayBTN;