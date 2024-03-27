'use client'
import Image from "next/image";
import Header from "@/Components/Header/Header";
import Menu from "@/Components/Menu/Menu";
import Footer from "@/Components/Footer/Footer";
import Participate from "@/Components/Participate/Participate";
import Countdown from "react-countdown";
import photo_1 from '../../../public/photo/photo_1.jpg';
import ReactPlayer from 'react-player';
import PayBTN from "@/Components/PayBTN/PayBTN";
import Crabs from '../../../public/photo/crabs.gif';
import Button from '../../Components/Button/Button';
import Carousel from "@/Components/Carousel/Carousel";
import Food_1 from '../../../public/food/coocking/food-anime-1.gif';
import Food_2 from '../../../public/food/coocking/food-anime-2.gif';
import Food_3 from '../../../public/food/coocking/food-anime-3.gif';
import Cashback from '../../../public/photo/return-money.gif';



import PhotoUsers from "@/Components/PhotoUsers/PhotoUsers";
import PopularQuestion from "@/Components/PopularQuestion/PopularQuestion";


import {
  Wrapper,
  InfoTimerGo,
  WrapperTimer,
  Separation,
  WrapperImage,
  ImageStyle,
  WrapperUniqueSection,
  ListUnique,
  WrapperVideoSection,
  PriceWrapper,
  BuyWrapper,
  WrapperTickets,
  WrapperJackpot,
  JackpotStyle,
  StyleIMG,
  WrapperInfoJackpot,
  WrapperInfo,
  WrapperListStyle,
  InformationStyle,
  ListStyle,
  ContainerStyleIMG,
  ContainerStyleIMGRotate,
  WrapperFood,
  WrapperRefundMoney,
} from './MainPage.styled';

