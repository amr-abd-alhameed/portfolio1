import "../../sass/Menu.scss";
import { motion, AnimatePresence } from "framer-motion";

import React, { useState } from "react";
import { Modal } from "./index";

function Menu({ items }) {
  const [open, setOpen] = useState(false);
  const Open = () => setOpen(true);
  const Close = () => setOpen(false);

  return (
    <div className="container-xxl">
      <motion.div layout className="Menu row g-3">
        <AnimatePresence>
          {items.map((menuItem) => {
            const { id, src, alt } = menuItem;
            console.log(src);
            return (
              <motion.div
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                key={id}
                className="col-sm-6 col-md-4 col-lg-3"
              >
                <motion.div
                  key={id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="img-handler"
                  onClick={() => (open ? Close() : Open())}
                >
                  <img className="img-fluid" src={src} alt={alt} />
                </motion.div>
                <AnimatePresence
                  key={src}
                  initial={false}
                  exitBeforeEnter={true}
                  onExitComplete={() => null}
                >
                  {open && <Modal key={id} src={src} handleClose={Close} />}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Menu;
