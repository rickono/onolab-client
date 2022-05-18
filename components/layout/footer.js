import React from 'react';
import style from './footer.module.scss';
import utilStyles from '../../styles/utils.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={utilStyles.container}>
        <h2 className={style.footer__heading}>Ono Stable Isotope Laboratory</h2>
        <ul className={style.footer__contacts}>
          <li>
            <b>Contact</b>
          </li>
          <li>
            Email: <a href='mailto: sono@mit.edu'>sono@mit.edu</a>
          </li>
          <li>
            Phone: <a href='tel: 6172530474'>(617) 253-0474</a>
          </li>
        </ul>
        <ul className={style.footer__icons}>
          <li>
            <img
              src='http://ono.mit.edu/sites/default/files/images/mit.png'
              alt=''
              height='50px'
            />
          </li>
          <li>
            <img
              src='http://ono.mit.edu/sites/default/files/documents/eaps_print.png'
              alt=''
              height='50px'
            />
          </li>
          <li>
            <img
              src='http://ono.mit.edu/sites/default/files/documents/LogoBlueTrans_1.png'
              alt=''
              height='70px'
            />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
