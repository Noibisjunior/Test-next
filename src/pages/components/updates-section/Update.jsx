import React from 'react';
import { Link } from 'next/link';
import PropTypes from 'prop-types';

const Update = ({ image, title, description, slug }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
  };
  return (
    <div className="Project">
      <div className="Project__img" style={styles}></div>
      <h3 className="Project__title">{title}</h3>
      <p className="Project__desc">{description}</p>
      <Link to={slug} className="Btn Btn--dark">
        Read more
      </Link>
    </div>
  );
};

Update.defaultProps = {
  image: '',
  slug: '/',
  title: 'Update title',
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, rem.',
};

Update.propTypes = {
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Update;
