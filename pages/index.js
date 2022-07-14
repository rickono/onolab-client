import Head from 'next/head';
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';
import Carousel from '../components/carousel/carousel';
import Layout from '../components/layout/layout';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Ono Stable Isotope Laboratory</title>
      </Head>
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <Carousel />
        <div className={utilStyles.container}>
          <br />
          <br />
          <h1 className={utilStyles['page-header']}>About Us</h1>
          <div className={utilStyles['paragraph-spacing']}>
            <p>
              The Ono laboratory for stable isotope geochemistry studies how
              microbes catalyze chemical reactions and shape the chemistry of
              our atmosphere and oceans.
            </p>
            <p>
              Our laboratory has explored the early evolution of atmospheric
              oxygen using stable sulfur isotope systems and developed a novel
              tool to pinpoint the origin of methane, significant long-lived
              greenhouse gas, and a key biosignature gas for space exploration.
            </p>
            <p>
              Our approach has always combined theoretical, experimental, and
              observational studies to answer significant questions in Earth
              science using stable isotopes as a versatile tool. We apply our
              tools to a broad range of problems in both low- and
              high-temperature geochemistry.
            </p>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}
