import React, {Component} from "react";
import {NavLink} from "react-router-dom"
import * as actions from "../actions/IndexAction";
import {connect} from "react-redux";

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

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            id: nextProps.userEdit._id,
            name: nextProps.userEdit.name,
            telephone: nextProps.userEdit.telephone,
            permissions: nextProps.userEdit.permissions
        })
    }

    isChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    editClick = async (event) => {
        event.preventDefault();
        let item = {
            _id: this.state.id,
            name: this.state.name,
            telephone: this.state.telephone,
            permissions: this.state.permissions
        };
        this.props.getUserEditInfo(item);
        this.props.changeEditUserStatus();
        this.props.postDataUserUpdate(this.state.id, this.state.name, this.state.telephone, this.state.permissions)
    };

    displayForm = () => {
        if (this.props.status.userEditStatus) {
            return (
                <div className="col">
                    <form onSubmit={this.editClick}>
                        <div
                            className="card border-success mt-3"
                            style={{maxWidth: "18rem"}}
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
                                            defaultValue={this.props.userEdit.name}
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
                                            defaultValue={this.props.userEdit.telephone}
                                            onChange={(event) => this.isChange(event)}
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <label>Phân quyền</label>
                                        <select
                                            className="custom-select mr-sm-2"
                                            name="permissions"
                                            defaultValue={this.props.userEdit.permissions}
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

const mapStateToProps = (state) => {
    return {
        status: state.statusReducer,
        userEdit: state.userEditReducer
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        userEditObject: (user) => dispatch(actions.userEditObject(user)),
        changeEditUserStatus: () => dispatch(actions.changeEditUserStatus()),
        getUserEditInfo: (item) => dispatch(actions.getUserEditInfo(item)),
        postDataUserUpdate: (id, name, telephone, permissions) => dispatch(actions.postDataUserUpdate(id, name, telephone, permissions))

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(EditUserForm);

