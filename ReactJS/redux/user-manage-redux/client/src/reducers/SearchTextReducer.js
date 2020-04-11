import * as types from '../constants/ActionTypes'


var initialSearchText = "";

const searchTextReducer = (state = initialSearchText, action) => {
    switch (action.type) {
        case types.GET_TEXT_SEARCH:
            state = action.searchText;
            return state;
        default:
            return state
    }
};

export default searchTextReducer