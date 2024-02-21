import React, { useState } from 'react'
import MyAcc from '../MyAcc/MyAcc';
import AccountPage from '../AccountPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



export default function ProfLog() {


const [display , setDisplay] = useState(false);







  return (
    <>
{display ? (


<MyAcc setDisplay={setDisplay}/>

):  

<AccountPage setDisplay={setDisplay}/>

}








    </>
  )
}
