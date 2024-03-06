import {
  Wrapper,
  WrapperListStyle,
  ListStyle,
  InformationStyle
} from './Information.styled';
import Button from '../Button/Button';

const Information = () => {
  const handleClick = (e) => { 
    console.log(e.target)
  }
  return (
    <Wrapper>
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
        nameBTN='Підібрати меню'
        onClick={handleClick}
      />
    </Wrapper>
  )
};

export default Information;