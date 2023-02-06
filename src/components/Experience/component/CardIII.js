import "./CardIII.scss";
import React from "react";

const CardIII = (props) => {
    return (
        <>
            <div className="CardIII">
                <h2> {props.title}</h2>
                <p>{props.company}</p>
                <span>
                    {props.start} - {props.end}
                </span>
            </div>
            {/* frontEnd developer , kalponian almarsos , 2022 - Present
             */}
        </>
    );
};

export default CardIII;
