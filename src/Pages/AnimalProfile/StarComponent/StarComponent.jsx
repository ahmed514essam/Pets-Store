import React from 'react'
import styles from "../Profile.module.css"

export default function StarComponent() {
  return (
    <div className={styles.stars}>
    <ul>
  
    <li>
    <img className={styles.starimges}  src="/stars.png"/>
    </li>
    <li>
    <img className={styles.starimges}  src="/stars.png"/>
    </li>
    <li>
    <img className={styles.starimges}  src="/stars.png"/>
    </li>
    <li>
    <img className={styles.starimges}  src="/stars.png"/>
    </li>
    <li>
    <img className={styles.starimges}  src="/stars.png"/>
    </li>
    </ul>
  </div>
  )
}
