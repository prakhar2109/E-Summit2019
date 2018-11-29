import React, { Component } from 'react'
import '../css/catask.css'
import axios from "axios"
import { normalizeUnits } from 'moment';
const baseurl="http://warm-retreat-90641.herokuapp.com" 
export default class Catask extends Component{
    constructor(){
        super()
        this.state={
            isfileUploaded:false,
            fileUploaded:'baba',
        }
    }
    componentDidMount = () => {

        // const token = localStorage.getItem('ca_token')
        let token="bcf746263ad4cdcfda1abc2dfd80675a04382fd4" //for devonly
        axios.get(baseurl+'/v1/api/task/list/', { 'headers': { 'Authorization': `Token ${token}` } })
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
        alert('Selected file ' + name.files.item(0).name)
        let fileUploaded = file
        let isfileUploaded = true
        this.setState({
            fileUploaded,
            isfileUploaded
        },()=>{console.log(this.state.isfileUploaded)})
        let ptag = document.getElementById('nameOfFileUploaded').style.opacity=1;
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
              
            {this.state.task && this.state.task.map((e, index) =>
                    
                <div className="taskchild">
                
                    <div className="taskchild-body">
                        <div className="taskchild-heading">
                          Task {e.id}   
                        </div>

                        <div className="taskchild-description">
                       {e.description}   
                        </div>
                        <div className="taskchild-fileupload">
                        <input id="fileInput{e.id}" type='file' onChange={(e)=>this.fileUploadHandler(e.target.files)}/>
                        <p id="nameOfFileUploaded" onChange={this.fileUploadHandler}>
                            {this.state.fileUploaded} has been uploaded
                        </p>
                        </div>
                    </div>
                </div>

                 )} 
                
              </div>
            </div>
        )
    }
} 