import React, {Component} from 'react';
import '../css/catask.css';
import axios from "axios";
import {BASE_URL} from './../../../utils/urls';
let token = localStorage.getItem('user_token')
export default class CATaskBoard extends Component {

    constructor() {
        super()
        this.state = {
            isfileUploaded: false,
            fileUploaded: null
        }
    }
    componentDidMount = () => {

        axios
            .get(BASE_URL + '/v1/api/task/list/', {
            'headers': {
                'Authorization': `Token ${token}`
            }
        })
            .then(res => {
                if (res && res.data) {
                    console.log(res.data, "res.data")
                    this.setState({tasks: res.data})
                }
            })
            .catch(function (response) {
                alert(response);
            })

    }

    render() {
        let {tasks} = this.state;
        let today = new Date();
        let dayToday = today.getDate();
        console.log(dayToday)
        return (

            <div className="taskparent">
                <div className="taskchildheaderrow">
                    <div className="taskchild-weeklyuploads">
                        Weekly Uploads
                    </div>
                    <div className="taskchild-line"></div>
                    <div className="taskchild-dates">
                        {dayToday ? '16 Dec - 23 Dec 2018' : '24 Dec - 31 Dec 2018'}
                    </div>
                </div>
                <div className="taskchildrow">

                    {tasks && tasks.map((e) => <CATask key={e.id} task={e}/>)}

                </div>
            </div>
        )
    }
}

class CATask extends Component {
    constructor() {
        super()
        this.state = {
            isfileUploaded: false,
            fileUploaded: null
        }
    } 
    state = {
        visible: true
    }

    fileUploadHandler = (file, task) => {
        let name = document.getElementById(`fileInput${task.id}`)
        if (name.files.item(0)) {

            let fileUploaded = file
            let isfileUploaded = true
            this.setState({
                fileUploaded,
                isfileUploaded
            }, () => {})
            let formData = new FormData();
            formData.append("file", file[0]);
            formData.append("task", task.id);
            axios
                .post(BASE_URL + `/v1/api/task/${task.id}/submit/`, formData, {
                headers: {
                    'Authorization': `Token ${token}`,
                    'Content-Type': 'multipart/formdata '
                }
            })
                .then(() => {

                    // alert(resData) //do something with this and show the user that the file has
                    // been uploaded !
                    document
                        .getElementById(`nameOfFileUploadedForTask${task.id}`)
                        .innerHTML = name
                        .files
                        .item(0)
                        .name;
                    document
                        .getElementById(`filestatus${task.id}`)
                        .innerHTML = "File Uploaded ";
                })

        }
    }
    render() {
        let task = this.props.task;
        return (
            <div className="taskchild">

                <div className="taskchild-body">
                    <div className="taskchild-heading">
                        {task.name}
                    </div>

                    <div className="taskchild-description">

                        {task.description}

                    </div>

                    <div className="taskchild-fileupload">

                        <input
                            id={`fileInput${task.id}`}
                            type='file'
                            className="filesvg"
                            onChange={(e) => this.fileUploadHandler(e.target.files, task)}/>
                        <div className="Selectfilesvg">
                            <p id={`nameOfFileUploadedForTask${task.id}`} className="taskName"></p>

                            <p id={`filestatus${task.id}`} className="taskName">{(task.sub === null || task.sub === undefined) ? 'Choose a File': 'File Uploaded'}</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}