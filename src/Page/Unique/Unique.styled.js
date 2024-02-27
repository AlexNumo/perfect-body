import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ffffff;
  background-color: var(--background-color-section);
  width: calc(100% - 60px);
  border-radius: var(--border-radius);
  margin-bottom: 10px;
  margin-top: 10px;
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
    background-color: var(--main-color);
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