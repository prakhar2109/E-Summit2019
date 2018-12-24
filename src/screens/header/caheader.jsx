  import React, { Component } from "react";
  import { NavLink , Link } from "react-router-dom";
  import "./css/main.css";
  import axios from "axios";
  import { BASE_URL } from "../../utils/urls";
  import esummit from "./static/esummit.png";
  import "./css/canavbar.css";

  // import Ca from "../caLeaderboard/js/caLeaderboard";

  export default class ComingSoon extends Component {
    state = {
      name: "",
      score: "0",
      activeState:""
    };

    componentDidMount = () => {
      let token = localStorage.getItem('user_token');
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
    setActive = (state) => {
      console.log(this.activeState,"helllo")
      this.setState({
          activeState: state
      });
      this.hide_menu();
  }
    handleLogout = () => {
      localStorage.removeItem("ca_token");
      window.location.href = "/login";
    };
    handle_menu() {
      document.getElementById("phone").style.display = "block";
      document.getElementById("close_button").style.display = "block";
      document.getElementById("menu_button").style.display = "none";
      document.getElementById("optionsToggle").style.display = "block";
    }

    hide_menu() {
      document.getElementById("phone").style.display = "none";
      document.getElementById("close_button").style.display = "none";
      document.getElementById("menu_button").style.display = "block";
      document.getElementById("optionsToggle").style.display = "none";
    }

    render() {
      let { score } = this.state;
      let scorePercentage = (score / 360) * 100 + "";
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
            <div id="viewProfile">
                <NavLink to="/dashboard/Viewprofile" className={(this.state.activeState === "profile") ? "linkEventson" : null} onClick={() => {
                this.setActive("profile");
              }}>
                      VIEW PROFILE
                      </NavLink>


              </div>
            <div className="dashboard-mobile-navbar">
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
              Log Outs
            </button>
          </div>
            </div>
          </div>
              <div className="mobile-profile-dashboard-esummit1">
                              <span id="mobileprofile-dashboard-esummitId">E-Summit’19 ID</span>
                              <span id="mobileprofile-dashboard-esummitId-value">ES172292</span>
                          </div>
                          <div className="mobile-profile-dashboard-esummit2">
                              <span id="mobileprofile-dashboard-esummitId">Contingent No (Leader)</span>
                              <span id="mobileprofile-dashboard-esummitId-value">CN 2</span>
                          </div>
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
    {/*
            <span>
              <Link to="/dashboard/offers" className={(this.state.activeState === "offers") ? "linkEventson" : null} onClick={() => {
                this.setActive("offers");
              }}>
                OFFERS
                </Link>
              <br />
            </span>
    */}
            <span>
              <Link to="/dashboard/payment" className={(this.state.activeState === "payment") ? "linkEventson" : null} onClick={() => {
                this.setActive("payment");
              }}>
                PAYMENT
                </Link>
              <br />
            </span>
    {/*
            <span>
              <Link to="/dashboard/invite" className={(this.state.activeState === "invite") ? "linkEventson" : null} onClick={() => {
                this.setActive("invite");
              }}>
                INVITE
                </Link>
              <br />
            </span>
    */}
            {/*<span id="leaderboardButton">LeaderBoard</span>*/}
            <div id="leaderboardButton"><a>CA RULEBOOK</a></div>
          </div>
        </div>
      );
    }
  }
