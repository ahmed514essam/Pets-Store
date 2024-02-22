import React, { useEffect, useState } from 'react'
import "./MyAcc.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
export default function MyAcc({setDisplay}) {
    const [userData, setUserData]= useState(null);
const [alertlog , setAlertlog] = useState(false);
const navigate = useNavigate();
    useEffect(()=> {
        const storedUserData = localStorage.getItem('userData');

      
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
        }
    }, [])


const btnremoval = () => {
  setAlertlog(true)
}



const btnlogOut =() => {
navigate("/Accout");

}

    const removeAcc = () => {
      localStorage.removeItem('userData');
      // navigate("/Account")
      setDisplay(false)
      setAlertlog(false)
    }


const cancelRemoveAcc = () => {
  setAlertlog(false)
}

  return (
    <>

<nav>

</nav>


<section>
{userData ? (
    <div>
        <h1>Hello {userData.fname}</h1><span>How are You</span>
       
       <p className="paraAcc">We are pleased with your visit. Now you have the opportunity to buy whatever you want, my dear</p>
<h2>Your Info</h2>
<p> Name : <span className="fst-italic">{userData.fname} {userData.lname}</span></p>
        <p>Email : {userData.email}</p>
    </div>
 ) : <div>
    <p>No Users</p>
 </div>}

<div className="btnAcc d-flex m-2" >
<button onClick={btnremoval} className="bg-danger text-light p-2 fw-bold border-0 rounded">Remove Account</button>
<button onClick={btnlogOut} className="bg-primary text-white p-2 fw-bolder border-0 rounded">Log Out</button>
</div>

</section>

{alertlog ? (
    
    
  <div className="overlaye">
    <div className="alerte">
      <h3>Make sure to delete your account</h3>
      <div className="btnalerte">
        <button onClick={removeAcc}>Remove</button>
        <button onClick={cancelRemoveAcc}>Cancel</button>
      </div>
    </div>
  </div>
) : null }


    </>
  )
}
