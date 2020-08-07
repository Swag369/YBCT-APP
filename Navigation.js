import React, {useState, useEffect, useRef} from "react"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import './Navigation.css';


const Navigation = () => {

    const [sticky, setSticky] = useState({isSticky: false, offset: 0 })
    const headerRef = useRef(null)

    const handleScroll = (eventO, eventH) => {
        if(window.pageYOffset > (eventO + eventH)) {
            setSticky({ isSticky: true, offset: eventH})
        } else {
            setSticky({ isSticky: false, offset: 0 })
        }
    }

    useEffect(() => {
        var header = headerRef.current.getBoundingClientRect()
        const handleScrollEvent = () => {
            handleScroll(header.top, header.height)
        }
        window.addEventListener("scroll", handleScrollEvent)

        return () => {
            window.removeEventListener("scroll", handleScrollEvent)
        }
    }, [])

    return (
        <div className = {`navbar${sticky.isSticky ? " sticky" : ""}`} ref = {headerRef}>
            <img src = {require("/Users/sahi/my-app/src/current_logo.jpg")} className = "logo"></img>
            <h1 className = "title">Youth Bleeding Control Training</h1>
            <a to = "#contact" className = "tab">Contact</a>
            <Link to = "/Resources" className = "tab">Resources</Link>
            <Link to = "/About" className = "tab">About</Link>
            <Link to = "/" className = "tab">Home</Link>
        </div>
    )
}

export default Navigation;