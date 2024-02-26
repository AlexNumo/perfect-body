import { IoClose } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { setShowMenu } from '@/Redux/menuReducer';
import Image from "next/image";
import logo_white from '../../../public/logo/logo_white.png';
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
              width={120}
              height={38}
              src={logo_white}
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
            <Cabinet>
              <a
                href='/'
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
