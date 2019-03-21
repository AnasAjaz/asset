import React from 'react';
import './Marking.css';

  const Marking = () => {
               return(
                   <div className="yy">

<h3>ASSET STATUS</h3>

<div>

    



    
    <label htmlfor="assetid">Asset ID</label>
    <input type="text" name="pt" placeholder="ASSET ID"/>


    <label htmlfor="assettype">Asset Type</label>
    <input type="text" name="assettype"/>
    <br/>
    
    <label htmlfor="model">MODEL</label>
    <input type="text" name="model" placeholder="MODEL"/>
    <br/>
    <br/>
    
    <label htmlfor="status">STATUS</label>
    <select  name="status">
      <option value="damage">Damage</option>
      <option value="repairing">Repairing</option>
      <option value="assign">Assign</option>
      <option value="notassign">Not Assign</option>
    </select>

<br/>
    <input type="submit" value="Submit"/>
    <br/>
    <br/>
    <input type="reset"value="RESET"/>
    </div>
</div>
    );
    }



export default Marking;