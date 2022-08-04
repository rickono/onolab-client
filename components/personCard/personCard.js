import style from './personCard.module.scss';
import { motion } from 'framer-motion';
import stagger from '../../animations/stagger';

const PersonCard = ({ person }) => {
  return (
    <motion.div className={style['person-card']} variants={stagger}>
      {person.img && <img src={person.img} alt='' />}
      <div className={style['person-card__info']}>
        <h1>{person.name}</h1>
        <h3>{person.lab_role || ''}</h3>
        <p dangerouslySetInnerHTML={{ __html: person.bio }}></p>
      </div>
    </motion.div>
  );
};

export default PersonCard;
