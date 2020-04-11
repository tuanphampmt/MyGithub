import React, {Component} from 'react';
import {Link} from "react-router-dom";
import data from "../data"

class Detail extends Component {
    product = () => data.find(item => item.id === parseInt(this.props.match.params.id));

    render() {
        return (
            <div>
                <div className="container content">
                    <div className="row">
                        <div className="col-lg-3">
                            <h1 className="my-4">Shop Name</h1>
                            <div className="list-group">
                                <a href="/" className="list-group-item">
                                    Category 1
                                </a>
                                <a href="/" className="list-group-item">
                                    Category 2
                                </a>
                                <a href="/" className="list-group-item">
                                    Category 3
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="card h-100">
                                        <a href="/">
                                            <img
                                                className="card-img-top"
                                                src={this.product().pathImage}
                                                alt="hello"
                                            />
                                        </a>
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                <Link to="#">{this.product().name}</Link>
                                            </h4>
                                            <h5>${this.product().price}</h5>
                                            <p className="card-text">
                                                {this.product().desc}
                                            </p>

                                        </div>
                                        <hr/>
                                        <div className="card-body">
                                            <p>
                                                {this.product().content}
                                            </p>
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
                ;
            </div>
        );
    }
}

export default Detail;