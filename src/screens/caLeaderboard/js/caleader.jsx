import React, { Component } from 'react'
import "../css/caleader.css";

export default class Caleader extends Component {

    render() {
        return (
            <div className="caleaderboard-parent">
                <div className="caleader-heading">
                    Top10
                </div>

                <div className="caleader-board-parent">
                    <table id="ca01">
                        <tr>
                            <th id="carank">Rank</th>
                            <th id="caname">Name</th>
                            <th id="cacollege">University</th>
                            <th id="capoints">Points</th>
                        </tr>
                        <tr>
                            <td id="caranktd">1</td>         
                            <td>Prakhar Agarwal</td>
                            <td>IIT Roorkee</td>
                            <td id="capointstd">50</td>
                        </tr>
                        <tr>
                            <td id="caranktd">2</td>
                            <td>Prakhar Agarwal</td>
                            <td>IIT Roorkee</td>
                            <td id="capointstd">50</td>
                        </tr>
                        <tr>
                            <td id="caranktd">3</td>
                            <td>Prakhar Agarwal</td>
                            <td>IIT Roorkee</td>
                            <td id="capointstd">50</td>
                        </tr>
                        
                    </table>
                </div>
            </div>
        )
    }
} 