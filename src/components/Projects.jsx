import React, {forwardRef} from "react";
import "./css/projects.css";

const Projects = forwardRef((props, ref) => {

    return (
        <div className="section_four" ref={ref}>
            <h1 className="fourth_title">hi there This is the projects page</h1>
        </div>
    );
});

export default Projects;
