import React from 'react';
import Updates from './Updates';
import Image from 'next/image';
import styles from '../../styles/partials/header.module.scss'

const Header = () => {
  return (
    <div className={styles.Header}>
      <Image
        src="/header-bg.jpg"
        alt="Header Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className={styles.Header__overlay}></div>
      <div className={styles.Header__line}></div>
      <div className={styles.Header__text}>
        <h1 className={styles.Heading__primary}>
          Constantly Innovating <br />
          Always Improving <br />
        </h1>

        <p>Software that enhances your customer experience</p>
      </div>

      <Updates />
    </div>
  );
};

export default Header;
