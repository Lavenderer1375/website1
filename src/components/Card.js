import React, { Component } from 'react';
import styles from './Card.module.css';
import upArrow from '../images/arrow-up-svgrepo-com.svg';
import downArrow from '../images/arrow-down-svgrepo-com.svg';

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  upHandler = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  downHandler = () => {
    if (this.state.counter >= 1) {
      this.setState((prevState) => ({
        counter: prevState.counter - 1,
      }));
    }
  };
  render() {
    const { image, name, cost } = this.props;
    const { counter } = this.state;
    return (
      <div className={styles.container}>
        <img src={image} alt="phone11" />
        <h3>{name}</h3>
        <p>{cost} {counter ? `* ${counter} = ${counter * Number(cost.split(" ")[0])} $` : ""}</p>

        <div className={styles.counter}>
          <img src={upArrow} alt="arrowUp" onClick={this.upHandler} />
          <span>{counter}</span>
          <img className={!counter && styles.deactive} src={downArrow} alt="arrowDn" onClick={this.downHandler} />
        </div>
      </div>
    );
  }
}
