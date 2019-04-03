import React from 'react';
import './gallery.css';
import { Url } from 'url';
import {Link} from 'react-router-dom';

  const Gallery = () => {
               return(
  
                <div className="containerr">
<ul>
  <li><Link to="/" >Home</Link></li>
  <li><Link to="/login" >Login</Link></li>
  
  <li><Link to="/about" >About</Link></li>
  
  
 
 {/* <li><Link to="/return" >Return</Link></li>
 } <li><Link to="/request" >Request new Asset</Link></li>*/}
 
</ul>
{/*<nav role='navigation'>
  <div id="menuToggle">
<input type="checkbox" />
<span></span>
    <span></span>
    <span></span>
<ul id="menu">
<li><Link to="/it" >it DEPARTMENT</Link></li>
<li><Link to="/user" >user</Link></li>

      
    </ul>
  </div>
</nav>*/}



<div className="dd">
   <img src={require("./images/gallery3.jpeg")}width="500x" height="250px" />
   <img src={require("./images/gallery2.jpg")}width="500x" height="250px"/>
   <img src={require("./images/gallery5.png")}width="500x" height="250px"/>
   <img src={require("./images/assettkneg.png")}width="500x" height="250px"/>
   <img src={require("./images/asset1.jpg")}width="500x" height="250px"/>
   <img src={require("./images/gallery1.jpg")}width="500x" height="250px"/>
   <img src={require("./images/gallery4.jpeg")}width="500x" height="250px"/>

   
</div>
<div className="ff">
WELCOME TO GALLERY ................................

</div>
</div>
               );
  }
  export default Gallery;