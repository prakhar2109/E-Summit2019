import React, { Component } from 'react'
import Task from './task'
import './../css/TaskIndex.css'

export default class IndexNew extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [{
                description: "bsjbdjabdjabsdljab"

            }

            ]
        }


    }
    render() {
        return (
            <div id="tasks">
                {this.state.tasks ? this.state.tasks.map((tasks, number) => {
                    return <Task key={tasks.number} tasks={tasks} number={tasks.number}></Task>//have to wite the key
                }) : null
                }
            </div>
        )
    }
}