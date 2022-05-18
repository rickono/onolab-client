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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate,
          quis sed! Earum reiciendis pariatur eum deleniti sunt, natus optio ut
          provident sapiente reprehenderit totam, facere placeat molestiae illum
          beatae iure rerum, at saepe explicabo. Tempora saepe quos impedit
          facere vero quaerat voluptates hic sunt reprehenderit nobis recusandae
          iste atque officia dicta culpa nemo voluptate debitis, veniam
          quibusdam ex tempore nostrum, obcaecati assumenda eveniet.
          Consequatur, dicta animi. <br />
          <br /> Vel perferendis illum ex neque. Aperiam deleniti consectetur ex
          modi, provident assumenda! Non minima suscipit illo architecto
          repudiandae illum neque error accusamus nobis atque veritatis placeat
          voluptates magnam enim aspernatur accusantium, porro dolores, quam
          animi itaque sunt voluptas aliquam officiis voluptatem. Fugiat at
          itaque consectetur ipsa incidunt recusandae eius porro temporibus
          dolore! Ad laudantium est nostrum! Doloribus quisquam aliquid rem iste
          vel quo reprehenderit eius cum veniam voluptate dolore, minima nemo?
          Sint rem recusandae accusantium, ad alias itaque voluptatem quae,
          officiis iusto delectus fugit!
        </div>
      </motion.div>
    </Layout>
  );
}
