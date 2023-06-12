import React, { Component } from 'react';
import styles from './Cards.module.css';
import Card from './Card';
import iphone11 from '../images/iphone 11.jpg';
import iphone12 from '../images/iphone 12.jpg';
import iphone13 from '../images/iphone 13.jpg';
import s21 from '../images/samsung s21.jpg';

export default class Cards extends Component {
  constructor() {
    super();
    this.state = {
      phoneData: [
        { id: 1, image: iphone11, name: 'Iphone 11', cost: '500 $' },
        { id: 2, image: iphone12, name: 'Iphone 12', cost: '700 $' },
        { id: 3, image: iphone13, name: 'Iphone 13', cost: '900 $' },
        { id: 4, image: s21, name: 'Samsung Galaxy S21', cost: '1000 $' },
      ],
    };
  }
  render() {
    return (
      <div className={styles.container}>
        {this.state.phoneData.map((phone) => (
          <Card
            key={phone.id}
            image={phone.image}
            name={phone.name}
            cost={phone.cost}
          />
        ))}
      </div>
    );
  }
}
