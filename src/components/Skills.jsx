import React, {forwardRef} from "react";
import "./css/skills.css";
import html3logo from '../assets/html.png';
import css5logo from '../assets/css.png';
import jslogo from '../assets/js.png';
import phplogo from '../assets/php.png';
import mysqllogo from '../assets/mysql.png';
import reactlogo from '../assets/react.png';

const Skills = forwardRef((props, ref) => {

    return (
        <div className="section_three" ref={ref}>
            <div className="skill_details">
          <h1>Skills</h1>
        </div>
        <div className="skill_container">
            <div className="skill_logo"><img src={html3logo} alt="html logo" /></div>
            <div className="skill_logo"><img src={css5logo} alt="css logo" /></div>
            <div className="skill_logo"><img src={reactlogo} alt="react logo" /></div>
            <div className="skill_logo"><img src={reactlogo} alt="react logo" /></div>
        </div>
        </div>
    );
});

export default Skills;
