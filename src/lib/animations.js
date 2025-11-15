// src/lib/animations.js

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const containerStagger = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.08 },
  },
};

export const heroContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.12 },
  },
};

export const heroStagger = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // sexy smooth ease
    },
  },
};
