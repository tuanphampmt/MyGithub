import numReducer from "./reducers/NumReducer";
import statusReducer from "./reducers/StatusReducer";
var redux = require("redux");
// const oldState = {
// 	status: false,
// 	num: ["Samsung", "Iphone", "Nokia"]
// }
const allReducers = redux.combineReducers({
	num: numReducer,
	status: statusReducer
})

var store = redux.createStore(allReducers);

store.subscribe(() => {
	console.log(JSON.stringify(store.getState()));
});

// store.dispatch({
// 	type: "ADD_NEW_PRODUCT",
// 	newItem: "Oppo"
// });
// store.dispatch({
// 	type: "DELETE_PRODUCT",
// 	index: 2
// });

export default store;
