import styled from "styled-components";

export const Wrapper = styled.div`
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