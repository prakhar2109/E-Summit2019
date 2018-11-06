import React, { Component } from 'react';
import './register.css';
import Footer  from "../footer/footer";
import { NavLink } from "react-router-dom"




export default class ComingSoon extends Component {
    render() {
        return (

            <div className="register_main">

                <div className="register_text">

                    <span> CAMPUS AMBASSADOR</span>

                    <span>The CAP( Campus Ambassador Programme) is a pinion initiative of E-Summit IIT Roorkee, 2018 organized by the Entrepreneurship Cell, IIT Roorkee and aims to amplify our purview to newer horizons. We aspire to increase our outreach to as many students as possible throughout the country and spread the spirit of entrepreneurship to similar extents. This year E-Summit IIT Roorkee brings with it loads and loads of colossal opportunities for the participating students and exciting perks for the Campus Ambassadors. </span>

                    <span>Have a look at the rulebook</span>

                    <button> RULEBOOK</button>

                </div>


                <div className="register_form">

                    <span> <NavLink to="/login">Sign In</NavLink></span>
                    <span> <NavLink to="/register">Sign Up</NavLink></span>






                    <form >

                        <label>NAME </label>

                        <input type="email" ></input>

                        <label>PHONE NO.</label>

                        <input type="number" ></input>

                        <label>EMAIL-ID</label>

                        <input type="email" ></input>
                        <label>PASSWORD </label>

                        <input type="password" ></input>
                        <label>COLLEGE </label>

                        <input type="college" ></input>
                        <label>PROGRAMME </label>

                        <input type="text" ></input>
                        <label>YEAR </label>

                        <input type="number" ></input>
                        <label>CITY </label>

                        <input type="text" ></input>

                        <label>STATE </label>

                        <input type="text" ></input>
                        <label>HOW DID YOU KNOW ABOUT CA </label>

                        <input type="text" ></input>



                    </form>

                    <br />


                    <button > SIGN UP </button>



                </div>
                <Footer/>



            </div>


        );

    }
}