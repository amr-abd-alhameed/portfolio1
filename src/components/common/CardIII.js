import { motion } from "framer-motion";
import "../../sass/CardIII.scss";
import React from "react";

const CardIII = (props) => {
  return (
    <>
      <motion.div
        className="CardIII"
        initial={{ x: props.num, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <h2> {props.title}</h2>
        <p>{props.company}</p>
        <span>
          {props.start} - {props.end}
        </span>
      </motion.div>
    </>
  );
};

export default CardIII;
