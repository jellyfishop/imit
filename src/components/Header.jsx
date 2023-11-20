import React from 'react'
import '../components/Header.css'
import Button from 'react-bootstrap/Button';

export default function Header() {
  return (
 <>
      <header>
      <nav>
        <p><span style={{color:'blue'}}>W</span><span style={{color:'violet'}}>e</span>
        <span style={{color:'violet'}}>a</span><span style={{color:'pink'}}>l</span>
        <span style={{color:'pink'}}>t</span><span style={{color:'red'}}>h</span><br />
        <span style={{color:'blue'}}>p</span><span style={{color:'blue'}}>r</span>
        <span style={{color:'violet'}}>o</span><span style={{color:'violet'}}>p</span>
        <span style={{color:'pink'}}>e</span><span style={{color:'pink'}}>r</span>
        <span style={{color:'orange'}}>t</span><span style={{color:'orange'}}>i</span>
        <span style={{color:'purple'}}>e</span><span style={{color:'puple'}}>s</span>
        

         </p>
        
        <ul>
          <li><a href="">HOME</a></li>
          <li><a href="">PROFILE</a></li>
          <li><a href="">REPORTS</a></li>
          <li><a href="">INSIGHTS</a></li>


        </ul>
             
        
      </nav>
      <Button variant="outline-secondary">LOGIN</Button>{' '}
        <Button variant="outline-secondary">GETSTARTED</Button>{' '} 
      </header>
      
      </>
  
  )
}
