import React from 'react'
import persona from '../components/persona.png'
import Logo from '../components/Prism'
export default function registration() {
  return (
    <div style={{backgroundColor:'#96c5e6'}}>
      <Logo/>
      <div className='regdiv'>
      <div className='card'>
        <h1>Register</h1>
        <form className='cardform'>
        <img src={persona}></img>
        <input type='text' name='username' placeholder='username'></input>
        <input type='email' name='email' placeholder='email'></input>
        <input type='password' name='password' placeholder='password'></input>
        <button type='submit' name='submit'> Register</button>
        </form>
        <a href='./login'>Already have an account</a>
      </div>
</div>
   
    </div>
  )
}
