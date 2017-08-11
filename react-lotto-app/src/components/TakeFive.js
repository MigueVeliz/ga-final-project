import React, { Component } from 'react'

import GoHome from './GoHome'

class TakeFive extends Component {

	/*game information is loaded when
	this component is mounted*/
	componentDidMount() {
		
		let id = this.props.user.id

		fetch('http://localhost:8080/api/' + id)
		.then((response) => {
			return response.json()
		})
		.then((responseJson) => {
			console.log(responseJson)

			this.props.getTake5Data(responseJson);
		})
	}//end of componentDidMount

	// Old Take 5 numbers are rendered in the page
	displayData() {
		if( this.props.takeFiveData.length < 1 ) {
			return (
				<h1 className = "no-data">No Data Available</h1>
			)
		}
		else {
			return this.props.takeFiveData.map((el, index) => {
				return (
					<div key = { index } >
						<ul className = "list">
							<li className = "take-5-number-styles"> { el.first_number } </li>
							<li className = "take-5-number-styles"> { el.second_number } </li>
							<li className = "take-5-number-styles"> { el.third_number } </li>
							<li className = "take-5-number-styles"> { el.fourth_number } </li>
							<li className = "take-5-number-styles"> { el.fifth_number } </li>
						</ul>
						<div onClick = { () => { this.deleteNumbers(el.id) } } 
							className = "take-5-delete-button">
							Delete
						</div>
					</div>
				)
			})
		}
	}//end of displayData


	/*section that shows numbers 1 - 39
	the user has to choose 5 numbers that will
	be added to the database*/
	chooseNewNumbers() {
		let numbers = [];

		for(var i = 1; i < 40; i++) {
			numbers.push(i);
		}

		return numbers.map((el, index) => {
			return (
				<li 
					className = {  this.active(el) ? "selected-number" : "new-take-5-number-styles"} 
					key = { index }
					onClick = { this.props.newNumber.bind(el) }
				> { el } </li>
			)
		})
	}//end of chooseNewNumbers

	// Return true or false if number is in the 
	// this.state.props.numbers
	active(number) {	
		return this.props.numbers.includes(number)
	}

	/*Adds the new 5 numbers chosen by the user to the
	datase and they will be render on the Previous Numbers
	section on the bottom*/
	addNewNumbers() {
		console.log("Running addNewNumbers!")

		let numbers = this.props.numbers
		let user_id =  this.props.user.id


		console.log("numbers")


		fetch('http://localhost:8080/api/', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				user_id: user_id,
				first_number: numbers[0],
				second_number: numbers[1],
				third_number: numbers[2],
				fourth_number: numbers[3],
				fifth_number: numbers[4],
			})
		})
		.then((response) => {
			return response.json()
		})
		.then((body) => {
			console.log(body)
		});

	}


	/*Button that appears when the user has selected 5
	numbers. This botton when clicked, will trigger
	another function that adds the numbers to the DB*/
	submitButton() {
		if (this.props.numbers.length === 5 ) {
			return (
				<div 
					className = "submit-take-5"
					onClick = { () => { this.addNewNumbers() } }
				>
					<p>Add Numbers</p>
				</div>
			)
		}
	}

	/*Deletes a row of 5 numbers previously saved 
	by the user*/
	deleteNumbers(id) {

		console.log("deleting numbers widh ID:" + id ) 

	    fetch('http://localhost:8080/api/' + id, {
	        method: 'DELETE',
	        mode: 'CORS',
	    }).then(res => res)

	}//end of deleteNumbers


	render() {

		return (
			<div className = "take-five">
				<GoHome getGameMode = { this.props.getGameMode } />

				<div className = "new-numbers">
					{ this.chooseNewNumbers()}
				</div>

				<div>
					{ this.submitButton() }
				</div>

				<p className = "previous-numbers-text">Your previous Numbers</p>
				<div  className = "old-numbers">
					{ this.displayData() }
				</div>

			</div>

		)
	}
}

export default TakeFive;