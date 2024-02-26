'use client'
import Header from "@/Components/Header/Header";
import Timer from "@/Components/Timer/Timer";
import { Provider } from 'react-redux';
import store from "@/Redux/store";
import Menu from "@/Components/Menu/Menu";
import PhotoSection from "@/Components/PhotoSection/PhotoSection";
import Participate from "@/Components/Participate/participate";
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
        <PhotoSection/>
        <Menu />
        <Participate/>
      </Provider>
    </Wrapper>
  );
}
