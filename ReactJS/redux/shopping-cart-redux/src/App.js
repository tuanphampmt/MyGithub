import React, {Component} from 'react';
import './App.css';
import Header from "./component/Header";
import Product from "./component/Product";
import Cart from "./component/Cart";

class App extends Component {
    render() {
        return (
            <div className="App-Component">
                <main className="cd-main container margin-top-xxl">

                    <div className="text-component text-center">
                        <Header/>
                        <Product/>
                    </div>
                </main>
                <Cart/>
            </div>
        );
    }
}

export default App;
