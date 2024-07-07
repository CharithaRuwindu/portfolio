import React, { forwardRef, useState, useEffect } from "react";
import './css/projects.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Edugo1 from '../assets/edugo1.png';
import Edugo2 from '../assets/edugo2.png';
import Edugo3 from '../assets/edugo3.png';
import html3logo from '../assets/html.png';
import css5logo from '../assets/css.png';
import jslogo from '../assets/js.png';
import phplogo from '../assets/php.png';
import mysqllogo from '../assets/mysql.png';
import reactlogo from '../assets/react.png';
import nodelogo from '../assets/node.png';
import javalogo from '../assets/java.png';
import springlogo from '../assets/spring.png';
import postgrelogo from '../assets/postgre.png';
import expresslogo from '../assets/express.png';
import oraclelogo from '../assets/oracle.png';
import omniphar1 from '../assets/omniphar1.png';
import omniphar2 from '../assets/omniphar2.png';
import omniphar3 from '../assets/omniphar3.png';
import omniphar4 from '../assets/omniphar4.png';
import cbrs1 from '../assets/cbrs1.png';
import cbrs2 from '../assets/cbrs2.png';
import cbrs3 from '../assets/cbrs3.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AiFillGithub } from "react-icons/ai";

const Projects = forwardRef((props, ref) => {

    const [EdugoShown, setEdugoShown] = useState(false);
    const [OmnipharShown, setOmnipharShown] = useState(false);
    const [CBRSShown, setCBRSShown] = useState(false);



    return (
        <div className="section_four" ref={ref}>
            <div className="project_details">
                <h1>Projects</h1>
                <div className="card_container">
                    <span className="card_holder" onMouseEnter={() => setEdugoShown(true)} onMouseLeave={() => setEdugoShown(false)}>

                        <Card className="card">
                            <div className="project_image_container">
                                <Splide options={{ rewind: true }} aria-label="React Splide Example" className="splide">
                                    <SplideSlide>
                                        <img src={Edugo1} alt="Image 1" />
                                    </SplideSlide>
                                    <SplideSlide>
                                        <img src={Edugo2} alt="Image 2" />
                                    </SplideSlide>
                                    <SplideSlide>
                                        <img src={Edugo3} alt="Image 3" />
                                    </SplideSlide>
                                </Splide>
                            </div>
                            <Card.Body className="c_body">
                                <Card.Title className="card_title">Edugo</Card.Title>
                                <Card.Text className={EdugoShown ? "card_slide" : "card_text"} id="card_text">
                                    A school transportation services management system
                                    which helps parents to find the best school transportation system and a
                                    suitable plan, get continuous updates about ride status,
                                    secure payment processing and customer support.
                                    <div className="tech_container">
                                        Technologies :
                                        <div className="logo_container">
                                            <img src={reactlogo} alt="react logo" className="tech_logo" />
                                            <img src={nodelogo} alt="node logo" className="tech_logo" />
                                            <img src={postgrelogo} alt="postgre logo" className="tech_logo" />
                                            <img src={expresslogo} alt="express logo" className="tech_logo" />
                                        </div>
                                    </div>
                                </Card.Text>
                                <a href="https://github.com/Group45-UCSC/EduGo.git" target="_blank"><Button variant="primary" className="git_btn"><AiFillGithub className="git_icon" /></Button></a>
                            </Card.Body>
                        </Card>
                    </span>

                    <span className="card_holder" onMouseEnter={() => setOmnipharShown(true)} onMouseLeave={() => setOmnipharShown(false)}>

                        <Card className="card">
                            <div className="project_image_container">
                                <Splide options={{ rewind: true }} aria-label="React Splide Example" className="splide">
                                    <SplideSlide>
                                        <img src={omniphar1} alt="Image 1" />
                                    </SplideSlide>
                                    <SplideSlide>
                                        <img src={omniphar2} alt="Image 2" />
                                    </SplideSlide>
                                    <SplideSlide>
                                        <img src={omniphar3} alt="Image 2" />
                                    </SplideSlide>
                                    <SplideSlide>
                                        <img src={omniphar4} alt="Image 2" />
                                    </SplideSlide>
                                </Splide>
                            </div>
                            <Card.Body className="c_body">
                                <Card.Title className="card_title">Omniphar</Card.Title>
                                <Card.Text className={OmnipharShown ? "card_slide" : "card_text"} id="card_text">
                                    A pharmacy management system which
                                    facilitates users to purchase items or medicine in preferred
                                    doses and get them delivered. It provides location tracking,
                                    stock management, customer support, payment processing,
                                    carts and more functionalities.
                                    <div className="tech_container">
                                        Technologies :
                                        <div className="logo_container">
                                            <img src={html3logo} alt="html3 logo" className="tech_logo" />
                                            <img src={css5logo} alt="css5 logo" className="tech_logo" />
                                            <img src={jslogo} alt="jslogo" className="tech_logo" />
                                            <img src={phplogo} alt="phplogo" className="tech_logo" />
                                            <img src={mysqllogo} alt="mysqllogo" className="tech_logo" />
                                        </div>
                                    </div>
                                </Card.Text>
                                <a href="https://github.com/CharithaRuwindu/omniphar.git" target="_blank"><Button variant="primary" className="git_btn"><AiFillGithub className="git_icon" /></Button></a>
                                </Card.Body>
                        </Card>
                    </span>

                    <span className="card_holder" onMouseEnter={() => setCBRSShown(true)} onMouseLeave={() => setCBRSShown(false)}>

                        <Card className="card">
                            <div className="project_image_container">
                                <Splide options={{ rewind: true }} aria-label="React Splide Example" className="splide">
                                    <SplideSlide>
                                        <img src={cbrs1} alt="Image 1" />
                                    </SplideSlide>
                                    <SplideSlide>
                                        <img src={cbrs2} alt="Image 2" />
                                    </SplideSlide>
                                    <SplideSlide>
                                        <img src={cbrs3} alt="Image 3" />
                                    </SplideSlide>
                                </Splide>
                            </div>
                            <Card.Body className="c_body">
                                <Card.Title className="card_title">CBRS</Card.Title>
                                <Card.Text className={CBRSShown ? "card_slide" : "card_text"} id="card_text">
                                The CEB Circuit Bungalow Reservation System is designed
                                to enable employees and retirees of the Ceylon Electricity Board
                                to secure accommodations at circuit bungalows for both official and personal visits.
                                    <div className="tech_container">
                                        Technologies :
                                        <div className="logo_container">
                                            <img src={html3logo} alt="html3 logo" className="tech_logo" />
                                            <img src={css5logo} alt="css5 logo" className="tech_logo" />
                                            <img src={jslogo} alt="jslogo" className="tech_logo" />
                                            <img src={javalogo} alt="javalogo" className="tech_logo" />
                                            <img src={springlogo} alt="springlogo" className="tech_logo" />
                                            <img src={oraclelogo} alt="oraclelogo" className="tech_logo" />
                                        </div>
                                    </div>
                                </Card.Text>
                                <a href="https://github.com/CharithaRuwindu/omniphar.git" target="_blank"><Button variant="primary" className="git_btn"><AiFillGithub className="git_icon" /></Button></a>
                                </Card.Body>
                        </Card>
                    </span>
                </div>
            </div>
        </div>
    );
});


export default Projects;
