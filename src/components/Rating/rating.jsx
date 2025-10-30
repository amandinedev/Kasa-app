import React from 'react';
import styles from './rating.module.scss';
import filledStar from '../../assets/filledStar.svg'
import emptyStar from '../../assets/emptyStar.svg'

function Rating({ rating }) {
  const filledStars = Array.from({ length:  Math.min(rating, 5) }, (_, index) => (
      <img key={index} src={filledStar} alt="Filled Star" className={`${styles.filledStar}`} />
  ));
  const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
    <img key={index} src={emptyStar} alt="Empty Star" className={`${styles.emptyStar}`} />
  ));

  return (
    <div className={`${styles.ratingContainer}`}>
      {filledStars}
      {emptyStars}
    </div>
  );
}

export default Rating;