import React from "react";
import "./Resources.css";

const Resources = () => {
  return (
    <>
      <div className="container">
        <p
          style={{
            color: "#000000",
            fontSize: 25,
            width: "100%",
            float: "left",
            textAlign: "left",
          }}
        >
          <h1>ABC's of Bleeding Control</h1>
        </p>
        <p
          style={{
            fontSize: 20,
            float: "left",
            textAlign: "left",
            color: "red",
          }}
        >
          <div>
            <p style={{ color: "red", marginTop: "-10px", fontSize: "125%" }}>
              {" "}
              <b className="ABC">A</b>lert – Call 911
            </p>
            <p style={{ textAlign: "left", color: "red", fontSize: "125%" }}>
              {" "}
              <b className="ABC">B</b>leeding – Find the bleeding injury
            </p>
            <p style={{ textAlign: "left", color: "red", fontSize: "125%" }}>
              {" "}
              <b className="ABC">C</b>ompress – Apply pressure to stop the
              bleeding by either
              <p
                style={{
                  color: "red",
                  marginLeft: "50px",
                  fontSize: "90%",
                  whiteSpace: "nowrap",
                }}
              >
                <li>
                  Covering the wound with a clean cloth and applying pressure by
                  pushing directly on with both hands
                </li>
                <br></br>
                <li>Using a tourniquet</li>
                <br></br>
                <li>
                  Packing (stuffing) the wound with gauze or a clean cloth and
                  then applying pressure with both hands
                </li>
              </p>
            </p>
          </div>
        </p>
      </div>
      <div
        className="container"
        style={{ marginBottom: "10px", textAlign: "left" }}
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
