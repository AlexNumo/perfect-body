import {
  BTN,
  SaleWrapper,
  PositionAnimation,
  RedBox,
  WrapperPositionSalesOrder
} from './PayBTN.styled';
import Sale from '../../../public/photo/sale.gif';
import Button from '../Button/Button';

const PayBTN = ({oldPrice, newPrice}) => {
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