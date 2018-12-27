import React from 'react';
import "./loader.scss";
import Loader from "./loader.gif";

export default class LoaderIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="cs-loader">


                <div className = "pc"> 
                    <img src = {Loader} />
                </div>

                <div className = "mobile">
                
                
                </div>
          
        </div>

        )
    }
}