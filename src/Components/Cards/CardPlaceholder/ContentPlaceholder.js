import * as React from "react";
import { motion } from "framer-motion";

export const ContentPlaceholder = ({ content }) => {
  return (
    <motion.div className="content-container">
      <p>{content}</p>
    </motion.div>
  );
};
