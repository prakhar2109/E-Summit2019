import React, { Component } from 'react';
import './register.css';
import Footer  from "../footer/footer";
import { NavLink } from "react-router-dom"
import Header from './../header/header'
import axios from "axios"

const url = "";

export default class ComingSoon extends Component {
    state = {
        name : "",
        email: '',
        mobile : "",
        password : '',
        college : "",
        program:"",
        year:"",
        city:"",
        state:"",
        how :"",
        

      }
  
  
  handleClick = e => {
          e.preventDefault()
          axios({
              method: 'post',
              url: url,
              data: this.state  ,
              config: { headers: {'Content-Type': 'multipart/form-data' }}
              })
              .then(function (res) {
                this.setState({
                    name : "",
                    email: '',
                    mobile : "",
                    password : '',
                    college : "",
                    program:"",
                    year:"",
                    city:"",
                    state:"",
                    how :"",
                })
                window.location.href = '/login';
              })
              .catch(function (response) {
                  
                  alert(response);
              });
          
      }

    render() {

        return (
            <>
                <Header />

            <div className="register_main">

                <div className="register_text">

                    <span> CAMPUS AMBASSADOR</span>

                    <span>The CAP( Campus Ambassador Programme) is a pinion initiative of E-Summit IIT Roorkee, 2018 organized by the Entrepreneurship Cell, IIT Roorkee and aims to amplify our purview to newer horizons. We aspire to increase our outreach to as many students as possible throughout the country and spread the spirit of entrepreneurship to similar extents. This year E-Summit IIT Roorkee brings with it loads and loads of colossal opportunities for the participating students and exciting perks for the Campus Ambassadors. </span>

                    <span>Have a look at the rulebook</span>

                    <center><button> RULEBOOK</button></center>

                </div>


                <div className="register_form">

                               <span> <NavLink activeClassName="act" to="/login">Sign In</NavLink></span>
                               <span> <NavLink activeClassName="act" to="/register">Sign Up</NavLink></span>





                    <form >

                        <label>NAME </label>

                        <input 
                        
                        type="text"
                        value={this.state.name}

                            onChange={event => {
                                this.setState({
                                    name: event.target.value
                                })
                            }}


                        


                        
                        ></input>

                        <label>PHONE NO.</label>

                        <input
                         type="number"
                         value={this.state.mobile}

                            onChange={event => {
                                this.setState({
                                    mobile: event.target.value
                                })
                            }}


                         ></input>

                        <label>EMAIL-ID</label>

                        <input type="email"
                        
                        value={this.state.email}

                        onChange={event => {
                            this.setState({
                                email: event.target.value
                            })
                        }}


                        ></input>
                        <label>PASSWORD </label>

                        <input type="password"
                        
                        value={this.state.passowrd}

                            onChange={event => {
                                this.setState({
                                    password: event.target.value
                                })
                            }}

                        
                        ></input>
                        <label>COLLEGE </label>

                        <input type="college"
                        
                        value={this.state.college}

                        onChange={event => {
                            this.setState({
                                college: event.target.value
                            })
                        }}

                        ></input>
                        <label>PROGRAMME </label>

                        <input type="text" 
                        
                        value={this.state.program}

                            onChange={event => {
                                this.setState({
                                    program: event.target.value
                                })
                            }}

                        ></input>
                        <label>YEAR </label>

                        <input type="number"
                        
                        value={this.state.year}

                            onChange={event => {
                                this.setState({
                                    year: event.target.value
                                })
                            }}
                        ></input>
                        <label>CITY </label>

                        <input type="text" 
                        
                        value={this.state.city}

                            onChange={event => {
                                this.setState({
                                    city: event.target.value
                                })
                            }}

                        ></input>

                        <label>STATE </label>

                        <input type="text" 
                        
                        value={this.state.state}

                        onChange={event => {
                            this.setState({
                                state: event.target.value
                            })
                        }}

                        
                        ></input>
                        <label>HOW DID YOU KNOW ABOUT CA </label>

                        <input type="text" 
                        
                        value={this.state.how}

                            onChange={event => {
                                this.setState({
                                    how: event.target.value
                                })
                            }}

                        ></input>



                    </form>

                    <br />


                    <button > SIGN UP </button>



                </div>
                <Footer/>



            </div>

            </>

        );

    }
}