import React, { Component } from "react";
import logo from "../../header/static/esummit.png";
import axios from "axios";
 
import CATaskBoard from "./catask";
import { BASE_URL } from "../../../utils/urls";
import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";
import Header from "./caheader";
 

let token = localStorage.getItem("ca_token");
export default class caLeaderboard extends Component {
  constructor() {
    super();
    if (token === null || token === undefined) {
      window.location.href = "/login";
    }
    this.state = {
      name: "",
      score: "0",
      activeState: "",
    };
  }

  setActive = state => {
    this.setState({
      activeState: state,
    });
  };
  handleLogout = () => {
    localStorage.removeItem("ca_token");
    window.location.href = "/login";
  };
  componentDidMount = () => {
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

  render() {
    let { name, score } = this.state;

    if (token === null || token === undefined) {
      window.location.href = "/login";
    }
    let scorePercentage = (score / 360) * 100 + "";
    return (
      <div>
        <Header />
        <div id="container">
          <div id="leftPane">
            <div id="header">
              <NavLink to="/">
                <img id="logo" src={logo} alt="" />
              </NavLink>
            </div>
            <hr id="line1" />
            <div id="viewProfile">
              <NavLink to="/iitrdashboard/Viewprofile">VIEW PROFILE</NavLink>
            </div>
            <div id="dropShape">{name[0]}</div>
            <p id="name">{name}</p>
            <div className="score">
              <span id="scoreWritten">SCORE</span>
              <span id="scoreValue">{score}</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-custom"
                style={{
                  width: scorePercentage + "%",
                }}
              />
            </div>
            <div id="optionsToggle">
              <span>
                <Link
                  to="/iitrdashboard/payment"
                  className={
                    this.state.activeState === "payment" ? "linkEventson" : null
                  }
                  onClick={() => {
                    this.setActive("payment");
                  }}
                >
                  PAYMENT
                </Link>
                <br />
              </span>

              {/*<span id="leaderboardButton">LeaderBoard</span>*/}
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
