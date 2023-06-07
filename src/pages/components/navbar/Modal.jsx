import React from 'react';
import PropTypes from 'prop-types';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import Link from 'next/link';
import styles from '../../styles/partials/modal.module.scss'



const Modal = ({ toggleModal }) => (
  <>
    <div className={styles.Modal}>
      <h3 className={styles.Modal__title}>Get a quote</h3>
      <div className={styles.Modal__text}>
        <p>Contact us for any inquiries</p>
        <Link href="mailto:anson.ervin@ansonervin.com" passHref>
          <p>
            <FaEnvelope className={styles.Modal__icon} /> anson.ervin@ansonervin.com
          </p>
        </Link>
        <Link href="tel:9737232241" passHref>
          <p>
            <FaPhone className={styles.Modal__icon} /> (973) 723 2241
          </p>
        </Link>
      </div>
      <button onClick={toggleModal} className={styles.Btn__dark}>
        Close
      </button>
    </div>
    <div className={styles.overlay}></div>
  </>
);

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default Modal;
