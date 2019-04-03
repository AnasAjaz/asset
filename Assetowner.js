import React,{Component} from 'react';
import axios from 'axios';
import './Assetowner.css';

class Assetowner extends Component{
    state={
        assetowner:{ 
          uacc:"",
          uid:"",
          aid:"",
          src:"",
          date:"",
          unit:""
          
            },
        assetowners:[]
      }

      componentDidMount= () =>{
        axios.get('http://localhost:8080/api/assetowner')
            .then(response => {
                console.log("assetowners", response) 
                this.setState({
                   assetowners:response.data.data
                 });
        });
    }

      onSubmitHandler= () => {
      //debugger;
      axios.post(`http://localhost:8080/api/Assetowner`,this.state.assetowner)
      .then(response => { 
      alert("Registered successfully!!!");
      });
      }
      onChangeHandler= (event) =>{
          let assetowner={...this.state.assetowner};
          assetowner.uacc=event.target.value; 
          this.setState({
                assetowner:assetowner
          });
      }
     
      onChangeHandler1= (event) =>{
        let assetowner ={...this.state.assetowner};
        assetowner.uid=event.target.value; 
        this.setState({
              assetowner:assetowner
        });
    }

    onChangeHandler2= (event) =>{
        let assetowner ={...this.state.assetowner};
        assetowner.aid=event.target.value; 
        this.setState({
              assetowner:assetowner
        });
    }
   
    onChangeHandler3= (event) =>{
        let assetowner ={...this.state.assetowner};
        assetowner.src=event.target.value; 
        this.setState({
              assetowner:assetowner
        });
    }

    onChangeHandler4= (event) =>{
        let assetowner ={...this.state.assetowner};
        assetowner.date=event.target.value; 
        this.setState({
              assetowner:assetowner
        });
    }
    onChangeHandler5= (event) =>{
        let assetowner ={...this.state.assetowner};
        assetowner.unit=event.target.value; 
        this.setState({
              assetowner:assetowner
        });
    }




    render() {  
        return(
                   <div className="yy">

                 <h3>ASSET OWNERSHIP</h3>

                <div>

    

    <label htmlfor="uacc">User Account Address</label>
    <input type="text" name="uacc"  onChange={this.onChangeHandler} value={this.state.assetowner.uacc} placeholder="Enetr User account number"/>

    <label htmlfor="uid">User ID</label>
    <input type="text" name="uid"  onChange={this.onChangeHandler1} value={this.state.assetowner.uid} placeholder="Enetr User ID"/>



    
    <label htmlfor="assetid">Asset ID</label>
    <input type="text" name="aid"  onChange={this.onChangeHandler2} value={this.state.assetowner.aid} placeholder="ASSET ID"/>


   
    <label htmlfor="source">Source</label>
    <input type="text" name="src"  onChange={this.onChangeHandler3} value={this.state.assetowner.src} placeholder="Source"/>

    <label htmlfor="date">DATE</label>
    <input type="date" name="date"  onChange={this.onChangeHandler4} value={this.state.assetowner.date}/>

<br/>
<br/>
    <label htmlfor="unit">UNIT</label>
    <input type="text" name="unit"  onChange={this.onChangeHandler5} value={this.state.assetowner.unit }/>

    


    <input type="submit" value="Submit" onClick={this.onSubmitHandler}/>
    <br/>
    <br/>
    <input type="reset"value="RESET"/>
    </div>
</div>
    );
    }}


export default Assetowner;