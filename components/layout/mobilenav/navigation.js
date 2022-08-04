import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './menuItem';
import style from './mobileNav.module.scss';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants} className={style.nav_list}>
    {items.map((item) => (
      <MenuItem item={item} key={item.text} />
    ))}
  </motion.ul>
);

const items = [
  { text: 'home', href: '/' },
  { text: 'publications', href: '/publications' },
  { text: 'people', href: '/people' },
  { text: 'projects', href: '/projects' },
  { text: 'contact', href: '/contact' },
];
