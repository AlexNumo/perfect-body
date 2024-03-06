import styled from "styled-components";

export const Wrapper = styled.div`
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