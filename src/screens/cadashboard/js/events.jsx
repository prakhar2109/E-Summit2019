import React, { Component } from 'react'
import "../css/events.css";


export default class Viewprofile extends Component {
    infoMenushow() {
        document.getElementById("caevents-earnedcoupons-child-parent1").style.display = "none";
        document.getElementById("caevents-earnedcoupons-child-parent2").style.display = "block";
    }
    infoMenuhide() {
        document.getElementById("caevents-earnedcoupons-child-parent1").style.display = "block";
        document.getElementById("caevents-earnedcoupons-child-parent2").style.display = "none";
    }
    render() {
        return (
            <div className="caevents-parent">
                <div className="ca-events-parent-heading1 caeventsparent-font">
                    Applied Events
            </div>
                <div className="caevents-line1"></div>
                <div className="caevents-earnedcoupons-rowparent1">
                    <div className="caevents-earnedcoupons-child">
                        <div className="caevents-earnedcoupons-child-heading">
                            Ideastorm
                            </div>
                        <div className="caevents-registration-status">
                            Registration open
                            </div>
                        <div className="caevents-earnedcoupons-child-description">
                            Invited 25 people succesfully to redeem the offer.
                            </div>

                        <div className="caevents-earnedcoupons-deadline">
                            Deadline:
                            </div>


                        <div className="caevents-earnedcoupons-child-button">
                            <button>DISCARD</button>
                            <button id="caofferb01">INFO</button>
                        </div>
                    </div>                    
                </div>

                <div className="ca-events-parent-heading2 caeventsparent-font">
                    All Events
                </div>
                <div className="caevents-line1"></div>
                <div className="caevents-earnedcoupons-rowparent1">


                    <div className="caevents-earnedcoupons-child">
                        <div id="caevents-earnedcoupons-child-parent1">
                            <div className="caevents-earnedcoupons-child-heading">
                                Ideastorm
                                <div className="caevents-earnedcoupons-child-reddotpic">
                                </div> 
                                <div className="caevents-earnedcoupons-child-greendotpic">
                                </div> 
                            </div>
                            <div className="caevents-registration-status">
                                Registration open
                            </div>
                            <div className="caevents-earnedcoupons-child-description">
                                Invited 25 people succesfully to redeem the offer.
                            </div>

                            <div className="caevents-earnedcoupons-deadline">
                                Deadline:
                            </div>

                            <div className="caevents-earnedcoupons-child-button">
                                <button>APPLY</button>
                                <button id="caofferb01" onClick={this.infoMenushow}>INFO</button>
                            </div>
                        </div>
                        <div id="caevents-earnedcoupons-child-parent2">
                            <div className="caevents-earnedcoupons-child-info">
                                The Idea Storm is the annual business model competition organized by Entrepreneurship Cell, IIT Roorkee in its flagship event, the E-Summit. Every year, IIT Roorkee is a spectacle to over 400 startups showcasing their business, vision and novelty. The plans that are judged to be the best, get mentorship and a prize money as
                            </div>
                          
                            <div className="caevents-earnedcoupons-child-button">

                                <button onClick={this.infoMenuhide}>BACK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
