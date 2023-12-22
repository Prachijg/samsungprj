import React from 'react'
import reg from './registration';
import persona from '../components/persona.png';
import Logo from '../components/Prism';
export default function login() {
  return (
    <div>
<Logo/>
  
    <div className='logindiv'>
      <div className='card'>
        <h1>Login</h1>
        
        <form className='cardform'>
        <img src={persona}></img><br/>
        <input type='email' name='email' placeholder='email'></input><br></br>
        <input type='password' name='password' placeholder='password'></input>
        <button type='submit' name='submit'> Login </button>
        </form>
        <a href='./registration'>Register Now</a>
      </div>

    </div>
    </div>
  )
}
