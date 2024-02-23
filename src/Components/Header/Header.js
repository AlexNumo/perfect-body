'use client'
import logo from '../../../public/logo/logo.png';
import {
  Wrapper,
  WrapperLogo,
  WrapperMenu
} from './Header.styled';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <Wrapper>
      <WrapperLogo>
        <a
          href='/'
        >
          <img
            width={92}
            height={30}
            src={logo}
            alt='logo'
          />
        </a>
      </WrapperLogo>
      <WrapperMenu>
        <GiHamburgerMenu
          size={25}
          color="#EB5824"
        
        />
        <p>МЕНЮ</p>
      </WrapperMenu>
    </Wrapper>
  )
};

export default Header;