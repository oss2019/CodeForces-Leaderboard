import React from 'react';
import { HashRouter } from "react-router-dom";

import './App.css';
import Router from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Header/>
      <br/>
      <HashRouter>
        <Router />
      </HashRouter>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
