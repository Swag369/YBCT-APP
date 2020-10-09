import React from "react";
import "./Resources.css";

const Resources = () => {
  return (
    <>
      <div className="container">
        <h1>Resources</h1>
      </div>
      <div className="container" style={{ marginTop: "20px" }}>
        <p
          style={{
            color: "#000000",
            width: "100%",
            float: "left",
            textAlign: "left",
          }}
        >
          <i style={{ fontSize: "25px" }}>
            There is no predicting when or where a bleeding injury may happen.
          </i>
          <br></br>
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
          Bleeding Control is one of the most important skills anyone can have.
          Vehicle Crashes and Firearms are the greatest killers of more teens
          killing more than 7,000 together. 60% die to preventable injuries{" "}
          <a href="https://www.sciencedaily.com/releases/2018/12/181219191100.htm">
            (Science Daily From Michigan Medicine)
          </a>
          {". "}
          According to the American College of Surgeons, uncontrolled bleeding
          is the number one cause of preventable death from trauma. Anyone who
          is hurt and losing blood is in severe danger. Unintentional injury
          related deaths in children are estimated to be 730,000 a year
          worldwide. At Youth Bleeding Control Training, we look to save lives
          by teaching adolescents life-saving techniques. Bleeding Control
          Training gives you the skills to temporarily stop the injured person
          from loosing blood until Emergency Care arrives.
        </div>
      </div>
      <div className="container" style={{ marginTop: "20px" }}>
        <p
          style={{
            color: "#000000",
            fontSize: 25,
            width: "100%",
            float: "left",
            textAlign: "left",
          }}
        >
          <b style={{ color: "red" }}>
            The ABC's of Bleeding Control: Alert, Bleeding, Compress
          </b>
        </p>
        <p
          style={{
            fontSize: 20,
            width: "750%",
            float: "left",
            textAlign: "left",
            color: "red",
          }}
        >
          <div>
            <p style={{ color: "red", marginTop: "-10px" }}>
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
              <p
                style={{
                  color: "red",
                  marginLeft: "50px",
                  fontSize: "90%",
                }}
              >
                <li>
                  Covering the wound with a clean cloth and applying pressure by
                  pushing directly on with both hands,
                </li>
                <br></br>
                <li>Using a tourniquet,</li>
                <br></br>
                <li>
                  Packing (stuffing) the wound with gauze or a clean cloth and
                  then applying pressure with both hands.
                </li>
              </p>
            </p>
          </div>
        </p>
      </div>
      <div
        className="container"
        style={{ marginTop: "10px", marginBottom: "10px", textAlign: "left" }}
      >
        <h2>To learn more about the topic, check out these resources!</h2>
        <p
          style={{
            fontSize: 20,
            width: "100%",
            float: "left",
          }}
        >
          <ul
            className="resources"
            style={{ textAlign: "left", fontSize: "90%" }}
          >
            <a href="https://rdcr.org/wp-content/uploads/2018/05/Spinella-Zero-preventable-deaths-after-traumatic-injuries-J-Trauma-Vol-82-N-6-Supplement-1.pdf">
              https://rdcr.org/wp-content/uploads/2018/05/Spinella-Zero-preventable-deaths-after-traumatic-injuries-J-Trauma-Vol-82-N-6-Supplement-1.pdf
            </a>
            <br></br>
            <br></br>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3226142/">
              https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3226142/
            </a>
            <br></br>
            <br></br>
            <a href="https://katu.com/news/local/stop-the-bleed-uncontrolled-bleeding-is-still-number-one-cause-of-preventable-death">
              https://katu.com/news/local/stop-the-bleed-uncontrolled-bleeding-is-still-number-one-cause-of-preventable-death
            </a>
            <br></br>
            <br></br>
            <a href="https://www.healthline.com/health/bleeding-to-death">
              https://www.healthline.com/health/bleeding-to-death
            </a>
            <br></br>
          </ul>
        </p>
      </div>
    </>
  );
};

export default Resources;
