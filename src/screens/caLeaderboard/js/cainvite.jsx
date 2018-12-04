import React, { Component } from 'react'
import "../css/cainvite.css";


export default class Cainvite extends Component {
    state = {
        loading: false,
        visible: false,
      }

      
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

    copyLink() {
        var copyText = document.getElementById("camyinput");
        copyText.select();
        document.execCommand("copy");

    }
  
    render() {
      
        return (
            <div className="cainvite-parent">

                <div className="cainviteparent-heading">
                    Invites here
                </div>

                <div className="cainvite-linkparent">

                    <div className="cainvite-linkparent-heading">
                        Invite link
                    </div>

                    <div className="cainvite-linkparent-input">
                        <input type="text" id="camyinput"></input>
                        <button id="camyinputbutton" onClick={this.copyLink}>Copy text</button>
                    </div>
                </div>

                <div id="show1" className="cainvite-register-parent">

                    <div className="cainvite-register-parent-heading">
                        Successfully registered members : 10
                    </div>


                    <div className="cainvite-register-parent-child">
                        <div id="cainviteca1">
                                Payment Completed:6
                        </div>
                        <div id="cainviteca2">
                                Payment not Completed:4
                        </div>
                        <div id="viewmore" className="ca-Viewoption" onClick={this.viewMore}>View List</div>
                        <div id="viewless" className="ca-Viewoption" onClick={this.viewLess}>Hide List</div>


                    </div>

                </div>
                <div id="show" className="cainvite-register-parent-child2" >
                <table id="cainvite01">
                        <tr>
                            <th id="cainvitename">Name</th>
                            <th id="cainvitestatus">Status</th>
                        </tr>
                        <tr>
                            <td id="cainvitename-child">Prakhar Agarwal</td>         
                            <td>Done</td>
                        </tr>
                        <tr>
                            <td id="cainvitename-child">Prakhar Agarwal</td>
                            <td>Done</td>
                        </tr>
                        <tr>
                            <td id="cainvitename-child">Prakhar Agarwal</td>
                            <td>Done</td>
                        </tr>
                        
                    </table>
                </div>

                <div className="cainviteparent-heading">
                    Perks
                </div>

                <div className="cainviteparent-perks">
                    <div className="cainviteparent-perks-heading">
                    Benefits of sending invites
                    </div>
                    <div className="cainviteparent-perks-childparent">
                    The following criteria were used to decide the waiver in fees for all the participants.
                    
                    </div>

                    <div className="cainviteparent-perks-child">
                    20 % Off on getting 10 invites successfully who paid the fee.
                    </div>
                    <div className="cainviteparent-perks-child">
                    20 % Off on getting 10 invites successfully who paid the fee.
                    </div>
                    <div className="cainviteparent-perks-child">
                    20 % Off on getting 10 invites successfully who paid the fee.
                    </div>
                </div>


                
            </div>

        )
    }
}