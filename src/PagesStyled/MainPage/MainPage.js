'use client'
import Header from "@/Components/Header/Header";
import Timer from "@/Components/Timer/Timer";
import { Provider } from 'react-redux';
import store from "@/Redux/store";
import Menu from "@/Components/Menu/Menu";
import PhotoSection from "@/Components/PhotoSection/PhotoSection";
import Participate from "@/Components/Participate/Participate";
import Unique from "@/Components/Unique/Unique";
import VideoSection from "@/Components/VideoSection/VideoSection";
import Tickets from "@/Components/Tickets/Tickets";
import Prize from "@/Components/Prize/Prize";
import Information from "@/Components/Information/Information";
import Carousel from "@/Components/Carousel/Carousel";
import Food from "@/Components/Food/Food";
import Refund from "@/Components/Refund/Refund";
import PhotoUsers from "@/Components/PhotoUsers/PhotoUsers";
import PopularQuestion from "@/Components/PopularQuestion/PopularQuestion";
import Footer from "@/Components/Footer/Footer";

const MainPage = () => {
  return (
    <>
      <Header />
      {/* <Timer />
      <PhotoSection />
      <Participate />
      <Unique />
      <VideoSection />
      <Tickets />
      <Prize />
      <Information/>
      <Carousel />
      <Food />
      <Refund />
      <PhotoUsers/>
      <PopularQuestion/> */}
      <Footer />
      <Menu />
    </>
  )
};

export default MainPage;