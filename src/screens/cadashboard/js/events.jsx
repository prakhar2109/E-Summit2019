import React, { Component } from 'react'
import "../css/events.css";
import { BASE_URL } from "../../../utils/urls"
import axios from "axios";



export default class Viewprofile extends Component {
    state = {
        events: []
    
      };
    infoMenushow=(index)=> {
        document.getElementById("caevents-earnedcoupons-child-parent1"+index).style.display = "none";
        document.getElementById("caevents-earnedcoupons-child-parent2"+index).style.display = "block";
    }
    infoMenuhide=(index)=> {
        document.getElementById("caevents-earnedcoupons-child-parent1"+index).style.display = "block";
        document.getElementById("caevents-earnedcoupons-child-parent2"+index).style.display = "none";
    }
    componentDidMount() {
        axios
          .get(BASE_URL + "/v1/api/events/")
          .then(res => {
            this.setState({
              events: res.data,

            });
          })
      }
    render() {
        console.log(this.state.events,"events")
        return (
            <div className="caevents-parent">
                <div className="ca-events-parent-heading1 caeventsparent-font">
                    Applied Events
            </div>
                <div className="caevents-line1"></div>
                <div className="caevents-earnedcoupons-rowparent1">
                    <div className="caevents-earnedcoupons-child">
                        <div className="caevents-earnedcoupons-child-heading">
                            Ideastorm
                            </div>
                        <div className="caevents-registration-status">
                            Registration open
                            </div>
                        <div className="caevents-earnedcoupons-child-description">
                            Invited 25 people succesfully to redeem the offer.
                            </div>

                        <div className="caevents-earnedcoupons-deadline">
                            Deadline:
                            </div>


                        <div className="caevents-earnedcoupons-child-button">
                            <button>DISCARD</button>
                            <button id="caofferb01">INFO</button>
                        </div>
                    </div>                    
                </div>

                <div className="ca-events-parent-heading2 caeventsparent-font">
                    All Events
                </div>
                <div className="caevents-line1"></div>
                <div className="caevents-earnedcoupons-rowparent1">

                {this.state.events.map((event,index) => {
                return (
                    <div key={index} className="caevents-earnedcoupons-child" style={{ backgroundImage: `url(${event.card_image})`,}} >
                        <div id={"caevents-earnedcoupons-child-parent1"+index}>
                            <div className="caevents-earnedcoupons-child-heading">
                                {event.title}
                                {event.status==="Dead"&&
                                <div className="caevents-earnedcoupons-child-reddotpic">
                                </div> 
                                }
                                {event.status==="Live"&&
                                <div className="caevents-earnedcoupons-child-greendotpic">
                                </div> 
                                }
                            </div>
                            <div className="caevents-registration-status">
                                {event.status==="Live"?"Registration open":null}
                                {event.status==="Dead"?"Registration closed":null}

                            </div>
                            <div className="caevents-earnedcoupons-child-description">
                                {event.short_description}
                            </div>
                            {event.status==="Upcomming"? <div className="caevents-coming-soon">COMING SOON</div>:
                            <div>      
                                <div className="caevents-earnedcoupons-deadline">
                                    Deadline: {event.deadline}
                                </div>

                                <div className="caevents-earnedcoupons-child-button">
                                    <button>APPLY</button>
                                    <button className="caofferb01" onClick={()=>this.infoMenushow(index)}>INFO</button>
                                </div>
                            </div>}
                        </div>
                        <div style={{display:"none"}} id={"caevents-earnedcoupons-child-parent2"+index}>
                            <div className="caevents-earnedcoupons-child-info">
                             {event.long_description}
                            </div>
                          
                            <div className="caevents-earnedcoupons-child-button">

                                <button onClick={()=>this.infoMenuhide(index)}>BACK</button>
                            </div>
                        </div>
                    </div>
                );
                })}
                </div>
            </div>
        )
    }
}
