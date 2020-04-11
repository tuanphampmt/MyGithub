import React, {Component} from 'react';
import {Link} from "react-router-dom";
class About extends Component {
    render() {
        return (
            <div>
                <div className="container content">
                    <div className="row">
                        {/* /.col-lg-3 */}
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                <Link to="/detail">ABOUT</Link>
                                            </h4>
                                            <ul>
                                                <li>Full Name: Pham Minh Tuan</li>
                                                <li>Birthday: 31/7/1998</li>
                                                <li>Address: Da Nang</li>
                                                <li>Email: tuanpham31798@gmail.com</li>
                                                <li>Telephone: 0777561933</li>
                                            </ul>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">★ ★ ★ ★ ☆</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default About;