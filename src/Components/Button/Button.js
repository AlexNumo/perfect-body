import {
  BTN
} from './Button.styled';

const Button = ({ nameBTN, onClick, link }) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };
  return (
    <>
      {link ?
        <BTN
          href={link}
          onClick={handleClick}
          target="_blank"
        >
          {nameBTN}
        </BTN>
        :
        <BTN
          onClick={onClick}
        >
          {nameBTN}
        </BTN>
        }
    </>
  )
};

export default Button;