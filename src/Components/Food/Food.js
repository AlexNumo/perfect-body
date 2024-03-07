import Image from "next/image";
import Food_1 from '../../../public/food/coocking/food-anime-1.gif';
import Food_2 from '../../../public/food/coocking/food-anime-2.gif';
import Food_3 from '../../../public/food/coocking/food-anime-3.gif';
import {
  Wrapper,
  ContainerStyleIMG,
  ContainerStyleIMGRotate
} from './Food.styled';

const Food = () => {
  const textPrev = 'Харчування це 80% успіху при схудненні!'
  const textInformation ='Завдяки нашому досвіду ми знаємо, що харчування це дуже індивідуально. Хтось має багато часу для приготування їжі, а комусь його не вистачає, саме тому з однакових продуктів у вас буде можливість обрати одне з трьох варіантів складності приготування.'
  return (
    <Wrapper>
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
    </Wrapper>
  )
};

export default Food;