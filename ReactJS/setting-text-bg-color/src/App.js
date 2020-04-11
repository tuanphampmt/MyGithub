import React, {Component} from 'react';
import "./App.css";
import ColorPicker from "./component/ColorPicker";
import SizeSetting from "./component/SizeSetting";
import Reset from "./component/Reset";
import Result from "./component/Result";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'bg-primary',
            fontSize: 16
        }
    }

    getTextColor = (color) => {
        this.setState({backgroundColor: color});
    };
    getFontSize = (fontSize) => {
        this.setState({fontSize: fontSize});
    };
    getValue = (fontSize, background) => {
        this.setState({fontSize: fontSize, backgroundColor: background});
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <ColorPicker color={this.state.backgroundColor}
                                 getTextColor={(color) => this.getTextColor(color)}
                    />
                    <SizeSetting
                        getFontSize={(fontSize) => this.getFontSize(fontSize)}
                        fontSize={this.state.fontSize}
                    />
                </div>
                <Reset getValue={(fontSize, background) => this.getValue(fontSize, background)}/>
                <Result setColor={this.state.backgroundColor}
                        setSizeText={this.state.fontSize}

                />
            </div>
        );
    }
}

export default App;