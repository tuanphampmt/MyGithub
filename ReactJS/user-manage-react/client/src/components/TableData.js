import React, {Component} from 'react';
import TableDataRow from "./TableDataRow";

class TableData extends Component {


    render() {
        // console.log(this.props.data._id)
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
                        this.props.data.map((user, i) => (
                            <TableDataRow
                                key={i}
                                id={user._id}
                                name={user.name}
                                telephone={user.telephone}
                                permissions={user.permissions}
                                STT={i}
                                editUser={() => this.props.editUser(user)}
                                changeEditUserStatus={() => this.props.changeEditUserStatus()}
                                getUserRemovedInfo={() => this.props.getUserRemovedInfo(user._id)}
                                dataSort={this.props.dataSort}
                            />
                        ))
                    }
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;