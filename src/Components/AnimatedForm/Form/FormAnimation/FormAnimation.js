import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { containerVariants, childVariants } from "./AnimationInput";

export const FormAnimation = (props) => {
  const [variant, setVariant] = useState("hidden");
  useEffect(() => {
    setVariant("visible");
  }, [variant]);

  return (
    <AnimatePresence exitBeforeEnter>
      {props.show && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={variant}
          exit="hidden"
        >
          {/* {React.Children.map(children, (child) => {
            return (
              <motion.div key={child.id} variants={childVariants}>
                {child}
              </motion.div>
            );
          })} */}
          {props.children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const AnimateOneByOne = (props) => (
  <motion.div variants={childVariants}>{props.children}</motion.div>
);
