import React, { Component } from 'react'
import "../css/cacontigent.css";
import { Modal } from 'antd';
import axios from "axios";
import { BASE_URL } from "../../../utils/urls";



export default class Cacontigent extends Component {
	constructor() {
		super();
		this.state = {
			contigent: true,

			loading: false,
			data:[],
			no_contingent: [
				{ esummit_id: "" },
				{ esummit_id: "" },
				
			

			],
			es_iddata:[],
		}
	}
	componentDidMount = () => {
		let token = localStorage.getItem("user_token");
		console.log(token)
		axios
		  .get(BASE_URL + "/v1/api/user/profile", {
			headers: {
			  Authorization: `Token ${token}`,
			},
		  })
		  .then(res => {
			this.setState({
			  data: res.data,
			});
		  })
		  .catch(response => {
			alert(response);
		  });
	  };
	createContigent = () => {
		document.getElementById("createcontigent").style.display = "none";
		this.setState({
			visible: true,
		});
	}
	editContigent = () => {

		this.setState({
			visible: true,
		});

		let token = localStorage.getItem("user_token");
		
		
		console.log(token)
		axios
		  .get(BASE_URL + "/v1/api/contingent/info/", {
			headers: {
			  Authorization: `Token ${token}`,
			},
		  })
		  .then(res => {
			this.setState({
				es_iddata: res.data.members,

			});
		console.log(this.state.es_iddata)
			

		  })
		  .catch(response => {
			alert(response);
		  });
		 
		  
		 
		  

	}
	createContigentSubmit=()=>{

		console.log(this.state.contigent)
		this.handleCancel();
		this.setState({contigent:false})
	}

	addContingent = (e) => {


		this.setState((prevState) => ({
			no_contingent: [...prevState.no_contingent, { "esummit_id": "" }],
		}));


	}
	viewMore=()=>{
		document.getElementById("cacontigent-joinparent-form-hidelist").style.display = "block";
		document.getElementById("viewless").style.display = "block";
		document.getElementById("viewmore").style.display = "none";
		document.getElementById("cacontigent-joinparent").style.background = "#FFFAF4";



	}
	viewLess=()=>{
		document.getElementById("cacontigent-joinparent-form-hidelist").style.display = "none";
		document.getElementById("viewless").style.display = "none";
		document.getElementById("viewmore").style.display = "block";
		document.getElementById("cacontigent-joinparent").style.background = "#FFFFFF";


	}
	yourContigent() {
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
		let contigent = this.state.contigent;
		const { visible } = this.state;
		const modalstyle = {
			left: "20vw",
			margin: "0",
			top: "5vh",
		}

		const bodyStyle = {
			padding: 0,
		}
		let {data}=this.state;
		let no_contingents=[];
		const width = 900;
		no_contingents= 	this.state.es_iddata && this.state.es_iddata.map(e=>{
			
				return  {esummit_id: e.esummit_id}
			
		})
		// this.setState({no_contingent:no_contingents});

		console.log(no_contingents,"ssssssssssss")

		console.log(this.state.no_contingent,"aaaaaaaaaaaaa")

			return (
				<div>
				{ this.state.contigent?
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
						<div className="cacontigent-joinparent" id="cacontigent-joinparent">
							<div className="cacontigent-heading">
								Join Contingent
							</div>
							<div className="cacontigent-joinparent-form" id="cacontigent-joinparent-form-viewlist">
								<div className="cacontigent-joinparent-form-invites">Invites :<strong> 4 </strong> </div>
								<div id="viewmore" className="cacontigent-Viewoption" onClick={this.viewMore}>View List</div>
								<div id="viewless" className="cacontigent-Viewoption" onClick={this.viewLess}>Hide List</div>

							</div>
							

						</div>
						<div className="cacontigent-joinparent-formlist" id="cacontigent-joinparent-form-hidelist">
								<table id="ca02">
									<tbody>
									<tr id="cacontignet-table-row1">
										<th id="cacontignet-th-1">LEADER NAME</th>
										<th id="cacontignet-th-2">E-SUMMIT ID</th>
										<th id="cacontignet-th-3">JOINED</th>
										<th id="cacontignet-th-4"></th>
										<th id="cacontignet-th-5"></th>

									</tr>

									
									<tr id="cacontignet-table-row2">
											<td>Anshul Tembhurne</td>
											<td>ES172288</td>
											<td>4</td>
											<td><button id="cacontignet-td-b01">ACCEPT</button></td>
											<td><button id="cacontignet-td-b02">DECLINE</button></td>

									</tr>
								
										
									</tbody>
								</table>
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
								Here are the steps to make a contingent<br />
								To make a contingent, first everybody has to do individual registration.<br />
								To make a contingent, first everybody has to do individual registration.
							</div>
						</div>
						<div className="cacontigent-parent-heading2">
							Perks
               			 </div>
						<div className="cacontigent-line1"></div>
						<div className="cacontigent-Aboutcontigent-parent">
							<div className="cacontigent-heading">
								Benefits of Contingent model
							</div>
							<div className="cacontigent-aboutparent-para">
								The following criteria were used to decide the waiver in fees for all the participants.
							</div>

							<div className="cacontigent-aboutparent-para">
								20 % Off on getting 10 invites successfully who paid the fee.
								20 % Off on getting 10 invites successfully who paid the fee.
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

							<div className="createcontigent-body">
								<div className="cacontigent-aboutparent-para">
									If you create a contingent you become leader of the contingent.
								</div>

								<div className="cacontigent-aboutparent-head">
									Leader
								</div>

								<div className="contigent-adduserform">
									<div className="contigent-adduserform-child">
										<div className="contigent-adduserform-heading">E-Summit ID</div>
										<div id="contigent-adduserform-input" required >{data.esummit_id}</div>
									</div>
									<div className="contigent-adduserform-child">
										<div className="contigent-adduserform-heading"> Name</div>

										<div id="contigent-adduserform-input" >{data.name}</div>
									</div>
								</div>
								<div className="cacontigent-aboutparent-head">
									Members
								</div>
								{this.state.no_contingent.map((id, e) => {	
									{console.log(e,"[[[[[[[[[[[[")}

									return <AddUserForm form={id} index={e}/>
								})}


								

								<div className="cacontigent-aboutparent-head-addmember" onClick={this.addContingent}> Add member</div>
								 <button className="cacontigent-finish" onClick={this.createContigentSubmit}>FINISHS</button>
							</div>
						</div>
					</Modal>

				</div>
			
		
		:
			
				<div className="cacontigent-parent">
					<div className="cacontigent-innerparent" id="congratscontigent">
						<div className="cacontigent-parent-heading1">
							Create Contingent
						</div>
						<div className="cacontigent-line1"></div>



						<div className="cacontigent-congratsparent">
							<div className="cacontigent-congratsparent-child1">
								<div><svg width="25" height="25" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M27.9224 12.6543L18.2446 22.5078L13.2885 17.5283L10.6172 20.1997L18.4321 28.0029L30.9921 15.8177L27.9224 12.6543Z" fill="#70BF48" />
									<path d="M20.4258 0C9.37716 0 0.425781 8.95138 0.425781 20C0.425781 31.0486 9.37716 40 20.4258 40C31.4744 40 40.4258 31.0486 40.4258 20C40.4141 8.95138 31.4627 0 20.4258 0ZM20.4258 36.3679C11.3807 36.3679 4.04617 29.0334 4.04617 19.9883C4.04617 10.9432 11.3807 3.60867 20.4258 3.60867C29.4709 3.62039 36.7937 10.9432 36.8054 19.9883C36.7937 29.0451 29.4709 36.3679 20.4258 36.3679Z" fill="#70BF48" />
								</svg></div>
								<div>Congrats! Contingent succesfully created</div>
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
								<div>Your Contingent</div>
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
							Here are the steps to make a contingent<br />
							To make a contingent, first everybody has to do individual registration.<br />
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

							<div className="createcontigent-body">
								<div className="cacontigent-aboutparent-para">
									If you create a contingent you become leader of the contingent.
								</div>

								<div className="cacontigent-aboutparent-head">
									Leader
								</div>

								<div className="contigent-adduserform">
									<div className="contigent-adduserform-child">
										<div className="contigent-adduserform-heading">E-Summit ID</div>
										<div id="contigent-adduserform-input" required >{data.esummit_id}</div>
									</div>
									<div className="contigent-adduserform-child">
										<div className="contigent-adduserform-heading"> Name</div>

										<div id="contigent-adduserform-input" >{data.name}</div>
									</div>
								</div>
								<div className="cacontigent-aboutparent-head">
									Members
								</div>
								{this.state.no_contingent.map((id, e) => {								
									return <AddUserForm form={id} />
								})}


								{console.log(this.state)}


								<div className="cacontigent-aboutparent-head-addmember" onClick={this.addContingent}> Add member</div>
								 <button className="cacontigent-finish" onClick={this.createContigentSubmit}>FINISHS</button>
							</div>
						</div>
					</Modal>


				</div>
							}
							</div>
			)
	}
}


