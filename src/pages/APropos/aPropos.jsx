import React from 'react';
import styles from './aPropos.module.scss';
import Banner from '../../components/Banner/banner';
import bannerAPropos from '../../assets/bannerAPropos.webp';

function APropos(){
return(
    <div>
        <div className={styles.aProposBanner}></div>
        <Banner imageSource={bannerAPropos} />
       
    </div>
);
}

export default APropos;