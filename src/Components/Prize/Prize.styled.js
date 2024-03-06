import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ffffff;
  background-color: var(--background-color-section);
  width: calc(100% - 60px);
  border-radius: var(--border-radius);
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;
  overflow: auto;
  h3{
    margin-top: 10px;
    margin-bottom: 5px;
    text-transform: uppercase;
    color: var(--main-color);
    font-size: 26px;
  }
  @media (min-width: 769px) {
    width: calc(100% - 100px);
  }
`;

export const JackpotStyle = styled.p`
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 10px;
`;

export const StyleIMG = styled(Image)`
  border-radius: var(--border-radius);
  width: 200px;
  height: 200px;
  margin-bottom: 15px;
  @media (min-width: 769px) {
    width: 400px;
    height: 400px;
  }
`;

export const WrapperInfoJackpot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: calc(100% - 50px);
`;

export const ParticipateBTN = styled.button`
  border-radius: var(--border-radius);
  background-color: var(--main-color);
  border: none;
  color: #ffffff;
`;