import React, {Component} from 'react';

class Result extends Component {
    render() {
        return (
            <div className="row border-row mt-3">
                <div className="col-12">
                    <div className="card border-danger mb-3" style={{width: "100%"}}>
                        <div className="card-header bg-danger text-white">
                            Color: {this.props.setColor === "bg-primary" ? "primary" : this.props.setColor === "bg-success" ? "success" : this.props.setColor === "bg-warning" ? "warning" : "info"} -
                            FontSize: {this.props.setSizeText}px
                        </div>
                        <div className={"card-body text-danger" + " " + this.props.setColor}>
                            <p style={{color: "#fff", fontSize: this.props.setSizeText}}>Hello World! Pham Minh Tuan</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Result;