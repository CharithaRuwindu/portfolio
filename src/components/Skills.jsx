import React, { forwardRef } from "react";
import "./css/skills.css";
import html3logo from '../assets/html.png';
import css5logo from '../assets/css.png';
import springlogo from '../assets/spring.png';
import javalogo from '../assets/java.png';
import jslogo from '../assets/js.png';
import phplogo from '../assets/php.png';
import mysqllogo from '../assets/mysql.png';
import reactlogo from '../assets/react.png';
import postgrelogo from '../assets/postgre.png';
import tailwindlogo from '../assets/tailwind.png';
import bootstraplogo from '../assets/bootstrap.png';
import jbosslogo from '../assets/jboss.png';
import clogo from '../assets/c.png';
import pythonlogo from '../assets/python.png';
import vscodelogo from '../assets/vscode.png';
import nodelogo from '../assets/node.png';
import expresslogo from '../assets/express.png';
import figmalogo from '../assets/figma.png';
import githublogo from '../assets/github.png';

const Skills = forwardRef((props, ref) => {

    return (
        <div className="section_three" ref={ref}>
            <div className="skill_details">
                <h1>Skills</h1>
            </div>
            <div className="skill_container">
                <div className="skill_logo"><img src={html3logo} alt="html logo" /></div>
                <div className="skill_logo"><img src={css5logo} alt="css logo" /></div>
                <div className="skill_logo"><img src={jslogo} alt="js logo" /></div>
                <div className="skill_logo"><img src={springlogo} alt="spring logo" /></div>
                <div className="skill_logo"><img src={javalogo} alt="java logo" /></div>
                <div className="skill_logo"><img src={reactlogo} alt="react logo" /></div>
            </div>
            <div className="skill_container">
                <div className="skill_logo"><img src={nodelogo} alt="node logo" /></div>
                <div className="skill_logo"><img src={expresslogo} alt="express logo" /></div>
                <div className="skill_logo"><img src={phplogo} alt="php logo" /></div>
                <div className="skill_logo"><img src={postgrelogo} alt="postgre logo" /></div>
                <div className="skill_logo"><img src={mysqllogo} alt="mysql logo" /></div>
                <div className="skill_logo"><img src={tailwindlogo} alt="tailwind logo" /></div>
            </div>
            <div className="skill_container">
                <div className="skill_logo"><img src={pythonlogo} alt="python logo" /></div>
                <div className="skill_logo"><img src={githublogo} alt="github logo" /></div>
                <div className="skill_logo"><img src={bootstraplogo} alt="bootstrap logo" /></div>
                <div className="skill_logo"><img src={vscodelogo} alt="vscode logo" /></div>
                <div className="skill_logo"><img src={clogo} alt="c logo" /></div>
                <div className="skill_logo"><img src={figmalogo} alt="figma logo" /></div>
            </div>
            <div className="skill_container">
                <div className="skill_logo"><img src={jbosslogo} alt="jboss logo" /></div>
            </div>
        </div>
    );
});

export default Skills;
