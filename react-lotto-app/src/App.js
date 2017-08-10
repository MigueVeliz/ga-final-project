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
  constructor(){
    super()

    this.state = {
      gameMode: 'HOME', // ******* Take 5 - First Game
      takeFive: [], // *********** Take 5 - First Game
      takeFiveNumbers: [], // **** Take 5 - First Game
      numbers: [], // ************ Numbers - Second Game
      numbersNewNumbers: [], // ** Numbers - Second Game
      quickDraw: [], // ********** Quick Draw - Third Game
      quickDrawNewNumbers: [], // * Quick Draw - Third Game
      pick10: [], // ************** Pick 10- Third Game
      pick10NewNumbers: [], // **** Pick 10- Third Game
      win4: [], // ************** Win 4- Fourth Game
      win4NewNumbers: [] // **** Win 4- Fourth Game

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
          <div onClick = { this.getGameMode.bind(this) } className = "box">
            <p className = "game-type">Pick10</p>
          </div>
          <div onClick = { this.getGameMode.bind(this) } className = "box">
            <p className = "game-type">QuickDraw</p>
          </div>
          <div onClick = { this.getGameMode.bind(this) } className = "box">
            <p className = "game-type">Win4</p>
          </div>
        </div>

        )
    }
    else if (gameMode === "TakeFive") {
      return <TakeFive 
        getGameMode = { this.getGameMode.bind(this) }
        getTake5Data = { this.getTake5Data.bind(this) } 
        takeFiveData = { this.state.takeFive }
        newNumber = { this.newNumber.bind(this) }
        numbers = { this.state.takeFiveNumbers }
      />
    }
    else if(gameMode === "Numbers") {
      return <Numbers 
        getGameMode = { this.getGameMode.bind(this) }
        getNumbersData = { this.getNumbersData.bind(this) }
        numbersData = { this.state.numbers }
        getNewNumbers = { this.newNumbersNumbers.bind(this) }
        newNumbers = { this.state.numbersNewNumbers }
      />
    }
    else if (gameMode === "QuickDraw") {
      return <QuickDraw 
        getGameMode = { this.getGameMode.bind(this) }
        getQuickDrawData = { this.getQuickDrawData.bind(this) }
        quickDrawData = { this.state.quickDraw }
        getNewQuickDrawNumbers = { this.newQuickDrawNumbers.bind(this) }
        newQuickDrawNumbers = { this.state.quickDrawNewNumbers }
      />
    }
    else if(gameMode === "Pick10") {
      return <Pick10 
        getGameMode = { this.getGameMode.bind(this) }
        getPick10Data = { this.getPick10Data.bind(this) }
        pick10Data = { this.state.pick10 }
        getNewPick10Numbers = { this.newPick10Numbers.bind(this) }
        newPick10Numbers = { this.state.pick10NewNumbers }
      />
    }
    else if (gameMode === "Win4") {
      return <Win4 
        getGameMode = { this.getGameMode.bind(this) }
        getWin4Data = { this.getWin4Data.bind(this) }
        win4Data = { this.state.win4 }
        getNewWin4Numbers = { this.newWin4Numbers.bind(this) }
        newWin4Numbers = { this.state.win4NewNumbers }
        deleteWin4Numbers = { this.deleteWin4Numbers.bind(this) }
      />
    }
  }

  deleteWin4Numbers(id) {
    this.setState({
      win4: this.state.win4.filter( win4 => win4.id !== id)
    })
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

  // Gets the QuickDraw Game Data
  getQuickDrawData( data ) {
    console.log("running getQuickDrawData[0] = " + data[0].spots) 
    this.setState({
      quickDraw: data
    })

  }

  // Gets the getPick10Data Game Data
  getPick10Data( data ) {
    console.log("running getPick10Data[0] = " + data[0].numbers) 
    this.setState({
      pick10: data
    })

  }

  // Gets the win4 Game Data
  getWin4Data( data ) {
    console.log("running getWin4Data[0] = " + data[0].first_digit) 
    this.setState({
      win4: data
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

  // Adds Numbers to the Numbers array
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

  // Adds NEW QuickDraw to the quickDrawNewNumbers array
  newQuickDrawNumbers(number) {
    let n = this.state.quickDrawNewNumbers
    let num = number.target.textContent

    console.log(`numer --> ` + num )

    if (isNaN(num)) {
        console.log("its not a number")
        n.push(num)

     } else {
        console.log("its  a number" + num)
        n.push(parseInt(num, 10))
     }

    this.setState({
      quickDrawNewNumbers: n
    })

    console.log(this.state.quickDrawNewNumbers)
  }

    // Adds NEW QuickDraw to the quickDrawNewNumbers array
  newPick10Numbers(number) {
    let n = this.state.pick10NewNumbers

     n.push(parseInt(number.target.textContent, 10))

    this.setState({
      pick10NewNumbers: n
    })

    console.log(this.state.pick10NewNumbers)
  }

  // Adds NEW Win4 to the win4NewNumbers array
  newWin4Numbers(number) {
    let n = this.state.win4NewNumbers
    let num = number.target.textContent

    console.log(`numer --> ` + num )

    if (isNaN(num)) {
        console.log("its not a number")
        n.push(num)

     } else {
        console.log("its  a number" + num)
        n.push(parseInt(num, 10))
     }

    this.setState({
      win4NewNumbers: n
    })

    console.log(this.state.win4NewNumbers)
  }


  render() {
    return (
      <div className="App">
        <Navigation />
          <div className ="main-container">
            { this.renderAllGames() }
          </div>
          <Footer />
      </div>

    );
  }
}

export default App;
