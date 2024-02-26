'use client'
// import { useState } from 'react';
import logo from '../../../public/logo/logo.png';
import {
  Wrapper,
  WrapperLogo,
  WrapperMenu,
  ImageLogo,
  NavigateStyle
} from './Header.styled';
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setShowMenu } from '@/Redux/menuReducer';

const Header = () => {
  const dispatch = useDispatch();
  const showMenu = useSelector((state) => state.menu.showMenu);

  const handleShowMenu = () => {
    if (!showMenu) {
      return dispatch(setShowMenu(true));
    }
    if (showMenu) {
      return dispatch(setShowMenu(false));
    }
  };
  
  return (
    <Wrapper>
      <WrapperLogo>
        <a
          href='/'
        >
          <ImageLogo
            src={logo}
            alt='logo'
          />
        </a>
      </WrapperLogo>
      <WrapperMenu>
        <GiHamburgerMenu
          size={25}
          color="#EB5824"
          onClick={handleShowMenu}
        />
        <button onClick={handleShowMenu}>МЕНЮ</button>
      </WrapperMenu>
      <NavigateStyle>
        <ul>
          <li>
            <a
              href='/'
            >
              Експерти
            </a>
          </li>
          <li>
            <a
              href='/'
            >
              Програми
            </a>
          </li>
          <li>
            <a
              href='/'
            >
              Челендж
            </a>
          </li>
        </ul>
      </NavigateStyle>
    </Wrapper>
  )
};

export default Header;