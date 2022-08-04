import style from './carousel.module.scss';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const Carousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(page, direction);
      paginate(1);
      console.log(page, direction);
    }, 10000);
    return () => clearInterval(interval);
  }, [page, direction]);

  const images = [
    {
      path: 'img/greece.jpg',
      header: 'Nysiros Island, Greece',
      subtitle: 'Fall 2017',
      text: 'We collected methane from volcanic fumaroles from Nysiros Island in Greece. Here, our methane isotopologue data suggests the methane is thermally equilibrated at the reservoir at 250°C (Beaudry et al., 2021, GCA).',
    },
    {
      path: 'img/iceland.jpg',
      header: 'Kerlingafjöll, Iceland',
      subtitle: 'Summer 2015',
      text: 'Volcanic fumaroles contain a trace quantity of methane with an unknown origin. We collected methane from geothermal wells and volcanic fumaroles from Iceland (Many thanks for Andri Stefansson and Jens Fibig). Our methane isotopologue data suggests the methane is either thermogenic or abiotic in origin (Beaudry et al., 2021, GCA). Methane could be generated abiotically from H<sub>2</sub> and CO<sub>2</sub> within deep superheated gas and later mixed with subcritical meteoric fluids.',
    },
  ];
  const imageIndex = Math.abs(page) % images.length;

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  return (
    <div className={style.carousel}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex].path}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            x: { type: 'spring', stiffness: 100, damping: 200 },
            opacity: { duration: 0.3 },
          }}
          className={style.carousel__slide}
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
        <motion.div>
          <motion.h1
            key={images[imageIndex].header}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            exit={{ opacity: 0 }}
            className={style.carousel__header}
          >
            {images[imageIndex].header}
          </motion.h1>
          <motion.h2
            key={`${images[imageIndex].subtitle}${imageIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            exit={{ opacity: 0 }}
            className={style.carousel__subtitle}
          >
            {images[imageIndex].subtitle}
          </motion.h2>
          <motion.p
            key={images[imageIndex].text}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            exit={{ opacity: 0 }}
            className={style.carousel__text}
            dangerouslySetInnerHTML={{ __html: images[imageIndex].text }}
          ></motion.p>
        </motion.div>
        <motion.div
          className={`${style['carousel__button--left']} ${style['carousel__button']}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(-1)}
          key={'buttonLeft'}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </motion.div>
        <motion.div
          className={`${style['carousel__button--right']} ${style['carousel__button']}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(1)}
          key={'buttonRight'}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default Carousel;
