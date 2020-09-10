import React from "react"
import ImageSlider from "./ImageSlider"
import "./Home.css"

const Home = () => {
    return (
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
            <div className = "container">
                <h1><i>Why Bleeding Control Training?</i></h1>
                <p>Bleeding control techniques are crucial in life-threatening emergencies for extending a victim's life until first responders arrive. 
                    There are numerous scenarios where bleeding control training and knowledge could potentially save lives:
                </p>
            </div>
        </div>
    )
}

export default Home