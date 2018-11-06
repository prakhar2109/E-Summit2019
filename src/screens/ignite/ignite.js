import React, { Component } from 'react'; 
import "./css/ignite.css";
import Footer  from "../footer/footer"
import scroll  from  "./static/Union.svg"



export default class ComingSoon extends Component {
    render () {
        return (

            <>
            <div>
            <div className  = "ignite_main">

                <div className = "ignite_text">

                    <div> STARTUP IGNITE</div>

                    <div>The CAP( Campus Ambassador Programme) is a pinion initiative of E-Summit IIT Roorkee, 2018 organized by the Entrepreneurship Cell, IIT Roorkee and aims to amplify our purview to newer horizons. We aspire to increase our outreach to as many students as possible throughout the country and spread the spirit of entrepreneurship to similar extents. This year E-Summit IIT Roorkee brings with it loads and loads of colossal opportunities for the participating students and exciting perks for the Campus Ambassadors. </div>

                    <div> <img src = {scroll} ></img></div>
                    
                    <div> SCROLL DOWN</div>
                
                </div>
            </div>

                <div className = "ignite"> 
                    
                    <div className = "ignite_head">EVENTS</div>

                    <div className = "ignite_events">

                    <center>

                        <span className = "ignite_event_unit">
                            
                            <div>

                            </div>

                            <span>
                            Panel Discussion
                            </span>

                        </span>


                         <span className = "ignite_event_unit">
                            
                            <div>

                            </div>

                            <span>
                            Panel Discussion
                            </span>

                        </span>

                          <span className = "ignite_event_unit">
                            
                            <div>

                            </div>

                            <span>
                            Panel Discussion
                            </span>

                        </span>


                          <span className = "ignite_event_unit">
                            
                            <div>

                            </div>

                            <span>
                            Panel Discussion
                            </span>

                        </span>

                          <span className = "ignite_event_unit">
                            
                            <div>

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


                                <div className = "ignite_venu_unit">
                                    
                                    <div>

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
 

            
        </div>


         <Footer />
        </>
        );
    }
}