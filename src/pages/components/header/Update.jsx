import React from 'react';
import  Link  from 'next/link';
import PropTypes from 'prop-types';
import style from '../../styles/partials/update.module.scss';


const Update = ({ image, title, description, slug }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
  };

  return (
    <Link to={`${slug}`} className={style.Update}>
      <div className={style.Update__img} style={styles}></div>
      <div className={style.Update__text}>
        <h3 className={style.Update__title}>{title}</h3>
        <p className={style.Update__description}>{description.substring(0, 20)}...</p>
      </div>
    </Link>
  );
};

Update.defaultProps = {
  title: 'Company Update',
  description: 'Lorem ipsum dolor',
};

Update.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Update;
