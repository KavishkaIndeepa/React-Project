import React from 'react';
// import logo from '../logo.svg';
import '../App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar} from "../view/common/Navbar/Navbar";
import {Footer} from "../view/common/Footer/Footer";
import {Main} from "../view/common/MainContent/Main";
import {DefaultLayout} from "../view/common/DefaultLayout/DefaultLayout";
import {Login} from "../view/pages/Login/Login";
import {SignIn} from "../view/pages/SignIn/SignIn";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/*" Component={DefaultLayout}></Route>
              <Route path="/login" Component={Login}></Route>
              <Route path="/signin" Component={SignIn}></Route>
          </Routes>

      </BrowserRouter>
  );
}

export default App;
