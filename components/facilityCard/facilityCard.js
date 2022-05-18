import style from './facilityCard.module.scss';
import stagger from '../../animations/stagger';
import { motion } from 'framer-motion';

const FacilityCard = ({ facility }) => {
  return (
    <motion.div className={style['facility-card']} variants={stagger}>
      <img
        src={'https://still-sierra-03037.herokuapp.com' + facility.image.url}
        alt=''
      />
      <div className={style['facility-card__info']}>
        <h3>{facility.name}</h3>
        <p>{facility.description}</p>
      </div>
    </motion.div>
  );
};

export default FacilityCard;
