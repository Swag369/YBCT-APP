import React from "react"
import AboutProfile from "./AboutProfile"

const About = () => {
    return (
    	<div>
	    	<div>
				<div className = "container" id = "mission">
					<h1>Our Mission</h1>
					<p style = {{color: "#000000", fontSize: 25, width: "100%", float: "left", textAlign: "left"}}><i>Educating people about saving lives is our priority.</i></p>
					<p style={{fontSize: 20, width: "75%", float: "left", textAlign: "left"}}>In the United Sates, bleeding control is a major leading cause of preventable death for people of all ages. 
					This harsh truth is scary, and it demonstrates the public's lack of knowledge and experience in dealing with these types of situations. Through our efforts, however,
					we aim to bring significant change to our local community so that teens and young adults can be prepared for the worst. We envision a future where people understand and acknowledge the 
					dangers of uncontrolled bleeding. More importantly, we want to directly teach people on how to control bleeding themselves and clear up any stigmas around emergency bleeding situations. 
					Our goal by the end of the 2021 is to educate at least 200 students in the Greater Seattle Area, if not more.</p>
				</div>
				<div className = "container" id = "strategy">
					<h1>Our Strategy</h1>
					<p style = {{fontSize: 25, color: "black", float: "left", textAlign: "left", width: "100%"}}><i>We aim to make our events as interactive and engaging as possible.</i></p>
					<p style={{ fontSize: 20, width: "75%", float: "left", textAlign: "left"}}>Centered in Bellevue, Washington, we carry out our mission by
	      			educating students at nearby schools through afterschool events. We push ourselves to make a big impact on people's perception of bleeding control,
				  as well as provide them with the necessary tools and knowldge for dealing with emergency situations. Through enlisting the help of the Bellevue School District and Bellevue Police Department, 
				  we are fortunately provided with specialized medical equipment such as tourniquets, gauze packing, first aid boxes, and dummies in hopes of providing people with a
				  hands-on experience and preparing them to apply bleeding control training in real life scenarios.</p>
				</div>
				<div className = "container" id = "members" style = {{float: "left"}}>
					<h1>Our Members</h1>
					<AboutProfile name1 = "Sahi Chitrapu" img1 = {require("/Users/sahi/ybct/src/images/sahi.png")} position1 = "Web Development" name2 = "Vikram Khandelwal" position2 = "Web Development" name3 = "Saketh Akella" position3 = "Web Development"/>
					<AboutProfile name1 = "Nikhil Devisetty" img1 = {require("/Users/sahi/ybct/src/images/nikhil.png")} position1 = "Outreach" name2 = "Aditya Shrey" img2 = {require("/Users/sahi/ybct/src/images/shrey.jpeg")} position2 = "Outreach" name3 = "Aditya Khowal" position3 = "Outreach"/>
					<AboutProfile name1 = "Vedant Chavan" position1 = "" name2 = "Wesley Luk" position2 = "Research Lead" name3 = "Ishan Bansal" position3 = "President"/>
				</div>
			</div>
	    </div>
    )
}

export default About