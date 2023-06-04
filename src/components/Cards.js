import React, { Component } from 'react';
import styles from './Cards.module.css';
import Card from './Card';
import iphone11 from '../images/iphone 11.jpg';
import iphone12 from '../images/iphone 12.jpg';
import iphone13 from '../images/iphone 13.jpg';
import s21 from '../images/samsung s21.jpg';

export default class Cards extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Card image={iphone11} name="Iphone 11" cost="500 $" />
        <Card image={iphone12} name="Iphone 12" cost="700 $" />
        <Card image={iphone13} name="Iphone 13" cost="900 $" />
        <Card image={s21} name="Samsung Galaxy S21" cost="1000 $" />
      </div>
    );
  }
}
