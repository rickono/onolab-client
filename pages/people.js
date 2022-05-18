import React from 'react';
import PersonCard from '../components/personCard/personCard';
import utilStyles from '../styles/utils.module.css';
import Layout from '../components/layout/layout';
import { motion } from 'framer-motion';
import fadeInUp from '../animations/fadeInUp';
import stagger from '../animations/stagger';
import axios from 'axios';
import AlumniCard from '../components/personCard/alumniCard';
import people from '../data/people';

const People = () => {
  const currentMembers = people.filter((person) => {
    return person.current_member;
  });
  const alumni = people.filter((person) => {
    return !person.current_member;
  });
  return (
    <Layout>
      <motion.div
        className={utilStyles.container}
        exit={{ opacity: 0 }}
        initial='initial'
        animate='animate'
      >
        <motion.h1 variants={fadeInUp} className={utilStyles['page-header']}>
          Current Members
        </motion.h1>
        <motion.div variants={stagger} className={utilStyles.grid}>
          {currentMembers.map((person) => {
            return (
              <motion.div variants={fadeInUp} key={person.id}>
                <PersonCard person={person} />
              </motion.div>
            );
          })}
        </motion.div>
        <motion.h1 variants={fadeInUp} className={utilStyles['page-header']}>
          Alumni
        </motion.h1>
        <motion.div variants={stagger} className={utilStyles.smallGrid}>
          {alumni.map((person) => {
            return (
              <motion.div variants={fadeInUp} key={person.id}>
                <AlumniCard person={person} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default People;
