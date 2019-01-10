import React, { Component } from 'react'
import './../../css/payment/workshops.css'

class Workshop extends Component{
    constructor(){
        super()
        this.state={
            
        }
    }
    render(){
        let {workshopName,workshopFee} = this.props
        // let workshopName = 'workshop 1'
        // let workshopFee  = 500
        
        return(
            <div className='capaymentwv-workshopmappingelement'>
                
                <div className="capaymentwv-workshop-spaceaboutcolon">{workshopName}</div> :<div className="capaymentwv-space"></div>Rs&nbsp;{workshopFee}
                 
            </div>
        )
    }
}
export default class Workshops extends Component{
    constructor(){
        super()
        
    }
    render() {
        let {workshops,noOfWorkshops} = this.props
        return (
            <React.Fragment>
                {noOfWorkshops ? workshops.map((workshop,i) => {
                    return   <Workshop workshopName={workshop.name} workshopFee={workshop.cost} key={i} ></Workshop>
                }) : null
                }
            </React.Fragment>
        ) 
    }
}