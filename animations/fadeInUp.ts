import type { Variants } from "framer-motion";

const easing = [0.6, -0.05, 0.01, 0.99] as const;

const fadeInUp: Variants = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export default fadeInUp;
