import React, { forwardRef } from "react";
import "./css/about.css";
import profile from "../assets/profile_img3.png"
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMediumSquare } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";

const About = forwardRef((props, ref) => {

    return (
        <div className="section_one" id="about" ref={ref}>
            <div className="about_content">
                <div className="profile_container">
                    <div className="pic_holder">
                    <img src={profile} alt="profile image" className="profile" />
                    </div>
                    <div className="prof_details">
                        <h1 className="name_title">CHARITHA BANDARAADHIKARAM</h1>
                        <h3>Software Engineer Trainee | Undergraduate at UCSC</h3>
                        <hr />
                        <p className="my_details">Hi! I'm Charitha, an academically diverse individual with a well-rounded skillset. I'm
                            passionate in solving complex problems through innovative
                            solutions.
                            My dedication for pushing boundries of possibilities aims towards excelling in Software Engineering.
                        </p>
                        <p className="my_details"> Join me on this exploration of code and innovation..</p>
                        <div className="link_container">
                            <a href="https://github.com/CharithaRuwindu" target="_blank">
                            <div className="icon_box"><AiFillGithub className="social_icon github"/></div>
                            </a>
                            <a href="http://linkedin.com/in/charitha-bandaraadhikaram" target="_blank">
                            <div className="icon_box"><AiFillLinkedin className="social_icon linkedin"/></div>
                            </a>
                            <a href="https://medium.com/@charitharuwindu" target="_blank">
                            <div className="icon_box"><AiFillMediumSquare className="social_icon medium"/></div>
                            </a>
                            <a href="https://charitharuwindu@gmail.com" target="_blank">
                            <div className="icon_box"><AiFillMail className="social_icon mail"/></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default About;
