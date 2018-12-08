import React, { Component } from 'react';
import './css/landingpagefooter.css';

export default class Lfooter extends Component {

    render() {

        return (

            <div className="landingpagefooter">

                <div className="footerparent">

                    <div className="footercontact">
                        <div className="footer-logo">


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
                    <div className="footerform">

                        <div className="footerform-heading">
                            GET IN TOUCH
                        </div>
                        <div className="footerformfiels">

                            <form>
                            <input type="text" id="formName" placeholder="Name"></input>
                            <input type="text" id="formPhone"placeholder="Phone no."></input>
                            <input type="text" id="formEmail" placeholder="E-Mail ID"></input>
                            <textarea rows="8" cols="50" name="comment" form="usrform" id="formmessage" placeholder="Message">
                            </textarea>

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
