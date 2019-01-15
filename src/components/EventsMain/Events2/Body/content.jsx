import React, { Component } from 'react';
import SmallEvent from "./smallevent"

export default class ContentIndex extends Component {
    render() {
        console.log('content', this.props)

        return (
            <React.Fragment>
                {this.props.data && this.props.data.map((body, index) =>
                    body.sub_event_name === this.props.active ?
                        <div key={index}>
                            <div className="suignite-parent-child2-applyparent">
                                <div className="suignite-parent-child2-applyparent-heading">
                                    Apply for {this.props.event_name} in {body.sub_event_name}
                                </div>
                                {console.log(body.sub_event_reg_url)}
                                <a href={body.sub_event_reg_url} target="_blank">
                                    <button id="suignite-parent-child2-applyparent-button">
                                        APPLY
                                    </button>
                                </a>
                            </div>

                            {this.props.data && this.props.data.map((e, index) =>
                                e.sub_event_name === this.props.active && <SmallEvent key={index} data={e.detail} />
                            )}
                        </div>
                        : null
                )}
            </React.Fragment>
        );
    }
}

