import "./Menu.scss";

import { motion, AnimatePresence } from "framer-motion";

import React from "react";

function Menu({ items }) {
    return (
        <motion.div layout className="Menu">
            <AnimatePresence>
                {items.map((menuItem) => {
                    const { id, src, alt } = menuItem;
                    return (
                        <motion.article
                            layout
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            exit={{ opacity: 0 }}
                            key={id}
                        >
                            <img src={src} alt={alt} />
                        </motion.article>
                    );
                })}
            </AnimatePresence>
        </motion.div>
    );
}

export default Menu;
