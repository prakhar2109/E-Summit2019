import React, { Component } from 'react';
import "./css/login.css";
import Header from './../header/header'
import axios from "axios"
import {NavLink} from "react-router-dom"

const url = "http://esummit.in/api/signin/";


export default class ComingSoon extends Component {

    state = {
          email: '',
          password : '',
        }
    
    
    handleClick = e => {
            e.preventDefault()

            let data= this.state
            this.setState({
                email: '',
                password : '',

            });
            axios({
                method: 'post',
                url: url,
                data: data,
                config: { headers: {'Content-Type': 'multipart/form-data' }}
                })
                .then(function (res) {
                    var d = new Date();
                    d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
                    document.cookie = 'token=' + res.data.token + ';expires=' + d.toUTCString() + ';path=/';
 
                    window.location.href = '/login/leaderboard';
                    
                    data = ""

                })
                .catch(function (response) {
                    
                    alert(response);
                    console.log(response);

             
                });
            
        }


        
    
    render () {
        return (
            <React.Fragment>
            <Header />
            <div className  = "login_main">
            
                <div className = "login_text">

                <center>
                    <span> CAMPUS AMBASSADOR</span>

                    <span>The CAP( Campus Ambassador Programme) is a pinion initiative of E-Summit IIT Roorkee, 2018 organized by the Entrepreneurship Cell, IIT Roorkee and aims to amplify our purview to newer horizons. We aspire to increase our outreach to as many students as possible throughout the country and spread the spirit of entrepreneurship to similar extents. This year E-Summit IIT Roorkee brings with it loads and loads of colossal opportunities for the participating students and exciting perks for the Campus Ambassadors. </span>
                    <span>Click to see exciting perks </span>
                     <a href="./../../pdfs/perks.pdf" target="_blank"> PERKS</a>
                     </center>
 

                </div>
            

                

                <div className="login_form">

                    <span> <NavLink activeClassName="act" to="/login">Sign In</NavLink></span>
                    <span> <NavLink activeClassName="act" to="/register">Sign Up</NavLink></span>


                    <form >

                        <label>EMAIL </label>

                        <input 
                            
                            type = "email"

                            value={this.state.email}

                            onChange={event => {
                                this.setState({
                                    email: event.target.value
                                })
                            }}

                            required
                        
                        ></input>

                        <label>PASSWORD</label>

                        <input
                         
                         type = "password" 

                         value={this.state.password}

                         onChange={event => {
                             this.setState({
                                 password: event.target.value
                             })
                         }}
                         
                         required
                         
                         ></input>

                          <br /> 

                        <a href="#">  Forgot password?</a>

                        <button onClick ={this.handleClick }> SIGN IN </button>


                    </form>

                   



                </div>
            
            
            
            
            </div>

            </React.Fragment>
        );

    }
}