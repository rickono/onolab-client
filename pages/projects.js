import React from 'react';
import ProjectCard from '../components/projectCard/projectCard.js';
import utilStyles from '../styles/utils.module.css';
import Layout from '../components/layout/layout';
import { motion } from 'framer-motion';
import fadeInUp from '../animations/fadeInUp';
import stagger from '../animations/stagger';
import projects from '../data/projects';

const Projects = () => {
  return (
    <Layout>
      <motion.div
        className={utilStyles.container}
        exit={{ opacity: 0 }}
        initial='initial'
        animate='animate'
      >
        <motion.h1 variants={fadeInUp} className={utilStyles['page-header']}>
          Projects
        </motion.h1>
        <motion.div variants={stagger} className={utilStyles.grid}>
          {projects.map((project) => {
            return (
              <motion.div variants={fadeInUp} key={project.img}>
                <ProjectCard project={project} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Projects;
