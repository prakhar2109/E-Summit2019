import React, {Component} from 'react';
import "./css/faq_unit.scss"
class SingleFAQ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: 1
        };
    }
    toggle = (e, id) => {
        if (this.state.show === 1) {
            document
                .getElementById(id)
                .style
                .display = 'block';

            var qid = 'q' + id;
            var iid = 'i' + id;
            document
                .getElementById(qid)
                .style
                .background = '#F7F8F9';
            document
                .getElementById(iid)
                .classList
                .add('fa-times-circle');

            this.setState({show: 0});
        } else {
            document
                .getElementById(id)
                .style
                .display = 'none';
            qid = 'q' + id;
            iid = 'i' + id;
            document
                .getElementById(qid)
                .style
                .background = 'white';
            document
                .getElementById(iid)
                .classList
                .remove('fa-times-circle');
            this.setState({show: 1});
        }
    };
    render() {
        let { update } = this.props;
        return (
            <div
                onClick={(e) => this.toggle(e, update.id)}
                key={update.id}
                className="faq_unit">
                <div className="question" id={'q' + update.id}>
                    {update.question}
                    <i id={'i' + update.id} className="fas fa-plus-circle"></i>
                </div>
                <div className="answer" id={update.id}>
                    {update.answer}
                </div>
            </div>
        );
    }
}

export default SingleFAQ;