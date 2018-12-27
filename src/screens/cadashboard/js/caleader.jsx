import React, { Component } from "react";
import "../css/caleader.css";
import { BASE_URL } from "../../../utils/urls";
import axios from "axios";

export default class Caleader extends Component {
  state = {
    leaderboard: [],
  };

  componentDidMount = () => {
    let token = localStorage.getItem("user_token");
    console.log(token);

    if (token !== undefined) {
      axios
        .get(BASE_URL + "/v1/api/leaderboard", {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then(res => {
          this.setState({
            leaderboard: res.data,
          });

          console.log(this.state);
        });
    }
  };

  render() {
    return (
      <div className="caleaderboard-parent">
        <div className="caleader-heading">Top10</div>
        <div className="caleader-line1" />

        <div className="caleader-board-parent">
          <table id="ca01">
            <tbody>
              <tr>
                <th id="carank">Rank</th>
                <th id="caname">Name</th>
                <th id="cacollege">University</th>
                <th id="capoints">Points</th>
              </tr>

              {this.state.leaderboard.map(data => {
                return (
                  <tr>
                    <td id="caranktd">{data.ranking}</td>
                    <td id="canametd">{data.name}</td>
                    <td id="cacollegenametd">{data.college}</td>
                    <td id="capointstd">{data.tot_score}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="caleader-board-mobileparent">
          <table id="ca01">
            <tbody>
              <tr>
                <th id="carank">Rank</th>
                <th id="caname">Name & University</th>

                <th id="capoints">Points</th>
              </tr>
              <tr>
                <td id="caranktd">1</td>
                <td id="canametd">
                  Prakhar Agarwal <br />
                  <span id="cacollegespan">IIT Roorkee</span>
                </td>

                <td id="capointstd">50</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="cacontainer">
          <div className="cacontainer-child">
            <div className="caupdatecontainer">
              <div className="ca">UPDATES</div>
            </div>
            <div className="caoverlay">
              'Rozgar Melas' organised by the National Skill Development
              Corporation (NSDC) in various cities have been instrumental in
              connecting thousands of youth to employers, UP Deputy Chief
              Minister Dinesh Sharma said.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
