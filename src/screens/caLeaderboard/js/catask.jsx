import React, { Component } from 'react'
import '../css/catask.css'
import axios from "axios"
const baseurl="http://192.168.1.134:8000" 
export default class Catask extends Component{
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


    render(){
        return(

            <div className="taskparent">
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
                    </div>
                </div>

                )}
                
              </div>
            </div>
        )
    }
} 