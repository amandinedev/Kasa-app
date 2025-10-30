import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styles from './collapsible.module.scss';  
import chevron from '../../assets/chevron.svg';

const Collapsible = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.collapsibleContainer} ${isOpen ? styles.open : ''}`}>
      <div className={`${styles.collapsible}`}>
        <h2 className={`${styles.collapsibleTitle}`}>{title}</h2>
        <button className={`${styles.collapsibleButton}`} onClick={() => setIsOpen(!isOpen)}>
        <img className={`${styles.arrow} ${isOpen ? styles.open : ''}`} src={chevron} alt={`${isOpen ? 'open' : 'close'}`}></img>
      </button>
      </div>
      <div
        className={`${styles.content} ${isOpen ? styles.visible : styles.collapsed}`}
      >
        <div className={`${styles.innercContent}`}>
          {content}
        </div>
      </div>
    </div>
  );
};

export default Collapsible;

