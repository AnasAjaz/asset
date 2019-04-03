import React,{Component} from 'react';
import axios from 'axios';
import './register.css';


class Newasset extends Component{


    state={
        addasset:{ 
          aid:"",
          assettype:"",
          passet:"",
          manu:"",
          war:"",
          unit:"",
          model:"",
          date:"",
          iemi:"",
          des:"",
          status:0
            },
        addassets:[]
      }

      onSubmitHandler= () => {
      //debugger;
      axios.post(`http://localhost:8080/api/addasset`,this.state.addasset)
      .then(response => { 
      alert("Registered successfully!!!");
      });
      }
      onChangeHandler= (event) =>{
          let addasset={...this.state.addasset};
          addasset.aid=event.target.value; 
          this.setState({
                addasset:addasset
          });
      }
      onChangeHandler1= (event) =>{
        let addasset={...this.state.addasset};
        addasset.assettype=event.target.value; 
        this.setState({
              addasset:addasset
        });
    }
    onChangeHandler2= (event) =>{
        let addasset={...this.state.addasset};
        addasset.passet=event.target.value; 
        this.setState({
              addasset:addasset
        });
    }
    onChangeHandler3= (event) =>{
        let addasset={...this.state.addasset};
        addasset.manu=event.target.value; 
        this.setState({
              addasset:addasset
        });
    }

onChangeHandler4= (event) =>{
          let addasset={...this.state.addasset};
          addasset.war=event.target.value; 
          this.setState({
                addasset:addasset
          });
      }

      onChangeHandler5= (event) =>{
        let addasset={...this.state.addasset};
        addasset.unit=event.target.value; 
        this.setState({
              addasset:addasset
        });
    }
    onChangeHandler6= (event) =>{
        let addasset={...this.state.addasset};
        addasset.model=event.target.value; 
        this.setState({
              addasset:addasset
        });
    }
    onChangeHandler7= (event) =>{
        let addasset={...this.state.addasset};
        addasset.date=event.target.value; 
        this.setState({
              addasset:addasset
        });
    }

    onChangeHandler8= (event) =>{
        let addasset={...this.state.addasset};
        addasset.iemi=event.target.value; 
        this.setState({
              addasset:addasset
        });
    }

    onChangeHandler9= (event) =>{
        let addasset={...this.state.addasset};
        addasset.des=event.target.value; 
        this.setState({
              addasset:addasset
        });
    }



      componentDidMount= () =>{
            axios.get(`http://localhost:8080/api/addasset`)
                .then(response => {
                    console.log("addassets", response) 
                    this.setState({
                       addassets:response.data.data
                     });
            });
       }


render=() =>{

               return(

                <div className="yy">

                <h3>ADD NEW ASSET</h3>
                  
                      <label >Asset ID</label>
                     <input type="text" name="aid" onChange={this.onChangeHandler} value={this.state.addasset.aid} placeholder="Your AssetID.."/>
                
                     <label >Asset TYPE</label>
                    <select name="assettype" onChange={this.onChangeHandler1} value={this.state.addasset.assettype}>
                       <option value="ppe">PPE(Property,Plant and Equipment)</option>
                        <option value="land">Land</option>
                        <option value="building">Building</option>
                        <option value="vehicle">Vehicle</option>
                        <option value="furniture">Furniture</option>
                        <option value="patents">Patents</option>
                        <option value="equipment">Equipment</option>
                    </select>
                
                    <label htmlfor="passet">Parent Asset</label>
                    <input type="text" name="passet" onChange={this.onChangeHandler2} value={this.state.addasset.passet} placeholder="Enter Parent asset"/>

                    <label htmlfor="manu">Manufacturer</label>
                    <input type="text" name="manu" onChange={this.onChangeHandler3} value={this.state.addasset.manu} placeholder=" Mnaufacturer"/>

                    <label htmlfor="war">Warrenty Number</label>
                    <input type="text" name="war" onChange={this.onChangeHandler4} value={this.state.addasset.war} placeholder=" Enter Warrenty number"/>

                    <label htmlfor="unit">Unit</label>
                    <input type="text" name="unit" onChange={this.onChangeHandler5} value={this.state.addasset.unit} placeholder=" Enter Unit"/>

                    <label htmlfor="unit">Model</label>
                    <input type="text" name="model" onChange={this.onChangeHandler6} value={this.state.addasset.model} placeholder=" Enter Model"/>

                    <label htmlfor="date">Date</label>
                    <input type="date" name="date" onChange={this.onChangeHandler7} value={this.state.addasset.date} />

                    <br/>

                    <label htmlfor="imei">IMEI number</label>
                    <input type="text" name="iemi" onChange={this.onChangeHandler8} value={this.state.addasset.iemi} placeholder=" Enter IEMI number"/>

                    <label htmlfor="des">Description</label>

                    <textarea cols="20" rows="15" onChange={this.onChangeHandler9} value={this.state.addasset.des} placeholder="About device" name="des"></textarea>
                                                
                    <input type="submit" value="ADD" onClick={this.onSubmitHandler} />
                    <br/>
                    <br/>
                    <input type="reset"value="RESET"/>
                    </div>
  
                
               
        );
    
            }
            }
            
export default Newasset;