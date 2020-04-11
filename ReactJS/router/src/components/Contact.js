import React, {Component} from 'react';
import {Link} from "react-router-dom";
class Contact extends Component {
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
                                                <Link to="/detail">Contact</Link>
                                            </h4>
                                            <p>Phòng tư vấn, tuyển sinh</p>
                                            <p>Tòa nhà VNPT, 38 Yên Bái, Quận Hải Châu, TP Đà Nẵng</p>
                                            <p>Điện thoại: 0236.3.779.779</p>
                                            <p>Fax: 0236.3.779.555</p>
                                            <p>Email: tuyensinh@softech.vn</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">★ ★ ★ ★ ☆</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>;
                
            </div>
        );
    }
}

export default Contact;