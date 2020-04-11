import React, {Component} from 'react';
import TableDataRow from "./TableDataRow";
import {connect} from 'react-redux'
import * as actions from "../actions/IndexAction";

class TableData extends Component {

    componentDidMount() {
        this.props.getDataUser();
    }

    getArray = () => {
        let arr = [];
        let {sortAscStatus, sortDescStatus, adminStatus, moderatorStatus, normalStatus} = this.props.status;

        if (sortAscStatus && !sortDescStatus && !adminStatus && !moderatorStatus && !normalStatus) {
            arr = this.props.data;
            return arr.sort((a, b) =>
                a.name.toLowerCase() !== b.name.toLowerCase()
                    ? a.name.toLowerCase() < b.name.toLowerCase()
                    ? -1
                    : 1
                    : 0
            );
        }
        if (!sortAscStatus && sortDescStatus && !adminStatus && !moderatorStatus && !normalStatus) {
            arr = this.props.data;
            return arr.sort((a, b) =>
                a.name.toLowerCase() !== b.name.toLowerCase()
                    ? a.name.toLowerCase() > b.name.toLowerCase()
                    ? -1
                    : 1
                    : 0
            );
        }
        if (!sortAscStatus && !sortDescStatus && adminStatus && !moderatorStatus && !normalStatus) {
            return this.props.data.filter((item) => item.permissions === 1)
        }
        if (!sortAscStatus && !sortDescStatus && !adminStatus && moderatorStatus && !normalStatus) {
            return this.props.data.filter((item) => item.permissions === 2)
        }
        if (!sortAscStatus && !sortDescStatus && !adminStatus && !moderatorStatus && normalStatus) {
            return this.props.data.filter((item) => item.permissions === 3)
        }
        this.props.data.forEach((item) => {
            if (item.name.toLowerCase().indexOf(this.props.searchText) !== -1) {
                arr.push(item);
            }
        });
        return arr;

    };

    render() {
        // console.log(this.props.data)
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.getArray().map((user, i) => (
                            <TableDataRow
                                key={i}
                                id={user._id}
                                name={user.name}
                                telephone={user.telephone}
                                permissions={user.permissions}
                                STT={i}
                                userEditObject={() => this.props.userEditObject(user)}
                                changeEditUserStatus={() => this.props.changeEditUserStatus()}
                                getUserRemovedInfo={() => this.props.getUserRemovedInfo(user._id)}
                            />
                        ))
                    }
                    </tbody>
                </table>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.userDataReducer,
        status: state.statusReducer,
        searchText: state.searchTextReducer,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getDataUser: () => dispatch(actions.getDataUser()),
        userEditObject: (user) => dispatch(actions.userEditObject(user)),
        changeEditUserStatus: () => dispatch(actions.changeEditUserStatus()),
        getUserRemovedInfo: (id) => dispatch(actions.getUserRemovedInfo(id))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(TableData);