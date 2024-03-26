import {
  WrapperBTN,
  LinkGoogleForm
} from './Participate.styled';


const Participate = () => {
  const linkTake = 'https://docs.google.com/forms/d/e/1FAIpQLSfEEBfrFO9F7eD7uTBGdnjORvt3eo_r8sIk2VMQCsUnX1pEBQ/viewform?usp=sf_link'
  return (
    <WrapperBTN>
      <LinkGoogleForm
        href={linkTake}
        target="_blank"
      >Взяти участь</LinkGoogleForm>
    </WrapperBTN>
  )
};

export default Participate;