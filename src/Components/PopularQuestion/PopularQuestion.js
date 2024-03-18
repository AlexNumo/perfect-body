// import { VscClose } from "react-icons/vsc";
import { LiaPlusSolid } from "react-icons/lia";
import {
  Wrapper,
  WhiteLine,
  ButtonStyle,
  WrapperInfo,
  AnimatedIcon,
} from './PopularQuestion.styled';
import { useState } from "react";

const PopularQuestion = () => {
  const [openIndex, setOpenIndex] = useState(Array(10).fill(false)); // Масив станів для кожного питання
  const [iconTypes, setIconTypes] = useState(Array(10).fill("VscClose"));

  const dataQuestions = {
    0: {
      title: 'Які призи в колесі фортуни?',
      info: {
        name: 'Лише для VIP Пакету',
        list: ['Подорож в Карпати', 'Apple Watch', 'Dyson', 'Бьюті Бокс', 'Фітнес ризинки', 'Грошові призи', 'Гайд' ]
      }
    },
    1: {
      title: 'Скільки будуть коштувати продкукти?',
      info: 'Обидва наші меню створенні з використанням мінімальної продуктовий корзини,тому ти точно не будеш витрачати більше ніж зараз.'
    },
    2: {
      title: 'Як повернути свої кошти?',
      info: 'ЛИШЕ ДЛЯ VIP пакету з поверненням коштів не має ніякіх секретів. Протягом челенджу тобі потрібно буде завантажувати на платформу фотоколаж свого харчування за нашим меню, також знімати на таймлапс свої тренування (12 тренувань). В кінці челенджу ти зможеш заповнити анкету на повернення коштів, наш менеджер перевірить звіти твоєї їжі та якщо з ними все окей попросить у тебе звіт з тренувань. Якщо все добре ми повернемо тобі 90%  від вартості челенджу. p.s. ми всі люди,тому у нас будуть чіт міли,а також ми закриємо очі якщо в твоїх звітах будуть відсутні 3 прийому їжі. З приводу тренувань ми також не будемо прискіпливо перевіряти виконання вправ. Для нас головне, що ти його зробиш. Ми знаємо що для багатьох не існує кращої мотивації ніж щоденні звіти!'
    },
    3: {
      title: 'Якщо обмеження кількісті чаю чи кави щодня?',
      info: 'Ми маємо два види меню,в одному з них більші обмеження на каву в іншому їх не має. Напиши нам якщо для тебе кава дуже важлива.'
    },
    4: {
      title: 'Чи має значення, коли я виконуватиму тренування?',
      info: 'Ні,ти можеш виконувати тренування коли ти маєш час. Але бажано йти за планом та займатись через день.'
    },
    5: {
      title: 'Чи можна не виконувати розтяжку після тренування?',
      info: 'Так,але якщо дійсно не вистачає часу. Бажано завжди виконувати розтяжку!'
    },
    6: {
      title: 'Чи буде список продуктів, які потрібні для страв?',
      info: 'Так'
    },
    7: {
      title: 'А що всього за місяць реально привести себе  у форму?',
      info: 'Так,звичайно за місяць реально привести себе у форму! Головне почати прямо зараз!'
    },
    8: {
      title: 'Якщо я взагалі не спортивна людина, мені підійде інтенсивність тренувань?',
      info: 'Так,ти можеш виконувати тренування в своєму темпі та з паузами.'
    },
    9: {
      title: 'Скільки часу триватимуть тренування?',
      info: '20 - 30 хвилин + розтяжка.'
    },
  }

  const handleClick = (index) => {
    setOpenIndex(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
    setIconTypes(prevIconTypes => {
      const newIconTypes = [...prevIconTypes];
      newIconTypes[index] = prevIconTypes[index] === "open" ? "close" : "open";
      return newIconTypes;
    });
  };

  return (
    <Wrapper>
      <h3>Найпопулярніші запитання</h3>
      {Object.values(dataQuestions).map((item, index) => (
        <WhiteLine key={index}>
          <ButtonStyle 
            onClick={() => handleClick(index)} 
            isOpen={openIndex[index]}
          >
            {item.title}
            <AnimatedIcon isOpen={openIndex[index]}>
              {iconTypes[index] === "open" ?
                <LiaPlusSolid size={25} color="black" /> 
                :
                <LiaPlusSolid size={25} color="black"/>
              }
            </AnimatedIcon>
          </ButtonStyle>
          {openIndex[index] ? (
            <WrapperInfo isOpen={openIndex[index]}>
              <p>{item.info.name}</p>
              {item.info.list && item.info.list.length > 0 ? (
                <ul>
                  {item.info.list.map((list, listIndex) => (
                    <li key={listIndex}>{list}</li>
                  ))}
                </ul>
              ) : (
                <p>{item.info}</p>
              )}
            </WrapperInfo>
          ) : null}
        </WhiteLine>
      ))}
    </Wrapper>
  )
};

export default PopularQuestion;