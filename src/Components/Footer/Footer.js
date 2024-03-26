import Link from 'next/link';
// import logo from '../../../public/logo/logo_white.png';
import logo2 from '../../../public/logo/logo_ars.jpeg';
import { GrInstagram } from "react-icons/gr";
import { LiaTelegram } from "react-icons/lia";
import { SiGooglemaps } from "react-icons/si";
import Mastercard from '../../../public/logo/mastercard.png';
import {
  Wrapper,
  WrapperLogo,
  ImageLogo,
  PersonalCabinetLink,
  WrapperLink,
  WrapperLinkSocial,
  ImageMastercard,
  WrapperLinkInfo
} from './Footer.styled';

const Footer = () => {
  const linkMaps = 'https://www.google.com/maps/place/Ars+Fit+Studio/@48.4706957,35.0377097,17.5z/data=!4m6!3m5!1s0x40dbe30b31eae0ef:0xdf2ae76e37c38242!8m2!3d48.4710704!4d35.0387283!16s%2Fg%2F11l75d1ghg?hl=uk-UK&entry=ttu';
  const linkInstagram = 'https://www.instagram.com/arsfit_studio';
  const linkTelegram = 'https://t.me/Ars_Fit_Studio_bot';
  const linkCabinet = '/cabinet';
  const linkExpert = '/expert';
  const linkTelegramBot = 'https://t.me/Test_ars_fit_bot';
  const linkPrograms = '/programs';
  const linkSupport = '/support';
  const linkPolcon = '/polcon';
  const linkUmov = '/conditions';
  const linkNumber = '+380981058240';
  const linkMail = 'ars.fit.studio@gmail.com';

  return (
    <Wrapper>
      <WrapperLogo>
        <Link href='/'>
            <ImageLogo
              src={logo2}
              alt='logo'
            />
        </Link>
      </WrapperLogo>
      <p>Унікальная платформа де ти знайдеш все для отримання здорового тіла та духу</p>
      <PersonalCabinetLink href={linkCabinet}>Особистий кабінет</PersonalCabinetLink>
      <WrapperLink>
        <Link href={linkExpert}>Експерти</Link>
        <Link href={linkTelegramBot} target="_blank">Telegram bot</Link>
        <Link href={linkPrograms}>Програми</Link>
        <Link href={linkSupport}>Технічна підтримка</Link>
      </WrapperLink>
      <WrapperLinkSocial>
        <ImageMastercard src={Mastercard} alt='' />
        <div>
          <a href={linkInstagram} target="_blank">
            <GrInstagram size={45} />
          </a>
        </div>
        <div>
          <a href={linkTelegram} target="_blank">
            <LiaTelegram size={45} />
          </a>
        </div>
        <div>
          <a href={linkMaps} target="_blank">
            <SiGooglemaps size={45} />
          </a>
        </div>
      </WrapperLinkSocial>
      <WrapperLinkInfo>
        <Link href={linkPolcon}>Політика конфіденційності</Link>
        <Link href={linkUmov}>Правила і умови</Link>
        <a href={`tel:${linkNumber}`}>{linkNumber}</a>
        <a href={`mailto:${linkMail}`}>{linkMail}</a>
      </WrapperLinkInfo>
    </Wrapper>
  )
};

export default Footer;
