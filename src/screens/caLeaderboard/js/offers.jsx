import React, { Component } from 'react'
import "../css/offers.css";

export default class Viewprofile extends Component {

    render() {
        return (
            <div className="caoffers-parent">
                <div className="ca-offers-parent-heading1">
                    Earned Coupons
            </div>
                <div className="caoffers-earnedcoupons-rowparent1">
                    <div className="caoffers-earnedcoupons-child">
                        <div className="caoffers-earnedcoupons-child-heading">
                            50% Offer
                    </div>
                        <div className="caoffers-earnedcoupons-child-description">
                            Invited 25 people succesfully.
                             Click the button below to redeem the offer.    
                    </div>

                        <div className="caoffers-earnedcoupons-child-button">
                            <button>Redeem</button>
                            <button id="caofferb01">Info</button>
                        </div>
                    </div>

                    <div className="caoffers-earnedcoupons-child">

                    </div>
                    <div className="caoffers-earnedcoupons-child">

                    </div>
                </div>

                <div className="ca-offers-parent-heading2">
                    Coupons Available
            </div>
                <div className="caoffers-earnedcoupons-rowparent1">
                    <div className="caoffers-earnedcoupons-child">

                    </div>

                    <div className="caoffers-earnedcoupons-child">

                    </div>
                    <div className="caoffers-earnedcoupons-child">

                    </div>
                    <div className="caoffers-earnedcoupons-child">

                    </div>
                </div>
            </div>
        )
    }
}