import React, {Component} from "react";
import * as actions from "../actions/IndexAction";
import {connect} from "react-redux";

class TableDataRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ""
        }
    }

    checkPermissions = () => {
        if (parseInt(this.props.permissions) === 1) {
            return "Admin";
        } else if (parseInt(this.props.permissions) === 2) {
            return "Moderator";
        }
        return "Normal User";
    };

    editClick = async () => {
        this.props.userEditObject();
        this.props.changeEditUserStatus();
    };
    onSubmit = (event) => {
        event.preventDefault();
        this.props.getUserRemovedInfo();
        this.props.postDataUserDelete(this.props.id);

    };
    render() {
        return (
            <tr>
                <td>{this.props.STT + 1}</td>
                <td>{this.props.name}</td>
                <td>{this.props.telephone}</td>
                <td className="text-center"><p
                    className={"label " + (this.checkPermissions() === "Admin" ? "label-danger" : this.checkPermissions() === "Moderator" ? "label-warning" : "label-info")}>{this.checkPermissions()}</p>
                </td>
                <td>
                    <div className="btn-group">
                        <button
                            className="btn btn-success"
                            onClick={() => this.editClick()}
                        >
                            <i className="fa fa-edit"/> Sửa
                        </button>

                        <button type="submit"
                                className="btn btn-danger"
                                onClick={(event) => this.onSubmit(event)}
                        >
                            <i className="fa fa-remove"/> Xoá
                        </button>


                    </div>
                </td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postDataUserDelete: (id) => dispatch(actions.postDataUserDelete(id))
    }
};
export default connect(null, mapDispatchToProps)(TableDataRow);
