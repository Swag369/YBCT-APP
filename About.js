import React from "react"
import {Container, Row, Col, Card, ListGroup} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

/*const Progress = (props) => {
	return (
		<div>
			<ProgressBar now = {(props.current/200) * 100} label = {props.current}/>
		</div>
	)
}
*/

const About = () => {
	return (
		<Container fluid>
			<Row>

			</Row>
			<Row>
				<Col sm>
					<h1 style = {{textAlign: "center"}}>Why Bleeding Control Training?</h1>
					<h1></h1>
					<p style = {{textAlign: "center", width: "90%", margin: "auto"}}>In the United States, uncontrolled bleeding is the <b>number one cause of preventable death from trauma.</b> Victims of serious injury are subject to bleeding out within three to five minutes, which is faster than most emergency service response times. 
					Moreover, high schoolers are at high risk to be in a bleeding emergency scenario, with upwards of <b>22 school shootings and 255 mass shootings in 2019</b>, as well as teens having the <b>highest incidence of motor vehicle accidents</b> out of all age groups. </p>
					<br />
					<p style = {{textAlign: "center", width: "90%", margin: "auto"}}>For these reasons, Bleeding Control training is becoming increasingly 
						critical to public safety, with national campaigns such as Stop the Bleed being employed. However, high school students are neglected despite their increased risk. Seattle and Bellevue's campaign to place bleeding control kits in public places, including 
						high schools, is a major step to increasing public awareness and safety. However, students are untrained to use such resources. Our goal is to educate students in lifesaving techniques, collaborating with school and district staff to create 
						training opportunities for students, and encourage students to receive training. We hope to hold trainings in all Bellevue School District high schools and possibly encourage other districts to implement trainings as well.</p>
					<h1></h1>
					<h1></h1>
				</Col>
				<Col sm>
					<h3 style = {{textAlign: "center"}}>Important Statistics</h3>
					<ListGroup style = {{width: "90%", margin: "auto"}}>
						<ListGroup.Item><p>Vehicle crashes and firearms are the greatest killers of teens, killing more than 7,000 together, with 60% of deaths being due to preventable injuries (Science Daily from Michigan Medicine).</p></ListGroup.Item>
						<ListGroup.Item>
							<p>About 48% of teen deaths are caused by homicide or vehicle collisions (Centers for Disease Control).</p>		
						</ListGroup.Item>
						<ListGroup.Item>
							<p>In vehicle crashes, victims have an average of 15 injuries per person (National Institutes of Health).</p>
						</ListGroup.Item>
						<ListGroup.Item>
							<p>Blood Loss (hemorrhage) accounts for 31% of deaths in victimes of a trauma (American Heart Association).</p>
						</ListGroup.Item>
						<ListGroup.Item>
							<p>20% of people who have died from traumatic injuries could have survived with quick bleeding control (Stop the Bleed).</p>
						</ListGroup.Item>
					</ListGroup>
					<h1></h1>
					<h1></h1>
				</Col>
			</Row>
			<Row style = {{backgroundColor: "rgb(245, 245, 245)"}}>
				<Col>
					<h1></h1>
					<h1></h1>
					<h1 style = {{textAlign: "center"}}>Our Members</h1>
					<p style = {{textAlign: "center", width: "75%", margin: "auto"}}>YBCT was created by a group of nine students at Interlake High School in Bellevue, Washington. As a group, we aim to bring valuable knowledge and tips to the peers in our area.
					Feel free to reach out to us for any questions or comments.</p>
					<h1></h1>
				</Col>
			</Row>
			<Row style = {{backgroundColor: "rgb(245, 245, 245)"}}>
				<Col>
					<Card style = {{margin: "auto", boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)", textAlign: "center", width: "17.5rem"}}>
						<Card.Img src = "https://media.discordapp.net/attachments/688802349577404454/765316593994563614/unknown.png" height = "250"/>
						<Card.Title>Saketh Akella</Card.Title>
						<Card.Text><a style = {{color: "red"}} href = "malto:s-akellas@bsd405.org">Email: s-akellas@bsd405.org</a></Card.Text>
					</Card>
					<h1></h1>
				</Col>
				<Col>
					<Card style = {{margin: "auto", boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)", textAlign: "center", width: "17.5rem"}}> 
						<Card.Img src = "https://media.discordapp.net/attachments/688802349577404454/765316410460602399/unknown.png" height = "250"/>
						<Card.Title>Ishan Bansal</Card.Title>
						<Card.Text><a style = {{color: "red"}} href = "malto:s-bansali@bsd405.org">Email: s-bansali@bsd405.org</a></Card.Text>
					</Card>
					<h1></h1>
				</Col>
				<Col>
					<Card style = {{margin: "auto", boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)", textAlign: "center", width: "17.5rem"}}> 
						<Card.Img src = {require("./images/vedant.jpg")} height = "250"/>
						<Card.Title>Vedant Chavan</Card.Title>
						<Card.Text><a style = {{color: "red"}} href = "malto:s-chavanv@bsd405.org">Email: s-chavanv@bsd405.org</a></Card.Text>
					</Card>
					<h1></h1>
				</Col>
			</Row>
			<Row style = {{backgroundColor: "rgb(245, 245, 245)"}}>
				<Col>
					<Card style = {{margin: "auto", boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)", textAlign: "center", width: "17.5rem"}}>
						<Card.Img src = "https://media.discordapp.net/attachments/688802349577404454/765326379599396874/unknown.png?width=892&height=771" height = "250"/>
						<Card.Title>Sahi Chitrapu</Card.Title>
						<Card.Text><a style = {{color: "red"}} href = "malto:s-chitrapus@bsd405.org">Email: s-chitrapus@bsd405.org</a></Card.Text>
					</Card>
					<h1></h1>
				</Col>
				<Col>
					<Card style = {{margin: "auto", boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)", textAlign: "center", width: "17.5rem"}}> 
						<Card.Img src = "https://media.discordapp.net/attachments/688802349577404454/765312963821043732/nikhil.png" height = "250"/>
						<Card.Title>Nikhil Devisetty</Card.Title>
						<Card.Text><a style = {{color: "red"}} href = "malto:s-devisettyn@bsd405.org">Email: s-devisettyn@bsd405.org</a></Card.Text>
					</Card>
					<h1></h1>
				</Col>
				<Col>
					<Card style = {{margin: "auto", boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)", textAlign: "center", width: "17.5rem"}}> 
						<Card.Img src = {require("./images/vikram.jpg")} height = "250"/>
						<Card.Title>Vikram Khandelwal</Card.Title>
						<Card.Text><a style = {{color: "red"}} href = "malto:s-khandelwalv@bsd405.org">Email: s-khandelwalv@bsd405.org</a></Card.Text>
					</Card>
					<h1></h1>
				</Col>
			</Row>
			<Row style = {{backgroundColor: "rgb(245, 245, 245)"}}>
				<Col>
					<Card style = {{margin: "auto", boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)", textAlign: "center", width: "17.5rem"}}>
						<Card.Img src = "https://media.discordapp.net/attachments/688802349577404454/765316274225283132/unknown.png" height = "250"/>
						<Card.Title>Aditya Khowal</Card.Title>
						<Card.Text><a style = {{color: "red"}} href = "malto:s-khowala@bsd405.org">Email: s-khowala@bsd405.org</a></Card.Text>
					</Card>
				</Col>
				<Col>
					<Card style = {{margin: "auto", boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)", textAlign: "center", width: "17.5rem"}}> 
						<Card.Img src = {require("./images/wesley.jpg")} height = "250"/>
						<Card.Title>Wesley Luk</Card.Title>
						<Card.Text><a style = {{color: "red"}} href = "malto:s-lukw@bsd405.org">Email: s-lukw@bsd405.org</a></Card.Text>
					</Card>
				</Col>
				<Col>
					<Card style = {{margin: "auto", boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)", textAlign: "center", width: "17.5rem"}}> 
						<Card.Img src = "https://media.discordapp.net/attachments/688802349577404454/765316221322395648/unknown.png" height = "250"/>
						<Card.Title>Aditya Shrey</Card.Title>
						<Card.Text><a style = {{color: "red"}} href = "malto:s-shreya@bsd405.org">Email: s-shreya@bsd405.org</a></Card.Text>
					</Card>
				</Col>
			</Row>
			<Row style = {{backgroundColor: "rgb(245, 245, 245)"}}>
				<Col>
					<h1></h1>
					<h1></h1>
				</Col>
			</Row>
			<Row>
				<Col>
					<h1></h1>
					<h1></h1>
					<h1>Want To Learn More?</h1>
					<p>Here are some other great resources to learn more about the significance of bleeding control training:</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<a href = "https://www.bleedingcontrol.org/~/media/bleedingcontrol/files/stop%20the%20bleed%20booklet.ashx#:~:text=It%20is%20important%20that%20as,chances%20of%20surviving%20that%20injury.">
						<img src = "https://www.beaumont.org/images/default-source/default-album/stop-the-bleed.jpg?sfvrsn=33ec9ce0_0" width = "300" height = "161" style = {{display: "block", margin: "auto"}}/>
					</a>
				</Col>
				<Col>
					<a href = "https://www.ncbi.nlm.nih.gov/books/NBK535393/">
						<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/US-NLM-NCBI-Logo.svg/1200px-US-NLM-NCBI-Logo.svg.png" width = "150" height = "185" style = {{display: "block", margin: "auto"}}></img>
					</a>
				</Col>
				<Col>
					<a href = "https://www.jems.com/2016/04/04/time-is-blood-when-it-comes-to-hemorrhage-control/">
						<img src = "https://lh3.googleusercontent.com/proxy/EV5rmLsAnCQFdvYKBOuaUv7wTM-T9_dH2KP4MkZ_SVnWqA6BzhW748IeKCaiWyKuUDo3gTIpHB9S8gea7UMdX7zL0zwrG_b8wTwrFGgtcpDWXU6Tm9ZutTw" width = "256" height = "92" style = {{display: "block", margin: "auto", marginTop: "40px"}}></img>
					</a>
				</Col>
				<Col>
					<a href = "https://ajph.aphapublications.org/doi/10.2105/AJPH.2018.304773">
						<img src = "https://ajph.aphapublications.org/pb-assets/images/logos/ajph-logo.png" width = "210" height = "98" style = {{display: "block", margin: "auto", marginTop: "40px"}}></img>
					</a>
				</Col>
				<Col>
					<a href = "https://rdcr.org/wp-content/uploads/2018/05/Lockey-Weaver-TRANSFUSION-2013-53-17S-22S-Practical-translation-of-hemorrage-control-techniques-to-the-civilian-trauma-scene.pdf">
						<img src = "https://rdcr.org/wp-content/uploads/2014/08/THOR-Crest-v2.png" width = "150" height = "150" style = {{display: "block", margin: "auto", marginTop: "20px"}}></img>
					</a>
				</Col>
			</Row>
			<Row>
				<Col>
					<h1></h1>
					<h1></h1>
				</Col>
			</Row>
		</Container>
	)
/*  return (
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
					<img src = "https://www.iconfinder.com/data/icons/business-693/96/Business_Arrow_business_goal_target-512.png" width = "200" height = "200" style = {{float: "right"}}></img>
				</div>
				<div className = "container" id = "strategy">
					<h1>Our Strategy</h1>
					<p style = {{fontSize: 25, color: "black", float: "left", textAlign: "left", width: "100%"}}><i>We aim to make our events as interactive and engaging as possible.</i></p>
					<p style={{ fontSize: 20, width: "75%", float: "left", textAlign: "left"}}>Centered in Bellevue, Washington, we carry out our mission by
	      			educating students at nearby schools through afterschool events. We push ourselves to make a big impact on people's perception of bleeding control,
				  as well as provide them with the necessary tools and knowldge for dealing with emergency situations. Through enlisting the help of the Bellevue School District and Bellevue Police Department, 
				  we are fortunately provided with specialized medical equipment such as tourniquets, gauze packing, first aid boxes, and dummies in hopes of providing people with a
				  hands-on experience and preparing them to apply bleeding control training in real life scenarios.</p>
				  <img src = "https://static.thenounproject.com/png/247310-200.png" width = "200" height = "200" style = {{float: "right"}}></img>
				</div>
				<div className = "container" id = "members" style = {{float: "left"}}>
					<h1>Our Members</h1>
				</div>
			</div>
	    </div>
	)
	*/
}

export default About;