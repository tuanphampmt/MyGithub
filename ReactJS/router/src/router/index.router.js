import React, {Component} from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import Detail from '../components/Detail';
import Contact from '../components/Contact.js';
import About from '../components/About';
import Home from '../components/Home';
import Form from '../components/Form';


class IndexRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/detail/:slug.:id.html" component={Detail}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/form" component={Form}/>

                </Switch>
            </div>
        );
    }
}

export default IndexRouter;