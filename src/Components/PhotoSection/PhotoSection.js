import photo_1 from '../../../public/photo/photo_1.jpg';
import {
  WrapperSection,
  ImageStyle
} from './PhotoSection.styled';

const PhotoSection = () => {
  return (
    <WrapperSection>
      <a
        href='/'
      >
        <ImageStyle
          src={photo_1}
          alt='Photo'
        />
    </a>
    </WrapperSection>
  )
};

export default PhotoSection;