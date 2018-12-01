import React, { Component } from 'react';

import CreatableSelect from 'react-select/lib/Creatable';

const options = [
"46 GOVERNMENT COLLEAGE, CHANDIGARH",
"A.B.N SENIOUR SECONDERY BUBLIC SCHOOL",
"A.R.S.D",
"AACHARYA NARENDRA DEV COLLEGE",
"AARYAN COLLEGE AJMER",
"AATMA RAM SANATAN DHARMA",
"ABC UNIVERSITY",
"ABE'S INSTITUTE OF TECHNOLOGY GHAZIABAD",
"ABHISHEKGANOTRA1997@GMAIL.COM",
"ABN SCHOOL",
"ABV-IIITM GWALIOR",
"ACHARYA NARENDRA DEV COLLEGE UNIVERSITY OF DELHI",
"ACSIR",
"AIIMS RISHIKESH",
"AIR FORCE",
"AISSMS IOIT",
"AJAY KUMAR GARG ENGINEERING COLLEGE GZB",
"ALLAHABAD UNIVERSITY",
"AMBEDKAR INSTITUTE OF ADVANCED COMMUNICATION TECHNOLOGIES AND RESEARCH",
"AMITY BUSINESS SCHOOL , NOIDA",
"AMITY COLLEGE OF COMMERCE AND FINANCE",
"AMITY GURGAON",
"AMITY INSTITUTE OF BIOTECHNOLOGY",
"AMITY INSTITUTE OF ORGANIC AGRICULTURE",
"AMITY LAW SCHOOL DELHI, IP UNIVERSITY",
"AMITY NOIDA",
"AMITY SCHOOL OF COMMUNICATIONS",
"AMITY SCHOOL OF ENGINEERING AND TECHNOLOGY BRIJWASAN",
"AMITY UNIVERSITY GWALIOR, MADHYA PRADESH",
"AMITY UNIVERSITY HARYANA",
"AMITY UNIVERSITY LUCKNOW UTTAR PRADESH",
"AMITY UNIVERSITY RAJASTHAN",
"AMRAPALI INSTITUTE OF TECHNOLOGY AND SCIENCES",
"AMS COLLEGE OF ENGINEERING",
"AMU",
"ANSAL  SCHOOL OF ARCHITECTURE",
"ANSAL INSTITUTE OF TECHNOLOGY AND MANAGEMENT LUCKNOW",
"APEX INSTITUTE OF MANAGMENT AND SCIENCE",
"ARCHITECTURE AND PLANNING",
"ARMY INSTITUTE OF FASHION AND DESIGN BANGALORE",
"ARYABHATTA COLLEGE(DELHI UNIVERSITY)",
"ARYAN COLLEGE OF TECHNOLOGY, AJMER",
"ASD",
"ASIAN ACADEMY OF FILM AND TELIVISION",
"ASMS",
"ASSAM ENGINEERING COLLEGE",
"ATMA RAM SNATAN DHARMA COLLEGE",
"AUMP",

].map(college => ({
    value: college,
    label: college,
}));

const customStyles = {
    option: (base, state) => ({
        ...base,
        borderBottom: '1px solid black',
        color: 'black',
        padding: 10,
    }),
    control: () => ({
        width: '100%',
        display: 'flex',
        borderBottom: '#BEBEBE 2px solid',
    }),
    input: (base) => ({
        ...base,
        marginTop: '3px',
        paddingTop: '5px',
        color: 'white',
        fontSize: '14px',
        overflow: 'hidden'
    }),
    menuList: (base) => ({
        ...base,
        height: '20vh'
    }),
    dropdownIndicator: (base) => ({
        ...base,
        fontWeight: '600',
        color: 'white',
    }),
    clearIndicator: () => ({
        fontWeight: '600',
        color: 'white'
    }),
    placeholder: (base) => ({
        ...base,
        fontSize: '14px',
        color: 'white',
        fontWeight: '600',
    }),
    valueContainer: () => ({
        color: 'white',
        fontWeight: '600',
        opacity: '0.8',
        width: 'calc(100% - 40px)',
    }),
    singleValue: (base, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        return {
            ...base,
            opacity,
            transition: 'opacity 300ms',
            color: 'white',
            fontWeight: '400',
            fontSize: '14px'
        };
    }
}

export default class CollegeSelect extends Component {
    handleChange = (newValue) => {
        if (newValue && newValue.value) {
            this.props.onChange(newValue.value);
        }
    }

    render() {
        return (
            <CreatableSelect
                // styles={customStyles}
                isClearable
                onChange={this.handleChange}
                options={options}
            />
        );
    }
}