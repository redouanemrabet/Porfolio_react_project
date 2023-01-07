import React from "react";
import logo1 from "../assets/logo.png"
import logo2 from "../assets/fynancys.png"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            National School of Applied Sciences Oujda
          </h3>
          <p> preparatory class</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="20121 - Now"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            National School of Applied Sciences Oujda
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            engineering cycle
          </h4>

          <p> Computer Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Developer
          </h3>
          <br></br><div className="vertical-timeline-element-logo">
            <img src={logo2} ></img>
            <h1>Fynancys</h1></div>
          <h4 className="vertical-timeline-element-subtitle">
            Casablanca,Morocco
          </h4>
          <p>Developed Human Resources Website.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Front-End Developer  <img src={logo1}></img>

          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Oujda, Morocco
          </h4>
          <p>
            Developed Task Management App
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
