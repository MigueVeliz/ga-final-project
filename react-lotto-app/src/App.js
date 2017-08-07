import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import TakeFive from './components/TakeFive'
import Numbers from './components/Numbers'
import QuickDraw from './components/QuickDraw'
import Win4 from './components/Win4'
import Pick10 from './components/Pick10'
import Navigation from './components/Navigation'
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />


        <div className = "container">
          <TakeFive />
          <Numbers />
          <QuickDraw />
          <Win4 />
          <Pick10 />
        </div>

        <Footer />







      </div>

    );
  }
}

export default App;
