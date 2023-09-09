import React, { useEffect, useState } from "react";
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Conheca from './components/Conheca/Conheca';
import Verduras from './components/Verduras/Verduras';
import Temperos from './components/Temperos/Temperos';
import AboveFooter from "./components/AboveFooter/AboveFooter";
import Footer from "./components/Footer/Footer";

export default () => {

  const [whiteHeader, setWhiteHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {  
      if(window.scrollY > 10) {
        setWhiteHeader(true);
      } else {
        setWhiteHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className='page'>
      <Header white={whiteHeader} />
      <Home />
      <Conheca />
      <Verduras />
      <Temperos />
      <AboveFooter />
      <Footer />
    </div>
  );
}


