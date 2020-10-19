import React from "react"
import {Container, Row, Col} from "react-bootstrap"

const Footer = () => {
    /*return (
       <div style = {{backgroundColor: "whitesmoke", display: "block", height: "100", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif", width: "100%", float: "left", textAlign: "center"}}>
           <h1 style = {{color: "black", fontSize: 30}}>Interested in learning more? <a style = {{color: "red", float: "center", fontSize: 30, textDecoration: "none"}} href = "mailto:youthbleedingcontrol@gmail.com">Email Us</a> or <a style = {{color: "red", float: "center", fontSize: 30, textDecoration: "none"}} href = "https://docs.google.com/forms/d/1tkpKoNENoyoXDtPdCqJ5o_uH72AaH97nhhQjEM4ilGg/edit" target = "_blank">Click Here</a></h1>
           <hr />
           <p style = {{fontSize: 20}}>Copyright © 2020 Youth Bleeding Control Training. All Rights Reserved.</p>
       </div>
    )
    */
   return (
       <div>
           <Container fluid>
               <Row>
                   <Col style = {{backgroundColor: "red"}}>
                        <h1></h1>
                   </Col>
               </Row>
               <Row style = {{backgroundColor: "black"}}>
                    <h1></h1>
                    <h1></h1>
               </Row>
                <Row style = {{backgroundColor: "black", color: "white", textAlign: "center"}}>
                    <Col style = {{marginRight: "auto", marginLeft: "auto"}}>
                        <h3><b>About YBCT</b></h3>
                        <p>YBCT's founders consist of 9 high school students completing the IB Diploma. For our community service project, we chose to establish YBCT, dedicated to bettering the youth in our community through education and training.</p>
                    </Col>
                    <Col style = {{marginRight: "auto", marginLeft: "auto"}}>
                        <h3><b>Contact Us</b></h3>
                        <a href = "mailto:youthbleedingcontrol@gmail.com" target = "_blank"><p>youthbleedingcontroltraining@gmail.com</p></a>
                        <a href = "https://www.google.com/maps/place/Interlake+High+School/@47.628934,-122.1262297,17z/data=!3m1!4b1!4m5!3m4!1s0x54906da201112251:0xefc929dd1c0ff5c3!8m2!3d47.628934!4d-122.124041" target = "_blank"><p>Interlake High School<img src = {require("./images/location.png")}/></p></a>
                    </Col>
                    <Col style = {{marginRight: "auto", marginLeft: "auto"}}>
                        <h3><b>Socials</b></h3>
                        <a href = "https://discord.gg/JsGXYAV" target = "_blank">
                            <img 
                                src = {require("./images/real_discord.png")}
                                style = {{
                                    marginRight: 12,
                                    marginLeft: 12
                                }}
                                width = "30"
                                height = "30"
                            />
                        </a>
                        <a href = "https://www.instagram.com/ybct_saveslives" target = "_blank">
                            <img 
                                src = {require("./images/instagram.png")}
                                style = {{
                                    marginRight: 12,
                                    marginLeft: 12
                                }}
                                width = "30"
                                height = "30"
                            />
                        </a>
                        <a href = "" target = "_blank">
                            <img 
                                src = {require("./images/facebook.png")}
                                style = {{
                                    marginRight: 12,
                                    marginLeft: 12
                                }}
                                width = "30"
                                height = "30"
                            />
                        </a>
                    </Col>
                    <Col style = {{marginRight: "auto", marginLeft: "auto"}}>
                        <h3><b>Sign Up</b></h3>
                        <a href = ""><p>Interest Form</p></a>
                        <a href = ""><p>Next Meeting</p></a>
                    </Col>
                </Row>
                <Row style = {{backgroundColor: "black", textAlign: "center"}}>
                    <Col>
                        <p style = {{color: "white"}}>Copyright © 2020 Youth Bleeding Control Training. All Rights Reserved. Just kidding we're not that professional.</p>
                    </Col>
                </Row>
           </Container>
       </div>
   )
}

export default Footer