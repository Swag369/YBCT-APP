import React, {useState, useEffect, useRef} from "react"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import './Navigation.css';


const Navigation = () => {
    const [page, setPage] = useState({currentPage: "Home"})
/*
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
*/

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
        <header>
            <div className = "navbar">
                <img src = {require("/Users/sahi/ybct/src/current_logo.jpg")} className = "logo"></img>
                <h2 className = "title">Youth Bleeding Control Training</h2>
                <Link to = "/" className = "tab" onClick = {handleHome} style = {page.currentPage == "Home" ? {color: "red"} : {color: "black"}}>Home</Link>
                <Link to = "/About" className = "tab" onClick = {handleAbout} style = {page.currentPage == "About" ? {color: "red"} : {color: "black"}}>About</Link>
                <Link to = "/Resources" className = "tab" onClick = {handleResources} style = {page.currentPage == "Resources" ? {color: "red"} : {color: "black"}}>Resources</Link>
                <a href = "https://www.instagram.com/ybct_saveslives/" target = "_blank" className = "social">
                    <img src = {require("/Users/sahi/ybct/src/images/iconfinder_1_Instagram_colored_svg_1_5296765.png")} width = "40" height = "40"></img>
                </a>
                <a href = "" className = "social">
                    <img src = {require("/Users/sahi/ybct/src/images/iconfinder_1_Facebook_colored_svg_copy_5296499.png")} width = "40" height = "40"></img>
                </a>
            </div>
        </header>
    )
}

export default Navigation;