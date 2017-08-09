import React, { Component } from 'react'

import GoHome from './GoHome'


class QuickDraw extends Component {

	/* Game information is loaded when
	this component is mounted */
	componentDidMount() {
		fetch('http://localhost:8080/api/quick_draw')
		.then((response) => {
			return response.json()
		})
		.then((responseJson) => {
			console.log(responseJson)

			this.props.getQuickDrawData(responseJson);
		})
	}//end of componentDidMount\

	// Old QuickDraw numbers are rendered in the page
	displayData() {
		return this.props.quickDrawData.map((el, index) => {
			return (
				<div key = { index } >
					<ul className = "old-quick-draw-list">
						<li className = "quick-draw-old-number-styles old-spots"> { el.spots } </li>
						<li className = "quick-draw-old-number-styles quick-draw-numbers old-numbers"> { el.numbers } </li>
						<li className = "quick-draw-old-number-styles old-how-much-per-game"> { el.how_much_per_draw } </li>
						<li className = "quick-draw-old-number-styles old-quick-draw-extra"> { el.quick_draw_extra } </li>
						<li className = "quick-draw-old-number-styles old-consecutive-number"> { el.consecutive_draws } </li>
					</ul>
					<div onClick = { () => { this.deleteNumbers(el.id) } } 
						className = "quick-draw-delete-button">
						Delete
					</div>
				</div>
			)
		})
	}//end of displayData

	/*Deletes a row of Quick Draw Numbers 
	  previously saved by the user*/
	deleteNumbers(id) {

		console.log("deleting numbers widh ID:" + id ) 

	    fetch('http://localhost:8080/api/quick_draw/' + id, {
	        method: 'DELETE',
	        mode: 'CORS',
	    }).then(res => res)

	}//end of deleteNumbers

	chooseNewQuickDrawNumbers() {

		const container = []
		const data = {
			spots: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			numbers: [],
			howMuchPerDraw: [1, 2, 3, 4, 5, 10],
			quickDrawExtra: ["yes", "no"],
			consecutiveDraws: [1, 2, 3, 4, 5, 10, 20]
		}//end of data

		// filling up array numbers with values
		// from 1 al the way up to 80
		for(let i = 1; i < 81; i++ ) {
			data.numbers.push(i);
		}

		container.push(data.spots.map((el, index) => {
			return (
				<li
					className = "quick-draw-styles spots"
					key = { index }
				 	onClick = { this.props.getNewQuickDrawNumbers.bind(el) }
				> { el } </li>
				)
			})
		)

		container.push(data.numbers.map((el, index) => {
			return (
				<li
					className = "quick-draw-styles q-draw-numbers"
					key = { index }
				 	onClick = { this.props.getNewQuickDrawNumbers.bind(el) }
				> { el } </li>
				)
			})
		)

		container.push(data.howMuchPerDraw.map((el, index) => {
			return (
				<li
					className = "quick-draw-styles how-much-per-draw"
					key = { index }
				 	onClick = { this.props.getNewQuickDrawNumbers.bind(el) }
				> { el } </li>
				)
			})
		)

		container.push(data.quickDrawExtra.map((el, index) => {
			return (
				<li
					className = "quick-draw-styles quick-draw-extra"
					key = { index }
				 	onClick = { this.props.getNewQuickDrawNumbers.bind(el) }
				> { el } </li>
				)
			})
		)

		container.push(data.consecutiveDraws.map((el, index) => {
			return (
				<li
					className = "quick-draw-styles consecutive-draws"
					key = { index }
				 	onClick = { this.props.getNewQuickDrawNumbers.bind(el) }
				> { el } </li>
				)
			})
		)

		return container;

	}// end of choooseNewQuickDrawNumbers



	render() {
		return (
			<div className = "numbers">
				<GoHome getGameMode = { this.props.getGameMode } />

				<div className = "new-quick-draw-numbers">
					{ this.chooseNewQuickDrawNumbers() }
				</div>

				<p className = "previous-numbers-text">Your previous Numbers</p>
				<div  className = "old-quick-draw-container">
					{ this.displayData() }
				</div>

			</div>
		)
	}
}

export default QuickDraw;