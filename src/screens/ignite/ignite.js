import React, { Component } from 'react'
import jump from 'jump.js'
import './css/ignite.css'
import Header from './../header/header'
// import scroll from './static/Union.svg'
import "./css/scrollanimation.css"
import Footer from '../footer/footer'

import jaipur from '../../utils/jaipur.jpg'
import deh from '../../utils/dehradun.jpg'
import chandi from '../../utils/chandigarh.jpg'

import guru from '../../utils/gurugram.jpg'

import case1 from '../../utils/case1.png'
import case2 from '../../utils/Workshops.jpg'

import comp from '../../utils/competetions.jpg'

import lec from '../../utils/guestlecture.png'

import panal from '../../utils/paneldiscussions.jpeg'

import nodia from '../../utils/noida.jpg'

export default class ComingSoon extends Component {
  jum = () => {
    jump('.ignite')
  }

  render() {
    return (
      <div>
        <Header />
        <div className="startup-ignite-parent">
          <div className='ignite_main'>
            <div className='ignite_text'>
              <div className="ignite-text-heading">
                STARTUP IGNITE
            </div>
              <div>
                Startup Ignite aims to spread awareness about entrepreneurship and startups in various cities PAN-India.
                Startup Ignite presents students across multiple cities the chance to widen their scope of knowledge in
                entrepreneurship and meet some of the best people in the field today. E-Cell IITR organises various events
                in collaboration with local entrepreneurship development organisations.
            </div>
              <div className="ignite-first-page-scroll">
                <div onClick={this.jum} className='icon-scroll'></div>
                <div id="ignite-first-page-scroll-child"><p> SCROLL DOWN</p></div>
              </div>
            </div>
          </div>

          <div className='ignite'>

            <div className='ignite_events'>

              <center>

                <div className='ignite_head'>EVENTS</div>

                <span className='ignite_event_unit'>

                  <div>
                    <img src={case1} alt='case study' />
                  </div>

                  <span>
                    Case Study
                                </span>

                </span>

                <span className='ignite_event_unit'>

                  <div>
                    <img src={case2} alt='case study' />
                  </div>

                  <span>
                    Workshop
                                </span>

                </span>

                <span className='ignite_event_unit'>

                  <div>
                    <img src={comp} alt='Competitiom ' />
                  </div>

                  <span>
                    Competitions
                                </span>

                </span>

                <span className='ignite_event_unit'>

                  <div>
                    <img src={lec} alt='Guest Leccture ' />
                  </div>

                  <span>
                    Guest Lecture
                                </span>

                </span>

                <span className='ignite_event_unit'>

                  <div>
                    <img src={panal} alt='Panal Discussion ' />
                  </div>

                  <span>
                    Panel Discussion
                                </span>

                </span>

              </center>

            </div>

            <div className='ignite_head'>VENUES</div>

            <div className='ignite_venus'>

              <center>
                <div className='ignite_venu_unit'>

                  <div>
                    <img alt='jaipur' src={jaipur} />
                  </div>

                  <span>
                    <p>Jaipur </p>
                    {/* <p>College: TBD</p>
                  <p>Date: TBD</p> */}
                  </span>

                </div>

                <div className='ignite_venu_unit'>

                  <div>
                    <img alt='Chandigarh' src={chandi} />
                  </div>

                  <span>
                    <p>Chandigarh </p>
                    {/* <p>College: TBD</p>
                  <p>Date: TBD</p> */}
                  </span>

                </div>

                <div className='ignite_venu_unit'>

                  <div>
                    <img alt='Dehradun' src={deh} />

                  </div>

                  <span>
                    <p>Dehradun </p>
                    {/* <p>College: TBD</p>
                  <p>Date: TBD</p> */}
                  </span>

                </div>

                <div className='ignite_venu_unit'>

                  <div>
                    <img alt='Gurugran ' src={guru} />

                  </div>

                  <span>
                    <p>Gurugram </p>
                    {/* <p>College: TBD</p>
                  <p>Date: TBD</p> */}
                  </span>

                </div>

                <div className='ignite_venu_unit'>

                  <div>
                    <img alt='Noida ' src={nodia} />

                  </div>

                  <span>
                    <p>Noida </p>
                    {/* <p>College: TBD</p>
                  <p>Date: TBD</p> */}
                  </span>

                </div>
              </center>

            </div>
          </div>

          <Footer />
        </div>
      </div>
    )
  }
}
