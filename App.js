import React, { Component } from 'react';
import './App.css';

import Index from './index';
import Adduser from './adduser/Adduser';
{/*import Login from './entry/Login';
import Register from './register/Register';
import It from './itmenu/It';
import logo from './logo.svg';
*/}
class App extends Component {
  render() {
    return (
      <div className="App">

        <Adduser/>
        
      </div>
    );
  }
}

export default App;
