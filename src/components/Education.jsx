import React, { forwardRef } from "react";
import "./css/education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsMortarboardFill } from "react-icons/bs";
import { ImBook } from "react-icons/im";

const Education = forwardRef((props, ref) => {
  return (
    <div className="section_two" id="education" ref={ref}>
      <div>
        <div className="edu_details">
          <h1>Education</h1>
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: "#555555", background: "linear-gradient(to bottom, rgb(33, 150, 243) 5px, #F7FFF7 5px)"}}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2022 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<BsMortarboardFill />}
          >
            <div className="top_outline"></div>
            <h3 className="vertical-timeline-element-title">
            Attorney-At-Law
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Sri Lanka Law College</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: "#555555", background: "linear-gradient(to bottom, rgb(33, 150, 243) 5px, #F7FFF7 5px)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2021 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<BsMortarboardFill />}
          >
            <h3 className="vertical-timeline-element-title">
            BSc. in Information Systems
            </h3>
            <h4 className="vertical-timeline-element-subtitle">University of Colombo School of Computing</h4>
            <p>(GPA : 3.15)</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: "#555555", background: "linear-gradient(to bottom, rgb(33, 150, 243) 5px, #F7FFF7 5px)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2020 - 2021"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<BsMortarboardFill />}
          >
            <div className="top_outline"></div>
            <h3 className="vertical-timeline-element-title">
            Diploma in Business Management
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Sabaragamuwa University of Sri Lanka</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: "#555555", background: "linear-gradient(to bottom, rgb(33, 150, 243) 5px, #F7FFF7 5px)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<ImBook />}
          >
            <div className="top_outline"></div>
            <h3 className="vertical-timeline-element-title">
            G.C.E Advanced Level
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Sivali Central College - Ratnapura</h4>
            <p>
                <ul>
                  <li>Chemistry - A</li>
                  <li>Biology - B</li>
                  <li>Physics - S</li>
                </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: "#555555", background: "linear-gradient(to bottom, rgb(33, 150, 243) 5px, #F7FFF7 5px)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2018 - 2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<BsMortarboardFill />}
          >
            <div className="top_outline"></div>
            <h3 className="vertical-timeline-element-title">
            Diploma in English
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Sabaragamuwa University of Sri Lanka</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: "#555555", background: "linear-gradient(to bottom, rgb(33, 150, 243) 5px, #F7FFF7 5px)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2014"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<ImBook />}
          >
            <div className="top_outline"></div>
            <h3 className="vertical-timeline-element-title">
            G.C.E Ordinary Level
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Prince College - Ratnapura</h4>
            <p>
                <ul>
                  <li>9 A's</li>
                </ul>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
});

export default Education;
