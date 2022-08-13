import React from 'react';
import ProjectCard from '../components/projectCard/projectCard';
import utilStyles from '../styles/utils.module.css';
import Layout from '../components/layout/layout';
import { motion } from 'framer-motion';
import fadeInUp from '../animations/fadeInUp';
import stagger from '../animations/stagger';
import media from '../data/media';

const Media = () => {
  return (
    <Layout title='Ono Lab | Media'>
      <motion.div
        className={utilStyles.container}
        exit={{ opacity: 0 }}
        initial='initial'
        animate='animate'
      >
        <motion.h1 variants={fadeInUp} className={utilStyles['page-header']}>
          Media
        </motion.h1>
        <motion.div variants={stagger} className={utilStyles.grid}>
          {media.map((media) => {
            return (
              <motion.div variants={fadeInUp} key={media.img}>
                <ProjectCard project={media} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Media;
