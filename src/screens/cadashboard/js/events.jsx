import React, { Component } from 'react'
import "../css/events.css";

export default class Viewprofile extends Component {

    render() {
        return (
            <div className="caevents-parent">
                <div className="ca-events-parent-heading1 caeventsparent-font">
                    Applied Events
            </div>
                <div className="caevents-line1"></div>
                <div className="caevents-earnedcoupons-rowparent1">
                    <div className="caevents-earnedcoupons-child">
                        <div className="caevents-earnedcoupons-child-heading caeventsheading-font">
                            50% Offer
                        </div>
                        <div className="caevents-earnedcoupons-child-description caeventsdecription-font">
                            Invited 25 people succesfully.
                             Click the button below to redeem the offer.
                         </div>

                        <div className="caevents-earnedcoupons-child-button">
                            <button>DISCARD</button>
                            <button id="caofferb01">INFO</button>
                        </div>
                    </div>

                    <div className="caevents-earnedcoupons-child">

                    </div>
                    <div className="caevents-earnedcoupons-child">

                    </div>
                </div>

                <div className="ca-events-parent-heading2 caeventsparent-font">
                    All Events
                </div>
                <div className="caevents-line1"></div>
                <div className="caevents-earnedcoupons-rowparent1">
                    <div className="caevents-earnedcoupons-child">
                        <div className="caevents-earnedcoupons-child-heading caeventsheading-font">
                            50% Offer
                            </div>
                        <div className="caevents-earnedcoupons-child-description caeventsdecription-font">
                            Invited 25 people succesfully to redeem the offer.
                            </div>

                        <div className="caevents-earnedcoupons-invitelink">
                            Copy Invite Link
                            </div>

                        <div className="caevents-earnedcoupons-child-button">
                            <button>APPLY</button>
                            <button id="caofferb01">INFO</button>
                        </div>
                    </div>

                   
                    <div className="caevents-earnedcoupons-child">

                    </div>
                    <div className="caevents-earnedcoupons-child">

                    </div>
                </div>
            </div>
        )
    }
}
