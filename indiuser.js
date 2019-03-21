import React from 'react';
import './indiuser.css';

const indiuser = () => {
    return(
        <div className="fogg">
 
  <h3>FIND USER DETAILS</h3>
      
  <div className="bbb">

      <table>

        <tr>
          <th>
            ENTER USER ID
          </th>
          <td>
            <input type="text" name="user"/>
          </td>
        
        </tr>
        
        <tr>
          
            <input type="submit" name="submit" value='FIND'/>
         
                 </tr>
      

      </table>
      


      </div>






</div>
);
}



export default indiuser;