import React, { Component } from 'react'
import "../css/invitebenefits.css";

class InviteBenefits extends Component{
    constructor(){
        super()
        this.state={
            
        }
    }
    render(){
        
        return(
            <React.Fragment>
                <p>&#8226; {this.props.discountStatement}</p>
            </React.Fragment>
        )
    }
}
export default class CriteriaMapping extends Component{
    constructor(){
        super()
        this.state={
            noOfCriterias:10,
            criteria:["20 % Off on getting 10 invites successfully who paid the fee.","20 % Off on getting 10 invites successfully who paid the fee.","20 % Off on getting 10 invites successfully who paid the fee.","20 % Off on getting 10 invites successfully who paid the fee.","20 % Off on getting 10 invites successfully who paid the fee.","20 % Off on getting 10 invites successfully who paid the fee.","20 % Off on getting 10 invites successfully who paid the fee.","20 % Off on getting 10 invites successfully who paid the fee.","20 % Off on getting 10 invites successfully who paid the fee.","20 % Off on getting 10 invites successfully who paid the fee.","20 % Off on getting 10 invites successfully who paid the fee."],
        }
    }
    render() {
        return (
            <React.Fragment>
                {this.state.noOfCriterias ? this.state.criteria.map((criteria,i) => {
                    return   <InviteBenefits discountStatement={criteria} key={i} ></InviteBenefits>
                }) : null
                }
            </React.Fragment>
        ) 
    }
}