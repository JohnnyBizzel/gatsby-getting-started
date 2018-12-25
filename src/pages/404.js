import React from "react"
import styles from './404.module.scss';

export default () => (
  <div className={styles.content}>
    <h1 className={styles.header}>Page not found</h1>
    <p className={styles.errorMessage}>
      The page you are looking for does not exists.
    </p>
  </div>
)
