import React from "react"
import AboutProfile from "./AboutProfile"

const About = () => {
    return (
    	<div>
	    	<div style = {{color: "#000000", fontFamily: "'Segoe UI'", width: "60%", margin: "auto", textAlign: "center", fontSize:20}}>
	        	<h1></h1>
	        	<p style={{color: "#000000", fontSize: 30}}><i>The number 1 cause of preventable trauma from death:</i></p>
	        	<p style={{color: "#000000", fontSize: 30, margin: "0 0 50px 0 "}}><i><b>uncontrolled bleeding.</b></i></p>
	        	<p style = {{color: "#000000", fontSize: 20}}>We are Youth Bleeding Control Training, or <b>YBCT</b>. Centered in Bellevue, Washington, we carry out our mission by
	      		interactively educating local students at various localities.</p>
	        	<p style = {{color: "#000000", fontSize: 30, margin: "50px" }}><i>Saving lives is our priority.</i></p>
				<p style = {{color: "#000000", fontSize: 20}}>Most recently, we educated over 20 peers at Interlake High School. We were lucky enough to enlist the help of the Bellevue
	      		police department, as well as their state-of-the-art bleeding control kits.</p>
	        	<p style = {{color: "#000000", fontSize: 30, margin: "50px"}}><i>Save lives. Come and learn bleeding control.</i></p>

	        </div>
	        <div style = {{display: "block", right: "50%"}}>
	        	<AboutProfile />
	        	<AboutProfile />
	        </div>
	        <div style = {{clear: "both"}}>
	        </div>
	    </div>
    )
}

export default About