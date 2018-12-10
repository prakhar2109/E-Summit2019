import React, { Component } from 'react';
import './eventfooter.css';
import Back from "../static/top.png";
import jump from "jump.js"
export default class Lfooter extends Component {
    top = () => {
        jump(".ideastorm", {offset: -130});
    };
    render() {

        return (
            <div className="landingpagefooterparent">
                <div className="landingpagefooter">

                    <div className="footerparent">

                        <div className="footercontact">
                            <div className="footer-logo">
                            </div>
                            <div className="landing-footer-inspiring">
                                #inspiringinnovation
			                </div>

                            <div className="landing-footer-icons">
					<a href="#"><i class="fab fa-facebook"></i></a>
					<a href="#"><i class="fab fa-instagram"></i></a>
					<a href="#"><i class="fab fa-youtube"></i></a>
					<a href="#"><i class="fab fa-twitter"></i></a>
					<a href="#"><i class="fab fa-linkedin"></i></a>
					
					
                            </div>
                            <div className="landing-footer-esummitteam">
                                E-Summit’19 Team
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

                            <div className="landing-footer-details landing-footer-adddetails">
                                E-Cell Office, SAC Building, IIT Roorkee, Roorkee, Uttarakhand,<br />  India 247667
                            </div>
                        </div>

                        <div className="footerform">

                            <div className="footerform-heading">
                                GET IN TOUCH
                            </div>
                            <div className="footerformfiels">

                                <form>
                                    <input type="text" id="ladingpageinput" placeholder="Name"></input>
                                    <input type="text" id="ladingpageinput" placeholder="Phone no."></input>
                                    <input type="text" id="ladingpageinput" placeholder="E-Mail ID"></input>
                                    <textarea rows="8" id="ladingpagetextinput" form="usrform" placeholder="Message">
      	                              </textarea>
                                    <button id="ladingpagebuttonb01">SUBMIT</button>

                                </form>

                            </div>
                        </div>


                    </div>


                </div>
                
                <div className="landing-pagefooterbottom">

                    <center><img onClick = {this.top} src= {Back} /> </center>
                    <div className="landing-bottomfooter-heading">
                        For Sporsorhip Opportunities or Collaborations
                    </div>

                    <div className="landing-bottomfooter-mail">
                        esummit18@gmail.com
                     </div>

                </div>
		

		<div className="landingpagefooter-mobile">

                    <div className="footerparent">
			 <div className="footerform">

                            <div className="footerform-heading">
                                GET IN TOUCH
                            </div>
                            <div className="footerformfiels">

                                <form>
                                    <input type="text" id="ladingpageinput" placeholder="Name"></input>
                                    <input type="text" id="ladingpageinput" placeholder="Phone no."></input>
                                    <input type="text" id="ladingpageinput" placeholder="E-Mail ID"></input>
                                    <textarea rows="8" id="ladingpagetextinput" form="usrform" placeholder="Message">
      	                              </textarea>
                                    <button id="ladingpagebuttonb01">SUBMIT</button>

                                </form>

                            </div>
                        </div>
                        <div className="footercontact">
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

                            <div className="landing-footer-details landing-footer-adddetails">
                                E-Cell Office, SAC Building, IIT Roorkee, Roorkee, Uttarakhand,<br />3.37vh India 247667
                            </div>
                            <div className="footer-logo">
                            </div>
                            <div className="landing-footer-inspiring">
                                #inspiringinnovation
			                </div>

                            <div className="landing-footer-icons">
                                <a href="#"><i class="fab fa-facebook"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-youtube"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-linkedin"></i></a>
					
					
                            </div>
                            <div className="landing-footer-esummitteam">
                                E-Summit’19 Team
			                </div>

                           
                        </div>

                       


                    </div>


                </div>
                
                <div className="landing-pagefooterbottom-mobile">
                    <center><img onClick = {this.top} src= {Back} /> </center>
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

