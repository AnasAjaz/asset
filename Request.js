import React from 'react';
import './Request.css';

  const Request = () => {
               return(
                   <div className="yy">

<h3>ASSET REQUEST</h3>

<div>
       

    <label htmlfor="assettype">Asset Type</label>
    <select name="assettype">
        <option value="ppe">PPE(Property,Plant and Equipment)</option>
        <option value="land">Land</option>
        <option value="building">Building</option>
        <option value="vehicle">Vehicle</option>
        <option value="furniture">Furniture</option>
        <option value="patents">Patents</option>
        <option value="equipment">Equipment</option>
      </select>
    <br/>
    
    <label htmlfor="Assetname">ASSET NAME</label>
    <input type="text" name="model" placeholder="MODEL"/>
    <br/>

    <label htmlfor="unit">UNIT</label>
    <input type="text" name="unit" placeholder="ASSIGNED DATE"/>
    <br/>

    <label htmlfor="date">REQUEST DATE</label>
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



export default Request;