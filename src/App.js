import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './js/components/Header/Header';
import Footer from './js/components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
       <Header/>
       <Footer/>
      </div>
    );
  }
}

export default App;
