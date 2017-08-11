import React, { Component } from 'react'

import GoHome from './GoHome'


class Numbers extends Component {

	/*game information is loaded when
	this component is mounted*/
	componentDidMount() {
		
		let id = this.props.user.id

		fetch('http://localhost:8080/api/numbers/' + id)
		.then((response) => {
			return response.json()
		})
		.then((responseJson) => {
			console.log(responseJson)

			this.props.getNumbersData(responseJson);
		})
	}//end of componentDidMount

	// Old Take 5 numbers are rendered in the page
	displayData() {
		if( this.props.win4Data ) {
			return (
				<h1 className = "no-data">No Data Available</h1>
			)
		}
		else {
			return this.props.numbersData.map((el, index) => {
				return (
					<div key = { index } >
						<ul className = "old-numbers-list">
							<li className = "numbers-old-number-styles"> { el.first_digit } </li>
							<li className = "numbers-old-number-styles"> { el.second_digit } </li>
							<li className = "numbers-old-number-styles"> { el.third_digit } </li>
							<li className = "numbers-old-number-styles wager_type"> { el.wager_type } </li>
							<li className = "numbers-old-number-styles amount_per_wager"> { el.amount_per_wager } </li>
							<li className = "numbers-old-number-styles draw_time"> { el.draw_time } </li>
							<li className = "numbers-old-number-styles number_of_tickets"> { el.number_of_tickets } </li>
							<li className = "numbers-old-number-styles number_of_days"> { el.number_of_days } </li>
						</ul>
						<div onClick = { () => { this.deleteNumbers(el.id) } } 
							className = "numbers-delete-button">
							Delete
						</div>
					</div>
				)
			})
		}
	}//end of displayData

	/*Deletes a row of Numbers previously saved 
	by the user*/
	deleteNumbers(id) {

		console.log("deleting numbers widh ID:" + id ) 

	    fetch('http://localhost:8080/api/numbers/' + id, {
	        method: 'DELETE',
	        mode: 'CORS',
	    }).then(res => res)

	}//end of deleteNumbers
	

	chooseNewNumbersV2() {

		let first_digit = [0,1,2,3,4,5,6,7,8,9]
		let second_digit = [0,1,2,3,4,5,6,7,8,9]
		let third_digit = [0,1,2,3,4,5,6,7,8,9]
		let wager_type = ["str", "box", "str/box", "comb"]
		let amount_per_wager = [.50, 1]
		let draw_time = ["day", "eve", "both"]
		let number_of_tickets = [2,3,4,5,6,7,8,9,10]
		let number_of_days = [2,3,4,5,6,7]

		let container = []

		container.push(first_digit.map((el, index) => {
			return (
				<li
					className = { this.active(el) ? "selected-number-numbers" : "first-digit-styles"}
					key = { index }
				 	onClick = { this.props.getNewNumbers.bind(el) }
				> { el } </li>
				)
			})
		)

		container.push(second_digit.map((el, index) => {
			return (
				<li
					className = { this.active(el) ? "selected-number-numbers" : "first-digit-styles"}
					key = { index }
				 	onClick = { this.props.getNewNumbers.bind(el) }
				> { el } </li>
				)
			})
		)

		container.push(third_digit.map((el, index) => {
			return (
				<li
					className = { this.active(el) ? "selected-number-numbers" : "first-digit-styles"}
					key = { index }
				 	onClick = { this.props.getNewNumbers.bind(el) }
				> { el } </li>
				)
			})
		)

		container.push(wager_type.map((el, index) => {
			return (
				<li
					className = "wager-type-styles"
					key = { index }
				 	onClick = { this.props.getNewNumbers.bind(el) }
				> { el } </li>
				)
			})
		)

		container.push(amount_per_wager.map((el, index) => {
			return (
				<li
					className = "amount-per-wager-styles"
					key = { index }
				 	onClick = { this.props.getNewNumbers.bind(el) }
				> { el } </li>
				)
			})
		)

		container.push(draw_time.map((el, index) => {
			return (
				<li
					className = "draw-time-styles"
					key = { index }
				 	onClick = { this.props.getNewNumbers.bind(el) }
				> { el } </li>
				)
			})
		)

		container.push(number_of_tickets.map((el, index) => {
			return (
				<li
					className = "number_of_tickets-styles"
					key = { index }
				 	onClick = { this.props.getNewNumbers.bind(el) }
				> { el } </li>
				)
			})
		)

		container.push(number_of_days.map((el, index) => {
			return (
				<li
					className = "number-of-days-styles"
					key = { index }
				 	onClick = { this.props.getNewNumbers.bind(el) }
				> { el } </li>
			)
		})
		)

		return container;

	}//end of choooseNEwNumbersV2

	// Return true or false if element is in the 
	// this.state.props.numbers
	active( element ) {	
		return this.props.newNumbers.includes( element )
	}

	/*Adds the new 5 numbers chosen by the user to the
	datase and they will be render on the Previous Numbers
	section on the bottom*/
	addNewNumbers() {
		console.log("Running addNewNumbers!")

		let numbers = this.props.newNumbers
		let user_id =  this.props.user.id

		console.log("numbers")


		fetch('http://localhost:8080/api/numbers', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				user_id: user_id,
				first_digit: numbers[0],
				second_digit: numbers[1],
				third_digit: numbers[2],
				wager_type: numbers[3],
				amount_per_wager: numbers[4],
				draw_time: numbers[5],
				number_of_tickets: numbers[6],
				number_of_days: numbers[7]
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
		if (this.props.newNumbers.length === 8 ) {
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

	render() {
		return (
			<div >
				<GoHome getGameMode = { this.props.getGameMode } />

				<div className = "new-numbers">
					{ this.chooseNewNumbersV2()}
				</div>

				<div>
					{ this.submitButton() }
				</div>

				<p className = "previous-numbers-text">Your previous Numbers</p>
				<div  className = "old-numbers-container">
					{ this.displayData() }
				</div>

			</div>
		)
	}
}

export default Numbers;