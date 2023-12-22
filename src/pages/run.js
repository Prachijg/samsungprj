import React from 'react'
import Logo from '../components/Prism'
import play from '../components/playcream.png';
import image from '../components/image.png';
export default function run() {
  return (
    <div className='uploaddiv'>
   <Logo/>
    <div className='redbox'>
      <img className='runimg' src={image}></img>
      <button className='runbtn'><img className='runlogo' src={play}></img><h6>Run</h6></button>        
    </div>
  </div>
  )
}
