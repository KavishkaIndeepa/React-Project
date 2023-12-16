import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {BrowserRouter} from "react-router-dom";
import {Navbar} from "../view/common/Navbar/Navbar";
import {Footer} from "../view/common/Footer/Footer";
import {Main} from "../view/common/MainContent/Main";

function App() {
  return (
      <BrowserRouter>
          <Navbar/>
          <Main/>
          <Footer/>

      </BrowserRouter>
  );
}

export default App;
