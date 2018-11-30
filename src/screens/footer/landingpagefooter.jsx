import React, { Component } from 'react';
import './css/landingpagefooter.css';

export default class Lfooter extends Component {

    render() {

        return (

            <div className="landingpagefooter">

                <div className="landingpagefooterparent">

                    <div className="landingpagefootercontact">
                        <div className="landingpagefooter-logo">


                        </div>

                        <div className="landing-footer-icons">

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
                            esummit18@gmail.com
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
                            <input type="text" id="landingpageformPhone"placeholder="Phone no."></input>
                            <input type="text" id="landingpageformEmail" placeholder="E-Mail ID"></input>
                            <textarea rows="8" cols="50" name="comment" form="usrform" id="landingpageformmessage" placeholder="Message">
                            </textarea>
                            <input type="button" id="landingpagebutton">SUBMIT</input>
                            </form>

                        </div>
                    </div>


                </div>

                <div className="landing-pagefooterbottom">

                <div className="landing-bottomfooter-heading">
                For Sporsorhip Opportunities or Collaborations
                </div>

                 <div className="landing-bottomfooter-mail">
                 esummit18@gmail.com 
                </div>





                </div>

            </div>




        )
    }
}