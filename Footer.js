import React from "react"

const Footer = () => {
    return (
       <div style = {{backgroundColor: "whitesmoke", display: "block", height: "100", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif", width: "100%", float: "left", textAlign: "center"}}>
           <h1 style = {{color: "black", fontSize: 30}}>Interested in learning more? <a style = {{color: "red", float: "center", fontSize: 30, textDecoration: "none"}} href = "mailto:youthbleedingcontrol@gmail.com">Email Us</a> or <a style = {{color: "red", float: "center", fontSize: 30, textDecoration: "none"}} href = "https://docs.google.com/forms/d/1tkpKoNENoyoXDtPdCqJ5o_uH72AaH97nhhQjEM4ilGg/edit" target = "_blank">Click Here</a></h1>
           <hr />
           <p style = {{fontSize: 20}}>Copyright © 2020 Youth Bleeding Control Training. All Rights Reserved.</p>
       </div>
    )
}

export default Footer