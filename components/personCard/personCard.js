import { motion } from "framer-motion";
import stagger from "../../animations/stagger";

const PersonCard = ({ person }) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-sm cursor-default"
      variants={stagger}
    >
      <div className="aspect-3/4 bg-gray-100">
        {person.img && (
          <img
            src={person.img}
            alt=""
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-[1.03]"
          />
        )}
      </div>
      <div className="absolute inset-0 flex flex-col justify-end pointer-events-none ">
        <div className="p-2 px-4 bg-gradient-to-t from-black/85 via-black/50 to-transparent transition-all duration-500 ease-in-out">
          <h1 className="text-white text-base font-semibold tracking-tight">
            {person.name}
          </h1>
          {person.lab_role && (
            <h3 className="text-white/70 text-xs font-normal mt-0.5">
              {person.lab_role}
            </h3>
          )}
          {person.bio && (
            <p className="text-white/80 text-xs leading-relaxed mt-2 max-h-0 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:max-h-40">
              {person.bio}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PersonCard;
