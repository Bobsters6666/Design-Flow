export const fadeDownInView = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    type: "spring",
    bounce: 0,
    durating: 0.3,
    delay: delay,
  },
});

export const fadeUpInView = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    type: "spring",
    bounce: 0,
    duration: 0.3,
    delay: delay,
  },
});
