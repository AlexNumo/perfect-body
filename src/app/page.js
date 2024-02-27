'use client'
import Header from "@/Components/Header/Header";
import Timer from "@/Page/Timer/Timer";
import { Provider } from 'react-redux';
import store from "@/Redux/store";
import Menu from "@/Components/Menu/Menu";
import PhotoSection from "@/Page/PhotoSection/PhotoSection";
import Participate from "@/Page/Participate/Participate";
import Unique from "@/Page/Unique/Unique";
import VideoSection from "@/Page/VideoSection/VideoSection";
import Tickets from "@/Page/Tickets/Tickets";
import "./globals.css";

import {
  Wrapper,
} from './page.styled';

export default function Home() {
  return (
    <Wrapper>
      <Provider store={store}>
        <Header />
        <Timer />
        <PhotoSection />
        <Menu />
        <Participate />
        <Unique />
        <VideoSection />
        <Tickets/>
      </Provider>
    </Wrapper>
  );
}
