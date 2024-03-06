'use client'
import { Provider } from 'react-redux';
import store from "@/Redux/store";
import MainPage from "@/Page/MainPage/MainPage";
import "./globals.css";

import {
  Wrapper,
} from './page.styled';

export default function Home() {
  return (
    <Wrapper>
      <Provider store={store}>
        <MainPage/>
      </Provider>
    </Wrapper>
  );
}
