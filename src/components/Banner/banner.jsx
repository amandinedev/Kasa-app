import React from 'react';
import styles from './banner.module.scss';

function Banner({ imageSource }) {
  return (
    <div className={`${styles.banner}`}>
      <img src={imageSource} alt="Banner" />
    </div>
  );
}

export default Banner;