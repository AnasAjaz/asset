import React,{Component} from 'react';
import Axios from 'axios';
import './display.css';
class Viewasset extends Component{
state={
newasset:{
},
newassets:[]
}
componentDidMount= () =>{
Axios.get(`http://localhost:8080/api/addasset`)
.then(response => {
console.log("newassets", response) 
this.setState({
newassets:response.data.data
})
});
}
render=() =>{
return(


<div className="labf">
<table border="1" width="400" height="400">
<tr>

<th>ASSET ID </th>
<th>ASSET TYPE</th>
</tr>
<tbody>
{this.state.newassets.map(newasset =>(
<tr>
<td> {newasset.aid}</td> 
<td>{newasset.assettype}</td> </tr>
))} 
</tbody>
</table>
</div>
);

}
}

export default Viewasset;



