import Layout from '../components/layout/layout';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import style from '../styles/Contact.module.scss';
import { motion } from 'framer-motion';

const about = () => {
  return (
    <Layout title='Ono Lab | Contact'>
      <motion.div
        className={utilStyles.container}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className={utilStyles['page-header']}>Contact Us</h1>
        <h3 className={style.contact__slogan}>
          Feel free to contact us anytime.
        </h3>
        <h3 className={style.contact__category}>Shuhei Ono</h3>
        <ul>
          <li>
            Phone: <a href='tel: 6172530474'>(617) 253-0474</a>
          </li>
          <li>
            Email: <a href='mailto: sono@mit.edu'>sono@mit.edu</a>
          </li>
        </ul>
        <h3 className={style.contact__category}>Mailing Address</h3>
        <p>
          Building E25-641 Department of Earth, Atmospheric, and Planetary
          Sciences Massachusetts Institute of Technology 77 Massachusetts
          Avenue, Cambridge, MA 02139
        </p>
        <h2 className={style.resources__header}>Links and Useful Resources</h2>
        <h3 className={style.resources__section}>Collaborators</h3>
        <ul className={style.resources__list}>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href='https://www.aerodyne.com/' target='_blank'>
              Aerodyne Research
            </a>
          </motion.li>
        </ul>
        <h3 className={style.resources__section}>MIT Geobiology Colleagues</h3>
        <ul className={style.resources__list}>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href='http://summons.mit.edu/' target='_blank'>
              Roger Summons
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href='http://bosaklab.scripts.mit.edu/' target='_blank'>
              Tanja Bosak
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a
              href='http://eaps-www.mit.edu/paoc/people/edward-boyle'
              target='_blank'
            >
              Ed Boyle
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a
              href='http://eaps.mit.edu/research/group/IGLab/bowring.html'
              target='_blank'
            >
              Sam Bowring
            </a>
          </motion.li>
        </ul>
      </motion.div>
    </Layout>
  );
};

export default about;
