import { motion } from "framer-motion";import "../../sass/Modal.scss";
import BackDrop from "./BackDrop";
import { BsArrowBarLeft, BsGithub } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { FaExternalLinkAlt, FaLink } from "react-icons/fa";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose, item }) => {
  console.log(item + "from modal");
  return (
    <BackDrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="Modal "
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="d-flex align-items-center justify-content-between p-3 text-secondary w-100 border-bottom  ">
          <p
            onClick={handleClose}
            className="mb-0 text-secondary"
            style={{ cursor: "pointer" }}
          >
            <span className="me-2 ">
              <BsArrowBarLeft />
            </span>
            Back to list
          </p>
          <p
            onClick={handleClose}
            className="text-secondary mb-0"
            style={{ cursor: "pointer" }}
          >
            <GrClose />
          </p>
        </div>
        <div className="d-flex justify-content-between ">
          <div className="col-7">
            <div className="wrapper">
              {item.src2 ? (
                <img src={item.src2} alt="site " className="img-fluid" />
              ) : (
                <img src={item.src} alt="site " className="img-fluid" />
              )}
              {/* <img src={item.src} alt="site " className="img-fluid" /> */}
            </div>
          </div>
          <div className="d-flex flex-column  col-5 p-2 ">
            <h2 className="text-uppercase mt-2 ">{item.title}</h2>
            <p className="text-secondary mt-2">{item.description}</p>
            <h3>Tech Used</h3>
            <div
              className="d-flex  flex-wrap gap-2 mt-3 "
              style={{ fontWeight: "500" }}
            >
              {item.tech.map((ele, index) => {
                return (
                  <span key={index} className="text-capitalize">
                    {ele}
                  </span>
                );
              })}
            </div>
            <div className="d-flex align-items-center  gap-4 mt-5">
              <a
                href={item.live}
                target="_blank"
                rel="noreferrer"
                className="mb-0 text-uppercase d-flex align-items-center gap-3"
              >
                live demo
                <span>
                  <FaLink />
                </span>
              </a>
              <a
                href={item.demo}
                target="_blank"
                rel="noreferrer"
                className="mb-0 text-uppercase d-flex align-items-center gap-3"
              >
                source code
                <span>
                  <BsGithub />
                </span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </BackDrop>
  );
};

export default Modal;
