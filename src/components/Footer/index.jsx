import styles from './footer.module.scss';
import kasaLogoSmall from '../../assets/logo-kasa-small.svg'


function Footer(){
    return(
        <footer className={styles}>
            <img className={styles.logoSmall} src={kasaLogoSmall} alt="logo kasa"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
        )
}

export default Footer;
