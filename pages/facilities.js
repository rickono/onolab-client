import Layout from '../components/layout/layout';
import utilStyles from '../styles/utils.module.css';
import FacilityCard from '../components/facilityCard/facilityCard';
import { motion } from 'framer-motion';
import fadeInUp from '../animations/fadeInUp';
import stagger from '../animations/stagger';
import axios from 'axios';

const Facilities = () => {
  return (
    <div>
      <Layout>
        {/* <motion.div
          className={utilStyles.container}
          exit={{ opacity: 0 }}
          initial='initial'
          animate='animate'
        >
          <motion.h1 variants={fadeInUp} className={utilStyles['page-header']}>
            Facilities
          </motion.h1>
          <motion.div variants={stagger} className={utilStyles.grid}>
            {facilities.map((facility) => {
              return (
                <motion.div variants={fadeInUp} key={facility._id}>
                  <FacilityCard
                    facility={facility}
                    key={'card' + facility._id}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div> */}
      </Layout>
    </div>
  );
};

// export async function getServerSideProps() {
//   const res = await axios.get(process.env.API_URL + '/facilities');
//   return {
//     props: {
//       facilities: res.data,
//     },
//   };
// }

export default Facilities;
