'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/logo/logo.png';
import {
  Wrapper,
  WrapperLogo,
  WrapperMenu
} from './Header.styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import sharp from 'sharp'; // Імпортуємо пакет sharp

const Header = () => {
  const [optimizedLogo, setOptimizedLogo] = useState(null);

  useEffect(() => {
    // Функція для оптимізації зображення за допомогою sharp
    const optimizeImage = async () => {
      try {
        // Оптимізуємо зображення
        const optimizedImageBuffer = await sharp(logo)
          .resize(92, 30) // Змінюємо розмір до 92x30 пікселів
          .toBuffer(); // Конвертуємо оптимізоване зображення в буфер

        // Створюємо об'єкт URL з буфера зображення
        const optimizedImageUrl = URL.createObjectURL(
          new Blob([optimizedImageBuffer], { type: 'image/png' })
        );

        // Встановлюємо URL оптимізованого зображення як src для зображення
        setOptimizedLogo(optimizedImageUrl);
      } catch (error) {
        console.error('Помилка оптимізації зображення:', error);
      }
    };

    // Викликаємо функцію оптимізації зображення при монтуванні компонента
    optimizeImage();

    // При видаленні компонента звільняємо ресурси оптимізованого зображення
    return () => {
      if (optimizedLogo) {
        URL.revokeObjectURL(optimizedLogo);
      }
    };
  }, []); // Викликаємо useEffect тільки раз, при монтуванні компонента

  return (
    <Wrapper>
      <WrapperLogo>
        <a href='/'>
          {/* Використовуємо оптимізований URL для зображення */}
          <Image
            width={92}
            height={30}
            src={optimizedLogo}
            alt='logo'
          />
        </a>
      </WrapperLogo>
      <WrapperMenu>
        <GiHamburgerMenu size={25} color='#EB5824' />
        <p>МЕНЮ</p>
      </WrapperMenu>
    </Wrapper>
  );
};

export default Header;
