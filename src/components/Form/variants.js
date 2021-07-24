const variants = {
  slideOut: { x: "-100vw", transition: { duration: 0.25 } },
  slideIn: {
    x: 0,
    transition: {
      delay: 0.25,
      duration: 0.5,
    },
  },
  hidden: { opacity: 0, transition: { duration: 0.25 } },
  visible: { opacity: 1, transition: { delay: 0.5, duration: 0.25 } },
};

export default variants;
