import React, { Component } from 'react'
import logo from './../../../utils/esummitLogo.png'
import './../css/caLeaderboard.css'


import Task from "../../../components/js/TaskIndex"
 
import { NavLink } from 'react-router-dom'

export default class caLeaderboard extends Component {
    constructor() {
        super();
    }
    state = {
        firstName: 'Sanditya',
        lastName: 'Srivastava',
        score: '0',
    }


    render() {
        let { firstName, lastName, score } = this.state
        let scorePercentage = score / 360 * 100 + ''
        return (
            <div id = "container">
                <div id='leftPane'>
                    <div id='header'>
                        <NavLink to = "/"><img id="logo" src={logo} alt="" ></img></NavLink>
                    </div>
                    <hr id="line1" />
                    <div id="viewProfile">
                        VIEW PROFILE
                    </div>
                    <div id="dropShape">
                        {firstName[0]}
                    </div>
                    <p id="name">{firstName + ' ' + lastName}</p>
                    <div className="score">
                        <span id="scoreWritten">SCORE</span>
                        <span id="scoreValue">{score}/360</span>
                    </div>
                    <div className="progress">
                        <div className="progress-bar bg-custom" style={{ width: scorePercentage + '%' }}>
                        </div>
                    </div>
                    <div id="optionsToggle">
                        <span ><NavLink id="tasksButton" to = "/pendingtask"> Tasks </NavLink><br /></span>
                        <span id="leaderboardButton">LeaderBoard</span>
                    </div>
                </div>
 
                <Task />
            </div>


        )
    }
}