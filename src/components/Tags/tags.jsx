import React from 'react';
import styles from './tags.module.scss';
import PropTypes from 'prop-types'; 

function Tags({ tags }) {
  return (
    <ul className={`${styles.tagsContainer}`}>
      {tags.map((tag, index) => (
        <li key={index} className={`${styles.tag}`}>
          {tag}
        </li>
      ))}
    </ul>
  );
}

// validation des props
Tags.propTypes = { 
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
