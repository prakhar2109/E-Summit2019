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
        this.state = {
            name: '',
            score: '0',
        }
    }



    
    handleLogout = ()=>{
        localStorage.removeItem('ca_token')
        window.location.href = '/login';
    }
    componentDidMount = () => {

        const token = localStorage.getItem('ca_token')
        axios.get("http://esummit.in/api/user/" ,{ 'headers': { 'Authorization': token } })
            .then( res=> {
                // console.log(res.data,"hasjgdukagh")
                this.setState({
                    score: res.data.score,
                    name: res.data.name
                }) ;
            })
            .catch(function (response) {
                alert(response);
          });
    }


    render() {
        let {name  ,score } = this.state
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
                        {name[0]}
                    </div>
                    <p id="name">{name}</p>
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
                    <div id="submitButton">
                        <button type="submit" onClick={this.handleLogout}>Log Out</button>
                    </div>
                </div>
 
                <Task />
            </div>


        )
    }
}