import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 60px);
  border-radius: var(--border-radius);
  margin-bottom: 10px;
  margin-top: 10px;
  overflow: hidden;
  @media (min-width: 769px) {
    width: calc(100% - 100px);
  }
`;