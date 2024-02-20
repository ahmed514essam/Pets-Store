import React, { useState } from 'react'
import styles from "./Account.module.css"
import SignIn from './SignIn/SignIn'
import { Link } from 'react-router-dom'
import LogIn from './LoginIn/LogIn'
export default function AccountPage({setDisplay}) {


const [ acc , setAcc ] = useState(true)


const hadleNewAcc = () => {

    setAcc(false)
}
const handleSigUp = () => {
    setAcc(true)
}
  return (
    <>
   {acc ? <div>
        <SignIn setDisplay={setDisplay}/>


        <div className={styles.forget}>
            <Link className={styles.linkforgetpass}>Forget Password</Link>
            <Link onClick={hadleNewAcc} className={styles.linknew}>New Account</Link>
        </div>
    </div> : 
    <div>
<LogIn setDisplay={setDisplay}/>

<div className={styles.forget}>
           
            <Link onClick={handleSigUp} className={styles.linknew}>Already have Accout</Link>
        </div>
    </div> 
   
   } 
    </>
 
  )
}
