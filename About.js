import React from "react";
import AboutProfile from "./AboutProfile";

const About = () => {
  return (
    <div>
      <div>
        <div className="container" id="mission">
          <h1>Our Mission</h1>
          <p
            style={{
              color: "#000000",
              fontSize: 25,
              width: "100%",
              float: "left",
              textAlign: "left",
            }}
          >
            <i>Educating people about saving lives is our priority.</i>
          </p>
          <p
            style={{
              fontSize: 20,
              width: "75%",
              float: "left",
              textAlign: "left",
            }}
          >
            In the United Sates, bleeding control is a major leading cause of
            preventable death for people of all ages. This harsh truth is scary,
            and it demonstrates the public's lack of knowledge and experience in
            dealing with these types of situations. Through our efforts,
            however, we aim to bring significant change to our local community
            so that teens and young adults can be prepared for the worst. We
            envision a future where people understand and acknowledge the
            dangers of uncontrolled bleeding. More importantly, we want to
            directly teach people on how to control bleeding themselves and
            clear up any stigmas around emergency bleeding situations. Our goal
            by the end of the 2021 is to educate at least 200 students in the
            Greater Seattle Area, if not more.
          </p>
          <img
            src="https://www.iconfinder.com/data/icons/business-693/96/Business_Arrow_business_goal_target-512.png"
            width="200"
            height="200"
            style={{ float: "right" }}
          ></img>
        </div>
        <div className="container" id="strategy">
          <h1>Our Strategy</h1>
          <p
            style={{
              fontSize: 25,
              color: "black",
              float: "left",
              textAlign: "left",
              width: "100%",
            }}
          >
            <i>
              We aim to make our events as interactive and engaging as possible.
            </i>
          </p>
          <p
            style={{
              fontSize: 20,
              width: "75%",
              float: "left",
              textAlign: "left",
            }}
          >
            Centered in Bellevue, Washington, we carry out our mission by
            educating students at nearby schools through afterschool events. We
            push ourselves to make a big impact on people's perception of
            bleeding control, as well as provide them with the necessary tools
            and knowldge for dealing with emergency situations. Through
            enlisting the help of the Bellevue School District and Bellevue
            Police Department, we are fortunately provided with specialized
            medical equipment such as tourniquets, gauze packing, first aid
            boxes, and dummies in hopes of providing people with a hands-on
            experience and preparing them to apply bleeding control training in
            real life scenarios.
          </p>
          <img
            src="https://static.thenounproject.com/png/247310-200.png"
            width="200"
            height="200"
            style={{ float: "right" }}
          ></img>
        </div>
        <div className="container" style={{ display: "inline" }}>
          <div>
            <p>
              <h1>Statistics</h1>
            </p>
            <p
              style={{
                color: "#000000",
                width: "100%",
                float: "left",
                textAlign: "left",
              }}
            >
              <p>
                <i style={{ fontSize: "25px" }}>
                  There is no predicting when or where a bleeding injury may
                  happen.
                </i>
              </p>
            </p>
            <div
              style={{
                fontSize: 20,
                width: "75%",
                float: "left",
                textAlign: "left",
                color: "gray",
              }}
            >
              Bleeding Control is one of the most important skills anyone can
              have. Vehicle Crashes and Firearms are the greatest killers of
              more teens killing more than 7,000 together. 60% die to
              preventable injuries{" "}
              <a href="https://www.sciencedaily.com/releases/2018/12/181219191100.htm">
                (Science Daily From Michigan Medicine)
              </a>
              {". "}
              According to the American College of Surgeons, uncontrolled
              bleeding is the number one cause of preventable death from trauma.
              Anyone who is hurt and losing blood is in severe danger.
              Unintentional injury related deaths in children are estimated to
              be 730,000 a year worldwide. At Youth Bleeding Control Training,
              we look to save lives by teaching adolescents life-saving
              techniques. Bleeding Control Training gives you the skills to
              temporarily stop the injured person from losing blood until
              Emergency Care arrives.
            </div>
            <div style={{ float: "right", margin: "0px, 1000px, 5px, 0px" }}>
              <img
                src="http://images.clipartpanda.com/statistics-clipart-graph4.png"
                alt="image of graph lel"
                width="200"
                height="200"
              ></img>
            </div>
          </div>
        </div>
        <div className="container" id="members" style={{ float: "left" }}>
          <h1>Our Members</h1>
          <AboutProfile
            name1="Sahi Chitrapu"
            img1={require("./images/sahi.png")}
            position1="Web Development"
            name2="Vikram Khandelwal"
            img2={require("./images/vikram.jpg")}
            position2="Web Development"
            name3="Saketh Akella"
            img3={require("./images/saketh.png")}
            position3="Web Development"
          />
          <AboutProfile
            name1="Nikhil Devisetty"
            img1={require("./images/nikhil.png")}
            position1="Outreach"
            name2="Aditya Shrey"
            img2={require("./images/shrey.jpeg")}
            position2="Outreach"
            name3="Aditya Khowal"
            img3={require("./images/umaru.jpeg")}
            position3="Outreach"
          />
          <AboutProfile
            name1="Vedant Chavan"
            img1={require("./images/vedant.jpg")}
            position1="Outreach"
            name2="Wesley Luk"
            img2={require("./images/komaru.png")}
            position2="Research Lead"
            name3="Ishan Bansal"
            img3={require("./images/iida.png")}
            position3="President"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
