import React, { Component } from 'react';
import "./css/main.css";
import {NavLink} from "react-router-dom";
import  logo from "./static/logo-18.svg";
 import $ from 'jquery'
import phone from "./static/Group.svg";
import 'form-serializer'


export default class ComingSoon extends Component {
    handleClick = e => {
        e.preventDefault()          
    
          let $form = $('form')
          let url = 'https://script.google.com/macros/s/AKfycbz5J9fogQMFcasbcEpf7_IyyCu-_O3FmMzKcDpGJ7RNUuqwAbcr/exec'
          $.ajax({
            url: url,
            method: 'GET',
            dataType: 'json',
            data: $form.serializeObject(),
            success: function () {
              console.log('submit')
            },
            error: function () {
              
            }
          })
        
      }
    render () {
        return (

            <div className = "main_conta">


                <div className = "Part1"> 
 
                    <center> 
                        <img src = {logo} alt = "logo"></img>
 
                        <div className ="text"> 
                            At esummit, we believe  everyone deserves to have a website or online store. Innovation and simplicity makes us happy: our goal is to remove any technical or financial barriers that can prevent business owners from making their own website. We're excited to help you on your journey!
                        </div>

                        <NavLink to = "/ignite">
                            <button>
                                Know More 
                            </button>
                        </NavLink>

                    </center>

                                <div className = "social">
                                <span>
                                        <a target = "_blank" href = "https://twitter.com/EDC_IITRoorkee">  <i className="fab fa-twitter"></i>  </a>
                                         <a target = "_blank" href  = "https://www.facebook.com/ecelliitr/"><i className="fab fa-facebook-f"></i> </a>
                                        <a target = "_blank" href = "https://www.instagram.com/ecelliitr/"> <i className="fab fa-instagram"></i> </a>
                                    </span>
                                </div>
                     <center className  ="contact">

                            <span>
                                <span className = "phone">
                                    <img src = {phone} alt ="phone"></img>
                                </span>

                                <span className = "phone_no">
                                 <a href = "tel:9992929203">+91 9992929203</a>
                                </span>
                            </span>

                            <span>
                                <span className = "phone">
                                    <img src = {phone} alt ="phone"></img>
                                </span>

                                <span className = "email">
                                <a href ="mailto:esummit@iitr.ac.in"> esummit@iitr.ac.in</a>
                                </span>
                            </span>


                      


                    </center>
                    


                </div>


                <div className = "form">

                    
                        <form>
                            <center>
                                <p>
                                Pre-Register Now
                                </p>
                                <hr />
                                
                           </center>

                           <label>Name</label>
                           <input name="name" type = "text"></input>

                           <label>Phone</label>
                           <input name="phone" type = "number"></input>

                           <label>Email</label>
                           <input name="email" type = "email"></input>

                           <label>College</label>
                           <input name="college" type = "text"></input>

                           <label>City</label>
                           <input name="city" type = "text"></input>

                           <button onClick={this.handleClick}>Submit</button>
                        </form>
                
                </div>
 

 

                     <div className = "social_mobile">
                     <span>
                                        <a target = "_blank" href = "https://twitter.com/EDC_IITRoorkee">  <i className="fab fa-twitter"></i>  </a>
                                         <a target = "_blank" href  = "https://www.facebook.com/ecelliitr/"><i className="fab fa-facebook-f"></i> </a>
                                        <a target = "_blank" href = "https://www.instagram.com/ecelliitr/"> <i className="fab fa-instagram"></i> </a>
                                    </span>
                                </div>
                     <center className  ="contact_mobile">


                            <span>
                                <span className = "phone">
                                    <img src = {phone} alt ="phone"></img>
                                </span>

                                <span className = "phone_no">
                                <a href = "tel:9992929203">+91 9992929203</a>
                                </span>
                            </span>

                            <span>
                                <span className = "phone2">
                                    <img src = {phone} alt ="phone" ></img>
                                </span>

                                <span className = "email">
                                <a href ="mailto:esummit18@gmail.com"> esummit18@gmail.com</a>
                                </span>
                            </span>


                      


                    </center>

                     
            </div>
        );
    }
}