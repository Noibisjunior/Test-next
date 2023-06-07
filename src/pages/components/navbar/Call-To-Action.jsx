import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/partials/button.module.scss';

const CallToAction = ({ showClass, toggleModal }) => (
  <button
    onClick={toggleModal}
    className={`${styles.Btn} ${styles['Btn__call-to-action']} ${
      showClass && styles.show
    }`}
  >
    Get A Quote
  </button>
);

CallToAction.propTypes = {
  showClass: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default CallToAction;
