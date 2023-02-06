import "./Icons.scss";

import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { Link } from "react-router-dom";

const Icons = () => {
    return (
        <>
            <div className="icons">
                <a
                    href="https://www.linkedin.com/in/amr-abd-elhameed-61047b20b/"
                    target="_blank"
                    className="one"
                    rel="noreferrer"
                >
                    <FaLinkedinIn />
                </a>
                <a
                    href="https://github.com/amr-abd-alhameed"
                    className="two"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                </a>
                <a href="/" className="three" target="_blank">
                    <SiIndeed />
                </a>
                <a
                    href="https://www.facebook.com/profile.php?id=100007843879128"
                    className="four"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaFacebookF />
                </a>
            </div>
        </>
    );
};

export default Icons;
