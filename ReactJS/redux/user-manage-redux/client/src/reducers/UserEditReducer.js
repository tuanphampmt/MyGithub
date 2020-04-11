import * as types from '../constants/ActionTypes'


var initialUserEdit = {};

const userEditReducer = (state = initialUserEdit, action) => {
    switch (action.type) {
        case types.USER_EDIT_OBJECT:
            state = action.userEditObject;
            return state;
        default:
            return state
    }
};

export default userEditReducer