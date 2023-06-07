import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/partials/project.module.scss';
import Link from 'next/link';

const Project = ({ image, title, description, duration, services, slug }) => {
  const style = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
  };

  return (
    <div className={styles.Project}>
      <div className={styles.Project__img} style={style}></div>
      <h3 className={styles.Project__title}>{title}</h3>
      <p className={styles.Project__desc}>{description}</p>
      {duration && <p className={styles.Project__desc}>Duration: {duration}</p>}
      <ul>
        {services.map((service, i) => (
          <li key={i}>{service}</li>
        ))}
      </ul>
      <Link to={slug} className={styles.Btn__dark}>
        View Project Details
      </Link>
    </div>
  );
};

Project.defaultProps = {
  image: '',
  title: 'No title available',
  description: 'No Description available',
  services: [],
  duration: '',
};

Project.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  services: PropTypes.array,
  duration: PropTypes.string,
};

export default Project;
