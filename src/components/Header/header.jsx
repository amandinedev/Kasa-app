import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import kasaLogo from '../../assets/logo-kasa.svg'

 
function Header() {

    return (

        <header className={styles}>
            <img className={styles.logo} src={kasaLogo} alt='logo kasa'></img>
            <nav className={styles.links}>

                <Link to="/">Accueil</Link>

                <Link to="/A-propos">A propos</Link>

            </nav>
        </header>

    );

}

export default Header;
