import React, { Component } from "react";
import { connect } from "react-redux";

class News extends Component {
	// isChangeStatus = () => {
	// 	const { dispatch } = this.props;
	// 	dispatch({ type: "CHANGE_EDIT_STATUS" });
	// };
	// addNewsItem = () => {
	//     const { dispatch } = this.props;
	//     dispatch({
	//         type: "ADD_NEW_PRODUCT",
	//         newItem: "Oppo"
	//     });
	// }
	// deleteItem = () => {
	//     const { dispatch } = this.props;
	//     dispatch({
	//         type: "DELETE_PRODUCT",
	//         index: 2
	//     });
	// }
	onClick = () => {
		this.props.isChangeStatus();
		this.props.addNewsItem();
		this.props.deleteItem();
	};
	render() {
		return (
			<div>
				<h2> How are you? </h2>
				<button onClick={() => this.onClick()}>Click me!</button>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		status: state.status
	};
};
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		isChangeStatus: () => {
			dispatch({ type: "CHANGE_EDIT_STATUS" });
		},
		addNewsItem: () => {
			dispatch({
				type: "ADD_NEW_PRODUCT",
				newItem: "Oppo"
			});
		},
		deleteItem: () => {
			dispatch({
				type: "DELETE_PRODUCT",
				index: 2
			});
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(News);
