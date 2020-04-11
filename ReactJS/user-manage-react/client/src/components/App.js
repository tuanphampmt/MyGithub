import React, {Component} from "react";
import "../stylesheets/App.css";
import Header from "./Header";
import Search from "./Search";
import TableData from "./TableData";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";
import axios from "axios";
import {BrowserRouter as Router} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchText: "",
            userEditObject: {},
            status: {
                editUserStatus: false,
                formStatus: false,
                sortAscStatus: false,
                sortDescStatus: false,
                searchStatus: false,
                adminStatus: false,
                moderatorStatus: false,
                normalStatus: false

            }
        };
    }

    getData = async () => (await (await axios.get("/api/user")).data).dataUser;

    componentDidMount() {
        this.getData().then((data) => this.setState({data: data}));
    }

    getArray = () => {
        let arr = [];
        let {sortAscStatus, sortDescStatus, adminStatus, moderatorStatus, normalStatus} = this.state.status;

        if (sortAscStatus && !sortDescStatus && !adminStatus && !moderatorStatus && !normalStatus) {
            arr = this.state.data;
            return arr.sort((a, b) =>
                a.name.toLowerCase() !== b.name.toLowerCase()
                    ? a.name.toLowerCase() < b.name.toLowerCase()
                    ? -1
                    : 1
                    : 0
            );
        }
        if (!sortAscStatus && sortDescStatus && !adminStatus && !moderatorStatus && !normalStatus) {
            arr = this.state.data;
            return arr.sort((a, b) =>
                a.name.toLowerCase() !== b.name.toLowerCase()
                    ? a.name.toLowerCase() > b.name.toLowerCase()
                    ? -1
                    : 1
                    : 0
            );
        }
        if (!sortAscStatus && !sortDescStatus && adminStatus && !moderatorStatus && !normalStatus) {
            return this.state.data.filter((item) => item.permissions === 1)
        }
        if (!sortAscStatus && !sortDescStatus && !adminStatus && moderatorStatus && !normalStatus) {
            return this.state.data.filter((item) => item.permissions === 2)
        }
        if (!sortAscStatus && !sortDescStatus && !adminStatus && !moderatorStatus && normalStatus) {
            return this.state.data.filter((item) => item.permissions === 3)
        }
        this.state.data.forEach((item) => {
            if (item.name.toLowerCase().indexOf(this.state.searchText) !== -1) {
                arr.push(item);
            }
        });
        return arr;
    };

    getTextSearch = (dl) => {
        this.setState({searchText: dl.toLowerCase().trim()});
    };

    isFormStatus = () => {
        this.setState({
            status: {
                formStatus: !this.state.status.formStatus
            }
        });
    };

    getNewDataUser = (id, name, tel, per) => {
        let item = {
            _id: id,
            name: name,
            telephone: tel,
            permissions: per
        };
        this.state.data.push(item);
        this.setState({data: this.state.data});
    };

    editUser = (user) => {
        this.setState({userEditObject: user});
    };

    changeEditUserStatus = () => {
        this.setState({
            status: {
                editUserStatus: !this.state.status.editUserStatus
            }
        });
    };

    getUserEditInfo = (item) => {
        let user = this.state.data.find((user) => user._id === item.id);
        user.name = item.name;
        user.telephone = item.telephone;
        user.permissions = item.permissions;
    };

    getUserRemovedInfo = (idUser) => {
        let tempData = this.state.data.filter((item) => item._id !== idUser);
        this.setState({
            data: tempData
        });
    };
    isSortAscStatus = () => {
        this.setState({
            status: {
                sortAscStatus: true,
                sortDescStatus: false,
                adminStatus: false,
                moderatorStatus: false,
                normalStatus: false
            }
        });
    };
    isSortDescStatus = () => {
        this.setState({
            status: {
                sortDescStatus: true,
                sortAscStatus: false,
                adminStatus: false,
                moderatorStatus: false,
                normalStatus: false
            }
        });
    };
    isAdminStatus = () => {
        this.setState({
            status: {
                adminStatus: true,
                sortAscStatus: false,
                sortDescStatus: false,
                moderatorStatus: false,
                normalStatus: false

            }
        });
    };
    isModeratorStatus = () => {
        this.setState({
            status: {
                moderatorStatus: true,
                sortAscStatus: false,
                sortDescStatus: false,
                adminStatus: false,
                normalStatus: false

            }
        });
    };
    isNormalStatus = () => {
        this.setState({
            status: {
                normalStatus: true,
                sortAscStatus: false,
                sortDescStatus: false,
                adminStatus: false,
                moderatorStatus: false,

            }
        });
    };
    isSearchStatus = () => {
        this.setState({
            status: {
                searchStatus: true,
                sortAscStatus: false,
                sortDescStatus: false,
                adminStatus: false,
                moderatorStatus: false,
                normalStatus: false
            }
        });
    };


    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className="searchForm">
                        <div className="container">
                            <div className="row">
                                <Search
                                    isFormStatus={() => this.isFormStatus()}
                                    formStatus={this.state.status.formStatus}
                                    getTextSearch={(dl) => this.getTextSearch(dl)}
                                    isSortAscStatus={() => this.isSortAscStatus()}
                                    isSortDescStatus={() => this.isSortDescStatus()}
                                    isSearchStatus={() => this.isSearchStatus()}
                                    isAdminStatus={() => this.isAdminStatus()}
                                    isModeratorStatus={() => this.isModeratorStatus()}
                                    isNormalStatus={() => this.isNormalStatus()}
                                    status={this.state.status}

                                />
                                <div className="col-12">
                                    <hr/>
                                </div>
                                <TableData
                                    data={this.getArray()}
                                    editUser={(user) => this.editUser(user)}
                                    changeEditUserStatus={() => this.changeEditUserStatus()}
                                    getUserRemovedInfo={(idUser) => this.getUserRemovedInfo(idUser)}
                                />
                                <AddUserForm
                                    formStatus={this.state.status.formStatus}
                                    getNewDataUser={(id, name, tel, per) => this.getNewDataUser(id, name, tel, per)}
                                />
                                <EditUserForm
                                    editUserStatus={this.state.status.editUserStatus}
                                    changeEditUserStatus={() => this.changeEditUserStatus()}
                                    userEditObject={this.state.userEditObject}
                                    getUserEditInfo={(item) => this.getUserEditInfo(item)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
