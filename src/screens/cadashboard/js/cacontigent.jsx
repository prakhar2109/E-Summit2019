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
			contingent_member: null,
			contingent_leader: null,

			contingent_data: [],
			loading: false,
			data: [],
			no_contingent: [
				{ esummit_id: "", name: "" },
				{ esummit_id: "", name: "" },
				{ esummit_id: "", name: "" },
				{ esummit_id: "", name: "" },
			],
			es_iddata: [],
			invitelist: [],
			invitesno: "0",
		}
	}
	componentDidMount = () => {
		let token = localStorage.getItem("user_token");
		let invites = 0;
		console.log(token)
		console.log(this.state.contigent)
		axios
			.get(BASE_URL + "/v1/api/user/profile", {
				headers: {
					Authorization: `Token ${token}`,
				},
			})
			.then(res => {
				console.log(res.data, "data")
				this.setState({
					data: res.data,
				});

			})
			.catch(response => {
				alert(response);
			});

		axios
			.get(BASE_URL + "/v1/api/contingent/info/", {
				headers: {
					Authorization: `Token ${token}`,
				},
			})
			.then(res => {
				if (res.status == 200) {
					this.setState({ contigent: false, contingent_data: res.data ,contingent_leader:true})
				}
			})
			.catch(response => {
				this.setState({ contigent: true })
			});

		axios
			.get(BASE_URL + "/v1/api/contingent/member/invite/list/", {
				headers: {
					Authorization: `Token ${token}`,
				},
			})
			.then(res => {
				if (res.status == 200) {
					res.data.map(e => {
						if (e.status == "P") {
							invites = invites + 1;
						}
						else if (e.status == "A") {
							console.log("dagfsdf")
							this.setState({ contigent: false, contingent_member: true })
						}
					})
					this.setState({ invitelist: res.data, invitesno: invites })

				}
			})
			.catch(response => {

			});
	};

	deleteContigent = () => {
		let token = localStorage.getItem("user_token");
		axios
			.get(BASE_URL + "/v1/api/contingent/delete/", {
				headers: {
					Authorization: `Token ${token}`,
				},
			})
			.then(res => {
				if (res.status == 200) {
					this.setState({ contigent: null })
					window.location.href = '/dashboard/contigent'
				}
			})
			.catch(response => {

			});
	}
	createContigent = () => {
		document.getElementById("createcontigent").style.display = "none";
		this.setState({
			visible: true,
		});
	}
	editContigent = () => {


		let token = localStorage.getItem("user_token");


		console.log(token)
		axios
			.get(BASE_URL + "/v1/api/contingent/info/", {
				headers: {
					Authorization: `Token ${token}`,
				},
			})
			.then(res => {

				this.setState(
					{
						es_iddata: res.data.members,


					});

				let no_contingent = this.state.es_iddata && this.state.es_iddata.map(e => {

					return { esummit_id: e.esummit_id, name: e.name }

				})
				this.setState({
					no_contingent: no_contingent,
					visible: true,
				});

			})
			.catch(response => {
				alert(response);
			});



	}
	createContigentSubmit = () => {

		console.log(this.state.contigent)

		this.setState({ contigent: false })
		this.handleOk();
		window.location.href = '/dashboard/contigent'
	}

	addContingent = (e) => {


		this.setState((prevState) => ({
			no_contingent: [...prevState.no_contingent, { "esummit_id": "", "name": "" }],
		}));


	}
	acceptInvitation = (es_id) => {
		let token = localStorage.getItem("user_token");
		let data = {
			"contingent_id": es_id
		}

		axios
			({
				method: "post",
				url: BASE_URL + "/v1/api/contingent/member/join/",
				data: data,
				headers: {
					Authorization: `Token ${token}`,
				}

			})
			.then(res => {
				if (res.status === 200) {

					window.location.href = '/dashboard/contigent'
					this.setState({ contigent: false })

					// this.props.form.name = res.data.name;
				}

			})
			.catch(response => {

			});
	}
	declineInvitation = (es_id) => {
		let token = localStorage.getItem("user_token");
		let data = {
			"contingent_id": es_id
		}

		axios
			({
				method: "post",
				url: BASE_URL + "/v1/api/contingent/member/decline/",
				data: data,
				headers: {
					Authorization: `Token ${token}`,
				}

			})
			.then(res => {
				if (res.status == 200) {
					this.setState({ contigent: true })
					window.location.href = '/dashboard/contigent'
				}

			})
			.catch(response => {

			});
	}
	leaveContigent = () => {
		let token = localStorage.getItem("user_token");
		axios
			.get(BASE_URL + "/v1/api/contingent/member/leave/", {
				headers: {
					Authorization: `Token ${token}`,
				},
			})
			.then(res => {
				if (res.status == 200) {
					this.setState({ contingent_member: null })
					window.location.href = '/dashboard/contigent'
				}
			})
			.catch(response => {

			});
	}
	viewMore = () => {
		document.getElementById("cacontigent-joinparent-form-hidelist").style.display = "block";
		document.getElementById("viewless").style.display = "block";
		document.getElementById("viewmore").style.display = "none";
		document.getElementById("cacontigent-joinparent").style.background = "#FFFAF4";



	}
	viewLess = () => {
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

		const { visible } = this.state;
		const modalstyle = {
			left: "20vw",
			margin: "0",
			top: "5vh",
		}

		const bodyStyle = {
			padding: 0,
		}
		let { data } = this.state;
		const width = 900;

		return (
			<div>
				{this.state.contigent ?
					<div className="cacontigent-parent">
						<div className="cacontigent-parent-heading1">
							Create Contingent
                		</div>
						<div className="cacontigent-line1">
						</div>
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
									<div className="cacontigent-joinparent-form-invites">Invites :<strong> {this.state.invitesno} </strong> </div>
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

										{this.state.invitelist.map(e =>
											e.status == "P" &&
											<tr id="cacontignet-table-row2">
												<td>{e.user.name}</td>
												<td>{e.user.esummit_id}</td>
												<td>4</td>
												<td><button id="cacontignet-td-b01" onClick={() => { this.acceptInvitation(e.contingent) }}>ACCEPT</button></td>
												<td><button id="cacontignet-td-b02" onClick={() => { this.declineInvitation(e.contingent) }}>DECLINE</button></td>

											</tr>

										)}

									</tbody>
								</table>
							</div>
							<div className="cacontigent-parent-heading2">
								About Contigent
               			 	</div>
							<div className="cacontigent-line1">
							</div>
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
							<div className="cacontigent-line1">
							</div>
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
											<div className="contigent-adduserform-input" required >{data.esummit_id}</div>
										</div>
										<div className="contigent-adduserform-child">
											<div className="contigent-adduserform-heading"> Name</div>

											<div className="contigent-adduserform-input" >{data.name}</div>
										</div>
									</div>
									<div className="cacontigent-aboutparent-head">
										Members
									</div>
									{this.state.no_contingent.map((id, e) => {
										{ console.log(e, "[[[[[[[[[[[[") }

										return <AddUserForm form={id} index={e} />
									})}




									<div className="cacontigent-aboutparent-head-addmember" onClick={this.addContingent}> Add member</div>
									<button className="cacontigent-finish" onClick={this.createContigentSubmit}>FINISH</button>
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

							{console.log("jfwekjfa")}

							<div className="cacontigent-congratsparent">
								<div className="cacontigent-congratsparent-child1">
									<div><svg width="25" height="25" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M27.9224 12.6543L18.2446 22.5078L13.2885 17.5283L10.6172 20.1997L18.4321 28.0029L30.9921 15.8177L27.9224 12.6543Z" fill="#70BF48" />
										<path d="M20.4258 0C9.37716 0 0.425781 8.95138 0.425781 20C0.425781 31.0486 9.37716 40 20.4258 40C31.4744 40 40.4258 31.0486 40.4258 20C40.4141 8.95138 31.4627 0 20.4258 0ZM20.4258 36.3679C11.3807 36.3679 4.04617 29.0334 4.04617 19.9883C4.04617 10.9432 11.3807 3.60867 20.4258 3.60867C29.4709 3.62039 36.7937 10.9432 36.8054 19.9883C36.7937 29.0451 29.4709 36.3679 20.4258 36.3679Z" fill="#70BF48" />
									</svg></div>
									<div>Congrats! Contingent succesfully created</div>
								</div>
								{this.state.contingent_member ?
									<div className="cacontigent-congratsparent-child2">
										Your contingent has been succesfully created Contingent No. CN 2 . A mail with the contingent no and unique password has been send to all members. Their names will be shown here as soon as they join the contingent. If you want to edit the members an edit option
									</div>
									:
									<div className="cacontigent-congratsparent-child2">
										Your contingent has been succesfully created Contingent No. <strong>{this.state.contingent_data.contingent_id} </strong>. A mail with the contingent no and unique password has been send to all members. Their names will be shown here as soon as they join the contingent. If you want to edit the members an edit option
									</div>
								}
								<button onClick={this.yourContigent} id="cacontigent-congratsparent-b01">DONE</button>


							</div>
						</div>
						<div className="cacontigent-innerparent" id="yourcontigent">
							<div className="cacontigent-parent-heading1">
								Contingent Details
							</div>
							<div className="cacontigent-line1"></div>



							<div className="cacontigent-congratsparent">
								{this.state.contingent_member &&
									<div>
										<div className="cacontigent-congratsparent-child1">
											<div>Your Contingent</div>
											<div className="cacontigent-congratsparent-editcontigent" onClick={this.leaveContigent}>
												Leave
											</div>
										</div>

										{/* <div className="cacontigent-congratsparent-child2">
											<div className="cacontigent-congratsparent-child2-heading">
												Leader
											</div>
											<div className="cacontigent-congratsparent-child2-parent">
												<div className="cacontigent-congratsparent-child2-name">
													Prakhar
												</div>
												<div className="cacontigent-congratsparent-child2-id">
													ES!###!#!3
												</div>
											</div>

											<div className="cacontigent-congratsparent-child2-heading">
												Members
								 			</div>
											{this.state.contingent_data.members.map(e =>
												<div className="cacontigent-congratsparent-child2-parent">
													<div className="cacontigent-congratsparent-child2-name">
														{e.name}
													</div>
													<div className="cacontigent-congratsparent-child2-id">
														{e.esummit_id}
													</div>
													<div className="cacontigent-congratsparent-child2-id">
														{e.status}
													</div>
												</div>

											)}
										</div> */}
									</div>
								}

								{this.state.contingent_leader &&
									<div>
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
													{this.state.contingent_data.leader.name}
												</div>
												<div className="cacontigent-congratsparent-child2-id">
													{this.state.contingent_data.leader.esummit_id}
												</div>
											</div>

											<div className="cacontigent-congratsparent-child2-heading">
												Members
											</div>
											{this.state.contingent_data.members.map(e =>
												<div className="cacontigent-congratsparent-child2-parent">
													<div className="cacontigent-congratsparent-child2-name">
														{e.name}
													</div>
													<div className="cacontigent-congratsparent-child2-id">
														{e.esummit_id}
													</div>
													<div className="cacontigent-congratsparent-child2-id">
														{e.status}
													</div>
												</div>

											)}
										</div>
									</div>
								}

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
										Edit Contingent
									</div>
									<div className="cacontigent-heading-deletecontigent" onClick={this.deleteContigent}>
										Delete Contingent
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
											<div className="contigent-adduserform-input" required >{data.esummit_id}</div>
										</div>
										<div className="contigent-adduserform-child">
											<div className="contigent-adduserform-heading"> Name</div>

											<div className="contigent-adduserform-input" >{data.name}</div>
										</div>
									</div>
									<div className="cacontigent-aboutparent-head">
										Members
									</div>
									{console.log(this.state.no_contingent)}
									{this.state.no_contingent.map((e, index) =>
										<div key={index}>
											{console.log(e, index, "sfkjdsfadfbabfb")}
											<AddUserForm index={index} form={e} />

										</div>

									)}

									{/* {console.log(this.state)} */}


									<div className="cacontigent-aboutparent-head-addmember" onClick={this.addContingent}> Add member</div>
									<button className="cacontigent-finish" onClick={this.createContigentSubmit}>SAVE CHANGES</button>
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
			es_id: props.form.esummit_id,
			name: props.form.name,
		}
	}
	componentDidMount() {
		console.log(this.props.form, "dasgbkadbjaskdjak")
		this.setState({
			es_id: this.props.form.esummit_id,
			name: this.props.form.name,
		})
	}
	onChange = (e) => {
		this.setState({
			es_id: e.target.value,
		});
		this.handleClick(e.target.value)
	}
	handleSubmit = (index) => {

		let token = localStorage.getItem("user_token");
		let data = {
			"esummit_id": this.state.es_id
		}
		// console.log(data,"handleSubmit");
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
				document.getElementById(index).style.display = "none";
			})
			.catch(response => {

			});
	}
	handleClick = (es_id) => {
		let token = localStorage.getItem("user_token");
		let data = {
			"esummit_id": es_id
		}
		console.log(data, "handleClick");
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

					// this.props.form.name = res.data.name;

				}

				console.log(res, "hhhhhhhhhhhhhhhhhh")
			})
			.catch(response => {

				// this.props.form.name = "";
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
							<input type="text" className="contigent-adduserform-input" id={"contigent-adduserform-input" + this.props.index} defaultValue={this.state.es_id} onChange={e => {
								this.onChange(e)
							}} required />
						</div>
						<div className="contigent-adduserform-child">
							<div className="contigent-adduserform-heading"> Name</div>
							<div className="contigent-adduserform-input" id={"contigent-adduserform-input" + this.props.index}>{this.state.name}</div>
						</div>
						<div className="contigent-adduserform-button"> <div className="contigent-adduserform-buttonb01" id={this.props.index} onClick={() => { this.handleSubmit(this.props.index) }} >Submit</div></div>
					</div>
				</form>
			</div>
		)
	}
}
