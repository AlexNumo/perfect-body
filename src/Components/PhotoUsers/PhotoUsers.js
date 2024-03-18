import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Result_1 from '../../../public/result/result_1.jpeg';
import Result_2 from '../../../public/result/result_2.jpeg';
import {
  Wrapper,
  WrapperImage,
  WrapperCarousel
} from './PhotoUsers.styled';

const PhotoUsers = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <WrapperImage key={1}>
      <Image
        src={Result_1}
        onDragStart={handleDragStart}
        layout="fill"
        objectFit="cover"
        alt=''
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
      />
    </WrapperImage>,
    <WrapperImage key={2}>
      <Image
        src={Result_2}
        onDragStart={handleDragStart}
        layout="fill"
        objectFit="cover"
        alt=''
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
      />
    </WrapperImage>,
  ];

  return (
    <Wrapper>
      <h3>Тут можуть бути твої фото</h3>
      <WrapperCarousel>
        <AliceCarousel
          // animationDuration={100}
          animationType='slide'
          // autoPlay={true}
          autoPlayInterval={1}
          // autoPlayStrategy='none'
          items={items}
          responsive={responsive}
          // disableButtonsControls={true}
          disableDotsControls={true}
          infinite={true}
          controlsStrategy='responsive'
          // paddingLeft={20}
        />
      </WrapperCarousel>
    </Wrapper>
  )
};

export default PhotoUsers;
