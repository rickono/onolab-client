import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from './use-dimensions.js';
import { MenuToggle } from './menuToggle';
import { Navigation } from './navigation';
import style from './mobileNav.module.scss';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export const MobileNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
      <div className={style.navbar_bg}>
        <h3>Ono Laboratory</h3>
      </div>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
        className={`${style.navbar} ${isOpen && style.open}`}
      >
        <motion.div
          className={`${style.background} ${
            isOpen ? style.open : style.closed
          }`}
          variants={sidebar}
        />
        <div className={`${isOpen ? style.open : style.closed}`}>
          <Navigation />
        </div>
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </>
  );
};
