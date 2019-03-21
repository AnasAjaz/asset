import React,{Component} from 'react';
import axios from 'axios';
import './Adduser.css';
import {NavLink} from 'react-router-dom';


class Adduser extends Component{
      state={
        register:{ 
          name:"",
          uacc:"",
          uid:"",
          dept:"",
          pt:"",
          addr:"",
          date:"",
          state:"",
          post:"",
          email:"",
          number:""
            },
        registers:[]
      }

      onSubmitHandler= () => {
      //debugger;
      axios.post(`http://localhost:8080/api/adduser`,this.state.register)
      .then(response => { 
      alert("Registered successfully!!!");
      });
      }
      onChangeHandler= (event) =>{
          let register={...this.state.register};
          register.name=event.target.value; 
          this.setState({
                register:register
          });
      }
      onChangeHandler1= (event) =>{
        let register={...this.state.register};
        register.uacc=event.target.value; 
        this.setState({
              register:register
        });
    }
    onChangeHandler2= (event) =>{
      let register={...this.state.register};
      register.uid=event.target.value; 
      this.setState({
            register:register
      });
  }

  onChangeHandler3= (event) =>{
    let register={...this.state.register};
    register.dept=event.target.value; 
    this.setState({
          register:register
    });
}

onChangeHandler4= (event) =>{
  let register={...this.state.register};
  register.pt=event.target.value; 
  this.setState({
        register:register
  });
}

onChangeHandler5= (event) =>{
  let register={...this.state.register};
  register.addr=event.target.value; 
  this.setState({
        register:register
  });
}

onChangeHandler6= (event) =>{
  let register={...this.state.register};
  register.date=event.target.value; 
  this.setState({
        register:register
  });
}
onChangeHandler7= (event) =>{
  let register={...this.state.register};
  register.state=event.target.value; 
  this.setState({
        register:register
  });
}

onChangeHandler8= (event) =>{
  let register={...this.state.register};
  register.post=event.target.value; 
  this.setState({
        register:register
  });
}

onChangeHandler9= (event) =>{
  let register={...this.state.register};
  register.email=event.target.value; 
  this.setState({
        register:register
  });
}

onChangeHandler10= (event) =>{
  let register={...this.state.register};
  register.number=event.target.value; 
  this.setState({
        register:register
  });
}



      componentDidMount= () =>{
            axios.get(`http://localhost:8080/api/adduser`)
                .then(response => {
                    console.log("registers", response) 
                    this.setState({
                       registers:response.data.data
                     });
            });
       }

      render=() =>{ 
      

               return(
                   <div className="yy">

<h3>ADD USER</h3>

    <label>Full Name</label>
    <input type="text" name="name" onChange={this.onChangeHandler} value={this.state.register.name}
  placeholder="Your name.."/>

    <label>User Account Address</label>
    <input type="text" name="uacc" onChange={this.onChangeHandler1} value={this.state.register.uacc}  placeholder="Enetr User account number"/>

    <label>User ID</label>
    <input type="text" name="uid" onChange={this.onChangeHandler2} value={this.state.register.uid} placeholder="Enetr User ID"/>



    <label>Department</label>
    <select  name="dept" onChange={this.onChangeHandler3} value={this.state.register.state}>
      <option value="Network">Network</option>
      
      <option value="Programming">Developer</option>
      <option value="Test">Testing</option>
    </select>
    <label>Position Title</label>
    <input type="text" name="pt" onChange={this.onChangeHandler4} value={this.state.register.pt} placeholder="Enter Position"/>
<br/>
<br/>
    <hr></hr>
   <h4 className="ll"> PERSONAL INFORMATION</h4>
    <hr></hr>
    <br/>
    <br/>
    <label>Permanent address</label>

    <textarea cols="25" rows="20" onChange={this.onChangeHandler5} value={this.state.register.addr} name="addr"></textarea>

    <label>Date Of Birth</label>
    <input type="date" name="date" onChange={this.onChangeHandler6} value={this.state.register.date}/>
    <br/>
    
    <label>STATE</label>
    <input type="text" name="state" onChange={this.onChangeHandler7} value={this.state.register.state} placeholder="state"/>

    <label>Post Code</label>
    <input type="text" name="post" onChange={this.onChangeHandler8} value={this.state.register.post}  placeholder="Enter post code"/>

    <label>Email</label>
    <input type="text" name="email" onChange={this.onChangeHandler9} value={this.state.register.email} placeholder="Enter Email"/>


    <label >number</label>
    <input type="text" name="number" maxLength="10" onChange={this.onChangeHandler10} value={this.state.register.number} placeholder="Enter number"/>

    

    <input type="submit"  value="Submit"  onClick={this.onSubmitHandler}
/>
    <br/>
    <br/>
    <input type="reset"value="RESET"/>
    </div>

    );
    }


  }
export default Adduser;