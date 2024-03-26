import { IoClose } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { setShowMenu } from '@/Redux/menuReducer';
import Image from "next/image";
// import logo_white from '../../../public/logo/logo_white.png';
import logo2 from '../../../public/logo/logo_ars.jpeg';
import { useRef, useEffect } from 'react';
import {
  WrapperMenu,
  MenuPosition,
  ClosePosition,
  NavigateStyle,
  Cabinet
} from './Menu.styled';

const Menu = () => {
  const dispatch = useDispatch();
  const showMenu = useSelector((state) => state.menu.showMenu);
  const menuRef = useRef();

  const linkExpert = '/expert';
  const linkChallenge = '/challenge';
  const linkPrograms = '/programs';
  const linkCabinet = '/cabinet';

  // const [isAnimating, setIsAnimating] = useState(false);

  const handleShowMenu = () => {
    dispatch(setShowMenu(!showMenu));
  };

  const handleCloseMenu = (event) => {
    if (event.target === menuRef.current) {
      dispatch(setShowMenu(!showMenu));
    }
  };

  const handleEscKeyPress = (event) => {
    if (event.keyCode === 27) {
      dispatch(setShowMenu(!showMenu));
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.addEventListener("mousedown", handleCloseMenu);
      document.addEventListener("keydown", handleEscKeyPress);
      // setIsAnimating(true);
    } else {
      document.removeEventListener("mousedown", handleCloseMenu);
      document.removeEventListener("keydown", handleEscKeyPress);
    }

    return () => {
      document.removeEventListener("mousedown", handleCloseMenu);
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showMenu]);

  // useEffect(() => {
  //   if (!showMenu && isAnimating) { // Перевіряємо, чи анімація завершилася та меню закрите
  //     setIsAnimating(false); // Змінюємо прапорець анімації на false
  //   }
  // }, [showMenu, isAnimating]);

  return (
    <>
      {showMenu && (
        <WrapperMenu ref={menuRef}>
          <MenuPosition $isOpen={showMenu}>
            <ClosePosition>
              <IoClose
                size={37}
                onClick={handleShowMenu}
              />
            </ClosePosition>
            <Image
              width={70}
              height={70}
              style={{borderRadius: '50%'}}
              src={logo2}
              alt='logo white'
            />
            <NavigateStyle>
              <ul>
                <li>
                  <a
                    href='/'
                  >
                    Головна
                  </a>
                </li>
                <li>
                  <a
                    href={linkExpert}
                  >
                    Експерти
                  </a>
                </li>
                <li>
                  <a
                    href={linkPrograms}
                  >
                    Програми
                  </a>
                </li>
                <li>
                  <a
                    href={linkChallenge}
                  >
                    Челендж
                  </a>
                </li>
              </ul>
            </NavigateStyle>
            <Cabinet>
              <a
                href={linkCabinet}
              >
                Особистий кабінет
              </a>
            </Cabinet>
          </MenuPosition>
        </WrapperMenu>
      )}
    </>
  );
};

export default Menu;
