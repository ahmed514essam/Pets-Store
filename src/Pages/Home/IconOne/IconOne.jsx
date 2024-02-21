import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheck }  from '@fortawesome/free-solid-svg-icons';
import  styles  from "../Home.module.css";
export default function IconOne() {
  return (
    <div className={styles.containerico}>
          <div className={styles.iconaya}>
          <FontAwesomeIcon className="fs-2" icon={faMoneyCheck} />
          </div>
          <div className={styles.readicoy}>
            الدفع متاح كاش او فيزا او اونلاين
          </div>
        </div>
  )
}
