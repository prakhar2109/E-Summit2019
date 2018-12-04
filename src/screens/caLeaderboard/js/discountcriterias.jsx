import React, { Component } from 'react'
import "../css/discountcriterias.css";

class DiscountCriteria extends Component{
    constructor(){
        super()
        this.state={
            
        }
    }
    render(){
        
        return(
            <React.Fragment>
                <p>&#8226;{this.props.discountStatement}</p>
            </React.Fragment>
        )
    }
}
export default class CriteriaMapping extends Component{
    constructor(){
        super()
        this.state={
            noOfCriterias:11,
            criteria:['mdm','snkks','dg0','dg','sg','sgsg','sg','gf','fhhf','sfsf','sgsg'],
        }
    }
    render() {
        return (
            <React.Fragment>
                {this.state.noOfCriterias ? this.state.criteria.map((criteria) => {
                    return <DiscountCriteria discountStatement={criteria} ></DiscountCriteria>
                }) : null
                }
            </React.Fragment>
        ) 
    }
}