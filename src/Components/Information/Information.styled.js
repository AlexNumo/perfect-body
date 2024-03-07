import styled from "styled-components";

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