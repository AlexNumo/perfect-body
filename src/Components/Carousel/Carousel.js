import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';
import Photo_1 from '../../../public/food/photo_1.jpeg';
import Photo_2 from '../../../public/food/photo_2.jpeg';
import Photo_3 from '../../../public/food/photo_3.jpeg';
import Photo_4 from '../../../public/food/photo_4.jpeg';
import Photo_5 from '../../../public/food/photo_5.jpeg';
import Photo_6 from '../../../public/food/photo_6.jpeg';
import {
  WrapperImage,
  WrapperCarousel
} from './Carousel.styled';

const Carousel = () => {
  const responsive = {
    0: { items: 3 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <WrapperImage>
      <Image
        src={Photo_1}
        onDragStart={handleDragStart}
        layout="fill"
        objectFit="cover"
        alt=''
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
      />
    </WrapperImage>,
    <WrapperImage>
      <Image
        src={Photo_2}
        onDragStart={handleDragStart}
        layout="fill"
        objectFit="cover"
        alt=''
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
      />
    </WrapperImage>,
    <WrapperImage>
      <Image
        src={Photo_3}
        onDragStart={handleDragStart}
        layout="fill"
        objectFit="cover"
        alt=''
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
      />
    </WrapperImage>,
    <WrapperImage>
      <Image
        src={Photo_4}
        onDragStart={handleDragStart}
        layout="fill"
        objectFit="cover"
        alt=''
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
      />
    </WrapperImage>,
    <WrapperImage>
      <Image
        src={Photo_5}
        onDragStart={handleDragStart}
        layout="fill"
        objectFit="cover"
        alt=''
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
      />
    </WrapperImage>,
    <WrapperImage>
      <Image
        src={Photo_6}
        onDragStart={handleDragStart}
        layout="fill"
        objectFit="cover"
        alt=''
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
      />
    </WrapperImage>
  ];

  return (
    <WrapperCarousel>
      <AliceCarousel
        animationDuration={10000}
        animationType='fadeout'
        autoPlay={true}
        autoPlayInterval={1}
        autoPlayStrategy='none'
        items={items}
        responsive={responsive}
        disableButtonsControls={true}
        disableDotsControls={true}
        infinite={true}
        controlsStrategy='responsive'
      />
    </WrapperCarousel>
  );
};

export default Carousel;
