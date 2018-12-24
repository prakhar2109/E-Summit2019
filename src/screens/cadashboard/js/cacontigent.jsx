import React, { Component } from 'react'
import "../css/cacontigent.css";
import { Modal} from 'antd';




export default class Cacontigent extends Component {
    constructor() {
        super();
        this.state = {
			contigent:true,
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
     editContigent=()=> {
        
	 this.setState({
            visible: true,
        });
       	
	
    } 

  
	addContingent = (e) => {

 
		this.setState((prevState) => ({
			no_contingent: [...prevState.no_contingent,{"esummit_id" : ""}],
		}));

	 
	  }

	yourContigent(){
	 document.getElementById("congratscontigent").style.display = "none";
	  document.getElementById("yourcontigent").style.display = "block";
	
	
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
	let contigent=this.state.contigent;
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
		if(contigent){
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

						 <div className="contigent-adduserform">
							<div className="contigent-adduserform-child">
								  <div className="contigent-adduserform-heading">E-Summit ID</div>
								  <input type = "text" id="contigent-adduserform-input" required />
							</div> 
							<div className="contigent-adduserform-child">
								<div className="contigent-adduserform-heading"> Name</div>

								 <input type = "text" id="contigent-adduserform-input" />
							</div>   
						 </div>
						<div className = "cacontigent-aboutparent-head">
							Members
						</div>
						{this.state.no_contingent.map((id, e) => {
							
							 
							id.esummit_id = "test";
							console.log(this.state)
							return <AddUserForm form = {id}/>


						})} 

						{console.log(this.state)}


						<div className = "cacontigent-aboutparent-head-addmember" onClick  = {this.addContingent}> Add member</div>
						
					</div>
			</div>
			</Modal>
			
            </div>
		)
					}
		else
		{
			return(
				<div className="cacontigent-parent">
				<div className="cacontigent-innerparent" id="congratscontigent">
					<div className="cacontigent-parent-heading1">
					    Create Contingent
					</div>
		        		<div className="cacontigent-line1"></div>
				
				
				
					<div className="cacontigent-congratsparent">
						<div className="cacontigent-congratsparent-child1">
						Congrats! Contingent succesfully created
						</div>
						<div className="cacontigent-congratsparent-child2">
						Your contingent has been succesfully created Contingent No. CN 2 . A mail with the contingent no and unique password has been send to all members. Their names will be shown here as soon as they join the contingent. If you want to edit the members an edit option
						</div>
						<button onClick={this.yourContigent} id="cacontigent-congratsparent-b01">DONE</button>
					
					
					</div>
				</div>
				<div className="cacontigent-innerparent" id="yourcontigent">
					<div className="cacontigent-parent-heading1">
					    Contingent Details
					</div>
		        		<div className="cacontigent-line1"></div>
				
				
				
					<div className="cacontigent-congratsparent">
						<div className="cacontigent-congratsparent-child1">
						Your Contingent
						<div className="cacontigent-congratsparent-editcontigent" onClick={this.editContigent}>
						Edit
						</div>
						</div>
						<div className="cacontigent-congratsparent-child2">
						 <div className="cacontigent-congratsparent-child2-heading">
						Leader
						 </div>
						 <div className="cacontigent-congratsparent-child2-parent">
							 <div className="cacontigent-congratsparent-child2-name">
							Prakhar Agarwal
						 	 </div>
							 <div className="cacontigent-congratsparent-child2-id">
							ES172292
						 	 </div>
						 </div>
						<div className="cacontigent-congratsparent-child2-heading">
						Members
						 </div>
						 <div className="cacontigent-congratsparent-child2-parent">
							 <div className="cacontigent-congratsparent-child2-name">
							Anshul Tembhurne
						 	 </div>
							 <div className="cacontigent-congratsparent-child2-id">
							ES172292
						 	 </div>
						 </div>
						
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

						 <div className="contigent-adduserform">
							<div className="contigent-adduserform-child">
								  <div className="contigent-adduserform-heading">E-Summit ID</div>
								  <input type = "text" id="contigent-adduserform-input" required />
							</div> 
							<div className="contigent-adduserform-child">
								<div className="contigent-adduserform-heading"> Name</div>

								 <input type = "text" id="contigent-adduserform-input" />
							</div>   
						 </div>
						<div className = "cacontigent-aboutparent-head">
							Members
						</div>
						{this.state.no_contingent.map((id, e) => {
							
							 
							id.esummit_id = "test";
							console.log(this.state)
							return <AddUserForm form = {id}/>


						})} 

						{console.log(this.state)}


						<div className = "cacontigent-aboutparent-head-addmember" onClick  = {this.addContingent}> Add member</div>
						
					</div>
			</div>
			</Modal>
			
            </div>
			)
		}
    }
} 


class AddUserForm extends Component {
  render() {
	return (
	  <div>

		  <form>
			  <div className="contigent-adduserform">
				<div className="contigent-adduserform-child">
					  <div className="contigent-adduserform-heading">E-Summit ID</div>
					  <input type = "text" id="contigent-adduserform-input" required />
				</div> 
				<div className="contigent-adduserform-child">
					<div className="contigent-adduserform-heading"> Name</div>

					 <input type = "text" id="contigent-adduserform-input" />{/*{this.props.form.esummit_id = "tesghn"}*/}
				</div> 
		 
				 <div className="contigent-adduserform-button"> <input type = "submit" id="contigent-adduserform-buttonb01"/></div>
			  </div>
		  </form>
		
	  </div>
	)
  }
}
