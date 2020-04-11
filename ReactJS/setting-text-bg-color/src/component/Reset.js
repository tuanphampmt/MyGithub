import React, {Component} from 'react';

class Reset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontSize: 16,
            backgroundColor: "bg-primary"
        }
    }
    handleOnClick = (fontSize, background) => {
        this.props.getValue(fontSize, background)
    };

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <button className="btn btn-primary"
                    onClick={() => this.handleOnClick(this.state.fontSize, this.state.backgroundColor)}
                    >Reset</button>
                </div>
            </div>

        );
    }
}

export default Reset;