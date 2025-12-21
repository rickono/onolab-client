import { motion } from 'framer-motion';
import stagger from '../../animations/stagger';

const AlumniCard = ({ person }) => {
  return (
    <motion.div 
      className="group rounded p-3 h-full transition-colors duration-200 hover:bg-black/[0.04]"
      variants={stagger}
    >
      <div>
        <h2 className="text-sm font-semibold tracking-tight text-gray-900 mb-0.5">
          {person.name}
        </h2>
        {person.lab_role && (
          <h4 className="text-xs font-normal text-gray-500">{person.lab_role}</h4>
        )}
        {person.bio && (
          <p 
            className="text-xs leading-snug text-gray-400 mt-1 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100"
            dangerouslySetInnerHTML={{ __html: person.bio }} 
          />
        )}
      </div>
    </motion.div>
  );
};

export default AlumniCard;
