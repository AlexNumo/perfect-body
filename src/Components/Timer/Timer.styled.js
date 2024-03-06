import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ffffff;
  background-color: var(--background-color-section);
  width: calc(100% - 60px);
  border-radius: var(--border-radius);
  margin-bottom: 10px;
  @media (min-width: 769px) {
    width: calc(100% - 100px);
  }
`;

export const InfoTimerGo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  width: 100%;
  p{
    font-family: var(--main-font-family);
    font-size: 20px;
    font-weight: 700;
  }
  @media (min-width: 769px) {
    width: 100%;
  }
`;

export const WrapperTimer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--main-color);
  border-radius: var(--border-radius);
  padding: 25px;
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 3px;
  width: calc(100% - 50px);
  margin: 10px 0;
  div p {
    font-size: 14px;
  }
  @media (min-width: 769px) {
    font-size: 58px;
    width: calc(100% - 50px);
    div p {
      font-size: 20px;
    }
  }
`;

export const Separation = styled.span`
  position: relative;
  top: -9px;
  right: 0;
  @media (min-width: 769px) {
    top: -15px;
  }
`;

export const ListInfoTimer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  letter-spacing: 0;
  margin-top: 50px;
  margin-left: 75px;
  p{
    font-family: var(--main-font-family);
    font-size: 14px;
    font-weight: 400;
  }
  @media (min-width: 769px) {
    width: calc(100% - 50px);
    justify-content: space-around;
    width: 380px;
    p{
      font-size: 28px;
      margin-top: 30px;
    }
  }
`;