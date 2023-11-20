import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>

    <div className='foot'>

      <div><span style={{color:'blue'}}>W</span><span style={{color:'violet'}}>e</span>
        <span style={{color:'violet'}}>a</span><span style={{color:'pink'}}>l</span>
        <span style={{color:'pink'}}>t</span><span style={{color:'red'}}>h</span><br />
        <span style={{color:'blue'}}>p</span><span style={{color:'blue'}}>r</span>
        <span style={{color:'violet'}}>o</span><span style={{color:'violet'}}>p</span>
        <span style={{color:'pink'}}>e</span><span style={{color:'pink'}}>r</span>
        <span style={{color:'orange'}}>t</span><span style={{color:'orange'}}>i</span>
        <span style={{color:'purple'}}>e</span><span style={{color:'puple'}}>s</span></div>

      <div className='first'>
        <ul>
          <a href="">HOME</a>
          <br />
          <a href="">PROFILE</a><br />
          <a href="">REPORTS</a><br />
          <a href="">INSIGHTS</a>
          
        </ul>
      </div>

      <div className='second'>
        <ul>
          <a href="">INFORMATION CENTER</a><br />
          <a href="">TERMS&CONDITION</a><br />
          <a href="">PRIVACY POLICY</a>
        
        </ul>
      </div>
    </div>


     </>
  )
}

export default Footer