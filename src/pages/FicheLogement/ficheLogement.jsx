import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './ficheLogement.module.scss';
import Collapsible from '../../components/Collapsible/collapsible';
import SlideShow from '../../components/Slideshow/slideshow.jsx';
import TitleLocation from '../../components/TitleLocation/titleLocation.jsx';
import Tags from '../../components/Tags/tags.jsx';
import HostInfo from '../../components/HostInfo/hostInfo.jsx';
import Rating from '../../components/Rating/rating.jsx';
import logementsData from '../../datas/logements.json';

function FicheLogement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    // search a logement with the matching ID in our data array
    const foundLogement = logementsData.find((logement) => logement.id === id);
    // If no logement is found, navigate to the 404 page
    if (!foundLogement) {
      navigate('/404');
    }
    // Otherwise, update the state with the found logement
    else {
      setLogement(foundLogement);
    }
  }, [id, navigate]);

  // If no logement data is ready yet, return a placeholder div to prevent errors in rendering
  if (!logement) return <div></div>;

  return (
    <>
      <main className={`${styles.logementSection}`}>
        <section className={`${styles.slideshowSection}`}>
          <SlideShow pictures={logement.pictures} />
        </section>
        <section className={`${styles.infoSection}`}>
          <div className={`${styles.infoContainer1}`}>
            <TitleLocation
              title={logement.title}
              location={logement.location}
            />
            <Tags tags={logement.tags} />
          </div>
          <div className={`${styles.infoContainer2}`}>
            <HostInfo host={logement.host} />
            <Rating rating={parseInt(logement.rating, 10)} />
          </div>
        </section>
        <section className={`${styles.collapsibleSection}`}>
          <Collapsible title="Description"> {logement.description}</Collapsible>
          <Collapsible title="Équipements">
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapsible>
        </section>
      </main>
    </>
  );
}

export default FicheLogement;
