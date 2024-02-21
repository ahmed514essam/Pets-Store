import React, { useEffect, useState } from 'react'
import style from "../Account.module.css"
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
export default function SignIn({setDisplay}) {

const navigate = useNavigate();

  const [userData, setUserData]= useState(null);

  useEffect(()=> {
    const storedUserData = localStorage.getItem('userData');

  
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
}, [])


const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');



const handleLogin = () => {
  
  if (email === userData.email && password === userData.password) {
   
    localStorage.setItem('isLoggedIn', true);
   
    localStorage.setItem('email', email);

    // navigate("/My Account")
    setDisplay(true)

  } else {
   
    setError('Email or Password incorrect');
  }
};


  return (
    <>
    <div className={style.allSign}>
   
    <h1 >Sign Up</h1>
        <form className={style.oneemail} onSubmit={(e) => { e.preventDefault(); handleLogin(); }} novalidate>
  <div className={style.divsign}>
    <label for="validationCustom01" className="form-label">Email</label>
    <input type="text" className={style.emailsign} value={email} onChange={(e) => setEmail(e.target.value)}  required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className={style.divsign}>
    <label for="validationCustom02" className="form-label">Password</label>
    <input type="password" className={style.passsign} value={password} onChange={(e) => setPassword(e.target.value)}  required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
 
  
 <br/>


    <button class="btn btn-primary" type="submit" >Sign Up</button>
 
</form>
  {error && <p>{error}</p>}
</div>
    </>
  )
}
