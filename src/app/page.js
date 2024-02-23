// 'use client'
import Header from "@/Components/Header/Header";
import Timer from "@/Components/Timer/Timer";
import {
  Wrapper,
} from './page.styled';

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <Timer/>
    </Wrapper>
  );
}
