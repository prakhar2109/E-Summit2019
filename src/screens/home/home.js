import React, { Component } from 'react';
import "./css/main.css";
import  logo from "./static/logo-18.svg"
import phone from "./static/Group.svg"



export default class ComingSoon extends Component {
    render () {
        return (

            <div className = "main_conta">


                <div className = "Part1">

                    <center>
                        <img src = {logo} alt = "logo"></img>

                        <div className ="text">
                            At esummit, we believe everyone deserves to have a website or online store. Innovation and simplicity makes us happy: our goal is to remove any technical or financial barriers that can prevent business owners from making their own website. We're excited to help you on your journey!
                        </div>

                        <button>
                            Know More 
                        </button>

                    </center>

                                <div class = "social">
                                    <span>
                                    <i class="fab fa-twitter"></i>  
                                    <i class="fab fa-facebook-f"></i> 
                                    <i class="fab fa-instagram"></i> 
                                    </span>
                                </div>
                     <center className  ="contact">

                            <span>
                                <span className = "phone">
                                    <img src = {phone} alt ="phone"></img>
                                </span>

                                <span className = "phone_no">
                                    +91 8888 888 88
                                </span>
                            </span>

                            <span>
                                <span className = "phone">
                                    <img src = {phone} alt ="phone"></img>
                                </span>

                                <span className = "email">
                                esummit18@gmail.com
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
                           <input type = "text"></input>

                           <label>Phone</label>
                           <input type = "text"></input>

                           <label>Email</label>
                           <input type = "email"></input>

                           <label>College</label>
                           <input type = "text"></input>

                           <label>City</label>
                           <input type = "text"></input>

                           <button>Submit</button>
                        </form>
                
                </div>
 
            </div>
        );
    }
}