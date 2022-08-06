import style from './projectCard.module.scss';
import { motion } from 'framer-motion';
import stagger from '../../animations/stagger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ project }) => {
  return (
    <motion.div className={style['project-card']} variants={stagger}>
      {project.img && <img src={project.img} alt='' />}
      {project.youtube && (
        <iframe
          src={project.youtube}
          frameborder='0'
          allow='autoplay; encrypted-media'
          allowfullscreen
          title='video'
          className={style['project-card__video']}
        />
      )}
      <div className={style['project-card__info']}>
        <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
        {project.link && (
          <a
            href={project.link.url}
            className={style['project-card__link']}
            rel='noopener noreferrer'
            target='_blank'
          >
            {project.link.label}
            &nbsp;&nbsp;
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
