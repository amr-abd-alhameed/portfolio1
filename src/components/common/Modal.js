import { motion } from "framer-motion";
import "../../sass/Modal.scss";
import BackDrop from "./BackDrop";
import { BsArrowBarLeft } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import logo from "../../assets/images/amr2.png";

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

const Modal = ({ handleClose, src }) => {
  console.log(src + "from modal");
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
          <p onClick={handleClose} className="mb-0">
            <span className="me-2">
              <BsArrowBarLeft />
            </span>
            Back to list
          </p>
          <p onClick={handleClose} className="text-secondary mb-0">
            <GrClose />
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="col-7">
            <img src={src} alt="site " className="img-fluid" />
          </div>
          <div className="d-flex flex-column justify-content-start col-5 ">
            <h2 className="text-uppercase">Site name</h2>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              qui provident dolores voluptates rem cupiditate voluptas tempora
              animi? Dolore id consequuntur officia impedit ratione iusto illo
              quaerat mollitia magni! Harum.
            </p>
            <div className="d-flex align-items-center justify-content-center flex-wrap gap-2 ">
              <span className="text-capitalize">html</span>
              <span className="text-capitalize">css</span>
              <span className="text-capitalize">bootstrap</span>
              <span className="text-capitalize">javascript</span>
              <span className="text-capitalize">react</span>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-4">
              <p className="mb-0 text-uppercase">
                <span></span> live demo
              </p>
              <p className="mb-0 text-uppercase">
                <span></span>source code{" "}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </BackDrop>
  );
};

export default Modal;