const MainPage = () => {
  const urlVideo = 'https://www.youtube.com/watch?v=_d3LK6cmVXQ'
  const finishTimer = new Date('April 1, 2024 00:00:00').getTime();
  const linkTake = 'https://docs.google.com/forms/d/e/1FAIpQLSfEEBfrFO9F7eD7uTBGdnjORvt3eo_r8sIk2VMQCsUnX1pEBQ/viewform?usp=sf_link';
  const jackpot = '20 000';
  const textPrev = 'Харчування це 80% успіху при схудненні!'
  const textInformation ='Завдяки нашому досвіду ми знаємо, що харчування це дуже індивідуально. Хтось має багато часу для приготування їжі, а комусь його не вистачає, саме тому з однакових продуктів у вас буде можливість обрати одне з трьох варіантів складності приготування.'
  
  const dataTickets = {
    vip: {
      0: 'Можливість повернути свої кошти',
      1: 'Щоденні звіти харчування',
      2: 'Підтримка кураторів та однодумців в чаті',
      3: '12 функіональних тренувань для дому',
      4: '12 тренування для залу від Тані',
      5: 'Відео розтяжки після тренування',
      6: 'Рецепти корисних десертів',
      7: 'Відео Рецепти',
      8: 'Можливість виграти поїздку в Карпати',
      9: 'Індивідуальний план харчування',
      10: 'Прямий ефір від Sandrochka_strong',
      11: 'Постійна присутність Sandrochka_strong в чатах',
      12: 'Лекції від відомого психіатра',
      13: 'Медитації',
      14: 'Наукові статті про здорові відношень з їжею',
      15: 'Все про вітаміни та бади',
      16: 'Тест на розлад харчової поведінки',
      17: 'Інструкція як позбуватись целюліту',
      18: 'Відео як роби вакуум ',
    },
    light: {
      0: 'Індивідуальний план харчування',
      1: 'Підтримка кураторів та однодумців в чаті',
      2: '12 функіональних тренувань для дому',
      3: 'Постійна присутність Sandrochka_strong в чатах',
      4: 'Відео розтяжки після тренування',
      5: 'Рецепти корисних десертів',
      6: 'Відео Рецепти',
    }
  };

  const price = {
    vip: {
      old: '4600',
      new: '2400',
      currency: 'грн'
    },
    light: {
      old: '1700',
      new: '888',
      currency: 'грн'
    }
  };

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Час вийшов!</span>;
    } else {

      const addLeadingZero = (value) => {
        return value < 10 ? `0${value}` : value;
      };

      return (
        <WrapperTimer>
          <div>
            <span>{addLeadingZero(days)}</span>
            <p>Днів</p>
          </div>
          <Separation>:</Separation>
          <div>
            <span>{addLeadingZero(hours)}</span>
            <p>Годин</p>
          </div>
          <Separation>:</Separation>
          <div>
            <span>{addLeadingZero(minutes)}</span>
            <p>Хвилин</p>
          </div>
          <Separation>:</Separation>
          <div>
            <span>{addLeadingZero(seconds)}</span>
            <p>Секунд</p>
          </div>
        </WrapperTimer>
      );
    }
  };

  const handleClick = (e) => {
    console.log(e.target)
  };

  return (
    <>
      <Header />
      <Wrapper>
        <InfoTimerGo>
          <p>LETS GO - унікальний спортивний челендж для схуднення!</p>
          <Countdown date={finishTimer} renderer={renderer} />
          <p>Старт 1 квітня</p>
        </InfoTimerGo>
      </Wrapper>
      <WrapperImage>
        <a
          href='/'
        >
          <ImageStyle
            src={photo_1}
            alt='Photo'
          />
        </a>
      </WrapperImage>
      <WrapperUniqueSection>
        <h3>Наша унікальність!</h3>
        <ListUnique>
          <li>
            <p>
              Особистий кабінет зі зручним інтерфейсом
            </p>
          </li>
          <li>
            <p>
              Можливість повернути свої кошти, що дуже мотивує!
            </p>
          </li>
          <li>
            <p>
              Ми підбираємо ІНДИВІДУАЛЬНИЙ план харування що регулює гормони.
            </p>
          </li>
          <li>
            <p>
              Різні види складності меню в залежності від вашого часу та бажанню готувати.
            </p>
          </li>
        </ListUnique>
      </WrapperUniqueSection>
      <WrapperVideoSection>
        <ReactPlayer
          url={urlVideo}
          controls={true}
          width="100%"
          height="100%"
        />
      </WrapperVideoSection>
      <WrapperTickets>
        <h3>VIP пакет</h3>
        <ul>
          {dataTickets.vip && Object.values(dataTickets.vip).map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
        <PriceWrapper>
          <p>{price.vip.old} {price.vip.currency}</p>
          <p>{price.vip.new} {price.vip.currency}</p>
        </PriceWrapper>
        <BuyWrapper>
          <PayBTN
            oldPrice={price.vip.old}
            newPrice={price.vip.new}
          />
        </BuyWrapper>
        </WrapperTickets>
        <WrapperTickets>
        <h3>Light пакет</h3>
        <ul>
          {dataTickets.vip && Object.values(dataTickets.vip).map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
        <PriceWrapper>
          <p>{price.light.old} {price.light.currency}</p>
          <p>{price.light.new} {price.light.currency}</p>
        </PriceWrapper>
        <BuyWrapper>
          <PayBTN
            oldPrice={price.light.old}
            newPrice={price.light.new}
          />
        </BuyWrapper>
      </WrapperTickets>
      <WrapperJackpot>
        <h3>Головний приз</h3>
        <JackpotStyle>{jackpot} грн</JackpotStyle>
        <StyleIMG
          src={Crabs}
          alt='Mr. Crabs money'
          width='100%'
          height='100%'
        />
        <WrapperInfoJackpot>
          <p>За найкращий результат у схудненні ви отримаєте {jackpot} грн за перше місце та багато цінних призів за інші призові місця!</p>
        </WrapperInfoJackpot>
        <Button
          link={linkTake}
          nameBTN='Взяти участь'
          onClick={handleClick}
        />
      </WrapperJackpot>
      <WrapperInfo>
      <h3>Як взяти участь?</h3>
      <WrapperListStyle>
        <InformationStyle>
          <ListStyle>
            <p>1</p>
          </ListStyle>
          <div>
            <p>Заповнити анкету</p>
            <p>Заповни анкету і ми підберемо ІНДИВІДУАЛЬНИЙ раціон відповідно до твоїх цілей</p>
          </div>
        </InformationStyle>
        <InformationStyle>
          <ListStyle>
            <p>2</p>
          </ListStyle>
          <div>
            <p>Обрати пакет</p>
          </div>
        </InformationStyle>
        <InformationStyle>
          <ListStyle>
            <p>3</p>
          </ListStyle>
          <div>
            <p>Оплатити</p>
            <p>Оплатити онлайн з будь-якої країни світу</p>
          </div>
        </InformationStyle>
        <InformationStyle>
          <ListStyle>
            <p>4</p>
          </ListStyle>
          <div>
            <p>Увійти в особистий кабінет</p>
            <p>Після оплати на пошту тобі прийде лист з доступом до твого особистого кабінету</p>
          </div>
        </InformationStyle>
      </WrapperListStyle>
      <Button
        link={linkTake}
        nameBTN='Підібрати меню'
        onClick={handleClick}
      />
      </WrapperInfo>
      <Carousel />
      <WrapperFood>
        <div>
          <h3>Яке буде харчування?</h3>
          <p>
            {textPrev}<br/>
            {textInformation}        
          </p>
        </div>
        <ContainerStyleIMG>
          <Image
            layout="fill"
            objectFit="cover"
            src={Food_1}
            alt='coocking food'
          />
        </ContainerStyleIMG>
        <div>
          <h3>
            &bull; Відеорецепти
          </h3>
          <p>Для третього рівня складності у вас будуть відео рецепти.</p>
        </div>
        <ContainerStyleIMGRotate>
          <Image
            layout="fill"
            objectFit="cover"
            src={Food_2}
            alt='coocking food'
          />
        </ContainerStyleIMGRotate>
        <div>
          <h3>
            &bull; Корисні десерти
          </h3>
          <p>Для всіх пакетів у вас буде 10 рецептів з корисними десертами.</p>
        </div>
        <ContainerStyleIMG>
          <Image
            layout="fill"
            objectFit="cover"
            src={Food_3}
            alt='coocking food'
          />
        </ContainerStyleIMG>
      </WrapperFood>
      <WrapperRefundMoney>
        <h3>У нас все просто  <br /> СХУДНИ та ОТРИМАЙ КОШТИ назад.</h3>
        <p>Це нетиповий марафон! Ми зібрали корпорацію унікальних спеціалістів для тебе. Завдяки нашому досвіду ми впевнені, що наш контроль та мотивація допоможуть тобі схуднути.</p>
        <ContainerStyleIMG>
          <Image
            layout="fill"
            objectFit="cover"
            src={Cashback}
            alt='coocking food'
          />
        </ContainerStyleIMG>
        <Button
          link={linkTake}
          nameBTN='Умови повернення'
          onClick={handleClick}
        />
      </WrapperRefundMoney>
      <PhotoUsers/>
      <PopularQuestion/>
      <Footer />
      <Menu />
      <Participate />
    </>
  )
};

export default MainPage;