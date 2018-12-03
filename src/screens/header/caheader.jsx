import React, { Component } from "react";

import { NavLink } from "react-router-dom";
// import Hamburger from './hamburger'
import { Link } from "react-router-dom";
import "./css/main.css";
import ecell from "./static/image.svg";
import axios from "axios";
import { BASE_URL } from "../../utils/urls";
import esummit from "./static/esummit.png";
import "./css/canavbar.css"; 

import Ca from "../caLeaderboard/js/caLeaderboard";

export default class ComingSoon extends Component {
  state = {
    name: "",
    score: "0",
  };

  componentDidMount = () => {
    let token = localStorage.getItem('ca_token');
    // document.getElementById("main_class").style.marginTop = '0px';


 
    axios
      .get(BASE_URL + "/v1/api/user/profile", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then(res => {
        this.setState({ score: res.data.score, name: res.data.name });
      })
      .catch(response => {
        alert(response);
      });
  };

  // componentWillUnmount(){
  //   document.getElementById("main_class").style.marginTop = '13vh';
  // }
  handleLogout = () => {
    localStorage.removeItem("ca_token");
    window.location.href = "/login";
  };
  handle_menu() {
    document.getElementById("phone").style.display = "flex";
    document.getElementById("close_button").style.display = "block";
    document.getElementById("menu_button").style.display = "none";
  }

  hide_menu() {
    document.getElementById("phone").style.display = "none";
    document.getElementById("close_button").style.display = "none";
    document.getElementById("menu_button").style.display = "block";
  }

  render() {
    let {  score } = this.state;
    let scorePercentage = ( score / 360) * 100 + "";
    return (
      <div className="caheader">
        <div className="caheader-parent">
        <span className="esummit_logo">
          <NavLink to="/">
            <img src={esummit} alt="Esummit Logo" />
          </NavLink>
        </span>

        <i id="menu_button" class="fas fa-bars" onClick={this.handle_menu} />
        <i id="close_button" class="fas fa-times" onClick={this.hide_menu} />
        </div>
        <div id="phone" className="mob_menu">
          <div id="droperShape">{this.state.name[0]}</div>
          <div className="headerdata">
            <p id="nms">{this.state.name} </p>
            <div className="scor">
              <span id="scoresWritten">{this.state.score}</span>
              <span id="scoresValue">{this.state.score}/360</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-custom"
                style={{
                  width: scorePercentage + "%",
                }}
              />
            </div>
            <div id="submitButton">
              <button type="submit" onClick={this.handleLogout}>
                Log Out
            </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
