import React, { Component } from "react";
import "./ambasder.scss";
import Login from "../../components/login/login";

export default class CampusAmbasder extends Component {
  show = () =>{
    document.getElementById("log").style.display = "block";
  }
  render() {
    return (
      <>
        <div className="ambasder">
          <p>CAMPUS AMBASSADOR</p>

          <p>
            The CAP( Campus Ambassador Programme) is a pinion initiative of
            E-Summit IIT Roorkee, 2018 organized by the Entrepreneurship Cell,
            IIT Roorkee and aims to amplify our purview to newer horizons. We
            aspire to increase our outreach to as many students as possible
            throughout the country and spread the spirit of entrepreneurship to
            similar extents. This year E-Summit IIT Roorkee brings with it loads
            and loads of colossal opportunities for the participating students
            and exciting perks for the Campus Ambassadors.
          </p>
          <center>
            <span onClick = {this.show} className="login">Login</span>
            <span className="register">Register</span>
          </center>
        </div>

        <Login />
      </>
    );
  }
}
