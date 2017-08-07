import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


import TakeFive from './components/TakeFive'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>The best App to store lotto info!</p>
        <TakeFive />
      </div>
    );
  }
}

export default App;
