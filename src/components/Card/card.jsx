import React from 'react';
import styles from './card.module.scss';
import { useNavigate } from 'react-router-dom';

function Card({ id, title, cover }) {
  const navigate = useNavigate();

  // Handle the Enter key press
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/Fiche-logement/${id}`);
    }
  };
  return (
    <div
      className={`${styles.card}`}
      onClick={() => navigate(`/Fiche-logement/${id}`)}
      tabIndex="0"
      role="button"
      onKeyDown={handleKeyDown}
    >
      <img src={cover} alt={title} />
      <div className={`${styles.imgGradient}`}></div>
      <div className={`${styles.textContainer}`}>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Card;
