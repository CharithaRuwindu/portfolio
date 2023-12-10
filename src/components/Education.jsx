import React, {forwardRef} from "react";
import "./css/education.css";

const Education = forwardRef((props, ref) => {

    return (
        <div className="section_two" id="education" ref={ref}>
            <h1 className="second_title">hi there, this is the education page</h1>
        </div>
    );
});



export default Education;
