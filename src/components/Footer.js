import React, { Component } from 'react'
import styles from './Footer.module.css'
export default class Footer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h3>A making of Kianush Abedi</h3>
        <p>&copy; All Rights Recieved 2023</p>
      </div>
    )
  }
}
