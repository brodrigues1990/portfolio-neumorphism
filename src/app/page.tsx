"use client";
import { Container } from '@radix-ui/themes';
import Header from '../components/Header/Header';
// import About from './components/about';
// import Resume from './components/resume';
// import Contact from '../components/contact';
// import Footer from '../components/footer';
import Image from "next/image";
//import styles from "./page.module.css";



export default function Home() {

  return (
    <>
      <Header />
      <Container>
      <p>Este texto deve estar centralizado e limitado em largura!</p>
    </Container>
      {/* <about />
      <resume />
      <contact />
      <footer /> */}
    </>
  );
}
