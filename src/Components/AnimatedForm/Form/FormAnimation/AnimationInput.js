export const containerVariants = {
  hidden: {
    opacity: 0,
    transition: {
      delay: 1,
      staggerChildren: 0.1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

export const childVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
    transition: {
      ease: "easeIn",
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.5,
      damping: 10,
      stiffness: 80,
    },
  },
};
