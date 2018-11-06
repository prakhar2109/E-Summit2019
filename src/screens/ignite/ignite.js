import React, { Component } from 'react'; 
import jump from 'jump.js'
import "./css/ignite.css";
import Header from './../header/header'
import scroll  from  "./static/Union.svg";
import Footer  from "../footer/footer";

import jaipur from "../../utils/jaipur.jpg"
import deh from "../../utils/dehradun.jpg"
import chandi from "../../utils/chandigarh.jpg"

import guru from "../../utils/gurugram.jpg"

import case1 from  "../../utils/case1.png"
import case2 from  "../../utils/CaseStudy.jpeg"

import comp from  "../../utils/competetions.jpg"

import lec from "../../utils/guestlecture.png"

import panal from "../../utils/paneldiscussions.jpeg"




export default class ComingSoon extends Component {

     jum =()=> {
         
        jump(".ignite");
    }
    
    render () {
        return (

            
            <div>
                <Header />
            <div className  = "ignite_main">

                <div className = "ignite_text">

                    <div> STARTUP IGNITE</div>

                    <div>The CAP( Campus Ambassador Programme) is a pinion initiative of E-Summit IIT Roorkee, 2018 organized by the Entrepreneurship Cell, IIT Roorkee and aims to amplify our purview to newer horizons. We aspire to increase our outreach to as many students as possible throughout the country and spread the spirit of entrepreneurship to similar extents. This year E-Summit IIT Roorkee brings with it loads and loads of colossal opportunities for the participating students and exciting perks for the Campus Ambassadors. </div>

                    <div> <img  onClick = {this.jum}  src = {scroll} alt =""></img></div>
                    
                    <div> SCROLL DOWN</div>
                
                </div>
            </div>

                <div className = "ignite"> 
                    

                    <div className = "ignite_events">

                    <center>

                    <div className = "ignite_head">EVENTS</div>

                        <span className = "ignite_event_unit">
                            
                            <div>
                                <img src = {case1} alt = "case study"></img>
                            </div>

                            <span>
                            Panel Discussion
                            </span>

                        </span>


                         <span className = "ignite_event_unit">
                            
                            <div>
                            <img src = {case2} alt = "case study"></img>
                            </div>

                            <span>
                            Panel Discussion
                            </span>

                        </span>

                          <span className = "ignite_event_unit">
                            
                            <div>
                            <img src = {comp} alt = "Competitiom "></img>
                            </div>

                            <span>
                            Panel Discussion
                            </span>

                        </span>


                          <span className = "ignite_event_unit">
                            
                            <div>
                            <img src = {lec} alt = "Guest Leccture "></img>
                            </div>

                            <span>
                            Panel Discussion
                            </span>

                        </span>

                          <span className = "ignite_event_unit">
                            
                            <div>
                            <img src = {panal} alt = "Panal Discussion "></img>
                            </div>

                            <span>
                            Panel Discussion
                            </span>

                        </span>

             
                        
             </center>
                    
                    </div>


                    <div className = "ignite_head">VENUES</div>

                    <div className = "ignite_venus">


                        <center>
                                <div className = "ignite_venu_unit">
                                    
                                    <div>
                                            <img alt = "jaipur" src = {jaipur} />
                                    </div>

                                    <span>
                                        <p>Gurugram </p>
                                        <p>College Name</p>
                                        <p> 23.08.2018</p>                                        
                                    </span>

                                </div>   

                                <div className = "ignite_venu_unit">
                                    
                                    <div>
                                    <img alt = "Chandigarh" src = {chandi}/>
                                    </div>

                                    <span>
                                        <p>Gurugram </p>
                                        <p>College Name</p>
                                        <p> 23.08.2018</p>                                        
                                    </span>

                                </div> 


                                <div className = "ignite_venu_unit">
                                    
                                    <div>
                                    <img alt = "Dehradun" src = {deh}/>

                                    </div>

                                    <span>
                                        <p>Gurugram </p>
                                        <p>College Name</p>
                                        <p> 23.08.2018</p>                                        
                                    </span>

                                </div> 

                                <div className = "ignite_venu_unit">
                                    
                                    <div>
                                    <img alt = "Gurugran " src = {guru}/>

                                    </div>

                                    <span>
                                        <p>Gurugram </p>
                                        <p>College Name</p>
                                        <p> 23.08.2018</p>                                        
                                    </span>

                                </div> 


                                <div className = "ignite_venu_unit">
                                    
                                    <div>

                                    </div>

                                    <span>
                                        <p>Gurugram </p>
                                        <p>College Name</p>
                                        <p> 23.08.2018</p>                                        
                                    </span>

                                </div>  
                        </center>
                    
                    </div>
                </div>
 

                <Footer />            
            </div>


        );
    }
}