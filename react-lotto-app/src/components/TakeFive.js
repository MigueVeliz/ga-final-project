import React, { Component } from 'react'

import GoHome from './GoHome'

class TakeFive extends Component {

	componentDidMount() {
		fetch('http://localhost:8080/api/')
		.then((response) => {
			return response.json()
		})
		.then((responseJson) => {
			console.log(responseJson)

			this.props.getTake5Data(responseJson);
		})
	}

	displayData() {
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
				</div>
			)
		})
	}

	addTake5Numbers() {
		console.log("Running addTake5Numbers")

		fetch('http://localhost:8080/api/', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				first_number: 4,
				second_number: 5,
				third_number: 12,
				fourth_number: 23,
				fifth_number: 33,
			})
		})
		.then((response) => {
			return response.json()
		})
		.then((body) => {
			console.log(body)
		});

	}//end of AddTake5Numbers

	chooseNewNumbers() {
		let numbers = [];

		for(var i = 1; i < 40; i++) {
			numbers.push(i);
		}

		return numbers.map((el, index) => {
			return (
				<li className = "new-take-5-number-styles" key = { index }> { el } </li>
			)
		})

		console.log(numbers.length)
	}


	render() {

		return (
			<div className = "take-five">
				<GoHome getGameMode = { this.props.getGameMode } />

				<div className = "new-numbers">
					{ this.chooseNewNumbers()}
				</div>


				<p>Your previous Numbers</p>
				<div  className = "old-numbers">
					{ this.displayData() }
				</div>

			</div>

		)
	}
}

export default TakeFive;