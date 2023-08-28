import "../sass/Header.scss";
import logo from "../assets/images/download.jpg";
import { Button, Links } from "./common/index";
import { HiViewList } from "react-icons/hi";

import { useState, useEffect, useRef } from "react";
const Header = () => {
  const [Open, setOpen] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!e.target.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <header
        ref={menuRef}
        className="header  d-flex justify-content-between align-items-center"
      >
        <div className="logo">
          <img src={logo} loading="lazy" alt="Logo" />
        </div>
        <Links Open={Open} />
        <Button
          className="button d-none d-lg-flex"
          style={{ fontSize: "14px", padding: "5px 30px" }}
          href="mailto:amrabdalhameed947@gmail.com"
        >
          contact
        </Button>
        <span className="d-flex d-lg-none" onClick={() => setOpen(!Open)}>
          <HiViewList />
        </span>
      </header>
    </>
  );
};

export default Header;
