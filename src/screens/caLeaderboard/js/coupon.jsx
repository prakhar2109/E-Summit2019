import React,{ Component } from 'react'
import './../css/coupon.css'

export default class Coupon extends Component {
    constructor(){
        super()
        this.state={
            noOfCoupons:4,
            cashback:['20','30','40','60'],
        }
    }
    render(){
        return(
            <React.Fragment>
                {this.state.noOfCoupons ? this.state.cashback.map((cashback) => {
                    return <SingleCoupon cashback={cashback} ></SingleCoupon>
                }) : null
                }
            </React.Fragment>
        )
    }
}
class SingleCoupon extends Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
            <div className="cacoupon-parent">
                <div className="cacoupon-toprow">
                    <input value={this.props.cashback} id="cacoupon-radiobtn" name="coupon" className="cacoupon-radiobtn" type="radio"></input>
                    <div className="cacoupon-couponcodewrapper">
                        {/* {this.props.couponId} */}GFDS
                    </div>

                </div>
                <div className="coupon-cashback">
                    {this.props.cashback}% Cashback
                </div>
                <div className="cacoupon-validtill">
                    Valid till 2nd December 2018
                </div>

            </div>
        )
    }
}