import React, { Component } from 'react';
import SmallEventData from "./smalleventdata"
import Vector from '../Common/img/headVector.png';

export default class SmallEventIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                {this.props.data ?
                    <div className="suignite-parent-child2-panel">
                        {this.props.data && this.props.data.heading ?
                            <div>
                                < img className="suignite-vector" src={Vector} alt="vector" />
                                <div className="suignite-head1">{this.props.data.heading}</div>
                            </div>
                            : null}

                        {this.props.data && this.props.data.data && this.props.data.data.map((e, index) =>
                            <SmallEventData key={index} data={e} />
                        )}
                    </div>
                    : null}
            </React.Fragment>
        );
    }
}

