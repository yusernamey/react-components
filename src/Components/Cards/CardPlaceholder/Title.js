import * as React from "react";
import { motion } from "framer-motion";
import { closeSpring, openSpring } from "./animations";

export const Title = ({ duration, price, title, openCard }) => {
  return (
    <motion.div
      className="title-container"
      animate={openCard ? { x: -20, y: -20 } : { x: 0, y: 0 }}
      transition={openCard ? openSpring : closeSpring}
    >
      <h1>{title}</h1>
      <h2>Trukmė: {duration}</h2>
      <h2>Kaina: {price}</h2>
    </motion.div>
  );
};
