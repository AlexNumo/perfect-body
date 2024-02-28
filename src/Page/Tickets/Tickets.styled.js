import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* justify-content: start; */
  align-items: center;
  border: 1px solid #ffffff;
  background-color: var(--background-color-section);
  width: calc(100% - 60px);
  border-radius: var(--border-radius);
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 5px;
  h3{
    font-size: 25px;
  }
  ul{
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
  /* margin: 15px 0; */
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 15px 0;
`;