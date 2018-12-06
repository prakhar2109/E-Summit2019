import React, { Component } from 'react'
import "../css/caleader.css";
// import Header from '../../header/caheader'
export default class Caleader extends Component {

    render() {
        return (
            <div className="caleaderboard-parent">
            {/* <Header/> */}
                <div className="caleader-heading">
                    Top10
                </div>
		<div className="caleader-line1"></div>

                <div className="caleader-board-parent">
                    <table id="ca01">
			<tbody>
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
			</tbody>
                    </table>
                </div>

                <div className="cacontainer">

                    <div className="cacontainer-child">
                        <div className="caupdatecontainer">
                            <div className="ca">
                            UPDATES
                            </div>
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
        )
    }
} 
