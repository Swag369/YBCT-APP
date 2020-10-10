import React from "react";
import ImageSlider from "./ImageSlider";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="container">
        <h1>Welcome to Youth Bleeding Control Training's Website</h1>
        <p style={{ float: "left", textAlign: "left", width: "30%" }}>
          Youth Bleeding Control Training, or YBCT for short, is a project
          developed by nine high school students interested in providing teens
          and young adults bleeding control knowledge and training. We hope that
          through our efforts, we can give people the needed confidence and
          know-how for dealing with emergency situations, potentially saving
          lives.
        </p>
        <ImageSlider />
        <img
          src="https://www.ibo.org/globalassets/digital-toolkit/logos-and-programme-models/ib-world-school-logo-2-colour.png"
          height="100"
          width="100"
          style={{ float: "left", margin: "0 50px 70px 0" }}
        ></img>
        <img
          src="https://pbs.twimg.com/profile_images/538078248/interlake_400x400.jpg"
          height="100"
          width="100"
          style={{ float: "left", margin: "0 50px 70px 0" }}
        ></img>
      </div>
      <div className="container" style={{ marginBottom: 50 }}>
        <h1>What We Talk About</h1>
        <div className="container" style={{ marginTop: 5 }}>
          <h2 style={{ float: "left" }}>How to Assess the Situation</h2>
          <p style={{ float: "left" }}>
            One of the things we talk about in our training is how to properly
            assess the situation. This is a very important step in making sure
            that you aren't putting yourself or others around you at risk of
            additional injury.
          </p>
          <img
            src="https://culturesync.net/wp-content/uploads/2018/12/icon-assessment@2x.png"
            height="150"
            width="150"
            style={{ float: "right" }}
          ></img>
        </div>
        <div className="container" style={{ textAlign: "left", marginTop: 5 }}>
          <h2 style={{ float: "left" }}>How To Use Equipment</h2>
          <p style={{ float: "left" }}>
            Another important concept we like to talk about in our program is
            how to properly use equipment if it is available. We also
            acknowledge the fact that medical equipment being in the vicinity is
            unlikely, so we address how you can use more common items or objects
            as substiutes.
          </p>
          <img
            src="https://surefirecpr.com/wp-content/uploads/first-aid-items-1024x576.jpg"
            height="150"
            width="240"
            style={{ float: "right" }}
          ></img>
        </div>
        <div className="container" style={{ marginTop: 5 }}>
          <h2 style={{ float: "left" }}>How To Put Everything Together</h2>
          <p style={{ float: "left" }}>
            The final point major point we emphasize in our trainings is how to
            put all the knowledge to use in a realistic scenario. We like to
            slowly walk through each step of the decision-making process to make
            sure everyone understands what to do and how and when it should be
            done.
          </p>
          <img
            src={require("./images/iconfinder_processing_2799201.png")}
            style={{ float: "right", marginRight: "25px" }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
