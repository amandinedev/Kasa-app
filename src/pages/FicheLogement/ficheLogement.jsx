import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ficheLogement.module.scss';
import Collapsible from '../../components/Collapsible/collapsible';
import SlideShow from '../../components/Slideshow/slideshow.jsx';
import logementsData from '../../datas/logements.json';

function FicheLogement() {
    const { id } = useParams();
  console.log('FicheLogement ID:', id);

  // Filter the logement data based on the ID
  const logement = logementsData.find(logement => logement.id === id);
  // if (!logement) {
  //   return <div>Logement not found</div>;
  // }
  return (
    <div className={styles.logementSection}>
      <div className={styles.slideshowSection}>
          <SlideShow pictures={logement.pictures} />
      </div>
      <div className={styles.collapsibleSection}>
            <Collapsible title="Description" content={logement.description} />
            <Collapsible
              title="Équipements"
              content={
                <ul>
                  {logement.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              }
            />
      </div>
    </div>
  );
}

export default FicheLogement;
