import "./Item.scss";
import React from "react";
import { Link } from "react-router-dom";
// import Link from "react-router-dom";

const Item = (props) => {
  return (
    <li className="link">
      <span className="span d-lg-none">{<props.icon />}</span>
      <Link to={props.hash}>{props.name}</Link>
      {/* <a href={`${props.hash}`}></a> */}
    </li>
  );
};

export { Item };
