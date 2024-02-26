import styled from "styled-components";
import Image from 'next/image';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ffffff;
  background-color: var(--background-color-section);
  width: calc(100% - 60px);
  height: 84px;
  border-end-start-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  margin-bottom: 10px;
  @media (min-width: 769px) {
    width: calc(100% - 100px);
    height: 64px;
  }
`;

export const WrapperLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 25px;
`;

export const WrapperMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  button{
    font-family: var(--main-font-family);
    font-size: var(--main-font-size);
    font-weight: 700;
    border: none;
    background-color: inherit;
  }
  @media (min-width: 769px) {
    display: none;
  }
`;

export const ImageLogo = styled(Image)`
  width: 92px;
  height: 30px;
`;

export const NavigateStyle = styled.nav`
  display: none;
  @media (min-width: 769px) {
    display: flex;
    width: 100%;
    justify-content: space-around;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2px;
    ul{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 100%;
    }
  }
`;