import React from 'react';
import styles from './home.module.scss';
import Banner from '../../components/Banner/banner';
import bannerHome from '../../assets/bannerHome.webp';
import logementsData from '../../datas/logements.json';
import Card from '../../components/Card/card';

function Home() {
  const isMobile = window.innerWidth <= 600;
  return (
    <>
      <main className={`${styles.sectionHome}`}>
        <div className={`${styles.homeBanner}`}>
          <h1>
            Chez vous, {isMobile && <br />}
            partout et ailleurs
          </h1>
        </div>
        <Banner imageSource={bannerHome} />
        <div className={`${styles.gallery}`}>
          {logementsData.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
