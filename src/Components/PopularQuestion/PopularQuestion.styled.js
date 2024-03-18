import styled, { keyframes } from "styled-components";

const rotateIn = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(60deg);
  }
`;

const rotateOut = keyframes`
  from {
    transform: rotate(60deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

// Анімація slideDown
const slideDownAnimation = keyframes`
  from {
    max-height: 0;
  }
  to {
    max-height: 500px; /* або інше значення, достатнє для відображення вмісту */
  }
`;

// Анімація slideUp
const slideUpAnimation = keyframes`
  from {
    max-height: 500px; /* або інше значення, достатнє для відображення вмісту */
  }
  to {
    max-height: 0;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  color: white;
  width: calc(100% - 60px);
  margin-bottom: 50px;
  h3{
    font-size: 22px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  @media (min-width: 769px) {
    width: calc(100% - 100px);
  }
`;

export const WhiteLine = styled.div`
  position: relative;
  width: 100%;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px; 
    background-color: white;
  }
  &:last-child:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px; 
    background-color: white;
  }
`;

export const ButtonStyle = styled.button`
  border: none;
  background-color: inherit;
  font-size: 16px;
  font-weight: 700;
  color: inherit;
  margin: 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0;
  text-align: start;
`;

export const WrapperInfo = styled.div`
  font-size: 14px;
  overflow: hidden;
  animation: ${({ isOpen }) => (isOpen ? slideDownAnimation : slideUpAnimation)} 1.7s;
  p {
    margin: 10px 0;
  }
  ul {
    margin: 10px 25px;
    list-style-type: disc;
  }
  li {
    margin: 5px 0;
  }
`;

export const AnimatedIcon = styled.div`
  display: inline-block;
  animation: ${({ isOpen }) => (isOpen ? rotateIn : rotateOut)} 0.3s forwards;
`;

