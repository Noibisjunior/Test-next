"use client"; // This is a client component 


//converting components and hook syntax to functional components with hooks
import React, { useState,useEffect } from 'react';
import  Link  from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/images/logo-globe.png';
import CallToAction from './Call-To-Action';
import Modal from './Modal';
import styles from '../../styles/partials/navbar.module.scss'
import style from '../../styles/partials/button.module.scss';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const updateScrollY = () => {
    setScrollY(window.scrollY);
  };

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  useEffect(() => {
    document.addEventListener('scroll', updateScrollY, false);

    return () => {
      document.removeEventListener('scroll', updateScrollY, false);
    };
  }, []);

  return (
    <>
      <nav
        className={`${styles.navbar} ${
          scrollY > 25 ? styles['navbar__dark'] : ''
        }`}
      >
        <ul className={styles.Navbar__links}>
          <Link className={styles.Navbar__links__logo} href="/" passHref>
            <Image src={logo} alt="Logo" />
          </Link>
          <Link className={styles.Navbar__links__link} href="/" passHref>
            Home
          </Link>
          <Link
            className={styles.Navbar__links__link}
            href="/portfolio"
            passHref
          >
            Portfolio
          </Link>
          <Link className={styles.Navbar__links__link} href="/blog" passHref>
            Blog
          </Link>
        </ul>
      </nav>

      {showModal && <Modal toggleModal={toggleModal} />}

      <CallToAction
        toggleModal={toggleModal}
        showClass={`scrollY > 25 ? ${style.visible} : ${style.hidden}`}
      />
    </>
  );
};

export default Navbar;
