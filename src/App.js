import React, { useEffect, useState } from "react";
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className='page'>
      <Header />
      <Home />
    </div>
  );
}

export default App;
