import "./Item.scss";
import React from "react";
// import Link from "react-router-dom";

const Item = (props) => {
    return (
        <li className="link">
            <span className="span d-lg-none">{<props.icon />}</span>
            <a href={`${props.hash}`}>{props.name}</a>
        </li>
    );
};

export { Item };
