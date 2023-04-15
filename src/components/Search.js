import React, { Component } from 'react'
import styles from './Search.module.css'
export default class Search extends Component {
  render() {
    return (
      <div className={styles.container}>
        <p>Search What you Want</p>
        <input placeholder='Search...' />
      </div>
    )
  }
}
