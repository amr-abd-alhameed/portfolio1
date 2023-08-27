import "../../sass/Menu.scss";
import { motion, AnimatePresence } from "framer-motion";
import menu from "../common/data";
import React, { useState } from "react";
import { BackDrop, Modal } from "./index";

function Menu({ items }) {
  const [open, setOpen] = useState(false);
  const [kk, setKK] = useState("");
  const [dada, setDada] = useState(menu);
  const Open = () => setOpen(true);
  const Close = () => setOpen(false);
  const allId = [44, ...new Set(menu.map((item) => item.id))];

  const filterItems = (id) => {
    if (id === 44) {
      setDada(menu);
      return;
    }
    const newItems = menu.filter((item) => item.id === id);
    // const newItems = items.filter((item) => item.category === category);

    setDada(newItems);
  };
  return (
    <>
      {/* <div className="container-xxl">
        <motion.div layout className="Menu row g-3">
          <AnimatePresence>
            {items.map((menuItem) => {
              const { id, src, alt } = menuItem;
              return (
                <motion.div
                  layout
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  key={id}
                  className="col-sm-6 col-md-4 col-lg-3"
                >
                  <div
                    key={id}
                    className="img-handler"
                    onClick={(e) => {
                      open ? Close() : Open();
                      setKK(e.target.id);
                      console.log(e.target.src);
                    }}
                  >
                    <img
                      className="img-fluid"
                      src={src}
                      alt={alt}
                      onClick={() => filterItems(id)}
                    />
                    <div className={`onon ${open ? "acc" : ""}`}>
                       {dada.map((item) => {
                        return <img src={item.src} alt="" key={item.id} />;
                      })} 
                      {dada.map((item) => {
                        return (
                          <BackDrop key={item.id}>
                            {" "}
                            <Modal src={item.src} key={item.id} />
                          </BackDrop>
                        );
                      })}

                      
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div> */}

      {/* kfdsjksjkld */}

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
                    <img
                      className="img-fluid"
                      src={src}
                      alt={alt}
                      loading="lazy"
                      onClick={() => filterItems(id)}
                    />
                  </motion.div>
                  <AnimatePresence
                    key={src}
                    initial={false}
                    // exitBeforeEnter={true}
                    mode="wait"
                    onExitComplete={() => null}
                  >
                    {open &&
                      dada.map((item) => {
                        return (
                          <BackDrop key={item.id}>
                            <Modal
                              key={item.id}
                              // src={item.src}
                              // title={item.title}
                              item={item}
                              handleClose={Close}
                            />
                          </BackDrop>
                        );
                      })}
                    {/* {open && (
                      <Modal key={dada.id} src={dada.src} handleClose={Close} />
                    )} */}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}

export default Menu;
