import React, { Component } from 'react'
import './view.css'
import '../../header/css/main.css'
import axios from "axios";
import { BASE_URL } from "../../../utils/urls";
import { Modal, Button } from 'antd';

export default class Viewprofile extends Component {
    constructor() {
        super();
        this.state = {
            loading:false,
            name: "A",
            score: "300",

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
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleCancel = () => {
        this.setState({ visible: false });
      }
    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 300);
    }

    render() {
        const { visible } = this.state;
        const modalstyle = {
            left: "5vw",
            top: "5vh",
        }

        const bodyStyle={
            padding:0,
        }

        const width=900;
        let { score } = this.state;
        let scorePercentage = (score / 360) * 100 + "";
        return (

            <div className="caprofile-container">
                 <Button type="primary" onClick={this.showModal}>
                    Open Modal with customized footer
                </Button>
                <div className="caprofile-parent1">
                    <div className="caprofile-parent1-child1">
                        <div className="caprofile-parent1-child1-heading">
                            BASIC INFORMATION
                        </div>

                        <div className="caprofile-dropshape">
                        
                        P
                        </div>
                        <div className="ca-profilescore">
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


                        <div className="caprofifooterle-parent1-child2-emailheading caprofile-heading">
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
                            888888888888footer
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
                        IIT ROORKEEfooter
                        </div>

                    <div className="footerarent2-innerchild">
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

               
                <Modal
                    visible={visible}
                    style={modalstyle}
                    width={width}
                    bodyStyle={bodyStyle}
                    onOk={this.handleOk}
                    footer ={null}
                 
                >
                    <div className="caprofile-parent1 ca-profile-modalparent1">
                    <div className="caprofile-parent1-child1">
                        <div className="caprofile-parent1-child1-heading">
                            BASIC INFORMATION
                        </div>
                        <div className="caprofile-dropshape">
                        
                        P
                        </div>
                        <div className="ca-profilescore">
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
                        <input type="text" placeholder="Prakhar"></input> 
                           
                        </div>


                        <div className="caprofile-parent1-child2-emailheading caprofile-heading">
                            E-mail ID
                        </div>

                        <div className="caprofile-parent1-child2-email caprofile-data">
                        <input type="text" value=" prakhar@prakhar.com"></input> 
                        </div>

                    </div>

                    <div className="caprofile-parent1-child3">
                        <div className="caprofile-parent1-child3-phoneheading caprofile-heading">
                            Phone no
                        </div>

                        <div className="caprofile-parent1-child3-phone caprofile-data">
                        <input type="text" value="888888888888"></input>
                        </div>


                    </div>


                </div>
                <div className="caprofile-grandparent">
                </div>                   
                <div className="caprofile-parent2 ca-profile-modalparent2">
                    <div className="caprofile-parent2-heading">
                        COLLEGE INFORMATION
                    </div>

                    <div className="caprofile-parent2-child2-collegename-heading caprofile-heading">
                        College name
                        </div>
                    <div className="caprofile-parent2-child2-name caprofile-data">
                        <input type="text" value="IIT ROORKEE"></input>
                        </div>

                    <div className="caprofile-parent2-innerchild">
                        <div className="caprofile-parent2-innerchild1-parent">
                            <div className="caprofile-parent2-child2-programheading caprofile-heading">
                                Program
                            </div>

                            <div className="caprofile-parent2-child2-programname caprofile-data">
                            <input type="text" value="B.Tech, Mechanical Engineering"></input>  
                            </div>
                        </div>

                        <div className="caprofile-parent2-innerchild2-parent">
                            <div className="caprofile-parent2-child2-Yearheading caprofile-heading">
                                Year
                            </div>

                            <div className="caprofile-parent2-child2-year caprofile-data">
                            <input type="text" value="2019"></input>
                            </div>
                        </div>


                    </div>

                    <div className="caprofile-parent3-innerchild">
                        <div className="caprofile-parent3-innerchild1-parent">
                            <div className="caprofile-parent3-child2-cityheading caprofile-heading">
                                City
                            </div>

                            <div className="caprofile-parent3-child2-city caprofile-data">
                            <input type="text" value="Bareilly"></input> 
                            </div>
                        </div>

                        <div className="caprofile-parent3-innerchild2-parent">
                            <div className="caprofile-parent3-child2-Stateheading caprofile-heading">
                                State
                            </div>

                            <div className="caprofile-parent3-child2-State caprofile-data">
                            <input type="text" value="UP"></input> 
                                
                                
                            </div>
                        </div>


                    </div>


                </div>
                </Modal>

            </div>
        )
    }
} 
