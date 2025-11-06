import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; 
import styles from './slideshow.module.scss';
import arrowForward from '../../assets/arrow-forward.svg';
import arrowBack from '../../assets/arrow-back.svg';


function SlideShow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPortrait, setIsPortrait] = useState(false);

  // Function to check if the image is portrait or landscape
  const checkImageOrientation = (src) => {
    const img = new Image();
    img.src = src;
    return new Promise((resolve) => {
      img.onload = () => {
        resolve(img.height > img.width);
      };
    });
  };

  useEffect(() => {
    if (pictures.length > 0 && pictures[currentIndex]) {
      checkImageOrientation(pictures[currentIndex]).then((orientation) => {
        setIsPortrait(orientation);
      });
    }
  }, [currentIndex, pictures]);

  const nextPicture = () => {
    if (pictures.length === 1) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const previousPicture = () => {
    if (pictures.length === 1) return;
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <div className={`${styles.slideshowSection}`}>
      {pictures.length > 0 && (
        <>
          <img
            className={`${styles.slideImage} 
          ${isPortrait ? styles.portrait : styles.landscape}`}
            src={pictures[currentIndex]}
            alt={`Slide ${currentIndex}`}
          />
          {pictures.length > 1 && (
            <div className={`${styles.overlayText}`}>
              {' '}
              {`${currentIndex + 1}/${pictures.length}`}
            </div>
          )}
          {pictures.length > 1 && (
            <>
              <button
                onClick={previousPicture}
                className={`${styles.navButton} ${styles.backButton}`}
              >
                <img
                  className={`${styles.arrowIcon}`}
                  src={arrowBack}
                  alt="Previous"
                />
              </button>
              <button
                onClick={nextPicture}
                className={`${styles.navButton} ${styles.forwardButton}`}
              >
                <img
                  className={`${styles.arrowIcon}`}
                  src={arrowForward}
                  alt="Next"
                />
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}

// validation des props
SlideShow.propTypes = { 
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SlideShow;
