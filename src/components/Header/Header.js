import "./Header.scss";
import logo from "../../../src/assets/images/download (1).png";
import { Item } from "./component/Item";
import { Button } from "../common/index";
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
                    <img src={logo} alt="" />
                </div>
                <div className="tap">
                    <div
                        className={`min d-none d-lg-flex ${
                            Open ? "active" : "inactive"
                        }`}
                    >
                        <ul className="d-lg-flex">
                            <Item
                                hash={"/home"}
                                name={"home"}
                                icon={HiViewList}
                            />
                            <Item
                                hash={"/home"}
                                name={"home"}
                                icon={HiViewList}
                            />
                            <Item
                                hash={"/home"}
                                name={"home"}
                                icon={HiViewList}
                            />
                            <Item
                                hash={"/home"}
                                name={"home"}
                                icon={HiViewList}
                            />
                            <Item
                                hash={"/home"}
                                name={"home"}
                                icon={HiViewList}
                            />
                            <Item
                                hash={"/home"}
                                name={"home"}
                                icon={HiViewList}
                            />
                        </ul>
                    </div>
                </div>
                {/* <div
                    className={`min d-none d-lg-flex ${
                        Open ? "active" : "inactive"
                    }`}
                >
                    <ul className="d-lg-flex">
                        <Item hash={"/home"} name={"home"} icon={HiViewList} />
                        <Item hash={"/home"} name={"home"} icon={HiViewList} />
                        <Item hash={"/home"} name={"home"} icon={HiViewList} />
                        <Item hash={"/home"} name={"home"} icon={HiViewList} />
                        <Item hash={"/home"} name={"home"} icon={HiViewList} />
                        <Item hash={"/home"} name={"home"} icon={HiViewList} />
                    </ul>
                </div> */}

                {/* <div
                    className={`min d-none d-lg-flex ${
                        Open ? "active" : "inactive"
                    }`}
                >
                    <ul className="d-lg-flex">
                        <Item hash={"/home"} name={"home"} icon={HiViewList} />
                        <Item hash={"/home"} name={"home"} icon={HiViewList} />
                        <Item hash={"/home"} name={"home"} icon={HiViewList} />
                        <Item hash={"/home"} name={"home"} icon={HiViewList} />
                        <Item hash={"/home"} name={"home"} icon={HiViewList} />
                        <Item hash={"/home"} name={"home"} icon={HiViewList} />
                    </ul>
                </div> */}

                <Button
                    className="button d-none d-lg-flex"
                    style={{ fontSize: "14px", padding: "5px 30px" }}
                >
                    contact
                </Button>
                <span
                    className="d-flex d-lg-none"
                    onClick={() => setOpen(!Open)}
                >
                    <HiViewList />
                </span>
            </header>
        </>
    );
};

export default Header;
