import React from 'react'
import './AboutProfile.css'

function AboutProfile(props) {
	return (
		<div style = {{display: "flex", float: "right"}}>
			<div className="container" style = {{float: "left", width: "300px"}}>
			    <div className="avatar-flip">
			        <img src={props.img1} height="150" width="150"/>
			    </div>
			    <h2>{props.name1}</h2>
				<h4>{props.position1}</h4>
			</div>
			<div className="container" style = {{float: "left", width: "300px"}}>
			    <div className="avatar-flip">
			        <img src={props.img2} height="150" width="150"/>
			    </div>
			    <h2>{props.name2}</h2>
				<h4>{props.position2}</h4>
			</div>
			<div className="container" style = {{float: "left", width: "300px"}}>
			    <div className="avatar-flip">
			        <img src={props.img3} height="150" width="150"/>
			    </div>
			    <h2>{props.name3}</h2>
				<h4>{props.position3}</h4>
			</div>
		</div>
	)
}

export default AboutProfile