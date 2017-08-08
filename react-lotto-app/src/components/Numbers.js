import React, { Component } from 'react'

import GoHome from './GoHome'


class Numbers extends Component {
	render() {
		return (
			<div className = "numbers">
				<GoHome getGameMode = { this.props.getGameMode } />



				<p className = "previous-numbers-text">Your previous Numbers</p>


			</div>
		)
	}
}

export default Numbers;