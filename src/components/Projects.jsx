import React, { forwardRef } from "react";
import "./css/projects.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import edugo2 from '../assets/edugo2.png';

const Projects = forwardRef((props, ref) => {

    return (
        <div className="section_four" ref={ref}>
            <div className="project_details">
                <h1>Projects</h1>
                <div className="card_container">
                <span className="card_holder">
                <Card className="card" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={edugo2} className="proj_img"/>
                    <Card.Body className="c_body">
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </span>

                <span className="card_holder">
                <Card className="card" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={edugo2} className="proj_img"/>
                    <Card.Body className="c_body">
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </span>
                </div>
            </div>
        </div>
    );
});

export default Projects;
