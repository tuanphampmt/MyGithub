import React, {Component} from 'react';
import * as actions from "../actions/IndexAction";
import {connect} from 'react-redux'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: ""
        }
    }

    displayButton = () => {
        if (this.props.status.formStatus) {
            return <div className="btn btn-success btn-block add" onClick={() => this.props.isFormStatus()}><i
                className="fa fa-times-circle mr-2"/>Đóng lại</div>
        }
        return <div className="btn btn-success btn-block add" onClick={() => this.props.isFormStatus()}><i
            className="fa fa-user-plus mr-1"/>Thêm mới</div>
    };
    isChange = (event) => {
        this.setState({
            tempValue: event.target.value
        });
        this.props.getTextSearch(event.target.value);

    };
    onClickSearch = () => {
        this.props.getTextSearch(this.state.tempValue);
        this.props.isSearchStatus();
    };

    render() {
        return (
            <div>
                <div className="col-12">
                    <div className="form-group">
                        <div className="btn-group">
                            <a href="#1" onClick={() => this.onClickSearch()}>
                                <input
                                    className="form-control inputSearch"
                                    type="text"
                                    name="seach"
                                    placeholder="Nhập tên cần tìm"
                                    onChange={event => this.isChange(event)}
                                />
                            </a>
                            <button className="btn btn-primary"
                                    onClick={() => this.onClickSearch()}><i
                                className="fa fa-search mr-1"/>Tìm

                            </button>
                            {this.displayButton()}
                            <div className="dropdown">
                                <button className="btn btn-primary dropdown-toggle ml-3" type="button"
                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                    Sắp xếp
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className={"dropdown-item " + (this.props.status.sortAscStatus ? "sort_selected" : "")}
                                       href="#1"
                                       onClick={() => this.props.isSortAscStatus()}
                                    >
                                        <span className="fa fa-sort-alpha-asc">Tên A-Z</span>
                                    </a>
                                    <a className={"dropdown-item " + (this.props.status.sortDescStatus ? "sort_selected" : "")}
                                       href="#1"
                                       onClick={() => this.props.isSortDescStatus()}
                                    >
                                        <span className="fa fa-sort-alpha-desc">Tên Z-A</span>
                                    </a>
                                    <hr/>
                                    <a className={"dropdown-item " + (this.props.status.adminStatus ? "sort_selected" : "")}
                                       href="#1"
                                       onClick={() => this.props.isAdminStatus()}
                                    ><span className="fa">Admin</span></a>
                                    <a className={"dropdown-item " + (this.props.status.moderatorStatus ? "sort_selected" : "")}
                                       href="#1"
                                       onClick={() => this.props.isModeratorStatus()}
                                    ><span className="fa">Moderator</span></a>
                                    <a className={"dropdown-item " + (this.props.status.normalStatus ? "sort_selected" : "")}
                                       href="#1"
                                       onClick={() => this.props.isNormalStatus()}
                                    ><span className="fa">Normal User</span></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        status: state.statusReducer
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        isFormStatus: () => dispatch(actions.isFormStatus()),
        isSortAscStatus: () => dispatch(actions.isSortAscStatus()),
        isSortDescStatus: () => dispatch(actions.isSortDescStatus()),
        isAdminStatus: () => dispatch(actions.isAdminStatus()),
        isModeratorStatus: () => dispatch(actions.isModeratorStatus()),
        isNormalStatus: () => dispatch(actions.isNormalStatus()),
        isSearchStatus: () => dispatch(actions.isSearchStatus()),
        getTextSearch: (searchText) => dispatch(actions.getTextSearch(searchText)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);