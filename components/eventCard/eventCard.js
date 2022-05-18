import style from './eventCard.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';

const EventCard = ({ post }) => {
  return (
    <Link href='/news/[id]' as={`/news/${post.id}`}>
      <a>
        <motion.div
          className={style['event-card']}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <img
            src={'https://still-sierra-03037.herokuapp.com' + post.image.url}
            alt='greece'
          />

          <div className={style['event-card__info']}>
            <h1>{post.title}</h1>
            <p>{`${post.date} by ${post.author}`}</p>
            <p className={style.snippet}>{post.snippet}</p>
          </div>
        </motion.div>
      </a>
    </Link>
  );
};

export default EventCard;
