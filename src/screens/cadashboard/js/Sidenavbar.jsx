import React, { Component } from "react";
import logo from "../../header/static/esummit.png";
import "./../css/caLeaderboard.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../header/caheader";
import { BASE_URL } from "../../../utils/urls";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

class caLeaderboard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      score: "0",
      activeState: "",
      data: []
    };
  }

  setActive = state => {
    this.setState({
      activeState: state,
    });
  };
  handleLogout = () => {
    localStorage.removeItem("user_token");
    window.location.href = "/";
  };
  componentDidMount = () => {
    let token = localStorage.getItem("user_token");

    if (token !== undefined) {
      axios
        .get(BASE_URL + "/v1/api/user/profile", {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then(res => {
          this.setState({ score: res.data.score, name: res.data.name, data: res.data });
        })
        .catch(response => {
          window.location.href = "/registration_portal/login";
        });
    }
  };



  render() {
    let { name, score } = this.state;
    let scorePercentage = (score / 360) * 100 + "";
    let options;

    if (this.state.data.user_type === "AMB") {
      console.log("AMB")

      options = (
        <>
          <span>
            <Link
              to="/dashboard/task"
              className={
                this.state.activeState === "task" ? "linkEventson" : null
              }
              onClick={() => {
                this.setActive("task");
              }}
            >
              TASKS
                </Link>
            <br />
          </span>

          <span>
            <Link
              to="/dashboard/leader"
              className={
                this.state.activeState === "leaderboard"
                  ? "linkEventson"
                  : null
              }
              onClick={() => {
                this.setActive("leaderboard");
              }}
            >
              LEADERBOARD
</Link>
            <br />
          </span>

        </>
      )
    }



    else {
      options = null;
    }
    return (
      <div>
        <Header />
        <div id="container">
          <div id="leftPane">

            <a href = "/">
              <img id="logo" src={logo} alt="" />
            </a>

            <hr id="line1" />


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

              {options}
              {/*
              <span>
                <Link
                  to="/dashboard/offers"
                  className={
                    this.state.activeState === "offers" ? "linkEventson" : null
                  }
                  onClick={() => {
                    this.setActive("offers");
                  }}
                >
                  OFFERS
                </Link>
                <br />
              </span>

                */}
              <span>
                <Link
                  to="/dashboard/payment"
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

              <span>
                <Link
                  to="/dashboard/invite"
                  className={
                    this.state.activeState === "invite" ? "linkEventson" : null
                  }
                  onClick={() => {
                    this.setActive("invite");
                  }}
                >
                  INVITE
                </Link>
                <br />
              </span>

              {/*
              <span>
                <Link
                  to="/dashboard/contigent"
                  className={
                    this.state.activeState === "contigent"
                      ? "linkEventson"
                      : null
                  }
                  onClick={() => {
                    this.setActive("contigent");
                  }}
                >
                  CONTIGENT
                </Link>
                <br />
              </span>

                */}

              {/*<span id="leaderboardButton">LeaderBoard</span>*/}
              <div id="leaderboardButton">
                <a  target = "_blank" href="https://drive.google.com/a/iitr.ac.in/file/d/1r5QzYM8CxwGX8RPbGQj9cH7MePxO4cQ4/view?usp=sharing">CA RULEBOOK</a>
              </div>
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


export default withRouter (caLeaderboard);