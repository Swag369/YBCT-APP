import React from "react"
import "./Footer.css"

const Footer = () => {
    return (
        <div className = "contact" id = "contact">
            <img src = {require("/Users/sahi/my-app/src/White Baner.png")} className = "banner"></img>
            <div className = "transbox">
                <p>Social Media</p>
                <a href = "https://www.facebook.com/">
                    <img src = "https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo.png" className = "social-logo"></img>
                </a>
                <a href = "https://www.instagram.com/ybct_saveslives">
                    <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/240px-Instagram_logo_2016.svg.png" className = "social-logo"></img>
                </a>
                <a href = "https://www.youtube.com/">
                    <img src = "https://cdn.worldvectorlogo.com/logos/youtube-icon.svg" className = "social-logo"></img>
                </a>
                <hr />
                <p>Email us at:</p>
                <a href = "mailto: youthbleedingcontrol@gmail.com">
                    <h4>youthbleedingcontrol@gmail.com</h4>
                </a>
            </div>
        </div>
    )
}

export default Footer;