import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron w-100">
                <div className="container text-center">
                    <h1 className="display-3">Shopping Cart</h1>
                    <h2 className="display-3">MongoDB-Express-Redux-Node</h2>
                    <hr className="my-2"/>
                </div>
            </div>
        );
    }
}

export default Header;