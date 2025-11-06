import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './titleLocation.module.scss';


function TitleLocation({ title, location }) {
  return (
    <div className={`${styles.titleLocationContainer}`}>
      <h1>{title}</h1>
      <p>{location}</p>
    </div>
  );
}

// validation des props
TitleLocation.propTypes = { 
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default TitleLocation;
