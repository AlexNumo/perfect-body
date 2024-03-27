import styled from "styled-components";
import Image from "next/image";

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
  background: var(--main-color);
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

export const WrapperImage = styled.div`
  width: calc(100% - 60px);
  border-radius: var(--border-radius);
  overflow: hidden;
  position: relative;
  @media (min-width: 768px) {
    width: calc(100% - 100px);
  }
`;

export const ImageStyle = styled(Image)`
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
  }
`;

export const WrapperUniqueSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ffffff;
  background-color: var(--background-color-section);
  width: calc(100% - 60px);
  border-radius: var(--border-radius);
  margin-bottom: 10px;
  margin-top: 10px;
  padding-top: 10px;
  h3{
    font-size: 25px;
  }
  @media (min-width: 769px) {
    width: calc(100% - 100px);
  }
`;

export const ListUnique = styled.ul`
  li {
    margin: 10px 25px;
    background: var(--main-color);
    border-radius: 12px;
    color: #ffffff;
  }
  li p{
    padding: 20px;
    font-size: 16px;
    font-weight: 700;
  }
  @media (min-width: 769px) {
    li p{
      font-size: 22px;
    }
  }
`;

export const WrapperVideoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 60px);
  height: 250px;
  border-radius: var(--border-radius);
  margin-bottom: 10px;
  margin-top: 10px;
  overflow: hidden;
  @media (min-width: 769px) {
    width: calc(100% - 100px);
    height: 400px;
  }
  @media (min-width: 1440px) {
    height: 600px;
  }
`;

export const WrapperTickets = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ffffff;
  background-color: var(--background-color-section);
  width: calc(100% - 60px);
  border-radius: var(--border-radius);
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 5px;
  h3 {
    font-size: 25px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  ul {
    list-style-type: circle;
    padding-left: 25px;
    padding-right: 15px;
    width: calc(100% - 30px);
    font-size: 15px;
    margin-bottom: 10px;
  }
  ul li {
    position: relative;
    margin-bottom: 5px;
  }
  ul li::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    bottom: -2px;
    border-bottom: 1px solid rgb(188, 183, 183);
  }
  @media (min-width: 769px) {
    width: calc(100% - 100px);
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  :first-child{
    text-decoration: line-through;
    text-decoration-thickness: 1px;
  }
  :last-child{
    font-size: 28px;
    font-weight: 700;
    color: var(--main-color);
  }
`;

export const BuyWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: auto;
`;

export const WrapperJackpot = styled.div`
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

export const WrapperInfo = styled.div`
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
  h3{
    font-size: 29px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  @media (min-width: 769px) {
    width: calc(100% - 100px);
  }
`;

export const WrapperListStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 15px;
  /* width: 100%; */
`;

export const InformationStyle = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 100px; */
  margin-bottom: 10px;
  div{
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* height: 80px; */
    :first-child{
      font-size: 20px;
      font-weight: 600;
    }
    p{
      width: 300px;
      margin-left: 10px;
      font-size: 12px;
    }
  }
`;

export const ListStyle = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: var(--main-color);
  p{
    font-size: 25px;
    font-weight: 700;
    color: #ffffff;
    position: absolute;
    top: 13px;
    left: 10px;
  }
`;

export const ContainerStyleIMG = styled.div`
  position: relative;
  width: 256px;
  height: 142px;
  border-radius: var(--border-radius);
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius);
  }
`;

export const ContainerStyleIMGRotate = styled.div`
  /* position: relative; */
  width: 157px;
  height: 229px;
  border-radius: var(--border-radius);
  transform: rotate(90deg);
  img {
    /* position: absolute; */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius);
    /* transform: rotate(90deg); */
  }
`;

export const WrapperFood = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  border: 1px solid #ffffff;
  background-color: var(--background-color-section);
  width: calc(100% - 60px);
  border-radius: var(--border-radius);
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;
  div{
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 15px;
  }
  h3{
    font-size: 22px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  @media (min-width: 769px) {
    width: calc(100% - 100px);
  }
`;

export const WrapperRefundMoney = styled.div`
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
  h3{
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
    /* margin-left: 15px; */
  }
  p{
    margin-left: 35px;
    margin-bottom: 15px;
  }
  @media (min-width: 769px) {
    width: calc(100% - 100px);
  }
`;
