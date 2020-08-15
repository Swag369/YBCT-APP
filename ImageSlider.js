import React from 'react'

class ImageSlider extends React.Component {
	constructor() {
		super()
		this.state = {
			current_index: 1,
			image_urls: [
				'https://onlinepngtools.com/images/examples-onlinepngtools/purple-flowers.png',
				'https://upload.wikimedia.org/wikipedia/commons/5/5b/India_Gate_600x400.jpg' ,
				'https://upload.wikimedia.org/wikipedia/commons/6/69/600x400_kastra.jpg'
			],
			styles: {
				container_styles: {
					position: "relative",
					width: "600px",
					margin: "10px auto",
					overflow: "hidden",
					border: "solid #6441a5 5px",
				},
				slide_styles: {
					display: "flex",
					width: "100%",
					height: "auto",
					transform: "",
					transition: ""
				},
				prev_button_styles: {
					position: "absolute",
					top: "45%",
					zIndex: 10,
					left: "5%",
					fontSize: 30,
					color: "#FFFFFF",
					opacity: 0.7,
					cursor: "pointer",
				},
				next_button_styles: {
					position: "absolute",
					top: "45%",
					zIndex: 10,
					right: "5%",
					fontSize: 30,
					color: "#FFFFFF",
					opacity: 0.7,
					cursor: "pointer"
				}
			}
		}
		this.handleClick = this.handleClick.bind(this)
		this.reelEnd = this.reelEnd.bind(this)
	}

	handleClick (step) {
		const w = document.getElementById("firstClone").clientWidth
		const new_index = this.state.current_index + step
		if (new_index < 0 || new_index > this.state.image_urls.length + 1) return
		this.setState(prevState => ({
			current_index: new_index,
			styles: {...this.state.styles, slide_styles: {...this.state.styles.slide_styles, 
			transition: "transform 0.6s ease-in-out",
			transform: "translateX(" + new_index * -w + "px)"}} 
		}))
	}

	componentDidMount() {
		const w = document.getElementById("firstClone").clientWidth
		this.setState({
			current_index: 2,
			styles: {...this.state.styles, slide_styles: {...this.state.styles.slide_styles, 
			transform : "translateX(" + 2 * -w + "px)"}}
		})
	}

	reelEnd () {
		const w = document.getElementById("firstClone").clientWidth
		const image_objects = document.querySelectorAll('.ImageSlider img')
		if (image_objects[this.state.current_index].id === 'lastClone') {
			this.setState(prevState => ({
				current_index: image_objects.length - 2,
				styles: {...this.state.styles, slide_styles: {...this.state.styles.slide_styles, 
				transition: "none",
				transform: "translateX(" + (image_objects.length - 2) * -w + "px)"}} 
			}))	
		}
		if (image_objects[this.state.current_index].id === 'firstClone') {
			this.setState(prevState => ({
				current_index: 1,
				styles: {...this.state.styles, slide_styles: {...this.state.styles.slide_styles, 
				transition: "none",
				transform: "translateX(" +  -w + "px)"}} 
			}))	
		}
	}

	render() {
		return (
			<div style = {{padding: 0, margin: 0, boxSizing: "border-box"}}>
				<div className = "ImageSliderContainer" style = {this.state.styles.container_styles}>
					<button id = "ImageSliderPrev" 
						onClick = {event => this.handleClick(-1)}
						style = {this.state.styles.prev_button_styles}>❮</button>

					<button id = "ImageSliderNext"
						onClick = {event => this.handleClick(1)}
						style = {this.state.styles.next_button_styles}>❯</button>

					<div className = "ImageSlider" 
					     style = {this.state.styles.slide_styles}
					     onTransitionEnd={this.reelEnd}>

						<img src={this.state.image_urls[this.state.image_urls.length-1]}
							 id = "lastClone"
							 alt = "dummyImage" 
							 key = "lastClone"/>

						{this.state.image_urls.map(link => (
						<img src={link} alt = "dummyImage"  key={link} />))}

						<img src={this.state.image_urls[0]}
							 id="firstClone"
							 alt = "dummyImage"  
							 key="firstClone"/>
					</div>
				</div>
			</div>
		)
	}
}

export default ImageSlider