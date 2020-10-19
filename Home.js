import React from "react"
import ImageSlider from "./ImageSlider"
import "bootstrap/dist/css/bootstrap.min.css"
import {Container, Row, Col, Card, Button, Accordion} from "react-bootstrap"

const Home = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <h1>Empowerment Through Training.</h1>
                        <br />
                        <h3>Our mission</h3>
                        <p>At Youth Bleeding Control Training, we aim to bring high-level education and training for teens on how to control excessive bleeding.</p>
                        <br />
                        <h3>Our purpose</h3>
                        <p>We want to equip teens with adequate knowledge and experience for dealing with possible emergencies, such as <b>school shootings</b> and <b>car accidents</b>.</p>
                    </Col>
                    <Col>
                        <ImageSlider />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1></h1>
                        <h1></h1>
                    </Col>
                </Row>
                <h1></h1>
                <Row style = {{backgroundColor: "rgb(245, 245, 245)", textAlign: "center"}}>
                    <Col>
                        <h1></h1>
                        <h1></h1>
                        <h1>How Our Trainings Work</h1>
                        <p>In our trainings we work with Bellevue School District emergency certified staff to walk through emergency scenarios step-by-step.</p>
                    </Col>
                </Row>
                <Row style = {{backgroundColor: "rgb(245, 245, 245)"}}>
                    <Col>
                        <Card style = {{width: "18rem", margin: "auto", boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)"}}>
                            <Card.Body>
                                <Card.Title>Assessment of Situation</Card.Title>
                                <Card.Text>We cover how to properly ensure maximum safety during the bleeding control process by identifying and addressing potential hazards.</Card.Text>
                            </Card.Body>
                        </Card>
                        <h1></h1>
                    </Col>
                    <Col>
                        <Card style = {{width: "18rem", margin: "auto", boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)"}}>
                            <Card.Body>
                                <Card.Title>Usage of Equipment</Card.Title>
                                <Card.Text>We explain not only how to use equipment such as <b>tourniquets</b>, <b>gauze</b>, and <b>first aid</b>, but also what items and objects to use as substitutes.</Card.Text>
                            </Card.Body>
                        </Card>
                        <h1></h1>
                    </Col>
                    <Col>
                        <Card style = {{width: "18rem", margin: "auto", boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)"}}>
                            <Card.Body>
                                <Card.Title>Real-World Application</Card.Title>
                                <Card.Text>We apply discussion to real-life scenarios, slowly running through each step and practicing in order to develop a thorough understanding. </Card.Text>
                            </Card.Body>
                        </Card>
                        <h1></h1>
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
                        <h1 style = {{textAlign: "center"}}>Our Response to COVID-19</h1>
                        <p style = {{textAlign: "center"}}>In the midst of a global pandemic, we acknowledge the risks of conducting in-person trainings. As a solution, we have turned to using Zoom to help organize meetings in the most efficient way possible. We invite everyone interested to participate!</p>
                        <h3 style = {{textAlign: "center"}}>Want to participate?</h3>
                        <h1></h1>
                        <Button variant = "danger" style = {{display: "block", marginRight: "auto", marginLeft: "auto"}} href = "https://docs.google.com/forms/d/e/1FAIpQLSeuPffsr543cNjxKFIDGemZpp3D2L9CEUBm48kGTCE8fJVWNg/viewform" target = "_blank">Sign up for our next virtual meeting</Button>
                        <h1></h1>
                        <h1></h1>
                    </Col>
                    <Col>
                        <h1></h1>
                        <img src = "https://uca.edu/cte/files/2020/07/zoom.png" style = {{display: "block", marginRight: "auto", marginLeft: "auto"}} width = "300" height = "120"/>
                        <h1></h1>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        How long are the meetings?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>The meetings are 45 minutes - 1 hour long.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        What will be covered in the meetings?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>We talk about almost everything we would in regular trainings: topics from protocol, equipment, application, and more!</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                        When will in-person trainings resume?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>As of now, we are waiting until further notice from the Bellevue School District to resume in-person training, but hope to see you some time by early 2021!</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <h1></h1>
                        <h1></h1>
                    </Col>
                </Row>
                <Row style = {{backgroundColor: "rgb(245, 245, 245)"}}>
                    <Col>
                        <h1></h1>
                        <h1></h1>
                        <h1 style = {{textAlign: "center"}}>Our Instagram Blog</h1>
                        <p style = {{textAlign: "center"}}>Follow us for more information on bleeding control and other tips!</p>
                    </Col>
                </Row>
                <Row style = {{backgroundColor: "rgb(245, 245, 245)"}}>
                    <Col>
                        <iframe src="https://www.instagram.com/p/CChbSZ9FTri/embed" frameborder="0" style = {{height: 500, display: "block", marginRight: "auto", marginLeft: "auto", boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)"}}></iframe>
                        <h1></h1>
                    </Col>
                    <Col>
                        <iframe src="https://www.instagram.com/p/CESedZWlKSy/embed" frameborder="0" style = {{height: 500, display: "block", marginRight: "auto", marginLeft: "auto", boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)"}}></iframe>
                        <h1></h1>
                    </Col>
                    <Col>
                        <iframe src="https://www.instagram.com/p/CEJ4UseFcBM/embed" frameborder="0" style = {{height: 500, display: "block", marginRight: "auto", marginLeft: "auto", boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)"}}></iframe>
                        <h1></h1>
                    </Col>
                </Row>
                <Row style = {{backgroundColor: "rgb(245, 245, 245)"}}>
                    <Col>
                        <h1></h1>
                        <h1></h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
/*    return (
    	<div>
            <div className = "container">
                <h1>Welcome to Youth Bleeding Control Training's Website</h1>
                <p style = {{float: "left", textAlign: "left", width: "30%"}}>Youth Bleeding Control Training, or YBCT for short, is a project developed by nine high school students interested in
                    providing teens and young adults bleeding control knowledge and training. We hope that through our efforts, we can give people the needed confidence 
                    and know-how for dealing with emergency situations, potentially saving lives.
                </p>
                <ImageSlider />
                <img src = "https://www.ibo.org/globalassets/digital-toolkit/logos-and-programme-models/ib-world-school-logo-2-colour.png" height = "100" width = "100" style = {{float: "left", margin: "0 50px 70px 0"}}></img>
                <img src = "https://pbs.twimg.com/profile_images/538078248/interlake_400x400.jpg" height = "100" width = "100" style = {{float: "left", margin: "0 50px 70px 0"}}></img>
            </div>
            <div className = "container" style = {{marginBottom: 50}}>
                <h1>What We Talk About</h1>
                <div className = "container" style = {{marginTop: 5}}>
                    <h2 style = {{float: "left"}}>How to Assess the Situation</h2>
                    <p style = {{float: "left"}}>One of the things we talk about in our training is how to properly assess the situation. This is a very important step
                        in making sure that you aren't putting yourself or others around you at risk of additional injury.
                    </p>
                    <img src = "https://culturesync.net/wp-content/uploads/2018/12/icon-assessment@2x.png" height = "150" width = "150" style = {{float: "right"}}></img>
                </div>
                <div className = "container" style = {{textAlign: "left", marginTop: 5}}>
                    <h2 style = {{float: "left"}}>How To Use Equipment</h2>
                    <p style = {{float: "left"}}>Another important concept we like to talk about in our program is how to properly use equipment if it is available. We 
                        also acknowledge the fact that medical equipment being in the vicinity is unlikely, so we address how you can use 
                        more common items or objects as substiutes.
                    </p>
                    <img src = "https://surefirecpr.com/wp-content/uploads/first-aid-items-1024x576.jpg" height = "150" width = "240" style = {{float: "right"}}></img>
                </div>
                <div className = "container" style = {{marginTop: 5}}>
                    <h2 style = {{float: "left"}}>How To Put Everything Together</h2>
                    <p style = {{float: "left"}}>The final point major point we emphasize in our trainings is how to put all the knowledge to use in a realistic scenario. We like to slowly walk
                        through each step of the decision-making process to make sure everyone understands what to do and how and when it should be done.
                    </p>
                    <img src = {require("/Users/sahi/ybct/src/images/iconfinder_processing_2799201.png")} style = {{float: "right", marginRight: "25px"}}></img>
                </div>
            </div>
        </div>

        
    )
    */
}

export default Home