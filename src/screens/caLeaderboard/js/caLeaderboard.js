import React, { Component } from 'react'
import logo from './../../../utils/esummitLogo.png'
import './../css/caLeaderboard.css';
import axios from "axios"


import Task from "../../../components/js/TaskIndex"
 
import { NavLink } from 'react-router-dom'

const AuthStr = ""
export default class caLeaderboard extends Component {
    constructor() {
        super();
    }

    state = {
        Name: 'Sanditya',
        score: '0',
    }

    

    componentDidMount = () => {
        axios.get("http://esummit.in//api/user/" ,{ 'headers': { 'Authorization': AuthStr } })
            .then( res=> {
                this.setState({
                    score: res.data.body.score,
                    Name: res.data.body.name
                }) ;
            })
            .catch(function (response) {
                alert(response);
          });
    }


    render() {
        let {Name  ,score } = this.state
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
                        {Name[0]}
                    </div>
                    <p id="name">{Name}</p>
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