import React from 'react'
import backgnd from '../components/hstain.png'
import upload from '../components/upload.png'
import download from '../components/download.png'
import play from '../components/play.png'
import Logo from '../components/Prism'
export default function use() {
  return (
    <div>
      <Logo/>
    <div className='maindivuse'>
     
      <h1>How Do I Use It?</h1>
      <div className='contentdiv'>
        <div className='sections3'>
          <div className='sections3img'>
          <img className='backgnd' src={backgnd}></img>
          <img className='icons' src={upload}></img>
           
        </div>
        <div className='paragraph'>
        < h3>1.Upload an image</h3>
        <p>Upload the image<br/> from your system or <br/>simple drag and drop</p>
        </div>
        </div>
        <div className='sections3'>
          <div className='sections3img'>
          <img className='backgnd' src={backgnd}></img>
          <img className='icons' src={play}></img>
           
        </div>
        <div className='paragraph'>
         <h3>2.Run the model</h3>
         <p>Click on the "Run "<br/>button to   <br/>run the model</p>
        </div>
        </div>
        <div className='sections3'>
          <div className='sections3img'>
          <img className='backgnd' src={backgnd}></img>
          <img className='icons' src={download}></img>
           
        </div>
        <div className='paragraph'>
         <h3>3.The output is produced</h3>
        <p>You can download<br/> the video by clicking <br/>the download button.</p>
        </div>
        </div>
      </div>
    </div></div>
  )
}
