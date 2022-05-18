import * as React from 'react';
import { motion } from 'framer-motion';
import style from './mobileNav.module.scss';
import Link from 'next/link';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ item }) => {
  return (
    <Link href={item.href}>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={style.nav_item}
      >
        {item.text}
      </motion.li>
    </Link>
  );
};
