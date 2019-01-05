import React, { Component } from 'react'
import "../css/offers.css";

export default class dashevents extends Component {

    render() {
        return (
            <div className="dashevents-parent">
                <div className="ca-offers-parent-heading1 dasheventsparent-font">
                    Earned Coupons
            </div>
	    <div className="dashevents-line1"></div>
                <div className="dashevents-earnedcoupons-rowparent1">
                    <div className="dashevents-earnedcoupons-child">
                        <div className="dashevents-earnedcoupons-child-heading dasheventsheading-font">
                            50% Offer
                        </div>
                        <div className="dashevents-earnedcoupons-child-description dasheventsdecription-font">
                            Invited 25 people succesfully.
                             Click the button below to redeem the offer.
                         </div>

                        <div className="dashevents-earnedcoupons-child-button">
                            <button>REDEEM</button>
                            <button id="caofferb01">INFO</button>
                        </div>
                    </div>

                    <div className="dashevents-earnedcoupons-child">

                    </div>
                    <div className="dashevents-earnedcoupons-child">

                    </div>
                </div>

                <div className="ca-offers-parent-heading2 dasheventsparent-font">
                    Coupons Available
            </div>
	    <div className="dashevents-line1"></div>
                <div className="dashevents-earnedcoupons-rowparent1">
                    <div className="dashevents-earnedcoupons-child">
                        <div className="dashevents-earnedcoupons-child-heading dasheventsheading-font">
                                50% Offer
                            </div>
                            <div className="dashevents-earnedcoupons-child-description dasheventsdecription-font">
                                Invited 25 people succesfully to redeem the offer.
                            </div>

                            <div className="dashevents-earnedcoupons-invitelink">
                            Copy Invite Link
                            </div>

                            <div className="dashevents-earnedcoupons-child-button">
                                <button>5 invites</button>
                                <button id="caofferb01">INFO</button>
                            </div>
                        </div>

                    <div className="dashevents-earnedcoupons-child">
			   <div className="dashevents-earnedcoupons-child-heading dasheventsheading-font">
                                50% Offer
                            </div>
                            <div className="dashevents-earnedcoupons-child-description-sucess dasheventsdecription-font">
                              Invited 25 people succesfully.
				Click the button below to redeem the offer.The invited people must complete the payment to make a succesfull 					invitation
                            </div>

                           

                            <div className="dashevents-earnedcoupons-child-button">
                                <button>Back</button>
                            </div>
                       
                    </div>
                    <div className="dashevents-earnedcoupons-child">

                    </div>
                    <div className="dashevents-earnedcoupons-child">

                    </div>
                </div>
            </div>
        )
    }
}
