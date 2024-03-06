import {
  BTN
} from './Button.styled';

const Button = ({nameBTN, onClick}) => {
  return (
    <>
      <BTN
        onClick={onClick}
      >
        {nameBTN}
      </BTN>
    </>
  )
};

export default Button;