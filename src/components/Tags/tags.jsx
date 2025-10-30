import React from 'react';
import styles from './tags.module.scss';

function Tags({ tags }) {
  return (
    <ul className={`${styles.tagsContainer}`}>
      {tags.map((tag, index) => (
        <li key={index} className={`${styles.tag}`}>{tag}</li>
      ))}
    </ul>
  );
}

export default Tags;