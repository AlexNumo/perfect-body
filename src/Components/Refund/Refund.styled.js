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
    font-size: 22px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  @media (min-width: 769px) {
    width: calc(100% - 100px);
  }
`;