import React, {forwardRef} from "react";
import "./css/skills.css";

const Skills = forwardRef((props, ref) => {

    return (
        <div className="section_three" ref={ref}>
            <h1 className="third_title">hi there, this is the skills page</h1>
        </div>
    );
});

export default Skills;
