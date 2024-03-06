import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';
import Photo_1 from '../../../public/food/photo_1.jpeg';
import Photo_2 from '../../../public/food/photo_2.jpeg';
import Photo_3 from '../../../public/food/photo_3.jpeg';
import Photo_4 from '../../../public/food/photo_4.jpeg';
import Photo_5 from '../../../public/food/photo_5.jpeg';
import Photo_6 from '../../../public/food/photo_6.jpeg';


const Carousel = () => {
  const responsive = {
    0: { items: 3 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div style={{height: '150px', overflow: 'auto'}}>
    <Image
      max-width='100%'
      max-height='100%'
      src={Photo_1}
      onDragStart={handleDragStart}
      role="presentation"
      /></div>,
    <div style={{height: '150px'}}>
    <Image
      max-width='100%'
      max-height='100%'
      src={Photo_2}
      onDragStart={handleDragStart}
      role="presentation"
    /></div>,
    <div style={{height: '150px'}}>
    <Image
      max-width='100%'
      max-height='100%'
      src={Photo_3}
      onDragStart={handleDragStart}
      role="presentation"
      /></div>,
    <div style={{height: '150px'}}>
    <Image
      max-width='100%'
      max-height='100%'
      src={Photo_5}
      onDragStart={handleDragStart}
      role="presentation"
      /></div>,
    <div style={{height: '150px'}}>
    <Image
      max-width='100%'
      max-height='100%'
      src={Photo_6}
      onDragStart={handleDragStart}
      role="presentation"
      /></div>,

  ];
  // const items = [
  //   <div className="item" data-value="1">1</div>,
  //   <div className="item" data-value="2">2</div>,
  //   <div className="item" data-value="3">3</div>,
  //   <div className="item" data-value="4">4</div>,
  //   <div className="item" data-value="5">5</div>,
  // ];
  return (
    <div style={{width: '100%', height: '100px'}} className="carousel-container">
       <AliceCarousel
        mouseTracking
        items={items}
        // paddingLeft={50}
        // paddingRight={50}
        responsive={responsive}
      />
    </div>
  );
};

export default Carousel;
