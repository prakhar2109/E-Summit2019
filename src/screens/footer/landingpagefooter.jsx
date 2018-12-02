import Ecell from "./logo.png"
import React, {Component} from 'react';
import './css/landingpagefooter.css';

export default class FooterWithContactUs extends Component {

    render() {

        return (

            <div className="landingpagefooter">

                <div className="landingpagefooterparent">
                    <div className="footercontact">
                        <div className="footer-logo">
                            <img src={Ecell} alt="Ecell Logo "></img>
                        </div>

                        <div className="landing-footer-icons">

                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-youtube-square"></i>
                            <i className="fab fa-linkedin"></i>
                            <i className="fab fa-twitter-square"></i>

                        </div>
                    </div>

                    <div className="landing-footer-heading">
                        Phone no.
                    </div>

                    <div className="landing-footer-details">
                        7777777777777
                    </div>

                    <div className="landing-footer-heading">
                        E-Mail ID
                    </div>

                    <div className="landing-footer-details">
                        esummit19@gmail.com
                    </div>

                    <div className="landing-footer-heading">
                        Our Address
                    </div>

                    <div className="landing-footer-details">
                        E-Cell Office, SAC Building, IIT Roorkee, Roorkee, Uttarakhand,<br/>3.37vh India 247667
                    </div>
                </div>
                <div className="landingpagefooterform">

                    <div className="landingpagefooterform-heading">
                        GET IN TOUCH
                    </div>
                    <div className="landingpagefooterformfiels">

                        <form>
                            <input type="text" id="landingpageformName" placeholder="Name"></input>
                            <input type="text" id="landingpageformPhone" placeholder="Phone no."></input>
                            <input type="text" id="landingpageformEmail" placeholder="E-Mail ID"></input>
                            <textarea
                                rows="8"
                                cols="50"
                                name="comment"
                                form="usrform"
                                id="landingpageformmessage"
                                placeholder="Message"></textarea>
                            <input type="button" id="landingpagebutton">SUBMIT</input>
                        </form>

                    </div>
                    <div className="landing-pagefooterbottom">
                        <div className="landing-bottomfooter-heading">
                            For Sporsorhip Opportunities or Collaborations
                        </div>
                        <div className="landing-bottomfooter-mail">
                            esummit19@gmail.com
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}