import React from 'react';
import './Home.css';
import { Url } from 'url';
import {Link} from 'react-router-dom';

  const Home = () => {
               return(
  
                <div className="containerr">
<ul>
  <li><Link to="/" >Home</Link></li>
  <li><Link to="/login" >Login</Link></li>
  
  <li><Link to="/about" >About</Link></li>
  
  
 
 {/* <li><Link to="/return" >Return</Link></li>
 } <li><Link to="/request" >Request new Asset</Link></li>*/}
 
</ul>
<nav role='navigation'>
  <div id="menuToggle">
<input type="checkbox" />
<span></span>
    <span></span>
    <span></span>
<ul id="menu">
<li><Link to="/it" >it DEPARTMENT</Link></li>
{/*<li><Link to="/" >user</Link></li>*/}

      
    </ul>
  </div>
</nav>



<div className="dd">
   <img src={require("./images/asset3.jpg")}width="1000x" height="500px"/>
   
</div>
<div className="ff">
WELCOME TO DEPARTMENT... PLEASE CHOOSE YOUR OPTION

</div>
</div>
               );
  }
  export default Home;