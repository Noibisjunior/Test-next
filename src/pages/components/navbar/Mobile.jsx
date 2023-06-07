import React from 'react';
import  Link  from 'next/link';
import { FaHome, FaBlog, FaSuitcase } from 'react-icons/fa';
import styles from '../../styles/partials/mobile-nav.module.scss';


const Mobile = () => {
  return (
    <nav className={styles.MobileNav}>
      <ul className={styles.MobileNav__links}>
        <Link
          href="/"
          passHref
          className={styles.MobileNav__link}
          activeClassName={styles.MobileNav__link__active}
        >
          <FaHome />
        </Link>
        <Link
          href="/portfolio"
          passHref
          className={styles.MobileNav__link}
          activeClassName={styles.MobileNav__link__active}
        >
          <FaSuitcase />
        </Link>
        <Link
          href="/blog"
          passHref
          className={styles.MobileNav__link}
          activeClassName={styles.MobileNav__link__active}
        >
          <FaBlog />
        </Link>
      </ul>
    </nav>
  );
};

export default Mobile;
