import React from 'react'

class ImageSlider extends React.Component {
	constructor() {
		super()
		this.state = {
			current_index: 0,
			img_urls: [
				'https://onlinepngtools.com/images/examples-onlinepngtools/purple-flowers.png',
				'https://upload.wikimedia.org/wikipedia/commons/5/5b/India_Gate_600x400.jpg',
				'https://upload.wikimedia.org/wikipedia/commons/6/69/600x400_kastra.jpg'
			],
			styles: {
				width: 600,
				margin: "auto"
			}
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick (step) {
		this.setState(prevState => ({
				current_index: prevState.current_index + step
		}))
	}

	render() {
		return (
			<div className = "ImageSlider" style = {this.state.styles}>
				<img src={this.state.img_urls[this.state.current_index % this.state.img_urls.length]} />
				<button id = "ImageSliderPrev" onClick = {event => this.handleClick(-1)}>back</button>
				<button id = "ImageSliderPrev" onClick = {event => this.handleClick(1)}>forward</button>
			</div>
		)
	}
}

export default ImageSlider