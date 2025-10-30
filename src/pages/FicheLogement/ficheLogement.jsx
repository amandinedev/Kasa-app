import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './ficheLogement.module.scss';
import Collapsible from '../../components/Collapsible/collapsible';
import SlideShow from '../../components/Slideshow/slideshow.jsx';
import TitleLocation from '../../components/TitleLocation/titleLocation.jsx';
import Tags from '../../components/Tags/tags.jsx';
import HostInfo from '../../components/HostInfo/hostInfo.jsx';
import Rating from '../../components/Rating/rating.jsx';
import logementsData from '../../datas/logements.json';

function FicheLogement(debug=false) {
  
    const { id } = useParams();
  if (debug==true) {console.log('FicheLogement ID:', id);}
    // Log the JSON data to verify its contents
  if (debug==true) {console.log('Logements Data:', logementsData);}
    const navigate = useNavigate();

  // Filter the logement data based on the ID
  const logement = logementsData.find(logement => logement.id === id);
  useEffect(() => {
    if (!logement) {
      navigate('/404');
    }
  }, [logement, navigate]);

  return (
    <>
    <main className={`${styles.logementSection}`}>
      <section className={`${styles.slideshowSection}`}>
          <SlideShow pictures={logement.pictures} />
      </section>
      <section className={`${styles.infoSection}`}>
        <div className={`${styles.infoContainer1}`}>
          <TitleLocation title={logement.title} location={logement.location} />
          <Tags tags={logement.tags} />
        </div>
        <div className={`${styles.infoContainer2}`}>
           <HostInfo host={logement.host}/>
           <Rating rating={parseInt(logement.rating, 10)} />
        </div>
       </section>
      <section className={`${styles.collapsibleSection}`}>
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
      </section>
    </main>
    </>
  );
}

export default FicheLogement;
