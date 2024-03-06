import styled from "styled-components";
import Image from 'next/image';

export const SaleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end; /* Змінено з flex-end на flex-start */
  p {
    position: absolute;
    font-size: 25px;
    color: #ffffff;
    /* bottom: 14px;
    right: -7px; */
    top: 65px;
    left: 22px;
  }
`;

export const BTN = styled.button`
  background-color: #000000;
  color: #ffffff;
  border: none;
  padding: 15px 45px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const PositionAnimation = styled(Image)`
  position: absolute;
  width: 105px;
  height: 155px;
  top: 0;
  left: 0;
`;

export const RedBox = styled.div`
  position: absolute;
  background-color: #E30613;
  border-radius: 15px;
  width: 70px;
  height: 40px;
  top: 55px;
  left: 18px;
`;

export const WrapperPositionSalesOrder = styled.div`
  position: relative;
  top: -77px;
  left: -40px;
`;