import React from 'react';
import './Return.css';

  const Return = () => {
               return(
                   <div className="yy">

<h3>ASSET RETURN</h3>

<div>

        
    <label htmlfor="assetid">Asset ID</label>
    <input type="text" name="aid" placeholder="ASSET ID"/>


    <label htmlfor="assettype">Asset Type</label>
    <input type="text" name="assettype"/>
    <br/>
    
    <label htmlfor="model">MODEL</label>
    <input type="text" name="model" placeholder="MODEL"/>
    <br/>

    <label htmlfor="date">ASSIGNED DATE</label>
    <input type="text" name="model" placeholder="ASSIGNED DATE"/>
    <br/>

    <label htmlfor="rdate">RETURN DATE</label>
    <input type="date"name="rdates"/>
    <br/>

   

<br/>
    <input type="submit" value="Submit"/>
    <br/>
    <br/>
    <input type="reset"value="RESET"/>
    </div>
</div>
    );
    }



export default Return;