const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInRight = {
  initial: {
    x: -60,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export default fadeInRight;
