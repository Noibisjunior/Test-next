import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Mobile from './components/navbar/Mobile';

// import '../app/styles/partials/layout.styles.scss';
// import '../pages/styles/index.styles.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
      <Mobile />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
