import React from 'react';
import './viewassigned.css';

const viewassigned = () => {
    return(
        <div className="pop">

<h3>VIEW ASSIGNED ASSET</h3>

<div>


<table className="ty" border="5" >
<tr>

    <th>
        ASSET ID
    </th>
    <th>
        ASSET TYPE
    </th>

    <th>
        MANUGFACTURER
    </th>
    <th>
        UNIT
    </th>
    <th>
    MODEL
    </th>
    <th>
        IMEI NUMBER
    </th>
    

</tr>
<td>100</td>
<td>PPE</td>
<td>HP</td>
<td>5</td>
<td>VER 2</td>
<td>8HIL2345</td>

</table>

</div>


</div>
);
}



export default viewassigned;