import utilStyles from '../../styles/utils.module.css';
import style from './select.module.scss';
import { useState, useEffect } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';

const Select = ({ options, initial, label, onChange }) => {
  const [selected, setSelected] = useState(initial);

  useEffect(() => {
    onChange(selected);
  }, [selected]);

  return (
    <AnimateSharedLayout>
      <div className={style.select}>
        <h3>{label}</h3>
        <ul className={style.select_items}>
          {options.map((option) => {
            return (
              <SelectItem
                key={option}
                option={option}
                isSelected={selected === option}
                onClick={() => setSelected(option)}
              />
            );
          })}
        </ul>
      </div>
    </AnimateSharedLayout>
  );
};

const SelectItem = ({ option, isSelected, onClick }) => {
  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 30,
  };

  return (
    <motion.li
      onClick={onClick}
      className={style.item}
      style={{ color: isSelected ? '#eee' : '#222', zIndex: '1' }}
    >
      {option.toUpperCase()}
      {isSelected && (
        <motion.div
          className={style.outline}
          layoutId='outline'
          initial={false}
          transition={spring}
        ></motion.div>
      )}
    </motion.li>
  );
};

export default Select;
