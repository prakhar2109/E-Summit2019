import React, { Component } from 'react';

import Select from 'react-select';

const options = [
"Andaman and Nicobar Islands",
"Andhra Pradesh",
"Arunachal Pradesh",
"Assam",
"Bihar",
"Chandigarh",
"Chhattisgarh",
"Dadra and Nagar Haveli",
"Daman and Diu",
"Delhi",
"Goa",
"Gujarat",
"Haryana",
"Himachal Pradesh",
"Jammu and Kashmir",
"Jharkhand",
"Karnataka",
"Kerala",
"Lakshadweep",
"Madhya Pradesh",
"Maharashtra",
"Manipur",
"Meghalaya",
"Mizoram",
"Nagaland",
"Odisha",
"Puducherry",
"Punjab",
"Rajasthan",
"Sikkim",
"Tamil Nadu",
"Telangana",
"Tripura",
"Uttar Pradesh",
"Uttarakhand",
"West Bengal"
].map(state => ({
    value: state,
    label: state,
}));


export default class StateSelect extends Component {
    handleChange = (newValue) => {
        if (newValue && newValue.value) {
            this.props.onChange(newValue.value);
        }
    };
    
    render() {
        return (
            <Select
                // styles={customStyles}
                isClearable
                onChange={this.handleChange}
                options={options}
            />
        );
    }
}