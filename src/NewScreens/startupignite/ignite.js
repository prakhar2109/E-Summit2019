import React, { Component } from 'react';
import Nav from "../nav/nav.jsx";
import Vector from './img/headVector.png';
import Eventfooter from "../IdeaStorm/footer/eventfooter.jsx";
import './ignite.css';
export default class IgniteIndex extends Component {
    state={activeState:"NOIDA"}
     
    setActive(state) {
        this.setState({
            activeState: state
        });
	
       
    }
    render(){
	
        return(
	
            <div>
		<Nav />
                <div className="suignite-parent">
			<div className="suignite-parent-img"></div>
			<p>STARTUP IGNITE</p>
			<p>Be a part of something bigger</p>
			<p>The Idea Storm is the annual business model competition organized by Entrepreneurship Cell, IIT Roorkee in its flagship event, the E-Summit. Every year, IIT Roorkee is a spectacle to over 400 startups showcasing their business, vision and novelty. The plans that are judged to be the best, get mentorship and a prize money as the funding. Gear up to compete with the best minds in the country to prove your business acumen . If you want to turn your idea into an entrepreneur venture, we have got the perfect stage for you! 
</p>
		</div>

		<div className="suignite-parent-childparent">
			{console.log(this.state.activeState)}
			<div className="suignite-parent-child1">
			<div className={this.state.activeState==="NOIDA"?"suignite-parent-child1-active":"suignite-parent-child1-inactive"} onClick={() => { this.setActive("NOIDA"); }}>NOIDA</div>
			<div className={this.state.activeState==="CHANDIGARH"?"suignite-parent-child1-active":"suignite-parent-child1-inactive"}onClick={() => { this.setActive("CHANDIGARH"); }}>CHANDIGARH</div>
			<div className={this.state.activeState==="GURUGRAM"?"suignite-parent-child1-active":"suignite-parent-child1-inactive"}onClick={() => { this.setActive("GURUGRAM"); }}>GURUGRAM</div>
			<div className={this.state.activeState==="DEHRADUN"?"suignite-parent-child1-active":"suignite-parent-child1-inactive"}onClick={() => { this.setActive("DEHRADUN"); }}>DEHRADUN</div>
			<div className={this.state.activeState==="JAIPUR"?"suignite-parent-child1-active":"suignite-parent-child1-inactive"}onClick={() => { this.setActive("JAIPUR"); }}>JAIPUR</div>
			</div>
			{this.state.activeState==="NOIDA"?
			<div className="suignite-parent-child2">
				<div className="suignite-parent-child2-img">
				Comming Soon
				<div className="suignite-panelists-img-parent">
						<div className="suignite-panelists-img-child">
							<div className="suignite-panelists-img1"></div>
							<div className="panelists-name">Prakhar agarwal</div>
							<div className="panelists-company">CEO, Company</div>
						</div>
						<div className="suignite-panelists-img-child">
							<div className="suignite-panelists-img1"></div>
							<div className="panelists-name">Prakhar agarwal</div>
							<div className="panelists-company">CEO, Company</div>
						</div>
						<div className="suignite-panelists-img-child">
							<div className="suignite-panelists-img1"></div>
							<div className="panelists-name">Prakhar agarwal</div>
							<div className="panelists-company">CEO, Company</div>
						</div>
						<div className="suignite-panelists-img-child">
							<div className="suignite-panelists-img1"></div>
							<div className="panelists-name">Prakhar agarwal</div>
							<div className="panelists-company">CEO, Company</div>
						</div>
						<div className="suignite-panelists-img-child">
							<div className="suignite-panelists-img1"></div>
							<div className="panelists-name">Prakhar agarwal</div>
							<div className="panelists-company">CEO, Company</div>
						</div>
					</div>
				</div>
				<div className="suignite-parent-child2-panel">
					 <div>
					    <img className="suignite-vector" src={Vector} alt="" />
					    <div className="suignite-head1">PANEL DISCUSSION</div>
					 </div>

					<p className="suignite-topic-heading">TOPIC : GROWTH RATE IN INDIA</p>
					<p className="suignite-topic-para">A brisk description about what does the topic consist of and its
						benefits to our country</p>
					<p className="suignite-topic-heading">PANELISTS</p>
					<p className="suignite-topic-para">The panelists for this discussion</p>

					<div className="suignite-panelists-img-parent">
						<div className="suignite-panelists-img-child">
							<div className="suignite-panelists-img1"></div>
							<div className="panelists-name">Prakhar agarwal</div>
							<div className="panelists-company">CEO, Company</div>
						</div>
						<div className="suignite-panelists-img-child">
							<div className="suignite-panelists-img1"></div>
							<div className="panelists-name">Prakhar agarwal</div>
							<div className="panelists-company">CEO, Company</div>
						</div>
						<div className="suignite-panelists-img-child">
							<div className="suignite-panelists-img1"></div>
							<div className="panelists-name">Prakhar agarwal</div>
							<div className="panelists-company">CEO, Company</div>
						</div>
						<div className="suignite-panelists-img-child">
							<div className="suignite-panelists-img1"></div>
							<div className="panelists-name">Prakhar agarwal</div>
							<div className="panelists-company">CEO, Company</div>
						</div>
					</div>
				</div>
				<div className="suignite-guestlecture-parent">
					 <div>
					    <img className="suignite-vector" src={Vector} alt="" />
					    <div className="suignite-head1">GUEST LECTURE</div>
					 </div>
					 <div className="suignite-guestlecture-child-parent">
						<div className="suignite-guestlecture-child1"></div>
						<div className="suignite-guestlecture-child2">
						<p>SAURABH KOCHHAR</p>
						<p>CEO, Company Name</p>
						<p>Topic : Make in India</p>
						<p>A brisk description about what does the topic consist of and its benefits to our country and what will saurabh kochhar do to make India great. 
</p>
						</div>
					 </div>
					 <div className="suignite-guestlecture-child-parent">
						<div className="suignite-guestlecture-child1"></div>
						<div className="suignite-guestlecture-child2">
						<p>SAURABH KOCHHAR</p>
						<p>CEO, Company Name</p>
						<p>Topic : Make in India</p>
						<p>A brisk description about what does the topic consist of and its benefits to our country and what will saurabh kochhar do to make India great. 
</p>		
						</div>
					 </div>
					
				</div>
				<div className="suignite-casestudy-parent">
					 <div>
					    <img className="suignite-vector" src={Vector} alt="" />
					    <div className="suignite-head1">CASE STUDY</div>
					 </div>


						<p style={{marginTop:"6.67vh"}}>This competition needs well planned strategies and high-end intuition. 							Expect a lots of twists and turns throughout your way and each time you think 							you ace it you will be blasted with shocks. Even if odds are against what you 							plan, you always have a gut feeling. Trust your intuitions and execute a well 							planned and effective business strategy.
						</p>
						<p>RULES & REGULATIONS</p>
						<p>1. There is no restriction on any individual to participate. Members of all 							educational and professional fraternities are welcome to participate. <br/>
						2. Start-ups which have been incorporated more than a year ago (i.e. registered on or before 1 							December, 2017) are not eligible to participate in the Idea Storm. <br/>
						3. Ventures that have acquired funding from external investor-networks (angels, VC's, etc) 							cannot participate. We believe in promoting startups that require assistance in the form of 							seed capital, mentoring and various types of consultancies.
						</p>
						<p>ELIGIBILITY</p>
						<p>Everyone can participate in this .</p>
						<p>PRIZES</p>
						<p>1. There is no restriction on any individual to participate. Members of all educational and 							professional fraternities are welcome to participate. <br/>
						2. Start-ups which have been incorporated more than a year ago (i.e. registered on or before 1 							December, 2017) are not eligible to participate in the Idea Storm</p>
				</div>
				<div className="suignite-iplauctionfrenzy-parent">
					 <div>
					    <img className="suignite-vector" src={Vector} alt="" />
					    <div className="suignite-head1">WIT BID : IPL AUCTION FRENZY</div>
					 </div>
						<p>This competition needs well planned strategies and high-end intuition. Expect a lots of 							twists and turns throughout your way and each time you think you ace it you will be blasted with shocks. Even if odds are against what you plan, you always have a gut feeling. Trust your intuitions and execute a well planned and effective 							business strategy.
						</p>
						<p>FORMAT</p>
						<p><b>Stage 1: Bidding Round:</b><br/>
						The teams will compete in a Live auction of players. Each team will be given a fixed budget 							which will be used for the auction. The aim will be to build a squad that maximizes the total 							ratings of the players of the team in limited budget along with the constraints on total number 						of players
								</p>
						<p>RULES & REGULATIONS</p>
						<p>1. There is no restriction on any individual to participate. Members of all educational and 							professional fraternities are welcome to participate. <br/>
						2. Start-ups which have been incorporated more than a year ago (i.e. registered on or before 1 							December, 2017) are not eligible to participate in the Idea Storm. <br/>
						3. Ventures that have acquired funding from external investor-networks (angels, VC's, etc) 							cannot participate. We believe in promoting startups that require assistance in the form of 							seed capital, mentoring and various types of consultancies.
						</p>
						<p>ELIGIBILITY</p>
						<p>Everyone can participate in this .</p>
						<p>PRIZES</p>
						<p>1. There is no restriction on any individual to participate. Members of all educational and 							professional fraternities are welcome to participate. <br/>
						2. Start-ups which have been incorporated more than a year ago (i.e. registered on or before 1 							December, 2017) are not eligible to participate in the Idea Storm</p>
				</div>

				<div className="suignite-iplauctionfrenzy-parent">
					 <div>
					    <img className="suignite-vector" src={Vector} alt="" />
					    <div className="suignite-head1">FAQs</div>
					 </div>
				</div>
				<div className="suignite-forqueries-parent">
					 <div>
					    <img className="suignite-vector" src={Vector} alt="" />
					    <div className="suignite-head1">FOR QUERIES</div>
					 </div>
					<p>Amritha Muthuraman</p>
					<p>amritha@gmail.com</p>
					<p>+91 8888 888 888</p>
				</div>

			</div>
			
			:null}
		</div>
		<Eventfooter/>
            </div>
        )
    }
}
