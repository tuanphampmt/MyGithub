import React, {Component} from "react";
import "../stylesheets/App.css";
import Header from "./Header";
import Search from "./Search";
import TableData from "./TableData";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";
import {BrowserRouter as Router} from "react-router-dom";

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className="searchForm">
                        <div className="container">
                            <div className="row">
                                <Search/>
                                <div className="col-12"><hr/></div>
                                <TableData/>
                                <AddUserForm/>
                                <EditUserForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
