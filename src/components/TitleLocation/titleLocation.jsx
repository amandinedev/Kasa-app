import React from 'react';
import styles from './titleLocation.module.scss';

function TitleLocation({ title, location }) {
  return (
    <div className={styles.titleLocationContainer}>
      <h2>{title}</h2>
      <p>{location}</p>
    </div>
  );
}

export default TitleLocation;