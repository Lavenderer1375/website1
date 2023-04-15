import React from 'react';
import styles from './Logos.module.css';
import logoapple from '../images/apple logo.jpg';
import logosamsung from '../images/samsung logo.jpg';
import logoxiaomi from '../images/xiaomi logo.jpg';

const Logos = () => {
  return (
    <div className={styles.container}>
      <h3>Who supports us?!</h3>
      <div>
        <img src={logoapple} alt='logos'/>
        <img src={logosamsung} alt='logos'/>
        <img src={logoxiaomi} alt='logos'/>
      </div>
    </div>
  );
};

export default Logos;
