import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/header';
import Footer from '../Footer/footer';

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = { // Ajouter la validation des props
  children: PropTypes.node.isRequired,
};

export default Layout;
