import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.10);
  }
  100% {
    transform: scale(1);
  }
`;

export const WrapperBTN = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  right: 0;
  text-transform: uppercase;
  margin-right: 40px;
  margin-bottom: 40px;
  z-index: 99;
`;

export const LinkGoogleForm = styled.a`
  background-color: #000000;
  color: #ffffff;
  border: none;
  padding: 15px 35px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 22px;
  animation: ${pulse} 2s infinite; /* Використання анімації пульсації */
`;
