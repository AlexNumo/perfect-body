import PrivacyPolicy from "@/PagesStyled/PrivacyPolicy/PrivacyPolicy";
import "../app/globals.css";
import Header from "@/Components/Header/Header";
import { Provider } from 'react-redux';
import store from "@/Redux/store";
import Menu from "@/Components/Menu/Menu";
import Footer from "@/Components/Footer/Footer";
import "./pages.css";

// import {
//   Wrapper,
// } from './pages.styled';

const Polcon = () => {
  return (
    <div className="wrapper">
      <Provider store={store}>
        <Header/>
        <PrivacyPolicy />
        <Footer/>
        <Menu/>
      </Provider>
    </div>
  )
};

export default Polcon;