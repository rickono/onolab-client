import styles from './navbar.module.scss';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1>ONO LAB</h1>
      <ul className={styles.navbar__nav}>
        <Link href='/'>
          <li className={styles.navbar__link}>
            <a>HOME</a>
          </li>
        </Link>
        <Link href='/publications'>
          <li className={styles.navbar__link}>
            <a>PUBLICATIONS</a>
          </li>
        </Link>
        <Link href='/people'>
          <li className={styles.navbar__link}>
            <a>PEOPLE</a>
          </li>
        </Link>
        {/* <Link href='/facilities'>
          <li className={styles.navbar__link}>
            <a>FACILITIES</a>
          </li>
        </Link> */}
        <Link href='/contact'>
          <li className={styles.navbar__link}>
            <a>CONTACT</a>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
