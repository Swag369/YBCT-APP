import React, {useState, useEffect, useRef} from "react"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import {Navbar, Nav} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
    const [page, setPage] = useState({currentPage: "Home"})
    const handleHome = () => {
        setPage({ currentPage: "Home" })
    }
    const handleAbout = () => {
        setPage({ currentPage: "About"})
    }
    const handleResources = () => {
        setPage({ currentPage: "Resources" })
    }
    return (
        <div style = {{fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"}}>
            <Navbar bg = "white" variant = "light" fixed = "top" expand = "lg" style = {{boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)"}}>
                <Navbar.Brand href = "/">
                    <img
                    src = {require("./images/current_logo.jpg")}
                    width = "30"
                    height = "30"
                    className = "d-inline-block align-top"
                    />{' '}
                    YBCT
                </Navbar.Brand>
                <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
                <Navbar.Collapse id = "basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/About">About</Nav.Link>
                        <Nav.Link href = "https://docs.google.com/forms/d/1tkpKoNENoyoXDtPdCqJ5o_uH72AaH97nhhQjEM4ilGg/edit" target = "_blank">Sign Up</Nav.Link>
                        <Nav.Link href = "https://discord.gg/JsGXYAV" target = "_blank">
                            <img 
                                src = {require("./images/real_discord.png")}
                                width = "20"
                                height = "20"
                            />
                        </Nav.Link>
                        <Nav.Link href = "https://www.instagram.com/ybct_saveslives" target = "_blank">
                            {' '}<img 
                                src = {require("./images/instagram.png")}
                                width = "20"
                                height = "20"
                            />
                        </Nav.Link>
                        <Nav.Link href = "" target = "_blank">
                            {' '}<img 
                                src = {require("./images/facebook.png")}
                                width = "20"
                                height = "20"
                            />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
        </div>
    )
}

export default Navigation;