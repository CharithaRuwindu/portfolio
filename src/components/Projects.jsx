import React, { forwardRef, useState } from "react";
import './css/projects.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Edugo2 from '../assets/edugo2.png';
import Edugo3 from '../assets/edugo3.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AiFillGithub } from "react-icons/ai";

const Projects = forwardRef((props, ref) => {

    const [EdugoShown, setEdugoShown] = useState(false);
    const [OmnipharShown, setOmnipharShown] = useState(false);

    return (
        <div className="section_four" ref={ref}>
            <div className="project_details">
                <h1>Projects</h1>
                <div className="card_container">
                    <span className="card_holder" onMouseEnter={() => setEdugoShown(true)} onMouseLeave={() => setEdugoShown(false)}>

                        {/* react bootstrap card component */}
                        <Card className="card" style={{ width: '25rem' }}>
                            <div className="project_image_container">
                                <Splide options={{ rewind: true }} aria-label="React Splide Example" className="splide">
                                    <SplideSlide>
                                        <img src={Edugo2} alt="Image 1" />
                                    </SplideSlide>
                                    <SplideSlide>
                                        <img src={Edugo3} alt="Image 2" />
                                    </SplideSlide>
                                </Splide>
                            </div>
                            <Card.Body className="c_body">
                                <Card.Title className="card_title">Edugo</Card.Title>
                                {EdugoShown && (
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                )}
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </span>

                    <span className="card_holder" onMouseEnter={() => setOmnipharShown(true)} onMouseLeave={() => setOmnipharShown(false)}>

                        {/* react bootstrap card component */}
                        <Card className="card" style={{ width: '25rem' }}>
                            <div className="project_image_container">
                                <Splide options={{ rewind: true }} aria-label="React Splide Example" className="splide">
                                    <SplideSlide>
                                        <img src={Edugo2} alt="Image 1" />
                                    </SplideSlide>
                                    <SplideSlide>
                                        <img src={Edugo3} alt="Image 2" />
                                    </SplideSlide>
                                </Splide>
                            </div>
                            <Card.Body className="c_body">
                                <Card.Title className="card_title">Omniphar</Card.Title>
                                {OmnipharShown && (
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                )}
                                <Button variant="primary"><AiFillGithub className="git_icon" /></Button>
                            </Card.Body>
                        </Card>
                    </span>
                </div>
            </div>
        </div>
    );
});


export default Projects;
