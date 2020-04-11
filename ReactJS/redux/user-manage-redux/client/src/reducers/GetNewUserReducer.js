import * as types from '../constants/ActionTypes'


var initialNewUser = {};

const getNewDataUserReducer = (state = initialNewUser, action) => {
    switch (action.type) {
        case types.POST_USER_ADD:
            state = action.newUser;
            return state;
        default:
            return state
    }
};

export default getNewDataUserReducer