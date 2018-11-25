import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'
import Hamburger from './hamburger'
import './css/main.css' 
import ecell from './static/image.svg'
import esummit from './static/esummit.png'

export default class ComingSoon extends Component {
  render () {
    return (
      <div className='header'>

        <span className='ecell_logo'>
          <a href='http://ecelliitr.org' target='_blank'><img src={ecell} alt='Ecell Logo' /> </a>
        </span>

        <span className='esummit_logo'>
          <NavLink to='/'> <img src={esummit} alt='Esummit Logo' /></NavLink>
        </span>

        <span className='links'>
          {/* <NavLink to = "/login"> Campus Ambassador</NavLink> */}
          <NavLink to='/ignite'> Startup Ignite</NavLink>

        </span>

     

        <span className='mobile_menu'>

             <Hamburger/>

        </span> 

      </div>
    )
  }
}
