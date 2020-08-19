import React from "react"
import AboutProfile from "./AboutProfile"

const About = () => {
    return (
    	<div>
	    	<div style = {{color: "#000000", fontFamily: "'Segoe UI'", width: "60%", margin: "auto", textAlign: "center", fontSize:20}}>
	        	<div id = "whoweare">
					<h1 style = {{fontSize: 50}}>Who we are</h1>
					<p style={{color: "#000000", fontSize: 30}}>We are Youth Bleeding Control Training, or <b>YBCT</b> for short. Our team consists of 9 high school students committed
					to making a difference within our local community here in the Greater Seattle Area. As students pursuing the International Baccaleaurate Diploma, we have chosen to 
					address the lack of knowledge and experience around bleeding control and bleeding-related deaths. </p>
				</div>
				<div id = "mission">
					<h1 style = {{fontSize: 50}}>Mission</h1>
					<p style = {{color: "#000000", fontSize: 30, margin: "50px" }}><i>Educating people about saving lives is our priority.</i></p>
					<p style={{color: "#000000", fontSize: 30}}>In the United Sates, bleeding control is a major leading cause of preventable death for people of all ages. 
					This harsh truth is scary, and it demonstrates just how much people need to be educated about dealing with these types of situations. Through our efforts, however,
					we aim to bring significant change to our local community so that people can be prepared for the worst. We envision a future where people understand and acknowledge the 
					dangers of uncontrolled bleeding. More importantly, we want to directly teach people on how to control bleeding themselves and clear up any stigmas around emergency bleeding situations. 
					Our goal by the end of the 2021 is to educate at least 200 people in the Greater Seattle Area, if not more.</p>
				</div>
				<div id = "strategy">
					<h1 style = {{fontSize: 50}}>Strategy</h1>
					<p style={{color: "#000000", fontSize: 30}}>Centered in Bellevue, Washington, we carry out our mission by
	      		interactively educating local students at various localities. We push ourselves to make a big impact on people's perception of bleeding control,
				  as well as providing them with the necessary tools to overcome these situations. Through enlisting the help of the Bellevue School District and Bellevue Police Department, 
				  we are fortunately provided with specialized medical equipment such as tourniquets, gauze packing, first aid boxes, and dummies. We hope that by providing people with
				  real equipment for live demonstrations and hands-on learning, people can become acquanited with different emergency scenarios much easier, and are more ready to apply them in real life.</p>
				</div>
				<p style = {{color: "#000000", fontSize: 20}}>Most recently, we helped familiarize over 20 peers at Interlake High School to dealing with bleeding control situations. By enlisting the help of the Bellevue
	      		police department, as well as their state-of-the-art bleeding control kits.</p>
	        	<p style = {{color: "#000000", fontSize: 30, margin: "50px"}}><i>Save lives. Come and learn bleeding control.</i></p>
	        </div>
	        <div style = {{display: "block", right: "50%"}}>
				<h1 id = "people" style = {{color: "#000000", fontSize: 20}}>People</h1>
	        	<AboutProfile />
	        	<AboutProfile />
	        </div>
	        <div style = {{clear: "both"}}>
	        </div>
	    </div>
    )
}

export default About