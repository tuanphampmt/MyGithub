import React, { Component } from "react";

export default class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: 0
		};
	}
	renderButton = () => (
		<div className="row">
				<button
					type="button"
					className="btn btn-secondary"
					onClick={() => this.editClick()}
				>
					How are you?
				</button>
		</div>
	);

	renderForm = () => (
		<div className="row">

			<input type="text" ref={(data) => { this.bien = data}} defaultValue={this.props.title}/>
			<button className="btn btn-primary" onClick={() => this.saveClick()}>
				I fine, Thanks you! And you?
			</button>
		</div>
	);

	displayCheck = () => {
		if (this.state.status === 0) {
			return this.renderButton();
		}
		return this.renderForm();
	};
	editClick = () => {
		this.setState({ status: 1 });
	};
	saveClick = () => {
		this.setState({ status: 0 });
		console.log(this.bien.value)
	};
	render() {
		return <div>{this.displayCheck()}</div>;
	}
}
