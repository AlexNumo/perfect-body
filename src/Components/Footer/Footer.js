import logo from '../../../public/logo/logo_white.png';
import {
  Wrapper,
  WrapperLogo,
  ImageLogo
} from './Footer.styled';



const Footer = () => {

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
      <p>Унікальная платформа де ти знайдеш все для отримання здорового тіла та духу</p>
    </Wrapper>
  )
};

export default Footer;