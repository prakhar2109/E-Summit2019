import React, { Component } from "react";

import { NavLink } from "react-router-dom";
// import Hamburger from './hamburger'
import { Link } from "react-router-dom";
import "./css/main.css";
import ecell from "./static/image.svg";
import esummit from "./static/esummit.png";
import "./css/canavbar.scss";

import Ca from "../caLeaderboard/js/caLeaderboard";

export default class ComingSoon extends Component {
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
    let scorePercentage = (120 / 360) * 100 + "";
    return (
      <div className="caheader">
        <span className="esummit_logo">
          <NavLink to="/">
            <img src={esummit} alt="Esummit Logo" />
          </NavLink>
        </span>

        <i id="menu_button" class="fas fa-bars" onClick={this.handle_menu} />
        <i id="close_button" class="fas fa-times" onClick={this.hide_menu} />

        <div id="phone" className="mob_menu">
          <div id="droperShape">R</div>
          <div className="headerdata">
            <p id="nms">Rohit </p>
            <div className="scor">
              <span id="scoresWritten">SCORE</span>
              <span id="scoresValue">20/360</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-custom"
                style={{
                  width: scorePercentage + "%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
