import React, {useEffect, useState, useRef} from 'react';
import {Container, Row, Col, Button, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from "./images/slide1.jpeg"
import slide2 from "./images/slide2.jpeg"
import slide3 from "./images/slide3.jpeg"
import v1 from "./images/YBCT_VM.PNG"
import v2 from "./images/YBCT_VM2.PNG"
import logo from "./images/current_logo.jpg";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import AnimatedNumber from "react-animated-number";

const App = () => {
  return (
    <div style = {{overflowX: "hidden"}}>
      <Navigation />
      <div style = {{background: `repeating-linear-gradient(180deg, white, #fc4445, white)`}}>
        <ScrollAnimation animateIn = "fadeIn">
          <Summary />
          <Slideshow />
        </ScrollAnimation>
        <ScrollAnimation animateIn = "fadeIn">
          <About />
        </ScrollAnimation>
        <ScrollAnimation animateIn = "fadeIn">
          <Virtual />
        </ScrollAnimation>
        <ScrollAnimation animateIn = "fadeIn">
          <Blog /> 
        </ScrollAnimation>        
        <Footer />
      </div>
    </div>  
  )
}

const Navigation = () => {
  const[scroll, setScroll] = useState(0);
  const[hover, setHover] = useState(false);

  useEffect(() => {
    let progressBarHandler = () => {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scroll = `${totalScroll/windowHeight}`;

    setScroll(scroll);
    }
    window.addEventListener("scroll", progressBarHandler);
    return () => window.removeEventListener("scroll", progressBarHandler);
  })

  return (
    <div style = {{top: 0, position: "fixed", zIndex: "10", width: "100%"}}>
        <nav style = {{boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)", height: "12vh", display: "flex", flexDirection: "row", backgroundColor: "white"}}>
            <img src = {logo} style = {{width: "10vh", height: "10vh", borderRadius: "40px", marginTop: "auto", marginLeft: "auto", marginBottom: "auto"}} />
            <a style = {{display: "block", marginRight: "auto", marginTop: "auto", marginBottom: "auto"}} href = "https://www.instagram.com/ybct_saveslives" target = "_blank">
                {' '}<img 
                    src = {require("./images/instagram.png")}
                    style = {{opacity: hover ? 0.5 : 1, transition: `opacity 150ms`, width: "8vh", height: "8vh"}}
                    onMouseEnter = {() => setHover(true)}
                    onMouseLeave = {() => setHover(false)}
                />
            </a>
        </nav>
        <div style = {{backgroundColor: "cyan", transformOrigin: "top left", transform: `scale(${scroll}, 1)`, height: "5px"}} />
    </div>
  )
}

const About = () => {
  return (
    <div style = {{width: "90vw", marginRight: "auto", marginLeft: "auto", textAlign: "center", marginTop: "50px", marginBottom: "50px"}}>
      <h1>About YBCT</h1>
      <p style = {{fontSize: "25px"}}>Teens are at an increased risk to be involved in a fatal car accident or school shooting scenario, both of which can be prevented by bleeding control techniques.</p>
      <p style = {{fontSize: "20px"}}>Founded and led by a group of highschoolers, YBCT aims to edcuate adolescents about lifesaving techniques for bleeding-related emergencies in order to prevent death from blood loss.</p>
      <br />
      <Container>
        <Row>
          <Col>
            <Card style = {{borderRadius: "30px"}}>
              <Card.Body style = {{marginRight: "auto", marginLeft: "auto", marginBottom: "auto"}}><b>31%</b> of deaths in victims of a trauma are from excessive blood loss (American Heart Association).</Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style = {{borderRadius: "30px"}}>
              <Card.Body style = {{marginRight: "auto", marginLeft: "auto", marginTop: "auto", marginBottom: "auto"}}><b>20%</b> of deaths from traumatic injury could have been prevented with quick bleeding control (Stop the Bleed).</Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style = {{borderRadius: "30px"}}> 
              <Card.Body style = {{marginRight: "auto", marginLeft: "auto", marginTop: "auto"}}><b>48%</b> of teen deaths are from homicide or vehicle collisions (Centers for Disease Control).</Card.Body>
            </Card>
          </Col>
        </Row>
        <ScrollAnimation animateIn = "fadeIn">
          <h1 style = {{fontSize: 150, maxWidth: "80vw"}}>
            <AnimatedNumber initialValue = {0} value = {100} style = {{fontSize: 150}} duration = {1000} formatValue = {(n) => n.toFixed(0)}></AnimatedNumber>
          +</h1>
          <h1 style = {{textAlign: "center", marginTop: "auto", marginBottom: "auto", display: "block"}}>Students Educated</h1>
        </ScrollAnimation>
      </Container>
    </div>
  )
}

const images = [slide1, slide2, slide3]

const Slideshow = () => {
  const[index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if(timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => 
      setIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0: prevIndex + 1),
      3000);
    return () => {};
  }, [index])

  return (
    <div style = {{margin: "0 auto", overflow: "hidden", width: "70vw", marginTop: "auto", marginBottom: "auto"}}>
      <div style = {{whiteSpace: "nowrap", transform: `translate3d(${-index * 100}%, 0, 0)`, transition: "ease 1500ms"}}>
        {images.map((path, index) => (
          <img src = {path} key = {index} style = {{display: "inline-block", width: "100%", borderRadius: "40px", boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)"}}/>
        ))}
      </div>
      <div style = {{textAlign: "center"}}>
          {images.map((_, idx) => (
            <div 
              key = {idx} 
              style = {{display: "inline-block", height: "3px", width: "50px", cursor: "pointer", margin: "15px 7px 0px", backgroundColor: idx === index ? "red" : "white"}}
              onClick = {() => {setIndex(idx)}}>
            </div>
          ))}
      </div>
    </div>
  )
}

const Summary = () => {
  return (
    <div style = {{width: "90vw", borderRadius: "40px", marginRight: "auto", marginLeft: "auto", marginTop: "20vh"}}>
      <h1 id = "summary" style = {{textAlign: "center"}}>Youth Bleeding Control Training: Empowerment Through Training</h1>
      <p style = {{fontSize: "20px", textAlign: "center"}}>Educating teens on bleeding control techniques and how to deal with emergency situations</p>
    </div>
  )
}

const Virtual = () => {
  return (
    <div style = {{width: "90vw", borderRadius: "40px", marginRight: "auto", marginLeft: "auto", marginBottom: "50px", marginTop: "50px", textAlign: "center"}}>
      <h1 id = "virtual">Virtual Meetings</h1>
      <p style = {{fontSize: "20px", color: "black"}}>Acknowledging the risks of in-person trainings, we are now conducting virtual meetings on Microsoft Teams.</p>
      <Container>
        <Row>
          <Col>
            <img src = {v1} style = {{borderRadius: "40px", boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)", width: "100%"}}/>
          </Col>
          <Col>
            <img src = {v2} style = {{borderRadius: "40px", boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)", width: "100%"}}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant = "outline-light" style = {{display: "block", marginRight: "auto", marginLeft: "auto", width: "40%", marginTop: "50px"}} href = "https://docs.google.com/forms/d/e/1FAIpQLSeuPffsr543cNjxKFIDGemZpp3D2L9CEUBm48kGTCE8fJVWNg/viewform" target = "_blank">Sign up for our next meeting</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const Blog = () => {
  return (
    <div style = {{width: "90vw", marginRight: "auto", marginLeft: "auto"}}>
      <h1 id = "blog" style = {{textAlign: "center"}}>Instagram Blog</h1>
      <br />
      <Container fluid>
        <Row>
          <Col>
            <iframe src="https://www.instagram.com/p/CChbSZ9FTri/embed" frameborder="0" style = {{height: 500, display: "block", marginRight: "auto", marginLeft: "auto", marginBottom: "2vh", boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)", borderRadius: "40px"}} />
          </Col>
          <Col>
            <iframe src="https://www.instagram.com/p/CEJ4UseFcBM/embed" frameborder="0" style = {{height: 500, display: "block", marginRight: "auto", marginLeft: "auto", marginBottom: "2vh", boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)", borderRadius: "40px"}} />
          </Col>
          <Col>
            <iframe src="https://www.instagram.com/p/CESedZWlKSy/embed" frameborder="0" style = {{height: 500, display: "block", marginLeft: "auto", marginRight: "auto", marginBottom: "2vh", boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)", borderRadius: "40px"}} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

/*const Resources = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);

  return (
    <div style = {{width: "80%", marginLeft: "auto", marginRight: "auto", height: "80vh"}}>
      <p style = {{fontSize: "35px", marginTop: "auto", marginBottom: "auto"}}>Other Resources</p>
      <Row>
        <Col>
          <a href="https://www.bleedingcontrol.org/~/media/bleedingcontrol/files/stop%20the%20bleed%20booklet.ashx#:~:text=It%20is%20important%20that%20as,chances%20of%20surviving%20that%20injury.">
            <img src="https://www.beaumont.org/images/default-source/default-album/stop-the-bleed.jpg?sfvrsn=33ec9ce0_0" onMouseEnter = {() => setHover1(true)} onMouseLeave = {() => setHover1(false)} width="300" height="161" style={{ opacity: hover1 ? 0.5 : 1, transition: `opacity 150ms`, display: "block", margin: "auto"}} />
          </a>
        </Col>
        <Col>
          <a href="https://www.ncbi.nlm.nih.gov/books/NBK535393/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/US-NLM-NCBI-Logo.svg/1200px-US-NLM-NCBI-Logo.svg.png" onMouseEnter = {() => setHover2(true)} onMouseLeave = {() => setHover2(false)} width="150" height="185" style={{opacity: hover2 ? 0.5 : 1, transition: `opacity 150ms`,display: "block", margin: "auto"}} />
          </a>
        </Col>
        <Col>
          <a href="https://www.jems.com/2016/04/04/time-is-blood-when-it-comes-to-hemorrhage-control/">
            <img src="https://jems.careers.adicio.com/files/cmsimages/userfiles/88ff99ef3ae393441b3bca4433f5524556833996/files/logo_jems.png" onMouseEnter = {() => setHover3(true)} onMouseLeave = {() => setHover3(false)} width="256" height="92" style={{opacity: hover3 ? 0.5 : 1, transition: `opacity 150ms`,display: "block", margin: "40px auto auto"}} />
          </a>
        </Col>
        <Col>
          <a href="https://ajph.aphapublications.org/doi/10.2105/AJPH.2018.304773">
            <img src="https://ajph.aphapublications.org/pb-assets/images/logos/ajph-logo.png" width="210" height="98" onMouseEnter = {() => setHover4(true)} onMouseLeave = {() => setHover4(false)} style={{opacity: hover4 ? 0.5 : 1, transition: `opacity 150ms`,display: "block", margin: "40px auto auto"}} />
          </a>
        </Col>
      </Row>
    </div>
  )
}
*/

const Footer = () => {
  return (
    <div style = {{color: "black", textAlign: "center"}}>
      <p>
        Not Copyright © 2020 Youth Bleeding Control Training.<br />
        <br />
        <a style = {{textDecoration: "none", color: "red"}} href = "mailto:youthbleedingcontrol@gmail.com" target = "_blank">Email</a>
        {" | "} 
        <a style = {{textDecoration: "none", color: "red"}} href = "https://www.instagram.com/ybct_saveslives/" target = "_blank">Instagram</a>
        {" | "}     
        <a style = {{textDecoration: "none", color: "red"}} href = "">GitHub</a> 
      </p>
    </div>
  )
}


export default App;
