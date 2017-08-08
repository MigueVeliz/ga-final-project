import React, { Component } from 'react'

import GoHome from './GoHome'


class Numbers extends Component {

	/*game information is loaded when
	this component is mounted*/
	componentDidMount() {
		fetch('http://localhost:8080/api/numbers')
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

	/*section that shows numbers 1 - 39
	the user has to choose 5 numbers that will
	be added to the database*/
	chooseNewNumbers() {
		// let numbers = [];
		let numbers = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9, "str", "box", "str/box", "comb", .50, 1.0, "day", "eve", "both", 2,3,4,5,6,7,8,9,10,2,3,4,5,6,7];


		// for(var i = 1; i < 40; i++) {
		// 	numbers.push(i);
		// }

		return numbers.map((el, index) => {
			return (
				<li 
					className = "new-take-5-number-styles"
					key = { index }
					// onClick = { this.props.newNumber.bind(el) }
				> { el } </li>
			)
		})
	}//end of chooseNewNumbers

	chooseNewNumbersV2() {

		let digits = [0,1,2,3,4,5,6,7,8,9]
		let wager_type = ["str", "box", "str/box", "comb"]
		let amount_per_wager = [.50, 1]
		let draw_time = ["day", "eve", "both"]
		let number_of_tickets = [2,3,4,5,6,7,8,9,10]
		let number_of_days = [2,3,4,5,6,7]

		let container = []

		container.push(digits.map((el, index) => {
			return (
				<li
					className = "first-digit-styles"
					key = { index }
				// onClick = { this.props.newNumber.bind(el) }
				> { el } </li>
				)
			})
		)

		container.push(digits.map((el, index) => {
			return (
				<li
					className = "first-digit-styles"
					key = { index }
				// onClick = { this.props.newNumber.bind(el) }
				> { el } </li>
				)
			})
		)

		container.push(digits.map((el, index) => {
			return (
				<li
					className = "first-digit-styles"
					key = { index }
				// onClick = { this.props.newNumber.bind(el) }
				> { el } </li>
				)
			})
		)

		container.push(wager_type.map((el, index) => {
			return (
				<li
					className = "wager-type-styles"
					key = { index }
				// onClick = { this.props.newNumber.bind(el) }
				> { el } </li>
				)
			})
		)

		container.push(amount_per_wager.map((el, index) => {
			return (
				<li
					className = "amount-per-wager-styles"
					key = { index }
				// onClick = { this.props.newNumber.bind(el) }
				> { el } </li>
				)
			})
		)

		container.push(draw_time.map((el, index) => {
			return (
				<li
					className = "draw-time-styles"
					key = { index }
				// onClick = { this.props.newNumber.bind(el) }
				> { el } </li>
				)
			})
		)

		container.push(number_of_tickets.map((el, index) => {
			return (
				<li
					className = "number_of_tickets-styles"
					key = { index }
				// onClick = { this.props.newNumber.bind(el) }
				> { el } </li>
				)
			})
		)

		container.push(number_of_days.map((el, index) => {
			return (
				<li
					className = "number-of-days-styles"
					key = { index }
				// onClick = { this.props.newNumber.bind(el) }
				> { el } </li>
			)
		})
		)

		return container;



	}




	render() {
		return (
			<div className = "numbers">
				<GoHome getGameMode = { this.props.getGameMode } />

				<div className = "new-numbers">
					{ this.chooseNewNumbersV2()}
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