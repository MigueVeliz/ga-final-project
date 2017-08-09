import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import TakeFive from './components/TakeFive'
import Numbers from './components/Numbers'
import QuickDraw from './components/QuickDraw'
//import Win4 from './components/Win4'
//import Pick10 from './components/Pick10'
import Navigation from './components/Navigation'
// import Footer from './components/Footer'


class App extends Component {
  constructor(){
    super()

    this.state = {
      gameMode: 'HOME', // Take 5 - First Game
      takeFive: [], // Take 5 - First Game
      takeFiveNumbers: [], // Take 5 - First Game
      numbers: [], // Numbers - Second Game
      numbersNewNumbers: [] //Numbers - Second Game

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
          <div onClick = { this.getGameMode.bind(this) } className = "box">
            <p className = "game-type">Numbers</p>
          </div>
          <div className = "box">
            <p className = "game-type">Pick10</p>
          </div>
          <div onClick = { this.getGameMode.bind(this) } className = "box">
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
        newNumber = { this.newNumber.bind(this) }
        numbers = { this.state.takeFiveNumbers }
      />
    }
    else if(gameMode === "Numbers") {
      return <Numbers 
        getNumbersData = { this.getNumbersData.bind(this) }
        numbersData = { this.state.numbers }
        getGameMode = { this.getGameMode.bind(this) }
        getNewNumbers = { this.newNumbersNumbers.bind(this) }
        newNumbers = { this.state.numbersNewNumbers }
      />
    }
    else if (gameMode === "QuickDraw") {
      return <QuickDraw />
    }
  }


  // Gets the Take 5 Game Data
  getTake5Data( data ) {
    console.log("running getTake5Data " + data[0].first_number) 
    this.setState({
      takeFive: data
    })

  }

    // Gets the Numbers Game Data
  getNumbersData( data ) {
    console.log("running getNumbersData[0] = " + data[0].first_digit) 
    this.setState({
      numbers: data
    })

  }

  // Adds 5 numbers to the Take 5 arra
  newNumber(number) {
     let n = this.state.takeFiveNumbers

     n.push(parseInt(number.target.textContent, 10))

    this.setState({
      takeFiveNumbers: n
    })

    console.log(this.state.takeFiveNumbers)
  }

  // Adds Numbers to the Numbers arra
  newNumbersNumbers(number) {
    let n = this.state.numbersNewNumbers
    let num = number.target.textContent

    console.log(`numer --> ` + num )

    if (isNaN(num)) {
        console.log("its not a number")
        n.push(num)

     } else {
        console.log("its  a number")
        n.push(parseInt(num, 10))
     }

    this.setState({
      numbersNewNumbers: n
    })

    console.log(this.state.numbersNewNumbers)
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
