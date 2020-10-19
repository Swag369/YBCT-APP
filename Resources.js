import React from "react";
import "./Resources.css";

const Resources = () => {
  return (
    <div>
      <div className = "container" style = {{marginBottom: 50}}>
          <h1>Why Bleeding Control Training?</h1>
          <p style = {{float: "left"}}>Bleeding control techniques are crucial in life-threatening emergencies for extending a victim's life until first responders arrive. 
              There are numerous scenarios where bleeding control training and knowledge could potentially save lives:
          </p>
          <div className = "container" style = {{width: "24.7%", marginTop: "0", height: 600}}>
              <h2>Car Accidents</h2>
              <img src = "https://e3.365dm.com/20/02/2048x1152/skynews-tesla-crash_4917705.jpg" width = "240" height = "160" style = {{marginTop: "0"}}></img>
              <p style = {{fontSize: 14, width: "90%", textAlign: "center", marginLeft: "13px"}}>Unfortunately, car accidents and collisions are a commonality among young adults and teens on the road. In a car accident, the victim can experience either blunt trauma - injury resulting from impact force on something like a windshield or steering wheel - or penetrating trauma - 
              injury resulting from impaling objects, such as glass. In both situations, bleeding control procedures are crucial in saving a victim's life.</p>
          </div>
          <div className = "container" style = {{width: "24.7%", marginTop: "0", height: 600}}>
              <h2>School Shootings</h2>
              <img src = "https://s.hdnux.com/photos/60/71/62/12819607/3/rawImage.jpg" width = "240" height = "160" style = {{marginTop: "0"}}></img>
              <p style = {{fontSize: 14, width: "90%", textAlign: "center", marginLeft: "13px"}}>A bullet wound can cause massive hemorrhaging by piercing vital artieries in the body. When this happens, the victim may have at most 
                  5 minutes until they completely bleed out and die. Therefore, it is especially crucial to know how to prevent uncontrolled bleeding in a school shooting
                  scenario until emergency first responders arrive.</p>
          </div>
          <div className = "container" style = {{width: "24.7%", marginTop: "0", height: 600}}>
              <h2>Natural Disasters</h2>
              <img src = "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iJMRWBqJe7WA/v1/-1x-1.jpg" width = "240" height = "160" style = {{marginTop: "0"}}></img>
              <p style = {{fontSize: 14, width: "90%", textAlign: "center", marginLeft: "13px"}}>Natural disasters such as earthquakes, tornadoes, and hurricanes can cause objects to fall and fly uncontrollably. In worst-case scenarios,
              serious injury may result from being impaled with a foriegn object or being crushed by something heavy. Proper bleeding control methods and knowledge can hence
              increase a victim's chances of survival in these scenarios.</p>
          </div>
      </div>
      <div className="wholepage">
        <div className="container">
          <h2
            style={{
              textAlign: "left",
            }}
          >
            There is no predicting when or where a bleeding injury may happen.
          </h2>
          <p
            style={{
              fontSize: 20,
              width: "100%",
              float: "left",
              textAlign: "left",
            }}
          >
            Vehicle Crashes and Firearms are the greatest killers of more teens
            killing more than 7,000 together. 60% die to preventable injuries{" "}
            <a href="https://www.sciencedaily.com/releases/2018/12/181219191100.htm">
              (Science Daily From Michigan Medicine)
            </a>
            {". "}
            According to the{" "}
            <a href="https://www.bleedingcontrol.org/~/media/bleedingcontrol/files/stop%20the%20bleed%20booklet.ashx">
              American College of Surgeons
            </a>
            , Uncontrolled bleeding is the number one cause of preventable death
            from trauma. Unintentional injury related deaths in children are
            estimated to be 730,000 a year worldwide. At Youth Bleeding Control
            Training, we look to save lives by teaching adolescents life-saving
            techniques!
          </p>
        </div>

        <div
          className="container"
          style={{
            marginLeft: "20%",
            width: "60%",
            marginTop: "3vh",
            borderRadius: "0px",
            boxShadow: "0",
          }}
        >
          <h2
            style={{
              textAlign: "center",
            }}
          >
            ABC's of Bleeding Control: Alert, Bleeding, Compress
          </h2>
          <p
            style={{
              fontSize: 20,
              width: "100%",
              float: "left",
              textAlign: "left",
              color: "red",
            }}
          >
            <div
              className="abclist"
              style={{
                marginLeft: "0%",
                width: "300%",
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              <p style={{ textAlign: "left", color: "red" }}>
                {" "}
                A – Alert – call 9-1-1
              </p>
              <p style={{ textAlign: "left", color: "red" }}>
                {" "}
                B – Bleeding – find the bleeding injury
              </p>
              <p style={{ textAlign: "left", color: "red" }}>
                {" "}
                C – Compress – apply pressure to stop the bleeding by either
                <ol style={{ marginLeft: "30px" }}>
                  <li>
                    Covering the wound with a clean cloth and applying pressure by
                    pushing directly on with both hands,
                  </li>
                  <br></br>
                  <li>Using a tourniquet,</li>
                  <br></br>
                  <li>
                    or Packing (stuffing) the wound with gauze or a clean cloth
                    and then applying pressure with both hands.
                  </li>
                </ol>
              </p>
            </div>
          </p>
        </div>

        <br></br>
        <br></br>
        <div
          className="container"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          <h2
            style={{
              textAlign: "center",
            }}
            center
          >
            To learn more about the topic, check out these resources!
          </h2>
          <p
            style={{
              fontSize: 20,
              width: "100%",
              float: "left",
              textAlign: "left",
            }}
          >
            <ul className="resources">
              <a href="https://rdcr.org/wp-content/uploads/2018/05/Spinella-Zero-preventable-deaths-after-traumatic-injuries-J-Trauma-Vol-82-N-6-Supplement-1.pdf">
                <img src = "https://rdcr.org/wp-content/uploads/2014/08/THOR-Crest-v2.png" width = "" height = ""></img>
              </a>
              <br></br>
              <br></br>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3226142/">
                <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/US-NLM-NCBI-Logo.svg/140px-US-NLM-NCBI-Logo.svg.png" width = "" height = ""></img>
              </a>
              <br></br>
              <br></br>
              <a href="https://katu.com/news/local/stop-the-bleed-uncontrolled-bleeding-is-still-number-one-cause-of-preventable-death">
                <img src = "https://lh3.googleusercontent.com/miUjWukxvPxuZd9EOkpY0UbUDObxcKGrj-yaAE53b1S0ewYS05LclMWrOSYMSGLxQtg" width = "" height = ""></img>
              </a>
              <br></br>
              <br></br>
              <a href="https://www.healthline.com/health/bleeding-to-death">
                <img src = "https://mms.businesswire.com/media/20200224005148/en/762046/22/Healthline2_OG.jpg" width = "" height = ""></img>
              </a>
              <br></br>
              <br></br>
              <a href="https://www.stopthebleed.org/">
                <img src = "https://www.dhs.gov/sites/default/files/images/oha/logo_stopthebleed_350.jpg" width = "" height = ""></img>
              </a>
              <br></br>
            </ul>
          </p>
        </div>
        {/* FIX NAVBAR TO STICK TO BOTTOM TO REMOVE THESE :INEBREAKS */}
      </div>
    </div>
  );
};

export default Resources;