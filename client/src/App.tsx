import React from 'react';
import { BrowserRouter } from "react-router-dom";

import './App.css';
import Router from './routes';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Header/>
      <br/>
      {/*<BrowserRouter>
        <Router />
      </BrowserRouter>*/}
      <Home />
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
