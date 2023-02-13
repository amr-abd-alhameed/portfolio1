import "./Item.scss";import React from "react";
import { FaHome } from "react-icons/fa";
import { FaBuysellads } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { MdAccountBox } from "react-icons/md";
import { SiProtondb } from "react-icons/si";
import { MdAutoAwesomeMosaic } from "react-icons/md";

const Links = (props) => {
  return (
    <ul className="d-none d-lg-flex">
      <li>
        <span className=" d-lg-none">
          <FaHome />
        </span>
        <a href="/">home</a>
      </li>
      <li>
        <span className=" d-lg-none">
          {" "}
          <FaBuysellads />
        </span>
        <a href="#about">about</a>
      </li>
      <li>
        <span className=" d-lg-none">
          <MdAutoAwesomeMosaic />
        </span>
        <a href="#experience">experience</a>
      </li>
      <li>
        <span className=" d-lg-none">
          <SiProtondb />
        </span>
        <a href="#projects">projects</a>
      </li>
      <li>
        <span className=" d-lg-none">
          <MdAccountBox />
        </span>
        <a href="#contact">contact</a>
      </li>
    </ul>

    // <li className="link">
    //   <span className="span d-lg-none">{<props.icon />}</span>
    //   <a href={`#${props.hash}`}>{props.name}</a>
    // </li>
  );
};

export { Links };
