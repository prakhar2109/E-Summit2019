import React, {Component} from 'react';
import "./css/footer.css";

export default class FooterWithoutContactUs extends Component {
    render() {
        return (
             <> <div className="footer">

            <div>
                <p>For queries:
                </p>
                <p>
                    <a href="mailto:esummit@iitr.ac.in">esummit@iitr.ac.in</a>
                </p>
            </div>

            <div>
                <p>Social Media</p>

                <p>
                    <div className="footer_social">
                        <span>
                            <a target="_blank" href="https://twitter.com/EDC_IITRoorkee">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a target="_blank" href="https://www.facebook.com/ecelliitr/">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a target="_blank" href="https://www.instagram.com/ecelliitr/">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a target='_blank' href='https://www.linkedin.com/company/esummit/'>
                                <i className='fab fa-linkedin'/>
                            </a>
                        </span>
                    </div>
                </p>

            </div>

            <div>
                <p>
                    Phone Number</p>
                <p>
                    <a href="tel:9992929203">+91 9992929203</a>
                </p>
            </div>

            <div>
                <p>
                    For collaborations:
                </p>

                <p>
                    <a href="mailto:ecell@iitr.ac.in">ecell@iitr.ac.in</a>
                </p>
            </div>
        </div> < div className = "footer_mobile" > <center>
            <span>
                For Sponsorship Opportunities contact
                <br></br>
                <a href="mailto:esummit@iitr.ac.in">esummit@iitr.ac.in</a>
            </span>

            <div className="footer_mobile_phone">
                <div>
                    <p>
                        Phone Number</p>
                    <p>
                        <a href="tel:9992929203">+91 9992929203</a>
                    </p>
                </div>

                <div>
                    <p>
                        E-Mail ID
                    </p>

                    <p>
                        <a href="mailto:ecell@iitr.ac.in">ecell@iitr.ac.in</a>
                    </p>
                </div>

            </div>

            <span>
                <div className="footer_social">
                    <span>
                        <a target="_blank" href="https://twitter.com/EDC_IITRoorkee">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a target="_blank" href="https://www.facebook.com/ecelliitr/">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/ecelliitr/">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </span>
                </div>
            </span>
        </center> </div>

</ >);
    }
}