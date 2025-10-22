import React from 'react';
import styles from './aPropos.module.scss';
import Banner from '../../components/Banner/banner';
import bannerAPropos from '../../assets/bannerAPropos.webp';
import Collapsible from '../../components/Collapsible/collapsible.jsx';

function APropos() {
  const data = [
    {
      title: 'Fiabilité',
      content: `Les annonces postées sur Kasa garantissent une fiabilité 
      totale. Les photos sont conformes aux logements, et toutes les 
      informations sont régulièrement vérifiées par nos équipes.`
    },
    { title: 'Respect', content: `La bienveillance fait partie des valeurs 
        fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation 
        du voisinage entrainera une exclusion de notre plateforme.` },
    { title: 'Service', content: `La qualité du service est au cour de notre 
        engagement chez Kasa. Nous veillons a ce que chaque interaction,que ce soit 
        avec nos hotes ou nos locataires, soit empreinte de respect et de bienveillance.`},
    { title: 'Sécurité', content: `La sécurité est la priorité de Kasa. Aussi bien pour
        nos hotes que pour les voyageurs, chaque logement correspond aux critères de 
        sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
        Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.` },
  ];
  return (
    <div>
      <div className={styles.aProposBanner}></div>
      <Banner imageSource={bannerAPropos} />
      <div className={styles.collapsible}>
        {data.map((item, index) => (
          <Collapsible key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}

export default APropos;
