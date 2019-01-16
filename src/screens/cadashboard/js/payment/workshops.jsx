import React, { Component } from "react";
import "./../../css/payment/workshops.css";

class Workshop extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    let { workshopName, workshopFee } = this.props;
    // let workshopName = 'workshop 1'
    // let workshopFee  = 500

    return (
      <div className="capaymentwv-workshopmappingelement">
        <div className="capaymentwv-workshop-spaceaboutcolon">
          {workshopName}
        </div>{" "}
        :<div className="capaymentwv-space" />Rs&nbsp;{workshopFee}
      </div>
    );
  }
}
export default class Workshops extends Component {
  constructor() {
    super();
  }
  render() {
    let { workshops, noOfWorkshops } = this.props;

    return (
      <React.Fragment>
        {noOfWorkshops
          ? workshops.map((workshop, i) => {
              if (workshop.event_type === "WRK") {
                return (
                  <Workshop
                    workshopName={workshop.name}
                    workshopFee={workshop.cost}
                    key={i}
                  />
                );
              } else return null;
            })
          : null}
      </React.Fragment>
    );
  }
}
