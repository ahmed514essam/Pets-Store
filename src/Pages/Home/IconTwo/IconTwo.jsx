import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck }  from '@fortawesome/free-solid-svg-icons';
import styles from "../Home.module.css"
export default function IconTwo() {
  return (
    <div className={styles.containerico}>
    <div className={styles.iconaya}>
    <FontAwesomeIcon className="fs-2" icon={faTruck} />
    </div>
    <div className={styles.readicoy}>توصيل نفس اليوم</div>
  </div>
  )
}
