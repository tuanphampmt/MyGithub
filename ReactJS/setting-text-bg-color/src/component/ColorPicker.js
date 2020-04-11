import React, {Component} from 'react';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: ['bg-primary', 'bg-success', 'bg-warning', 'bg-info'],
        }
    }

    handleOnClick = (color) => {
        this.props.getTextColor(color)
    }
    showColor = () => {
        return this.state.backgroundColor.map((color, index) => {
            return (
                <span key={index}
                      className={color + " " + (this.props.color === color ? "active" : "")}
                      onClick={() => this.handleOnClick(color)}
                />
            )
        })

    };

    render() {
        return (
            <div className="col-6">
                <div className="card border-info mb-3" style={{width: "100%"}}>
                    <div className="card-header bg-info text-white">Color Picker</div>
                    <div className="card-body text-info">
                        {this.showColor()}
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorPicker;
