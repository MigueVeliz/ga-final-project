import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import TakeFive from './components/TakeFive'
/*import Numbers from './components/Numbers'
import QuickDraw from './components/QuickDraw'
import Win4 from './components/Win4'
import Pick10 from './components/Pick10'*/
import Navigation from './components/Navigation'
import Footer from './components/Footer'


class App extends Component {
  constructor(){
    super()

    this.state = {
      takeFive: [],
      gameMode: 'HOME'
    }
  }

  getGameMode(mode) {
    console.log(mode.currentTarget.textContent)
    this.setState({
      gameMode: mode.currentTarget.textContent
    })
  }


  renderAllGames() {

    let gameMode = this.state.gameMode

    if( gameMode === "HOME") {
      return (
        <div className = "container">
          <div onClick = { this.getGameMode.bind(this) } className = "box">
            <p className = "game-type">TakeFive</p>
          </div>
          <div className = "box">
            <p className = "game-type">Numbers</p>
          </div>
          <div className = "box">
            <p className = "game-type">Pick10</p>
          </div>
          <div className = "box">
            <p className = "game-type">QuickDraw</p>
          </div>
          <div className = "box">
            <p className = "game-type">Win4</p>
          </div>
        </div>

        )
    }
    else if (gameMode === "TakeFive") {
      return <TakeFive 
        getTake5Data = { this.getTake5Data.bind(this) } 
        takeFiveData = { this.state.takeFive }
        getGameMode = { this.getGameMode.bind(this) }
      />
    }
  }


  getTake5Data( data ) {
    console.log("running getTake5Data " + data[0].first_number) 


    this.setState({
      takeFive: data
    })

  }


  render() {
    return (
      <div className="App">
        <Navigation />
          <div>
            { this.renderAllGames() }
          </div>
      </div>

    );
  }
}

export default App;
