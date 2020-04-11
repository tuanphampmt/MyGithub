import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from "../actions/IndexAction";

class AddUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            telephone: "",
            permissions: ""
        }
    }

    isChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    onSubmit = async (e) => {
        e.preventDefault();
        this.props.postDataNewUser(this.state.name, this.state.telephone, this.state.permissions);
        this.props.getNewDataUser(this.props.newUser._id, this.state.name, this.state.telephone, this.state.permissions);
        this.setState({
            name: "",
            telephone: "",
            permissions: ""
        })

    }
    displayForm = () => {
        if (this.props.formStatus) {
            return (
                <div className="col">
                    <form onSubmit={this.onSubmit}>
                        <div className="card border-info mt-3" style={{maxWidth: "18rem"}}>
                            <div className="card-header bg-transparent border-info text-center">
                                <strong>Thêm mới</strong>
                            </div>
                            <div className="card-body text-info">
                                <div className="from-group">
                                    <div>
                                        <label>Tên user</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="name"
                                            placeholder="Nhập tên user"
                                            onChange={(event) => this.isChange(event)}
                                            value={this.state.name}
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <label>Điện thoại</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="telephone"
                                            placeholder="Nhập điện thoại"
                                            onChange={(event) => this.isChange(event)}
                                            value={this.state.telephone}
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <label>Phân quyền</label>
                                        <select className="custom-select mr-sm-2"
                                                onChange={(event) => this.isChange(event)}
                                                name="permissions"
                                                value={this.state.permissions}
                                        >
                                            <option>Choose...</option>
                                            <option value="1">Admin</option>
                                            <option value="2">Moderator</option>
                                            <option value="3">Normal</option>
                                        </select>
                                    </div>
                                    <div className="mt-3 text-center">
                                        <button type="submit" className="btn btn-outline-info btn-block">
                                            Thêm mới
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    };
    render() {
        return (
            <div>
                {this.displayForm()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        formStatus: state.statusReducer.formStatus,
        newUser: state.getNewDataUserReducer
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getNewDataUser: (id, name, tel, per) => dispatch(actions.getNewDataUser(id, name, tel, per)),
        postDataNewUser: (name, tel, per) => dispatch(actions.postDataNewUser(name, tel, per)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(AddUserForm);