import React, { Component } from "react";
import Header from "../../components/header";
import { Element } from "react-scroll";
import { Link } from "react-router-dom"
import ViewMore from "./static/view_more.png";
// import { NavLink } from "react-router-dom"
class Events extends Component {
  render() {
    return (
      <>

        <Element id="events" name="events">
          <div className="land_events">
            <Header title="HIGHLIGHT EVENTS" />
            <p className="text">
              Presenting to you the showstoppers of E-Summit 2019! Participate
              in these grand events and gain an opportunity to learn, network,
              and how to forget the hefty cash prizes.
            </p>
          </div>
          <div className="land_events_array">
            <div>
              <a href="/ideastorm" target="_blank">
                <div className="conclave" >
                  <span>
                    <p className="title">IDEASTORM</p>
                    <p className="tagline"></p>
                  </span>
                  <span>
                    <center>

                      <i>

                        <img src={ViewMore} alt="view more" />
                      </i>
                      <p className="viewmore">VIEW MORE</p>

                    </center>
                  </span>
                </div>
              </a>
            </div>

            <div className="workshop">
              <span>
                <p className="title">CONCLAVES</p>
                <p className="tagline"></p>
              </span>
              <span>
                <center>
                  {/* <i>
                  
                    <img src={ViewMore} alt="view more" />
                  </i> */}
                  <p className="viewmore">COMING SOON</p>
                </center>
              </span>
            </div>
            <div className="leadership">
              <span>
                <p className="title">LEADERSHIP SERIES</p>
                <p className="tagline"></p>
              </span>
              <span>
                <center>
                  {/* <i>
                
                    <img src={ViewMore} alt="view more" />
                  </i> */}
                  <p className="viewmore">COMING SOON</p>
                </center>
              </span>
            </div>
            <div className="competition">
              <span>
                <p className="title">WORKSHOPS</p>
                <p className="tagline"></p>
              </span>

              <span>
                <center>
                  {/* <i>
                    
                    <img src={ViewMore} alt="view more" />
                  </i> */}
                  <p className="viewmore">COMING SOON</p>
                </center>
              </span>
            </div>
          </div>
          <div className="land_events">
            <Header title="EVENTS " />

            <p className="text">
              B-Plan, Case Studies, Productathon, Networking Events and a lot more to explore! Register for the events and compete among the best minds of the country.
            </p>
            <center>     
            <div className="land_events_array2">
              <Link to="/productathon">
                <div className="events_production" id="events_production1">
                  <span>
                    <p className="t1">PRODUCTATHON</p>

                  </span>
                  <span>
                    <center>

                      <i>

                        <img src={ViewMore} alt="view more" />
                      </i>
                      <p className="viewmore esummit-landing-view-more-button">VIEW MORE</p>

                    </center>
                  </span>
                </div>
              </Link>

              <div className="events_production" id="events_production2">
                <span>
                  <p className="t1">COMPETITIONS</p>
                </span>
                <p className="t3">COMING SOON</p>
              </div>

              <div className="events_production" id="events_production3">
                <span>
                  <p className="t1">STARTUP EXPO</p>

                </span>
                <p className="t3">COMING SOON</p>
              </div>

              <div className="events_production" id="events_production4">
                <span>
                  <p className="t1">CASE STUDY CHALLENGE</p>

                </span>
                <p className="t3">COMING SOON</p>
              </div>

              <div className="events_production" id="events_production5">
                <span>
                  <p className="t1">ONLINE EVENTS</p>

                </span>
                <p className="t3">COMING SOON</p>
              </div>

              <div className="events_production" id="events_production6">
                <span>
                  <p className="t1">CORPORATE SPEED DATING</p>

                </span>
                <p className="t3">COMING SOON</p>
              </div>
            </div>
            </center>
          </div>
        </Element>
      </>
    );
  }
}

export default Events;
