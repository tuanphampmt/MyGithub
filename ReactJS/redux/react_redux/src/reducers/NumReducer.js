const numInitialState = ["Samsung", "Iphone", "Nokia"];
const numReducer = (state = numInitialState, action) => {
	switch (action.type) {
		case "ADD_NEW_PRODUCT":
			return [...state, action.newItem];
		case "DELETE_PRODUCT":
			return state.filter((value, i) => i !== action.index);
		default:
			return state;
	}
};
export default numReducer;
