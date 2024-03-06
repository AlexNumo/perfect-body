import Image from "next/image";
import styled from "styled-components";
import photo_1 from '../../../public/photo/photo_1.jpg';

export const WrapperSection = styled.div`
  width: calc(100% - 60px);
  border-radius: var(--border-radius);
  overflow: hidden;
  position: relative;
  @media (min-width: 768px) {
    width: calc(100% - 100px);
  }
`;

export const ImageStyle = styled(Image)`
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
  }
`;