import React from 'react';
import '../stylesheets/App.css';
import Nav from './Nav';
import Footer from './Footer'
import IndexRouter from '../router/index.router'
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Nav/>
                <IndexRouter/>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
