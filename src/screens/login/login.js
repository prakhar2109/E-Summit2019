import React, {Component} from "react";
import "./css/login.css";
import Header from "./../header/header";
import axios from "axios";
import {NavLink} from "react-router-dom";
import {BASE_URL} from "../../utils/urls";
import Loader from "../loader/loader"


let token = localStorage.getItem('ca_token');


export default class ComingSoon extends Component {
  constructor(props) {
    super(props);
    if (token !== null && token !== undefined) {
      window.location.href = "/dashboard";
    }
    this.state = {
      email: "",
      password: ""
    };
  }

  handleClick = e => {
    e.preventDefault();

    let data = this.state;
    this.setState({email: "", password: ""});
    document
      .getElementById("loader")
      .style
      .display = "flex";
    axios({
        method: "post",
        url: BASE_URL + "/v1/api/user/login",
        data: data,
        config: {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      }).then(function (res) {

      console.log(res.data, "res");
      if (res && res.data) {
        if (res.data) {
          var d = new Date();
          d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
          if (res.data.token) {
            localStorage.setItem("ca_token", res.data.token);
          }
          window.location.href = "/dashboard";
          document
            .getElementById("loader")
            .style
            .display = "none";
          data = "";
        }
      }
    }).catch(response => {
      document
        .getElementById("loader")
        .style
        .display = "none";
      if (response.response.status === 401) {
        alert("username or password incorrect");
      } else {
        alert(response);
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <Loader/>
        <Header/>
        <div className="login_main">
          <div className="login_text">
            <center>
              <span>CAMPUS AMBASSADOR
              </span>
              <span>

                The CAP(Campus Ambassador Programme) is a pinion initiative of E - Summit IIT
                Roorkee, 2018 organized by the Entrepreneurship Cell, IIT Roorkee and aims to
                amplify our purview to newer horizons.We aspire to increase our outreach to as
                many students as possible throughout the country and spread the spirit of
                entrepreneurship to similar extents.This year E - Summit IIT Roorkee brings with
                it loads and loads of colossal opportunities for the participating students and
                exciting perks for the Campus Ambassadors.
              </span>
              <rohit>
                <p>
                  the exciting perks!
                </p>
                <br/>
                1. For every successful payment from the participants who have registered from
                the referral link, the CA would be awarded Rs.150 off on the registration plus
                accommodation fees for E - Summit 2019.
                <br/>
                2. An official certificate from E - Summit IIT Roorkee will be provided as an
                acknowledgment of your work as a CA for the same.
                <br/>
                3. Endorsement of your LinkedIn profile by E - Summit IIT Roorkee.
                <br/>
                4. Other additional goodies and benefits will be awarded to the top performing
                CAs.
              </rohit>
              {/* <a href="./../../pdfs/perks.pdf" target="_blank">
                                                <button>PERKS</button>
                                            </a> */}
            </center>
          </div>

          <div className="login_form">
            <NavLink activeClassName="act" to="/login">
              <span className="login_login">Sign In
              </span>
            </NavLink>
            <NavLink activeClassName="act" to="/register">
              <span className="login_register">Sign Up
              </span>
            </NavLink>
            <div>
              {this.state.error}
            </div>
            <form>
              <label>
                EMAIL
              </label>
              <input
                type="email"
                value={this.state.email}
                onChange={event => {
                this.setState({email: event.target.value});
              }}
                required></input>
              <label>
                PASSWORD
              </label>
              <input
                type="password"
                value={this.state.password}
                onChange={event => {
                this.setState({password: event.target.value});
              }}
                required></input>
              <br/> {/*  <a href="#">
                                                Forgot password?</a>
                                                */}
              <button onClick={this.handleClick}>SIGN IN
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
