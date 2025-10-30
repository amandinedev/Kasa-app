import React from 'react';
import styles from './error404.module.scss';
import { Link } from 'react-router-dom';


function Error404(){
    const isMobile = window.innerWidth <= 600;
return(
    <main className={`${styles.errorSection}`}>
        <h1 className={`${styles.errorTitle}`}>404</h1>
        <h2 className={`${styles.errorText}`}>Oups! La page que {isMobile && <br />}vous demandez n'existe pas.</h2>
        <Link to="/" className={`${styles.link}`}>Retourner sur la page d’accueil</Link>
    </main>
)
}

export default Error404;