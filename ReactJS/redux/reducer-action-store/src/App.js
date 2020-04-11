import React, {Component} from 'react';

class App extends Component {
    render() {
        var redux = require('redux');
        var oldState = {
            num: ["Samsung", "Iphone", "Nokia"],
            status: false
        };
        var reducer = (state = oldState, action) => {
            switch (action.type) {
                case 'CHANGE_EDIT_STATUS':
                    return {...state, status: !state.status};
                case 'ADD_NEW_PRODUCT':
                    return {...state, num: [...state.num, action.newItem]};
                case 'DELETE_PRODUCT':
                    return {...state, num: state.num.filter((value, i) => i !== action.index)};
                default:
                    return state
            }

        };
        var store = redux.createStore(reducer);


        store.subscribe(() => {
            console.log(JSON.stringify(store.getState()));
        });
        store.dispatch({type: 'CHANGE_EDIT_STATUS'});
        store.dispatch({
            type: 'ADD_NEW_PRODUCT',
            newItem: "Oppo"
        });
        store.dispatch({
            type: 'DELETE_PRODUCT',
            index: 2
        });

        return (
            <div>
                   <h1>Hello World</h1>
            </div>
        );
    }
}

export default App;
