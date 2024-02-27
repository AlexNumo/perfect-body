import {
  Wrapper,
  ListUnique
} from './Unique.styled';

const Unique = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  )
};

export default Unique;