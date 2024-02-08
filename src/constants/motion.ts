import { Variants } from 'framer-motion';

const defaultEasing = [0.6, -0.05, 0.01, 0.99];

const staggerOne: Variants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const staggerHalf: Variants = {
  animate: { transition: { staggerChildren: 0.05 } },
};

const defaultFadeInVariants: Variants = {
  initial: {
    opacity: 0,
    transition: { duration: 0.5, ease: defaultEasing },
    willChange: 'opacity',
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, ease: defaultEasing },
    willChange: 'opacity',
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: defaultEasing },
    willChange: 'opacity',
  },
};

const defaultFadeInUpVariants: Variants = {
  initial: {
    y: 20,
    opacity: 0,
    transition: { duration: 0.45, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  exit: {
    y: 20,
    opacity: 0,
    transition: { duration: 0.45, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};

const defaultFadeInScaleVariants: Variants = {
  initial: {
    scale: 0.85,
    opacity: 0,
    transition: { duration: 0.8, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  exit: {
    scale: 0.85,
    opacity: 0,
    transition: { duration: 0.8, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};

const defaultFadeInLeftVariants: Variants = {
  initial: {
    x: -22,
    opacity: 0,
    transition: { duration: 0.7, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  exit: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};

const defaultFadeInRightVariants: Variants = {
  initial: {
    x: 22,
    opacity: 0,
    transition: { duration: 0.7, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  exit: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};

export {
  defaultFadeInLeftVariants,
  defaultFadeInRightVariants,
  defaultFadeInScaleVariants,
  defaultFadeInUpVariants,
  defaultFadeInVariants,
  staggerHalf,
  staggerOne,
};
