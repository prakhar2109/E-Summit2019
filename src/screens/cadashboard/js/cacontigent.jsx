import React, { Component } from 'react'
import "../css/cacontigent.scss";
import { Modal} from 'antd';




export default class Cacontigent extends Component {
    constructor() {
        super();
        this.state = {
			loading: false,
			
			no_contingent: [
				{"esummit_id" : "A"},
			
			]
        }
    }
    createContigent=()=> {
        document.getElementById("createcontigent").style.display = "none";
	 this.setState({
            visible: true,
        });
       	
	
    } 
  
	addContingent = (e) => {

 
		this.setState((prevState) => ({
			no_contingent: [...prevState.no_contingent,{"esummit_id" : ""}],
		}));

	 
	  }


    handleCancel = () => {
        this.setState({ visible: false });
    }
    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 300);
    }
    render() {
	const { visible } = this.state;
        const modalstyle = {
            left: "20vw",
            margin: "0",
            top: "5vh",
        }

        const bodyStyle = {
            padding: 0,
        }

        const width = 900;
        return (
            <div className="cacontigent-parent">
                <div className="cacontigent-parent-heading1">
                    Create Contingent
                </div>
                <div className="cacontigent-line1"></div>
			<div className="cacontigent-innerparent" id="createcontigent">
				<div className="cacontigent-createparent" >
				<div className="cacontigent-heading">
				Create Contingent
				</div>
				<div className="cacontigent-create-img" onClick={this.createContigent}>
				</div>
				</div>
				 <div className="cacontigent-parent-heading2">
                   		 Earned Coupons
               			 </div>
				 <div className="cacontigent-line1"></div>
				<div className="cacontigent-joinparent">
					<div className="cacontigent-heading">
					Join Contingent
					</div>
					<div className="cacontigent-joinparent-form">
						<div className="cacontigent-joinparent-form-child1">
							<div className="cacontigent-joinparent-form-heading">
							Contingent ID
							</div>
							
							<input type="text" className="cacontigent-joinparent-form-input"/>
							
						</div>
						<div className="cacontigent-joinparent-form-child2">
							<div className="cacontigent-joinparent-form-heading">
							Password
							</div>
							
							<input type="text" className="cacontigent-joinparent-form-input"/>
							
						</div>
						<div className="cacontigent-joinparent-form-child3">
							<button className="cacontigent-joinparent-form-button">JOIN
							</button>
						</div>
					</div>
					
				</div>
				 <div className="cacontigent-parent-heading2">
                   		 About Contigent
               			 </div>
				 <div className="cacontigent-line1"></div>
				 <div className="cacontigent-Aboutcontigent-parent">
					<div className="cacontigent-heading">
					What is Contingent?
					</div>
					<div className="cacontigent-aboutparent-para">
					A group of people sharing a common feature, forming part of a larger group.
					</div>
					<div className="cacontigent-heading cacontigent-headingabout">
					Steps to make a contingent
					</div>
					<div className="cacontigent-aboutparent-para">
					Here are the steps to make a contingent<br/>
					To make a contingent, first everybody has to do individual registration.<br/>
					To make a contingent, first everybody has to do individual registration.
					</div>
				</div>
			</div>



			 <Modal
		            visible={visible}
		            style={modalstyle}
		            width={width}
		            bodyStyle={bodyStyle}
		            onOk={this.handleOk}
		            closable={false}
		            footer={null}

		        >
				<div className="Createcontigent-parentbody" id="submitcontigent">
					<div className="cacontigent-createparent" id="cacontigent5789" >
						<div className="cacontigent-heading">
						Create Contingent
						</div>
					</div>

					<div className = "createcontigent-body"> 
						<div className="cacontigent-aboutparent-para">
							If you create a contingent you become leader of the contingent.
						</div>

						<div className = "cacontigent-aboutparent-head">
							Leader
						</div>

						{this.state.no_contingent.map((id, e) => {
							
							 
							id.esummit_id = "test";
							console.log(this.state)
							return <AddUserForm form = {id}/>


						})} 

						{console.log(this.state)}


						<div onClick  = {this.addContingent}> Add Contingent</div>
						
					</div>
			</div>
			</Modal>
			
            </div>
        )
    }
} 


class AddUserForm extends Component {
  render() {
	return (
	  <div>

		  <form className = "AddUserForm">

		  	<div> 
			  <label>E-Summit ID</label>
			</div>
 
		  	<div> 
			  <label>Name</label>
			</div>

			<div>
			  <input className  = "AddUserForm_input" type = "text" required /> 
			</div>

			<div> 
				 
				<input className  = "AddUserForm_input" type = "text" required /> 
				<input className = "AddUserForm_submit" type = "submit" />

			</div>

		
		  </form>

		  <div className ="AddUserForm_error">Incorrect ID</div>
		
	  </div>
	)
  }
}
