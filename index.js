/* eslint-disable import/first */
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { Route , Link , BrowserRouter} from 'react-router-dom';
import Home from './Home/Home';
import It from './itmenu/It';
import Login from './entry/Login';
import Register from './register/Register';
import Adduser from './adduser/Adduser';
import Assetowner from './Assetowner/Assetowner';
import Marking from './Marking/Marking';
import Return from './Return/Return';
import Request from './Request/Request';
import Viewassigned from './viewassigned/viewassigned';
import Viewunassign from './viewunassign/viewunassign';
import Indiuser from './indiuser/indiuser';
import * as serviceWorker from './serviceWorker';
import about from './about/about';
const index = (
   <BrowserRouter>
  <div>
  
      <Route exact path ="/" component={Home}/>

      <Route path ="/It" component={It}/>
      <Route path ="/login" component={Login}/>
      <Route path ="/register" component={Register}/>
      <Route path="/adduser" component={Adduser}/>
      <Route path="/about" component={about}/>
      <Route path="/assetowner" component={Assetowner}/>
      <Route path="/marking" component={Marking}/>
      <Route path="/return" component={Return}/>
      <Route path="/request" component={Request}/>
      <Route path="/viewassigned" component={Viewassigned}/>
      <Route path="/viewunassign" component={Viewunassign}/>
      <Route path="/indiuser" component={Indiuser}/>
     

  </div>
</BrowserRouter>
)

ReactDOM.render(index, document.getElementById('root'));
 serviceWorker.unregister();

 export default index;