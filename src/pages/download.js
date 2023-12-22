import React from 'react';
import vid from '../components/vid.gif';
import download from '../components/downloadcream.png';
import Logo from '../components/Prism';

export default function Download() {
  return (
    <div className='uploaddiv'>
    <Logo/>
     <div className='redbox'>
       <img className='runimg' src={vid}></img>
       <button className='runbtn'><img className='runlogo' src={download}></img><h6>Download</h6></button>        
     </div>
   </div>
  )
}
