import React, { Component } from 'react';
import { BASE_URL } from "../../../../utils/urls"

export default class SmallEventData extends Component {
    render() {
        return (
            <React.Fragment>
                <p className="suignite-topic-heading">
                    {this.props.data && this.props.data.heading}
                </p>
                {this.props.data.para === "yes" ?
                    <p className="suignite-topic-para">
                        {this.props.data && this.props.data.paragraph}
                    </p>
                    : null}
                {this.props.data && this.props.data.bullets === "yes" ?
                    <ul>
                        {this.props.data && this.props.data.bullets_data && this.props.data.bullets_data.map((e, index) =>
                            <li key={index}>
                                {e.data}
                            </li>
                        )}
                    </ul>
                    : null
                }
                {this.props.data && this.props.data.array === "yes" ?
                    <div className="suignite-panelists-img-parent">
                        {this.props.data && this.props.data.array_data && this.props.data.array_data.map((e, index) =>
                            <div key={index} className="suignite-panelists-img-child">
                                <div className="suignite-panelists-img1" style={{
                                    backgroundImage: `url(${BASE_URL + e.photo})`
                                }}></div>
                                <div className="panelists-name">{e.name}</div>
                                <div className="panelists-company">{e.designation}, {e.company_name}</div>
                            </div>
                        )}
                    </div>
                    : null}
            </React.Fragment >
        );
    }
}
