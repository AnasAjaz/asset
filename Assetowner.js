import React from 'react';
import './Assetowner.css';

  const Assetowner = () => {
               return(
                   <div className="yy">

<h3>ASSET OWNERSHIP</h3>

<div>

    

    <label htmlfor="uacc">User Account Address</label>
    <input type="text" name="uacc" placeholder="Enetr User account number"/>

    <label htmlfor="uid">User ID</label>
    <input type="text" name="uid" placeholder="Enetr User ID"/>



    
    <label htmlfor="assetid">Asset ID</label>
    <input type="text" name="pt" placeholder="ASSET ID"/>


    <label htmlfor="assettype">Asset Type</label>
    <input type="text" name="assettype"/>
    <br/>
    
    <label htmlfor="model">MODEL</label>
    <input type="text" name="model" placeholder="MODEL"/>

    <label htmlfor="source">Source</label>
    <input type="text" name="src"placeholder="Source"/>

    <label htmlfor="date">DATE</label>
    <input type="date" name="date"/>

<br/>
<br/>
    <label htmlfor="unit">UNIT</label>
    <input type="text" name="unit"/>

    


    <input type="submit" value="Submit"/>
    <br/>
    <br/>
    <input type="reset"value="RESET"/>
    </div>
</div>
    );
    }



export default Assetowner;