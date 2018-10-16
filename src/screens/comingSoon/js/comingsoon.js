import React, { Component } from 'react';
import './../css/comingsoon.css';
import 'jquery';
import $ from 'jquery';
import 'form-serializer';
import validator from 'react-validation';


class ComingSoon extends Component {
  constructor(props){
    super(props);
    this.state={
      register_name:'',
      register_city:'',
      register_email:'',
      registerPhone:'',
      register_profession:'',
      firstNameError: "",
      cityError: "",
      phoneError: "",
      emailError: "",
      isError:"",
      formAlert:"",

    }
    this.handleClick = this.handleClick.bind(this);
  }

    validate = () => {
    this.setState({
      formAlerts:""
    })
    let isError = false;
    const errors = {
      firstNameError: "",
      cityError: "",
      phoneError: "",
      emailError: ""
    };
    let phoneValidation = /^\d{10}$/;

    if (this.state.register_email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = "Invalid email";
    }
    if(this.state.register_phone.length>10||this.state.register_phone.length<10||!phoneValidation.test(this.state.register_phone)){
      isError  = true;
      errors.phoneError = "Invalid Number";
    }
    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

   handleClick=(e)=>{
    e.preventDefault();
    const err = this.validate();
    let {register_email,register_city,register_name,register_profession,register_phone,error} = this.state

    if (!err) {
      // clear form
      this.setState({
      register_name:'',
      register_city:'',
      register_email:'',
      register_phone:'',
      register_profession:'',
      firstNameError: "",
      cityError: "",
      phoneError: "",
      emailError: "",
      formAlert:""
    });    
    
    let $form = $('form')
    let url = 'https://script.google.com/macros/s/AKfycbz5J9fogQMFcasbcEpf7_IyyCu-_O3FmMzKcDpGJ7RNUuqwAbcr/exec'
    $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject(),
        success:function(){
            console.log("submit")
            document.getElementById("formAlerts").style.display="inline";       
        }.bind(this),
        error:function(){
            document.getElementById("formAlerts").style.display="Form was not submitted"
        }.bind(this)
       })
        }

  
  };

    

  
  

  render() {
    return (
      <div className="container" id="main-container">
      <div className="row">
        <div className="col-sm-12 col-md-7" id="left">
          <div className="info1">
          <h1 id="infoTitle">E-Summit 2019</h1>
          <h7>The Annual Entrepreneurial <br />Festival of IIT Roorkee</h7>
          </div>
          <p className="comingsoon">COMING SOON</p>
          <p className="staytuned"><strong>Stay tuned for more updates!</strong></p>
          <p className="staytuned"><strong>and till then, check out our new website</strong></p>
          <button className="e-cellWeb">E-cell Website</button>
          <div className="contacts"><p className="contactUs"><strong>Contact Us</strong></p>
          <p>Rachit Garg:9992929203&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vedant Kumar:7909060873</p>
          </div>
        </div>
        <div className="col-sm-12 col-md-5" id="right">
          <div className="form" id="test-form">
            
            <p><strong>Pre-Register Now</strong><hr className="line"/></p>
            <form name="submit-to-google-sheet">
                <input type="text" minlength="1" name="Name"  className="form-control" id="registerName" placeholder="Name" value={this.state.register_name}  
                onChange={(event)=>{
                  this.setState({
                    register_name:event.target.value
                  })
                }}
                 />
                <input type="number"  name="Phone" maxlength="10" type="tel" className="form-control" placeholder="Phone No." id="registerPhone" data-format="dddddddddd" value={this.state.register_phone}  
                onChange={(event)=>{
                  console.log(this.state.phoneError)
                    this.setState({
                    register_phone: event.target.value
                     })              
                 }}
                required />
                
                <input type="email"  name="Email" className="form-control" value={this.state.register_email} id="registerEmail" placeholder="E-Mail"  
                onChange={(event)=>{
                  console.log(this.state.emailError);

                  this.setState({
                    register_email:event.target.value
                  })

                }
              
}
                required />
                <select className="form-control" name="Profession" id="registerDropDown" value={this.state.register_profession}
                onChange={(event)=>{

                  this.setState({
                    register_profession:event.target.value
                  })
                }}
                >
                <option>Student</option>
                <option>Random1</option>
                <option>Random2</option>
                </select>
                <input name="register_city" name="City" type="text" className="form-control"  value={this.state.register_city} placeholder="City" id="registerCity" 
                onChange={(event)=>{
                  this.setState({
                    register_city:event.target.value
                  })
                }}
                required />
                <button onClick={this.handleClick} className="registerBtn" id="submitBtn" >SUBMIT</button>
             
          </div>
            <div className="formAlerts" id="formAlerts">
              <p id="insideFormAlerts">Form Successfully Submitted</p>
            </div>
          </form>
          </div>
        </div>
      </div>  
      </div>
    );
  }
}

export default ComingSoon;
