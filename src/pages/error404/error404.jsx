import React from 'react';
import styles from './error404.module.scss';
import { Link } from 'react-router-dom';


function Error404(){
    const isMobile = window.innerWidth <= 600;
return(
    <section className={styles.errorSection}>
        <h2 className={styles.errorTitle}>404</h2>
        <h3 className={styles.errorText}>Oups! La page que {isMobile && <br />}vous demandez n'existe pas.</h3>
        <Link to="/" className={styles.link}>Retourner sur la page d’accueil</Link>
    </section>
)
}

export default Error404;