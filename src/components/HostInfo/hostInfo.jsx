import React from 'react';
import styles from './hostInfo.module.scss';

function HostInfo({ host }) {
  const fullName = host.name.split(' ');
  const firstName = fullName[0];
  const lastName = fullName.length > 1 ? fullName.slice(1).join(' ') : '';

  return (
    <div className={`${styles.hostContainer}`}>
      <div className={`${styles.hostFullName}`}>
        <p className={`${styles.firstName}`}>{firstName}</p>
        <p className={`${styles.lastName}`}>{lastName}</p>
      </div>
      <img src={host.picture} alt={host.name} className={`${styles.hostPicture}`} />
    </div>
  );
}

export default HostInfo;