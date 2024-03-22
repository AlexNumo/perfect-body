// pages/_error.js

import Header from "@/Components/Header/Header";
import Menu from "@/Components/Menu/Menu";
import Footer from "@/Components/Footer/Footer";
// import { Wrapper } from './pages.styled';
import "./pages.css";
const CustomErrorPage = ({ statusCode }) => {
  console.log(statusCode)
  return (
    <div className="wrapper">
      <Header />
      <div>
        <h1>
          {statusCode
            ? `Сталася помилка на сторінці: ${statusCode}`
            : "Сталася помилка на сторінці"}
        </h1>
        <p>Вибачте, але сторінку, яку ви шукали, не знайдено.</p>
        <p>Будь ласка, перейдіть на Головну сторінку.</p>
      </div>
      <Footer />
      <Menu />
    </div>
  );
};

CustomErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomErrorPage;
