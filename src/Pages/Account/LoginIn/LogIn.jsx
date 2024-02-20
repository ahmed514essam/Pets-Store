import React, { useState } from 'react'
import style from "../Account.module.css"
import { useNavigate } from 'react-router-dom'
export default function LogIn({setDisplay}) {


const [ fname , setFname] = useState('');
const [lname , setLname] = useState('');
const [email , setEmail] = useState('');
const [password , setPassword] = useState('');

const navigate = useNavigate();

const handleLogin = () => {

if (fname !='' || lname != '' || email != '' || password != '') {

  // navigate("/My Account")
setDisplay(true)
}else {

setEmail("please Enter Your Email")

}


  const userData = {

    fname: fname,
    lname: lname,
    email: email,
    password: password,    
  };

  localStorage.setItem('userData', JSON.stringify(userData));

};






  return (
    <>
    <div className={style.allSigne}>
    <h1 >Create Account</h1>


        <form className={style.oneemaile} novalidate>


  <div className={style.divsigne}>
    <label  className="form-label">First Name</label>
    <input type="text" className={style.emailsigne} value={fname} onChange={(e) => setFname(e.target.value)}  required />
 
  </div>
  <div className={style.divsigne}>
    <label  className="form-label">Last Name</label>
    <input type="text" className={style.passsigne} value={lname} onChange={(e) => setLname(e.target.value)}  />
 
  </div>
 
  <div className={style.divsigne}>
    <label className="form-label">Email</label>
    <input type="email" className={style.passsigne} value={email} onChange={(e) => setEmail(e.target.value)}  required />
  
  </div>

  <div className={style.divsigne}>
    <label  className="form-label">Password</label>
    <input type="password" className={style.passsigne} value={password} onChange={(e) => setPassword(e.target.value)}  required />
   
  </div>


  <div className={style.divsigne}>
    <label  className="form-label">Confirm Password</label>
    <input type="password" className={style.passsigne}    />
  
  </div>

  <div className={style.divsigne}>
    <label  className="form-label">Phone</label>
    <input type="number" className={style.passsigne}    />
    
  </div>
 


    <button onClick={handleLogin} class="btn btn-primary" type="submit">Log In</button>
 
</form>
</div>
    </>
  )
}
