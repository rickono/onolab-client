import style from './personCard.module.scss';
import { motion } from 'framer-motion';
import stagger from '../../animations/stagger';

const AlumniCard = ({ person }) => {
  return (
    <motion.div className={style['alumni-card']} variants={stagger}>
      {/* <img src={process.env.API_URL + person.profile_photo.url} alt='' /> */}
      <div className={style['alumni-card__info']}>
        <h2>{person.name}</h2>
        <h4>{person.lab_role || ''}</h4>
        <p>{person.bio}</p>
      </div>
    </motion.div>
  );
};

export default AlumniCard;
