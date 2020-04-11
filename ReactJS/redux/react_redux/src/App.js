import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import News from "./component/News";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="hehe">
					<h1> Hello World ^^</h1>
					<p>{this.props.num}</p>
				</header>
				<News />
			</div>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	return {
		num: state.num
	};
};
export default connect(mapStateToProps)(App);
