import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import store from "@/Redux/store";
import MainPage from "@/Page/MainPage/MainPage";
// import PrivacyPolicy from '@/Page/PrivacyPolicy/PrivacyPolicy';
import "./globals.css";

import {
  Wrapper,
} from './page.styled';

export default function Home() {
  const router = useRouter();

  return (
    <Wrapper>
      <Provider store={store}>
        <MainPage />
        {/* <PrivacyPolicy/> */}
      </Provider>
    </Wrapper>
  );
}
