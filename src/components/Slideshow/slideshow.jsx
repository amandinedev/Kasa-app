import React, { useState } from 'react';
import styles from './slideshow.module.scss';
import arrowForward from '../../assets/arrow-forward.svg';
import arrowBack from '../../assets/arrow-back.svg';

function SlideShow({pictures}){
     const [currentIndex, setCurrentIndex] = useState(0);

  const nextPicture = () => {
    if (pictures.length === 1) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const previousPicture = () => {
    if (pictures.length === 1) return;
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

   return (
    <div className={styles.slideshowSection}>
      {pictures.length > 0 && (
        <>
          <img className={styles.slideImage} src={pictures[currentIndex]} alt={`Slide ${currentIndex}`} />
          {pictures.length > 1 && (
            <>
              <button onClick={previousPicture} className={`${styles.navButton} ${styles.backButton}`}>
                <img className={styles.arrowIcon} src={arrowBack} alt='Previous' />
              </button>
              <button onClick={nextPicture} className={`${styles.navButton} ${styles.forwardButton}`}>
                <img className={styles.arrowIcon} src={arrowForward} alt='Next' />
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}


export default SlideShow;
