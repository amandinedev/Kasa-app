import React from 'react';
import styles from './card.module.scss';  
import { useNavigate } from 'react-router-dom'; 


function Card({ id, title, cover }) {
    const navigate = useNavigate();
    return (
        <div className={styles.card} onClick={() => navigate(`/Fiche-logement/${id}`)}>
            <img src={cover} alt={title} />
            <div className={styles['text-container']}>
            <h2>{title}</h2>
            </div>
        </div>
    );
}

export default Card;