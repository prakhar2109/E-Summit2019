import React, { Component } from 'react';
import './eventfooter.css';
import Back from "../static/top.png";
import jump from "jump.js"
import $ from 'jquery';
import 'form-serializer';
import validator from 'react-validation';
export default class Lfooter extends Component {
    constructor(props){
        super(props);
        this.state={
            footername:'',
            footerPhoneno:'',
            footerEmailid:'',
            footermessage:''
        }
    }
    top = () => {
        jump(".ideastorm", {offset: -130});
    };
    validate = () => {
        console.log("empty field")
        let isError = false;
 
        if(this.state.footername===''||this.state.footerPhoneno===''||this.state.footerEmailid===''||this.state.footerEmailid==='')
 
        isError=true;
        return isError;
    }
    handleClick=(e)=>{
        e.preventDefault();
        const err=this.validate();
        let {footername, footerPhoneno, footerEmailid,footermessage} = this.state
    
        if (!err) {
          // clear form
          this.setState({
            footername:'',
            footerPhoneno:'',
            footerEmailid:'',
            footermessage:''
        }); 
   
    console.log(this.state.footername)
    console.log(this.state.footerPhoneno)

    console.log(this.state.footerEmailid)
    console.log(this.state.footermessage)




    let $form = $('form')
    let url = 'https://script.google.com/macros/s/AKfycbxVolaDHR32PbqBc7X9aqCea34fWUaKObrBEv9F2LmfJNMWlVI/exec'
    $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject(),
        success:function(){
             document
        .getElementById('footerinfo')
        .innerHTML = 'Form successfully Submitted';
                
        }.bind(this),
        error:function(){
             document
        .getElementById('footerinfo')
        .innerHTML = 'Form Not Submitted';
        }.bind(this)
       })

    }

    else{
 
        document
        .getElementById('footerinfo')
        .innerHTML = 'Either Name or Phone Number or Email or Message is Empty';
        
 
    }
}   
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
					<a href="https://www.facebook.com/ecelliitr/" target="_blank"><i class="fab fa-facebook"></i></a>
					<a href="https://www.instagram.com/ecelliitr/" target="_blank"><i class="fab fa-instagram"></i></a>
					<a href="https://www.youtube.com/channel/UCf1py66Ov1easJAswwjxQZw" target="_blank"><i class="fab fa-youtube" target="_blank"></i></a>
					<a href="https://twitter.com/EDC_IITRoorkee" target="_blank"><i class="fab fa-twitter"></i></a>
					<a href="https://www.linkedin.com/company/esummit/" target="_blank"><i class="fab fa-linkedin"></i></a>
					
					
                            </div>
                            {/*
                            <div className="landing-footer-esummitteam">
                                E-Summit’19 Team
			                </div>
                            */}
                            <div className="landing-footer-heading">
                                Phone no.
                            </div>

                            <div className="landing-footer-details">
                               +91 9992929203
                            </div>

                            <div className="landing-footer-heading">
                                E-Mail ID
                            </div>

                            <div className="landing-footer-details">
                                esummit@iitr.ac.in
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

                                <form name="submit-to-google-sheet">
                                    <input type="text" name="Name" id="ladingpageinput" placeholder="Name" value={this.state.footername} 
                                     onChange={(event)=>{
                                    this.setState({
                                        footername:event.target.value
                                    })
                                    }} required />
                                    <input type="text" name="Phoneno" id="ladingpageinput" placeholder="Phone no." value={this.state.footerPhoneno} required
                                    onChange={(event)=>{
                                                    this.setState({
                                                        footerPhoneno:event.target.value
                                                    })
                                                    }} />
                                    <input type="text" name="EmailId" id="ladingpageinput" placeholder="E-Mail ID" value={this.state.footerEmailid} required
                                    onChange={(event)=>{
                                                    this.setState({
                                                        footerEmailid:event.target.value
                                                    })
                                                    }}  />
                                    <textarea rows="8" name="Message" id="ladingpagetextinput" placeholder="Message" value={this.state.footermessage} required
                                    onChange={(event)=>{
                                                    this.setState({
                                                        footermessage:event.target.value
                                                    })
                                                    }} >
      	                              </textarea>
                                    <button id="ladingpagebuttonb01" onClick={this.handleClick}>SUBMIT</button>
 
                                </form>
				<div id="footerinfo"></div>
                            </div>
                        </div>


                    </div>


                </div>
                
                <div className="landing-pagefooterbottom">

                    <center><img onClick = {this.top} src= {Back} /> </center>
                    <div className="landing-bottomfooter-heading">
                        For Sponsorship Opportunities or Collaborations
                    </div>

                    <div className="landing-bottomfooter-mail">
                        ecell@iitr.ac.in
                     </div>

                </div>
		

		<div className="landingpagefooter-mobile">

                    <div className="footerparent">
			 <div className="footerform">

                            <div className="footerform-heading">
                                GET IN TOUCH
                            </div>
                            <div className="footerformfiels">

                                <form name="submit-to-google-sheet">
                                    <input type="text" name="Name" id="ladingpageinput" placeholder="Name" value={this.state.footername}
                                     onChange={(event)=>{
                                    this.setState({
                                        footername:event.target.value
                                    })
                                    }} />
                                    <input type="text" name="Phoneno" id="ladingpageinput" placeholder="Phone no." value={this.state.footerPhoneno}
                                    onChange={(event)=>{
                                                    this.setState({
                                                        footerPhoneno:event.target.value
                                                    })
                                                    }} />
                                    <input type="text" name="EmailId" id="ladingpageinput" placeholder="E-Mail ID" value={this.state.footerEmailid}
                                    onChange={(event)=>{
                                                    this.setState({
                                                        footerEmailid:event.target.value
                                                    })
                                                    }} />
                                    <textarea rows="8" name="Message" id="ladingpagetextinput" placeholder="Message" value={this.state.footermessage}
                                    onChange={(event)=>{
                                                    this.setState({
                                                        footermessage:event.target.value
                                                    })
                                                    }} >
      	                              </textarea>
                                    <button id="ladingpagebuttonb01" onClick={this.handleClick}>SUBMIT</button>
 
                                </form>
				<div id="footerinfo"></div>
                            </div>
                        </div>
                        <div className="footercontact">
			     <div className="landing-footer-heading">
                                Phone no.
                            </div>

                            <div className="landing-footer-details">
                                 +91 9992929203
                            </div>

                            <div className="landing-footer-heading">
                                E-Mail ID
                            </div>

                            <div className="landing-footer-details">
                                 esummit@iitr.ac.in
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
                                <a href="https://www.facebook.com/ecelliitr/" target="_blank"><i class="fab fa-facebook"></i></a>
                                <a href="https://www.instagram.com/ecelliitr/" target="_blank"><i class="fab fa-instagram"></i></a>
                                <a href="https://www.youtube.com/channel/UCf1py66Ov1easJAswwjxQZw" target="_blank"><i class="fab fa-youtube"></i></a>
                                <a href="https://twitter.com/EDC_IITRoorkee" target="_blank"><i class="fab fa-twitter"></i></a>
                                <a href="https://www.linkedin.com/company/esummit/" target="_blank"><i class="fab fa-linkedin"></i></a>
					
					
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
                        For Sponsorship Opportunities or Collaborations
                    </div>

                    <div className="landing-bottomfooter-mail">
                        ecell@iitr.ac.in
                     </div>

                </div>
            </div>

	
	
	

        )
    }
}