class AddUserForm extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			es_id:props.form.esummit_id,
			name:"",
		}
	}

	onChange=(e)=>{
		this.setState({
			es_id: e.target.value,
		   },);
		   this.handleClick(e.target.value)
		
	}
	handleSubmit=()=>{
		let token = localStorage.getItem("user_token");
		let data = {
			"esummit_id" : this.state.es_id
		}
		console.log(data,"handleSubmit");
		axios
		({
			method: "post",
			url: BASE_URL + "/v1/api/contingent/member/invite/",
			data: data,
			  headers: {
				Authorization: `Token ${token}`,
			  }
	  
		  })
		  .then(res => {
		
		  })
		  .catch(response => {
				
		  });
	}
	handleClick=(es_id)=>{
		let token = localStorage.getItem("user_token");
		let data = {
			"esummit_id" : es_id
		}
		console.log(data,"handleClick");
		axios
		({
			method: "post",
			url: BASE_URL + "/v1/api/contingent/user/name/",
			data: data,
			  headers: {
				Authorization: `Token ${token}`,
			  }
	  
		  })
		  .then(res => {
			if (res.status === 200) {
			this.setState({
			 name: res.data.name,
			});
			
			}
		
			// console.log(res,"hhhhhhhhhhhhhhhhhh")
		  })
		  .catch(response => {
			
				this.setState({
					name: "",
				   });	
			
		  });
		
	}
	
	render() {
		
		return (
			<div>
				
				<form>
					<div className="contigent-adduserform">
						<div className="contigent-adduserform-child">
							<div className="contigent-adduserform-heading">E-Summit ID</div>
							<input type="text" id="contigent-adduserform-input"  defaultValue={this.props.form.esummit_id} onChange={e => {

   this.onChange(e)

}} />
{/* // {console.log(this.props.form,"jjjjjjjjjjj")} */}
 {console.log(this.props.form.esummit_id,"es_id")} 

						</div>
						<div className="contigent-adduserform-child">
							<div className="contigent-adduserform-heading"> Name</div>

							<div id="contigent-adduserform-input" >{this.state.name}</div>
						</div>

						<div className="contigent-adduserform-button"> <div className="contigent-adduserform-buttonb01" id={this.props.index} onClick={this.handleSubmit} >Submit</div></div>
					</div>
				</form>

			</div>
		)
	}
}
