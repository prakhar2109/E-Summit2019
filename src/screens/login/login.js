import React, { Component } from 'react';
import "./css/login.css";

import {NavLink} from "react-router-dom"




export default class ComingSoon extends Component {
    render () {
        return (

            <div className  = "login_main">
            
                <div className = "login_text">

                    <span> CAMPUS AMBASSADOR</span>

                    <span>The CAP( Campus Ambassador Programme) is a pinion initiative of E-Summit IIT Roorkee, 2018 organized by the Entrepreneurship Cell, IIT Roorkee and aims to amplify our purview to newer horizons. We aspire to increase our outreach to as many students as possible throughout the country and spread the spirit of entrepreneurship to similar extents. This year E-Summit IIT Roorkee brings with it loads and loads of colossal opportunities for the participating students and exciting perks for the Campus Ambassadors. </span>

                    <span>Have a look at the rulebook</span>

                    <button> RULEBOOK</button>

                </div>
            

                <div className = "login_form">
                        
                        <span> <NavLink to = "/login">Sign In</NavLink></span>
                        <span> Sign Up</span>

                        

            
                    <form >

                        <label>EMAIL ID </label>

                        <input type = "email" ></input>

                        <label>PASSWORD</label>

                        <input type = "passowrd" ></input>


                    </form>

                    <br /> 

                    <a href = "#">  Forgot password?</a>

                    <button > SIGN IN </button>


                </div>
            
            
            
            
            </div>


        );

    }
}