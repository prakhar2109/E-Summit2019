import React, { Component } from 'react';  
import "./css/footer.css";
 


export default class ComingSoon extends Component {
    render () {
        return (

 <>

            <div className = "footer" >

            
                <div> <p>For Sponsorship Opportunities contact </p><p> <a href = "http://ecelliitr.ac.in">ecelliitr.ac.in</a> </p> </div>

                <div>
                     <p>Social Media</p>

                     <p> 
                     <div className = "footer_social">
                                    <span>
                                    <i className="fab fa-twitter"></i>  
                                    <i className="fab fa-facebook-f"></i> 
                                    <i className="fab fa-instagram"></i> 
                                    </span>
                     </div>
                     </p>
                
                </div>
                

                <div>
                    <p> Phone Number</p>
                    <p> +91 9992929203</p>
                </div>

                <div>
                <p> E-Mail ID </p>

                <p> <a href = "mailto:esummit@iitr.ac.in">esummit@iitr.ac.in</a></p>
                </div>
            </div>


                <div className = "footer_mobile" >

                <center>
                    <span>  For Sponsorship Opportunities contact <br></br>   <a href = "http://ecelliitr.ac.in">ecelliitr.ac.in</a> </span>

                     

                    <div className = "footer_mobile_phone">
                    <div>
                        <p> Phone Number</p>
                        <p> +91 8888 888 88</p>
                    </div>

                    <div>
                            <p> E-Mail ID </p>

                            <p> <a href = "mailto:esummit18@gmail.com">esummit18@gmail.com</a></p>
                    </div>

                    </div>
 
               
        

                    <span>
                        <div className = "footer_social">
                                        <span>
                                        <i className="fab fa-twitter"></i>  
                                        <i className="fab fa-facebook-f"></i> 
                                        <i className="fab fa-instagram"></i> 
                                        </span>
                        </div>
                    </span>
                    </center>
                </div>

</>
 
        );
    }
}