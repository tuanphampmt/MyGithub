import React, {Component} from 'react';

class SizeSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontSize: 16
        }
    }
    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({fontSize: nextProps.fontSize})
    }

    handleOnClick = (fontSize) => {
        this.props.getFontSize(fontSize)
    }

    render() {
        return (
            <div className="col-6">
                <div className="card border-danger mb-3" style={{width: "100%"}}>
                    <div className="card-header bg-danger text-white">Size:</div>
                    <div className="card-body text-danger">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button className="btn btn-success"
                                    onClick={() => this.handleOnClick(++this.state.fontSize)}

                            >Tăng
                            </button>
                            <button className="btn btn-warning text-white"
                                    onClick={() => this.handleOnClick(--this.state.fontSize)}
                            >Giảm</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default SizeSetting;