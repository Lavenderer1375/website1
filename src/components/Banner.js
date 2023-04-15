import React from 'react';
import styles from './Banner.module.css';
import banner from '../images/banner.jpg';
const Banner = () => {
  return (
    <div className={styles.container}>
      <img src={banner} alt="banner" />
      <div className={styles.textContainer}>
        <h1>Georgia Sellings</h1>
        <p>Your best <span>Market,</span> inside and out!</p>
      </div>
    </div>
  );
};

export default Banner;
