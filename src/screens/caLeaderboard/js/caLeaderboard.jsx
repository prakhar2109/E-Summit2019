import React, { Component } from "react";
import logo from "./../../../utils/esummitLogo.png";
import "./../css/caLeaderboard.css";
import { Route } from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom"
import Header from "../../header/caheader";
import { BASE_URL } from "../../../utils/urls";
import { NavLink } from "react-router-dom";

export default class caLeaderboard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      score: "0",
      activeState:"",
    };
  } 
	
  setActive = (state) => {
        this.setState({
            activeState: state
        });
    }
  handleLogout = () => {
    localStorage.removeItem("ca_token");
    window.location.href = "/login";
  };
  componentDidMount = () => {
    let token = localStorage.getItem('ca_token');


 
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
              <NavLink to="/dashboard/Viewprofile">
                     VIEW PROFILE
                    </NavLink>


            </div>
            <div id="dropShape">{name[0]}</div>
            <p id="name">{name}</p>
            <div className="score">
              <span id="scoreWritten">SCORE</span>
              <span id="scoreValue">{score}/360</span>
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
              <Link to="/dashboard/task" className={(this.state.activeState === "task") ? "linkEventson" : null} onClick={() => {
                                            this.setActive("task");
                                        }}>
              TASKS
              </Link>
              <br />
              </span>
              <span>
              <Link to="/dashboard/leader" className={(this.state.activeState === "leaderboard") ? "linkEventson" : null} onClick={() => {
                                            this.setActive("leaderboard");
                                        }}>
              LEADERBOARD
              </Link>
              <br />
              </span>
		
              <span>
              <Link to="/dashboard/offers" className={(this.state.activeState === "offers") ? "linkEventson" : null} onClick={() => {
                                            this.setActive("offers");
                                        }}>
              OFFERS
              </Link>
              <br />
              </span>
              <span>
              <Link to="/dashboard/payment" className={(this.state.activeState === "payment") ? "linkEventson" : null} onClick={() => {
                                            this.setActive("payment");
                                        }}>
              PAYMENT
              </Link>
              <br />
              </span>

              <span>
              <Link to="/dashboard/invite" className={(this.state.activeState === "invite") ? "linkEventson" : null} onClick={() => {
                                            this.setActive("invite");
                                        }}>
              INVITE
              </Link>
              <br />
              </span>
              {/*<span id="leaderboardButton">LeaderBoard</span>*/}
              <div id="leaderboardButton"><a>CA RULEBOOK</a></div>
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
