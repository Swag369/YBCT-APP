import React from 'react'

class ImageSlider extends React.Component {
	constructor() {
		super()
		this.state = {
			current_index: 0, //index of the image being displayed
			img_urls: [
				'https://onlinepngtools.com/images/examples-onlinepngtools/purple-flowers.png',
				'https://upload.wikimedia.org/wikipedia/commons/5/5b/India_Gate_600x400.jpg',
				'https://upload.wikimedia.org/wikipedia/commons/6/69/600x400_kastra.jpg'
			], //All images are 600x400 for simplicity
			styles: {
				width: 600,
				margin: "auto"
			} //Centers the images on the page
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick (step) { 
		this.setState(prevState => ({
				current_index: prevState.current_index + step //Changes the current image index either one step 
		}))                                                   //forward or one step backward
	}

	render() {
		return (
			<div className = "ImageSlider" style = {this.state.styles}>
				<img src={this.state.img_urls[this.state.current_index % this.state.img_urls.length]} /> //Displays the image
				<button id = "ImageSliderPrev" onClick = {event => this.handleClick(-1)}>back</button>   //Previous
				<button id = "ImageSliderNext" onClick = {event => this.handleClick(1)}>forward</button> //Next
			</div>
		)
	}
}

export default ImageSlider //To be used in the Home Page