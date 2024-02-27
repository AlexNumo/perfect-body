import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  /* justify-content: space-between;
  align-items: center; */
  border: 1px solid #ffffff;
  background-color: var(--background-color-section);
  width: calc(100% - 60px);
  /* height: 84px; */
  border-end-start-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  margin-bottom: 10px;
  @media (min-width: 769px) {
    width: calc(100% - 100px);
    height: 64px;
  }
`;