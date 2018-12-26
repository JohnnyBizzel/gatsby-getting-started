import React from 'react'
import { Link } from 'gatsby'
import styles from './header.module.scss'

export default () => (

   <header className={styles.container}>

        <div className={styles.row}>
          <Link to='/'>My Gatsby blog</Link>
        </div>

        <div className={styles.row}>
          <Link to='/'>ARTICLES</Link>| 
          <Link to='/about'>ABOUT</Link>
        </div>
        
   </header>

)