import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// cac cach nay khong dinh nghia duoc 2 the html ngang hang nhau
// Component
function ContainerOne() {
	return (
		<div>
			<h1> Cach 1</h1>
			<h5> Cach 1</h5>
		</div>
	);
}
const ContainerTwo = function() {
	return (
		<div>
			<h3> Cach 2</h3>
		</div>
	);
};

const ContainerThree = () => (
	<div>
		<h1> Cach 3</h1>
	</div>
);
class ContainerFour extends Component {
	render() {
		return (
			<div>
				<button className="btn btn-primary"> Click me~~</button>
			</div>
		);
	}
}

// Su dung props voi function
const PropsOne = (props) => {
	return (
		<div className="col-4">
			<div className="card">
				<img src={props.path} className="card-img-top" alt="..."></img>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p>Hello World</p>
					<a href="s" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};
// Su dung props voi class

class PropsTwo extends Component {
	render() {
		return (
			<div className="col-4">
				<div className="card">
					<img src={this.props.path} className="card-img-top" alt="..."></img>
					<div className="card-body">
						<h5 className="card-title">{this.props.title}</h5>
						<p className="card-text">
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</p>
						<a href="s" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
		);
	}
}
// Vi du map

const arr = [31,7,1998]
const map = arr.map(x => x + "/")

class Map extends Component {
	render() {
		return (
			<div>
				{map}
			</div>
		);
	}
}

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1>Hello World^^ Pham Minh Tuan</h1>
					<ContainerOne />
					<ContainerTwo />
					<ContainerThree />
					<ContainerFour />
					<div className="row">
						<PropsOne
							title="Pham Minh Tuan"
							path="https://znews-photo.zadn.vn/w1024/Uploaded/ofh_huqfztmf/2020_02_05/11_ronaldo_zing.jpg"
						/>
						<PropsTwo
							title="Pham Minh Tuan"
							path="https://znews-photo.zadn.vn/w1024/Uploaded/ofh_huqfztmf/2020_02_05/11_ronaldo_zing.jpg"
						/>
					</div>
					<Map/>
				</header>
			</div>
		);
	}
}

export default App;
