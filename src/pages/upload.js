import React from 'react'
import Logo from '../components/Prism'
import upload from '../components/uploadcream.png';

export default function Upload() {
  return (
    <div className='uploaddiv'>
      <Logo/>
      <div className='redbox'>
        <h1 className='draganddrop'>Drag and drop</h1>
        <h1 className='draganddrop'>down the image here</h1>
        <button className='uploadbtn'><img className='uploadlogo' src={upload}></img><h6>Upload</h6></button>        
      </div>
    </div>
  )
}
