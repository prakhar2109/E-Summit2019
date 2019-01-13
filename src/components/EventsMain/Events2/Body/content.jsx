import React, { Component } from 'react';
import SmallEvent from "./smallevent"

export default class ContentIndex extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.data.map((body, index) =>
                    body.sub_event_name === this.props.active ?
                        <div key={index}>
                            <div className="suignite-parent-child2-img">
                                Comming Soon
				            </div>
                            <div className="suignite-parent-child2-applyparent">
                                <div className="suignite-parent-child2-applyparent-heading">
                                    Apply for {this.props.event_name} in {body.sub_event_name}
                                </div>
                                <a href={body.sub_event_reg_url} >
                                    <button id="suignite-parent-child2-applyparent-button">
                                        APPLY
                                    </button>
                                </a>
                            </div>

                            {this.props.data.map((e, index) =>
                                <SmallEvent key={index} data={e.detail[0]} />
                            )}
                        </div>
                        : null
                )}
            </React.Fragment>
        );
    }
}

