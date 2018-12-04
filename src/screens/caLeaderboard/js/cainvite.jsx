import React, { Component } from 'react'
import "../css/cainvite.css";

export default class Cainvite extends Component {
    viewMore() {
        document.getElementById("viewmore").style.display = "none";
        document.getElementById("viewless").style.display = "block";
        document.getElementById("show").style.display = "block";
        document.getElementById("show1").style.marginBottom = "0";
        document.getElementById("show1").style.background = "#FFFAF4";



    }

    viewLess() {
        document.getElementById("viewmore").style.display = "block";
        document.getElementById("viewless").style.display = "none";
        document.getElementById("show").style.display = "none";
        document.getElementById("show1").style.background = "#FFF"
    }

    render() {
        return (
            <div className="cainvite-parent">

                <div className="cainviteparent-heading">
                    Invites here
                </div>

                <div className="cainvite-linkparent">
                </div>

                <div id="show1" className="cainvite-register-parent">

                    <div className="cainvite-register-parent-heading">
                        Successfully registered members : 10
                    </div>


                    <div  className="cainvite-register-parent-child">
                        <div>

                        </div>
                        <div>

                        </div>
                        <div id="viewmore" className="ca-Viewoption" onClick={this.viewMore}>View List</div>
                        <div id="viewless" className="ca-Viewoption" onClick={this.viewLess}>Hide List</div>


                    </div>

                </div>
                <div id="show" className="cainvite-register-parent-child2" >
                    dd
                </div>

                <div className="cainviteparent-heading">
                    Perks
                </div>

                <div className="cainviteparent-perks">

                </div>
            </div>

        )
    }
}