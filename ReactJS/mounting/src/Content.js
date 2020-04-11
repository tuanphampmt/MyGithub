import React, {Component} from 'react';

class Content extends Component {
    componentWillReceiveProps(nextProps, nextContext) {
        console.log("Day la componentWillReceiveProps cua Content")
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("Day la shouldComponentUpdate cua Content")
        return true;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("Day la componentWillUpdate cua Content")

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Day la componentDidUpdate cua Content")


    }

    render() {
        return (
            <div>
                <h1> I love you 3000 {this.props.hehe}</h1>
            </div>
        );
    }
}

export default Content;