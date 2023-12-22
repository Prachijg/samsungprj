import React from 'react'
import stain from '../components/stain1.png'
import Logo from '../components/Prism'
import image from '../components/image.png'
import vid from '../components/vid.gif'
export default function example() {
  return (
    <div className='examplediv'>
      <div className='left-side'>
        <Logo/>
        <br/>
        <p className='text-head'>Cinemagen</p>
       
         <p className='para'>Our pretrained model takes an image as input<br></br>
        and generates a video as output</p>
       
        <p className='example'>Look at the example </p><br/>
        <button className='getstarted'>Get Started</button>
        
      </div>
      <div className='right-side'>
        <img className='stain' src={stain}></img>
        <img className='image' src={image}></img>
        <img className='vid'src={vid}>
            </img>      </div>
    </div>
  )
}
