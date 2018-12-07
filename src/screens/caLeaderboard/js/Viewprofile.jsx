import React, { Component } from 'react'
import './view.css'
import '../../header/css/main.css'
import axios from "axios";
import { BASE_URL } from "../../../utils/urls";
import { Modal} from 'antd';

export default class Viewprofile extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
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
     changeProfile= () => {
        document.getElementById("caprofile-containter").style.display = "none";
        document.getElementById("caprofile-parent2").style.display = "none";
        document.getElementById("caprofile-editprofilecontainter").style.display = "block";
        document.getElementById("caprofileeditprofile-parent2").style.display = "block";
        document.getElementById("caprofilemobile-b01").style.display = "none";
        document.getElementById("caprofilemobile-b02").style.display = "block";





    }
    saveProfile= () => {
        document.getElementById("caprofile-containter").style.display = "block";
        document.getElementById("caprofile-parent2").style.display = "block";
        document.getElementById("caprofile-editprofilecontainter").style.display = "none";
        document.getElementById("caprofileeditprofile-parent2").style.display = "none";
        document.getElementById("caprofilemobile-b01").style.display = "block";
        document.getElementById("caprofilemobile-b02").style.display = "none";




    }


    render() {
        const { visible } = this.state;
        const modalstyle = {
            left: "20vw",
            margin: "0",
            top: "5vh",
        }

        const bodyStyle = {
            padding: 0,
        }

        const width = 900;
        let { score } = this.state;
        let scorePercentage = (score / 360) * 100 + "";
        return (

            <div className="caprofile-container">
                {/* <Button type="primary" onClick={this.showModal}>
                    Open Modal with customized footer
                </Button> */}
                <div className="caprofile-container-heading">
                    PROFILE
                </div>

                <div className="caprofile-line1"></div>
                <button id="caprofile-b01" onClick={this.showModal}>Edit Profile</button>
		        <button id="caprofilemobile-b01" onClick={this.changeProfile}>Edit Profile</button>
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
                        <div className="progressline">
                            <div
                                className="progress-bar bg-custom"
                                style={{
                                    width: scorePercentage + "%",
                                }}
                            />
                        </div>
                    </div>

                    <div className="caprofile-parent1-childline"></div>
                    {/* <div className="caprofile-parent1-child2">
                        <div className="caprofile-parent1-child2-name-heading caprofile-heading">
                            Full name
                        </div>
                        <div className="caprofile-parent1-child2-name caprofile-data">
                            Prakhar Agarwal
                        </div>


                        <div className="caprofile-heading">
                            E-mail ID
                        </div>

                        <div className="caprofile-parent1-child2-email caprofile-data">
                            prakhar@prakhar.com88888888888888888
                        </div>

                    </div>

                    <div className="caprofile-parent1-child3">
                        <div className="caprofile-parent1-child3-phoneheading caprofile-heading">
                            Phone no
                        </div>

                        <div className="caprofile-parent1-child3-phone caprofile-data">
                            888888888888footer
                        </div>


                    </div> */}
                    <div className="caprofile-containter-parent" id="caprofile-containter">
                        <div className="caprofile-containter-parent-child1">
                            <div className="caprofile-parent1-child2-name-heading caprofile-heading">
                                Full name
                            </div>
                            <div className="caprofile-parent1-child2-name caprofile-data">
                                Prakhar Agarwal
                            </div>
                        </div>

                        <div className="caprofile-containter-parent-child2">
                            <div className="caprofile-containter-parent-child2-child1">
                                <div className="caprofile-heading">
                                    E-mail ID
                                </div>

                                <div className="caprofile-parent1-child2-email caprofile-data">
                                    prakhar@prakhar.com
                                </div>

                            </div>
                            <div className="caprofile-containter-parent-child2-child2">
                                <div className="caprofile-parent1-child3-phoneheading caprofile-heading">
                                    Phone no
                                </div>

                                <div className="caprofile-parent1-child3-phone caprofile-data">
                                    888888888888footer
                            </div>
                            </div>
                        </div>
                    </div>


                    <div className="caprofile-containter-parent" id="caprofile-editprofilecontainter">
                        <div className="caprofile-containter-parent-child1">
                            <div className="caprofile-parent1-child2-name-heading caprofile-heading">
                                Full name
                            </div>
                            <div className="caprofile-parent1-child2-name caprofile-data">
                                Prakhar Agarwalaaaaaaaaaaaaaaa
                            </div>
                        </div>

                        <div className="caprofile-containter-parent-child2">
                            <div className="caprofile-containter-parent-child2-child1">
                                <div className="caprofile-heading">
                                    E-mail ID
                                </div>

                                <div className="caprofile-parent1-child2-email caprofile-data">
                                    prakhar@prakhar.comaaaaaaaaaaaaaa
                                </div>

                            </div>
                            <div className="caprofile-containter-parent-child2-child2">
                                <div className="caprofile-parent1-child3-phoneheading caprofile-heading">
                                    Phone no
                                </div>

                                <div className="caprofile-parent1-child3-phone caprofile-data">
                                    888888888888footeraaaaaaaaaaaaaaaaa
                            </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="caprofile-parent2" id="caprofile-parent2">
                    <div className="caprofile-parent2-heading">
                        COLLEGE INFORMATION
                    </div>

                    <div className="caprofile-parent2-child2-collegename-heading caprofile-heading">
                        College name
                        </div>
                    <div className="caprofile-parent2-child2-name caprofile-data">
                        IIT ROORKEEfooter
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
                <div className="caprofile-parent2" id="caprofileeditprofile-parent2">
                    <div className="caprofile-parent2-heading">
                        COLLEGE INFORMATION
                    </div>

                    <div className="caprofile-parent2-child2-collegename-heading caprofile-heading">
                        College name
                        </div>
                    <div className="caprofile-parent2-child2-name caprofile-data">
                        IIT ROORKEEfootersssssssssss
                        </div>

                    <div className="caprofile-parent2-innerchild">
                        <div className="caprofile-parent2-innerchild1-parent">
                            <div className="caprofile-parent2-child2-programheading caprofile-heading">
                                Program
                            </div>

                            <div className="caprofile-parent2-child2-programname caprofile-data">
                                B.Tech, Mechanical Engineeringssssssssssssss
                            </div>
                        </div>

                        <div className="caprofile-parent2-innerchild2-parent">
                            <div className="caprofile-parent2-child2-Yearheading caprofile-heading">
                                Year
                            </div>

                            <div className="caprofile-parent2-child2-year caprofile-data">
                                2019sssssssssss
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
                <button id="caprofilemobile-b02" onClick={this.saveProfile}>Save Changes</button>


                <Modal
                    visible={visible}
                    style={modalstyle}
                    width={width}
                    bodyStyle={bodyStyle}
                    onOk={this.handleOk}
                    closable={false}
                    footer={null}

                >
                    <button id="caprofile-b02" onClick={this.handleOk}>Save Changes</button>

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
                            <div className="progressline">
                                <div
                                    className="progress-bar bg-custom"
                                    style={{
                                        width: scorePercentage + "%",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="caprofile-parent1-childline"></div>
                        {/* <div className="caprofile-parent1-child2">
                            <div className="caprofile-parent1-child2-name-heading caprofile-heading">
                                Full name
                        </div>
                            <div className="caprofile-parent1-child2-name caprofile-data">
                                <input type="text" placeholder="Prakhar" id="caprofile02"></input>

                            </div>


                            <div className="caprofile-heading">
                                E-mail ID
                        </div>

                            <div className="caprofile-parent1-child2-email caprofile-data">
                                <input type="text" value=" prakhar@prakhar.com" id="caprofile01"></input>
                            </div>

                        </div>

                        <div className="caprofile-parent1-child3">
                            <div className="caprofile-parent1-child3-phoneheading caprofile-heading">
                                Phone no
                        </div>

                            <div className="caprofile-parent1-child3-phone caprofile-data">
                                <input type="text" value="888888888888" id="caprofile01"></input>
                            </div>


                        </div> */}

                        <div className="caprofile-containter-parent">
                            <div className="caprofile-containter-parent-child1">
                                <div className="caprofile-parent1-child2-name-heading caprofile-heading">
                                    Full name
                            </div>
                                <div className="caprofile-parent1-child2-name caprofile-data">
                                    <input type="text" placeholder="Prakhar" id="caprofile02"></input>

                                </div>
                            </div>

                            <div className="caprofile-containter-parent-child2">
                                <div className="caprofile-containter-parent-child2-child1">
                                    <div className="caprofile-heading">
                                        E-mail ID
                                </div>

                                    <div className="caprofile-parent1-child2-email caprofile-data">
                                        <input type="text" value=" prakhar@prakhar.com" id="caprofile01"></input>
                                    </div>

                                </div>
                                <div className="caprofile-containter-parent-child2-child2">
                                    <div className="caprofile-parent1-child3-phoneheading caprofile-heading">
                                        Phone no
                                </div>

                                    <div className="caprofile-parent1-child3-phone caprofile-data">
                                        <input type="text" value="888888888888" id="caprofile01"></input>
                                    </div>
                                </div>
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
                            <input type="text" value="IIT ROORKEE" id="caprofile03"></input>
                        </div>

                        <div className="caprofile-parent2-innerchild">
                            <div className="caprofile-parent2-innerchild1-parent">
                                <div className="caprofile-parent2-child2-programheading caprofile-heading">
                                    Program
                            </div>

                                <div className="caprofile-parent2-child2-programname caprofile-data">
                                    <input type="text" value="B.Tech, Mechanical Engineering" id="caprofile01"></input>
                                </div>
                            </div>

                            <div className="caprofile-parent2-innerchild2-parent">
                                <div className="caprofile-parent2-child2-Yearheading caprofile-heading">
                                    Year
                            </div>

                                <div className="caprofile-parent2-child2-year caprofile-data">
                                    <input type="text" value="2019" id="caprofile01"></input>
                                </div>
                            </div>


                        </div>

                        <div className="caprofile-parent3-innerchild">
                            <div className="caprofile-parent3-innerchild1-parent">
                                <div className="caprofile-parent3-child2-cityheading caprofile-heading">
                                    City
                            </div>

                                <div className="caprofile-parent3-child2-city caprofile-data">
                                    <input type="text" value="Bareilly" id="caprofile01"></input>
                                </div>
                            </div>

                            <div className="caprofile-parent3-innerchild2-parent">
                                <div className="caprofile-parent3-child2-Stateheading caprofile-heading">
                                    State
                            </div>

                                <div className="caprofile-parent3-child2-State caprofile-data">
                                    <input type="text" value="UP" id="caprofile01"></input>


                                </div>
                            </div>


                        </div>


                    </div>
                </Modal>

            </div>
        )
    }
} 
