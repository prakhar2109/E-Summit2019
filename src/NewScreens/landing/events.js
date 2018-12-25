import React, {Component} from 'react';
import Header from '../../components/header';
import {Element} from "react-scroll";
import ViewMore from "./static/view_more.png"
class Events extends Component {

    render() {
       
        return (
            <>
            <Element id = "events" name = "events" >
 
                <div className="land_events">
                    <Header title="HIGHLIGHT EVENTS"/>
                    <p className="text">
                    Presenting to you the showstoppers of E-Summit 2019! 
Participate in these grand events and gain an opportunity to learn, network, and how to forget the hefty cash prizes.
                    </p>

                </div>
                <div className="land_events_array">

                    <div className="conclave">
                        <center>

                            <p>IDEASTORM</p>
                            <p>The Annual B-Plan competition</p>
                            <i> <img src = {ViewMore} alt = "view more" ></img></i>
                            <p  className = "viewmore" >VIEW MORE</p>

                        </center>
                    </div>

                    <div className="workshop">
                        <center>

                            <p>CONCLAVES</p>
                            <p>Blockchain<br></br> Social Impact Entrepreneurship Consultancy <br></br> Smart Tech</p>
                            <i> <img src = {ViewMore} alt = "view more" ></img></i>
                            <p className = "viewmore" >VIEW MORE</p>

                        </center>
                    </div>
                    <div className="leadership">
                        <center>

                            <p>LEADERSHIP SERIES</p>
                            <p>Tagline for the event or minimal discription of event.</p>
                            <i> <img src = {ViewMore} alt = "view more" ></img></i>
                            <p className = "viewmore" >VIEW MORE</p>

                        </center>
                    </div>
                    <div className="competition">
                        <center>

                            <p>WORKSHOPS</p>
                            <p>Tagline for the event or minimal discription of event.</p>
                            <i> <img src = {ViewMore} alt = "view more" ></img></i>
                            <p className = "viewmore">VIEW MORE</p>

                        </center>
                    </div>

                </div>
                <div className="land_events">
    

                    <Header title = "EVENTS " />

                    <p className ="text" >
                        Expert investor or an emerging entrepreneur or a quiz master, you think you know it all? Put that test to claim, battle it out in the field for the ultimate glory.
                    </p>

                    <div className = "land_events_array2">
                        <div className = "events_production">

                            <span> 
                            <p className = "t1">PRODUCTATHON</p>
                            <p className = "t2">Tagline</p>
                            </span>
                            <p className = "t3">COMING SOON</p>
                        </div>
                    </div>

            
                </div>

                </Element>

         
                    
            </>

        );
    }
}

export default Events;