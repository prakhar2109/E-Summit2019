import React, { Component } from 'react'
import '../css/catask.css'
import axios from "axios"
import { normalizeUnits } from 'moment';
const baseurl="http://192.168.1.134:8000" 
export default class Catask extends Component{
    constructor(){
        super()
        this.state={
            isfileUploaded:false,
            fileUploaded:null,
        }
    }
    componentDidMount = () => {

        // const token = localStorage.getItem('ca_token')
        let token="2a495f85989e77404b1b3ba329ee861975e7c949" //for devonly
        axios.get(baseurl+'/api/user/profile', { 'headers': { 'Authorization': `Token ${token}` } })
        .then(res => {
            if (res && res.data && res.data) {
                console.log(res.data, "res.data")
                this.setState({
                    task: res.data
                })
            }
        })
            .catch(function (response) {
                alert(response);
            });
    }
    fileUploadHandler = (file)=>{
        let name = document.getElementById('fileInput{e.id}')
        if(name.files.item(0)){
        // alert('Selected file ' + name.files.item(0).name)
        
        let fileUploaded = file
        let isfileUploaded = true
        this.setState({
            fileUploaded,
            isfileUploaded
        },()=>{console.log(this.state.isfileUploaded)})
        document.getElementById('nameOfFileUploaded').innerHTML=name.files.item(0).name;
        }
    }

    render(){
        return(

            <div className="taskparent">
              <div className="taskchildheaderrow">
                <div className="taskchild-weeklyuploads">
                Weekly Uploads
                </div>
                <div className="taskchild-line">
                
                </div>
                <div className="taskchild-dates">
                23 September - 30 September 2018
                </div>
              </div>
              <div className="taskchildrow">
              
              {/* {this.state.task && this.state.task.map((e, index) => */}
                    
                <div className="taskchild">
                
                    <div className="taskchild-body">
                        <div className="taskchild-heading">
                        {/* Task {e.id} */}Task 1
                        </div>

                        <div className="taskchild-description">
                        {/* {e.description} */}Description about what is to be done in the task
                        </div>
                        <div className="taskchild-fileupload">
                        <input id="fileInput{e.id}" type='file' onChange={(e)=>this.fileUploadHandler(e.target.files)}/>
                        <p id="nameOfFileUploaded"></p>
                        </div>
                    </div>
                </div>

                {/* )} */}
                
              </div>
            </div>
        )
    }
} 