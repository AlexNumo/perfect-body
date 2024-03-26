import styled, { keyframes } from "styled-components";

const slideInAnimation = keyframes`
  from {
    transform: translateX(-150px);
  }

  to {
    transform: translateX(0);
  }
`;

const slideOutAnimation = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-150px);
  }
`;

export const WrapperMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 99;
`;

export const MenuPosition = styled.div`
  position: fixed;
  background: var(--main-color);
  color: #ffffff;
  width: 150px;
  height: 100%;
  padding: 42px 25px 25px 25px;
  animation: ${({ $isOpen }) => $isOpen ? slideInAnimation : slideOutAnimation} 0.5s;
`;

export const ClosePosition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 7px;
`;

export const NavigateStyle = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  margin-top: 30px;
  li {
    margin-bottom: 20px;
  }
`;

export const Cabinet = styled.div`
  position: absolute;
  bottom: 125px;
  padding: 5px 0px;
  width: 145px;
  height: 48px;
  background-color: inherit;
  color: #ffffff;
  border: 1px solid #ffffff;
  text-align: center;
  font-family: var(--main-font-family);
  font-weight: 700;
  font-size: 19px;
  word-wrap: break-word;
  border-radius: 8px;
`;
