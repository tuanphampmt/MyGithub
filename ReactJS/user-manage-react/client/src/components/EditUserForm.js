import React, { Component } from "react";
import axios from "axios";
import {NavLink} from "react-router-dom"
class EditUserForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: "",
			name: "",
			telephone: "",
			permissions: "",
		};
	}
	postData = async (id ,name, telephone, permissions) => await axios.post("/api/update/" + id, {name, telephone, permissions})

	static getDerivedStateFromProps(props, state) {
		return{
			id: props.userEditObject._id,
			name: props.userEditObject.name,
			telephone: props.userEditObject.telephone,
			permissions: props.userEditObject.permissions
		};
	}
	isChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};
	editClick = async (event) => {
		event.preventDefault();
		let item = {
			id: this.state.id,
			name: this.state.name,
			telephone: this.state.telephone,
			permissions: this.state.permissions
        };
        
		this.props.getUserEditInfo(item);
        this.props.changeEditUserStatus();
        await this.postData(this.state.id, this.state.name, this.state.telephone, this.state.permissions)
	};

	displayForm = () => {
		if (this.props.editUserStatus) {
			return (
				<div className="col">
					<form onSubmit={this.editClick}>
						<div
							className="card border-success mt-3"
							style={{ maxWidth: "18rem" }}
						>
							<div className="card-header bg-success border-success text-center">
								<strong>Sửa thông tin</strong>
								<NavLink to="/" style={{color: "#fff"}}>
									<i className="fa fa-times-circle text-right"
									   onClick={() => this.props.changeEditUserStatus()}
									/>
								</NavLink>
							</div>
							<div className="card-body text-success">
								<div className="from-group">
									<div>
										<label>Tên user</label>
										<input
											className="form-control"
											type="text"
											name="name"
											placeholder="Nhập tên user"
											defaultValue={this.props.userEditObject.name}
											onChange={(event) => this.isChange(event)}
										/>
									</div>
									<div className="mt-3">
										<label>Điện thoại</label>
										<input
											className="form-control"
											type="text"
											name="telephone"
											placeholder="Nhập điện thoại"
											defaultValue={this.props.userEditObject.telephone}
											onChange={(event) => this.isChange(event)}
										/>
									</div>
									<div className="mt-3">
										<label>Phân quyền</label>
										<select
											className="custom-select mr-sm-2"
											name="permissions"
											defaultValue={this.props.userEditObject.permissions}
											onChange={(event) => this.isChange(event)}
										>
											<option>Choose...</option>
											<option value="1">Admin</option>
											<option value="2">Moderator</option>
											<option value="3">Normal</option>
										</select>
									</div>
									<div className="mt-3 text-center">
										<button
											type="submit"
											className="btn btn-outline-success btn-block"
											onClick={(event) => this.editClick(event)}
										>
											Lưu
										</button>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			);
		}
	};

	render() {


		return <div>{this.displayForm()}</div>;
	}
}

export default EditUserForm;
