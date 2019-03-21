import React from 'react';
import './It.css';
import { Url } from 'url';
import {Link} from 'react-router-dom';

  const It = () => {
               return(
  
                <div className="containerr">
<ul>
  <li><Link to="/" >Home</Link></li>
  <li><Link to="/login" >Login</Link></li>
  
  <li><Link to="/about" >About</Link></li>
  
  {/*<li><Link to="/request" >Request new Asset</Link></li>*/}
 
</ul>
<nav role='navigation'>
  <div id="menuToggle">
<input type="checkbox" />
<span></span>
    <span></span>
    <span></span>
<ul id="menu">
<li><Link to="/register" >Add Asset</Link></li>
<li><Link to="/adduser" >Add User</Link></li>
<li><Link to="/assetowner" >Asset ownership</Link></li>
<li><Link to="/marking" >mark asset status</Link></li>
<li><Link to="/return" >Return Asset</Link></li>
<li><Link to="/viewassigned" >View assigned asset details</Link></li>
<li><Link to="/viewunassign" >View unassigned asset details</Link></li>
<li><Link to="/indiuser" >View individual user details</Link></li>
      
    </ul>
  </div>
</nav>



<div className="dd">
   <img src={require("./images/asset3.jpg")}width="1000x" height="500px"/>
   
</div>
<div className="ff">
WELCOME TO IT DEPARTMENT... PLEASE CHOOSE YOUR OPTION

</div>
</div>
               );
  }
  export default It;