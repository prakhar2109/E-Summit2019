import React from 'react';
import CollegeSelect from './College'
import StateSelect from './state'


export default class RegisterIndex extends React.Component {
    constructor() {
        super();
        this.state = {
           
            college: '',
            state: '',
           
        }
    }
    onChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        if (name === 'contact' && value) {
            value = value.trim()
            value = value.substring(0, 12)
        }
        this.setState({ [name]: value });
    }


    render(){
        return(

                <div>
                                <label>College</label>
                                <CollegeSelect onChange={college => this.setState({ college })} />
                                <label>College State</label>
                                <StateSelect onChange={state => this.setState({ state })} />

                </div>

        )
    }
}
