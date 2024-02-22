import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ffffff;
  background-color: #ffffff;
  width: 400px;
  height: 84px;
  border-end-start-radius: 15px;
  border-bottom-right-radius: 15px;
  margin-bottom: 10px;
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
  p{
    font-family: 'Times New Roman', Times, serif;
    font-size: 14px;
    font-weight: 700;
  }
`;