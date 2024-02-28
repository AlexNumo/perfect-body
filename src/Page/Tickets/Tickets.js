import {
  Wrapper,
  PriceWrapper,
  BuyWrapper
} from './Tickets.styled';
import PayBTN from "@/Components/PayBTN/PayBTN";

const Tickets = () => {
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
}
  return (
    <>
      <Wrapper>
        <h3>VIP пакет</h3>
        <ul>
          {dataTickets.vip && Object.values(dataTickets.vip).map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
        <PriceWrapper>
          {price.vip && Object.values(price.vip).map((item, index) => (
            <p key={index}>{item.price}</p>
          ))}
        </PriceWrapper>
        <BuyWrapper>
          <PayBTN/>
        </BuyWrapper>
        </Wrapper>
        <Wrapper>
        <h3>Light пакет</h3>
        <ul>
          {dataTickets.light && Object.values(dataTickets.light).map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
      </Wrapper>
    </>
  )
};

export default Tickets;