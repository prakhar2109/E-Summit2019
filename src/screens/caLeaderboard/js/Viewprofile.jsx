import React, { Component } from 'react'
import './view.css'
import '../../header/css/main.css'
import axios from "axios";
import { BASE_URL } from "../../../utils/urls";
export default class Viewprofile extends Component {
    constructor() {
        super();
        this.state = {

            name: "",
            score: "0",

        }
    }
    componentDidMount = () => {
        let token = localStorage.getItem('ca_token');
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

    render() {
        let { score } = this.state;
        let scorePercentage = (score / 360) * 100 + "";
        return (

            <div className="caprofile-container">
                <div className="caprofile-parent1">
                    <div className="caprofile-parent1-child1">
                        <div className="caprofile-parent1-child1-heading">
                            BASIC INFORMATION
                        </div>
                        <div className="scor">
                            <span id="caprofile-scoreWritten">Score</span>
                            <span id="caprofile-scoreValue">{this.state.score}/360</span>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar bg-custom"
                                style={{
                                    width: scorePercentage + "%",
                                }}
                            />
                        </div>
                    </div>
                    <div className="caprofile-parent1-child2">
                        <div className="caprofile-parent1-child2-name-heading caprofile-heading">
                            Full name
                        </div>
                        <div className="caprofile-parent1-child2-name caprofile-data">
                            Prakhar Agarwal
                        </div>


                        <div className="caprofile-parent1-child2-emailheading caprofile-heading">
                            E-mail ID
                        </div>

                        <div className="caprofile-parent1-child2-email caprofile-data">
                            prakhar@prakhar.com
                        </div>

                    </div>

                    <div className="caprofile-parent1-child3">
                        <div className="caprofile-parent1-child3-phoneheading caprofile-heading">
                            Phone no
                        </div>

                        <div className="caprofile-parent1-child3-phone caprofile-data">
                            888888888888
                        </div>


                    </div>


                </div>

                <div className="caprofile-parent2">
                    <div className="caprofile-parent2-heading">
                        COLLEGE INFORMATION
                    </div>

                    <div className="caprofile-parent2-child2-collegename-heading caprofile-heading">
                        College name
                        </div>
                    <div className="caprofile-parent2-child2-name caprofile-data">
                        IIT ROORKEE
                        </div>

                    <div className="caprofile-parent2-innerchild">
                        <div className="caprofile-parent2-innerchild1-parent">
                            <div className="caprofile-parent2-child2-programheading caprofile-heading">
                                Program
                            </div>

                            <div className="caprofile-parent2-child2-programname caprofile-data">
                                B.Tech, Mechanical Engineering
                            </div>
                        </div>

                        <div className="caprofile-parent2-innerchild2-parent">
                            <div className="caprofile-parent2-child2-Yearheading caprofile-heading">
                                Year
                            </div>

                            <div className="caprofile-parent2-child2-year caprofile-data">
                                2019
                            </div>
                        </div>


                    </div>

                    <div className="caprofile-parent3-innerchild">
                        <div className="caprofile-parent3-innerchild1-parent">
                            <div className="caprofile-parent3-child2-cityheading caprofile-heading">
                                City
                            </div>

                            <div className="caprofile-parent3-child2-city caprofile-data">
                                Bareilly
                            </div>
                        </div>

                        <div className="caprofile-parent3-innerchild2-parent">
                            <div className="caprofile-parent3-child2-Stateheading caprofile-heading">
                                State
                            </div>

                            <div className="caprofile-parent3-child2-State caprofile-data">
                                UP
                            </div>
                        </div>


                    </div>


                </div>



            </div>
        )
    }
} 
