import React, { Component } from 'react'; 
import jump from 'jump.js'
import "./css/ignite.css";
import scroll  from  "./static/Union.svg";
import Footer  from "../footer/footer";

import jaipur from "../../utils/jaipur.jpg"
import deh from "../../utils/dehradun.jpg"
import chandi from "../../utils/chandigarh.jpg"

import guru from "../../utils/gurugram.jpg"

import case1 from  "../../utils/case1.png"
import case2 from  "../../utils/Workshops.jpg"

import comp from  "../../utils/competetions.jpg"

import lec from "../../utils/guestlecture.png"

import panal from "../../utils/paneldiscussions.jpeg"

import nodia from "../../utils/noida.jpg"




export default class ComingSoon extends Component {

     jum =()=> {
         
        jump(".ignite");
    }
    
    render () {
        return (

            <>
            <div>
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
                            Case Study
                            </span>

                        </span>


                         <span className = "ignite_event_unit">
                            
                            <div>
                            <img src = {case2} alt = "case study"></img>
                            </div>

                            <span>
                            Workshop
                            </span>

                        </span>

                          <span className = "ignite_event_unit">
                            
                            <div>
                            <img src = {comp} alt = "Competitiom "></img>
                            </div>

                            <span>
                            Competetions
                            </span>

                        </span>


                          <span className = "ignite_event_unit">
                            
                            <div>
                            <img src = {lec} alt = "Guest Leccture "></img>
                            </div>

                            <span>
                            Guest Lecture
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
                                        <p>Jaipur </p>
                                        <p>College: TBD</p>
                                        <p>Date: TBD</p>                                        
                                    </span>

                                </div>   

                                <div className = "ignite_venu_unit">
                                    
                                    <div>
                                    <img alt = "Chandigarh" src = {chandi}/>
                                    </div>

                                    <span>
                                        <p>Chandigarh </p>
                                        <p>College: TBD</p>
                                        <p>Date: TBD</p>                                        
                                    </span>

                                </div> 


                                <div className = "ignite_venu_unit">
                                    
                                    <div>
                                    <img alt = "Dehradun" src = {deh}/>

                                    </div>

                                    <span>
                                        <p>Dehradun </p>
                                        <p>College: TBD</p>
                                        <p>Date: TBD</p>                                        
                                    </span>

                                </div> 

                                <div className = "ignite_venu_unit">
                                    
                                    <div>
                                    <img alt = "Gurugran " src = {guru}/>

                                    </div>

                                    <span>
                                        <p>Gurugram </p>
                                        <p>College: TBD</p>
                                        <p>Date: TBD</p>                                        
                                    </span>

                                </div> 


                                <div className = "ignite_venu_unit">
                                    
                                    <div>
                                    <img alt = "Noida " src = {nodia}/>

                                    </div>

                                    <span>
                                        <p>Noida  </p>
                                        <p>College: TBD</p>
                                        <p>Date: TBD</p>                                        
                                    </span>

                                </div>  
                        </center>
                    
                    </div>
                </div>
 

            
            </div>


         <Footer />
        </>
        );
    }
}