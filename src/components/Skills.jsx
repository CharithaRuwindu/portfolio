import React, {forwardRef} from "react";
import "./css/skills.css";

const Skills = forwardRef((props, ref) => {

    return (
        <div className="section_three" ref={ref}>
            <div className="skill_details">
          <h1>Skills</h1>
        </div>
        </div>
    );
});

export default Skills;
