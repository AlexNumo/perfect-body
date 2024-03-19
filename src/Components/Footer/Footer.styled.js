import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: calc(100% - 60px);
  margin-bottom: 50px;
  margin-top: 50px;
  &:before {
    content: "";
    position: absolute;
    top: -25px;
    width: 100vw;
    height: 2px; 
    background-color: #D69F8C;
  }
  p{
    text-align: center;
  }
  @media (min-width: 769px) {
    width: calc(100% - 100px);
  }
`;

export const WrapperLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 25px;
  margin-bottom: 15px;
`;

export const ImageLogo = styled(Image)`
  width: 160px;
  height: 51px;
`;

export const PersonalCabinetLink = styled.a`
  text-transform: uppercase;
  font-weight: 700;
  color: #555555;
  margin-top: 30px;
`;

export const WrapperLink = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  /* margin-top: 30px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  a{
    width: 150px;
    margin-top: 15px;
    text-align: center;
    font-weight: 400;
  }
`;

export const WrapperLinkSocial = styled.div`
  position: relative;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
  padding-top: 25px;
  div{
    padding: 10px;
    border: 1px solid;
    border-radius: 12px;
  }
  a{
    display: flex;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px; 
    background-color: white;
  }
`;

export const ImageMastercard = styled(Image)`
  width: 68px;
  height: 61px;
`;

export const WrapperLinkInfo = styled.div`
  color: #555555;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 25px;
  a:not(:first-child) {
    margin-top: 10px;
  }
`;

