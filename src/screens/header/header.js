import React, { Component } from 'react';

 

import "./css/main.css";
import ecell from "./static/image.svg"
import esummit from "./static/esummit.png"
 

 
export default class ComingSoon extends Component {
    render () {
        return ( 
            <div className ="header">

 
                <span className = "ecell_logo">
                   <img src = {ecell} alt = "Ecell Logo" />
               </span>

               <span className = "esummit_logo">
                    <img src = {esummit} alt = "Esummit Logo" />
               </span>

               <span className = "links">
               <a href = "#"> Campus Ambassador</a>
               <a href = "#"> Startup Ignite</a>
               
               </span>

               <span className = "mobile_menu">
              
                  
                        <i className="fas fa-bars"></i> 
                     
               </span>

            
            
                
            </div>
        );
    }
}