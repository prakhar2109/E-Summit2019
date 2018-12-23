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
                        Expert investor or an emerging entrepreneur or a quiz master, you think you know
                        it all ? Put that test to claim, battle it out in the field for the ultimate
                        glory.
                    </p>

                </div>
                <div className="land_events_array">

                    <div className="conclave">
                        <center>

                            <p>CONCLAVE</p>
                            <p>Tagline for the event or minimal discription of event.</p>
                            <i> <img src = {ViewMore} alt = "view more" ></img></i>
                            <p  className = "viewmore" >VIEW MORE</p>

                        </center>
                    </div>

                    <div className="workshop">
                        <center>

                            <p>CONCLAVE</p>
                            <p>Tagline for the event or minimal discription of event.</p>
                            <i> <img src = {ViewMore} alt = "view more" ></img></i>
                            <p className = "viewmore" >VIEW MORE</p>

                        </center>
                    </div>
                    <div className="leadership">
                        <center>

                            <p>CONCLAVE</p>
                            <p>Tagline for the event or minimal discription of event.</p>
                            <i> <img src = {ViewMore} alt = "view more" ></img></i>
                            <p className = "viewmore" >VIEW MORE</p>

                        </center>
                    </div>
                    <div className="competition">
                        <center>

                            <p>CONCLAVE</p>
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