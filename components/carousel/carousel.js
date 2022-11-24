import style from './carousel.module.scss';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const Carousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (document.hasFocus()) {
        paginate(1);
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [page, direction]);

  const images = [
    {
      path: '/img/iceland2.jpeg',
      header: 'Hellisheiði, Iceland',
      subtitle: 'Summer 2022',
      text: 'The Carbfix2 site at Hellisheiði power plant in Iceland, where CO<sub>2</sub> captured from the air and geothermal plants are injected into the basaltic aquifer and stored as carbonate minerals. From left, Mateo, Andri Stefánsson, Vanessa Sun, Shuhei Ono, Matěj Pěc.',
    },
    {
      path: '/img/hawaii.png',
      header: 'Waikiki, Hawaii',
      subtitle: 'Summer 2022',
      text: 'Lab members past and present at Goldschmidt HI 2022 (from left, Ben Uveges, Lubna Shawer, Jeemin Rhim, Ellen Lalk).',
    },
    {
      path: '/img/novascotia.jpg',
      header: 'Offshore Nova Scotia, Canada',
      subtitle: 'Summer 2021',
      text: 'The elevator basket brings up sediment cores from the ocean floor of the Scotian slope. We extract methane from the sediments to investigate its source and the deep biosphere.',
    },
    {
      path: '/img/greece.jpg',
      header: 'Nysiros Island, Greece',
      subtitle: 'Fall 2017',
      text: 'We collected methane from volcanic fumaroles from Nysiros Island in Greece. Here, our methane isotopologue data suggests the methane is thermally equilibrated at the reservoir at 250°C (Beaudry et al., 2021, GCA).',
    },
    {
      path: '/img/iceland.jpg',
      header: 'Kerlingafjöll, Iceland',
      subtitle: 'Summer 2015',
      text: 'Volcanic fumaroles contain a trace quantity of methane with an unknown origin.  Our isotopologue data suggests methane could be generated abiotically from H2 and CO2 within deep superheated gas and later mixed with subcritical meteoric fluids (Beaudry et al., 2021, GCA).',
    },
  ];
  const imageIndex = Math.abs(page) % images.length;

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        x: direction < 0 ? 1000 : -1000,
      };
    },
  };

  return (
    <div className={style.carousel}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            x: { type: 'spring', damping: 12, stiffness: 50 },
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
        >
          <Image
            src={images[imageIndex].path}
            alt={images[imageIndex].header}
            layout='fill'
            objectFit='cover'
            loading='eager'
          />
        </motion.div>
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
          <Icon icon='akar-icons:chevron-left' />
        </motion.div>
        <motion.div
          className={`${style['carousel__button--right']} ${style['carousel__button']}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(1)}
          key={'buttonRight'}
        >
          <Icon icon='akar-icons:chevron-right' />
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
