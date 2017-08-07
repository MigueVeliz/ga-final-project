import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import TakeFive from './components/TakeFive'
import Numbers from './components/Numbers'
import QuickDraw from './components/QuickDraw'
import Win4 from './components/Win4'
import Pick10 from './components/Pick10'


class App extends Component {
  render() {
    return (
      <div className="App">
        <p>The best App to store lotto info!</p>

        <TakeFive />
        <Numbers />
        <QuickDraw />
        <Win4 />
        <Pick10 />







      </div>

    );
  }
}

export default App;
