import * as types from '../constants/ActionTypes'

var initialUserData = [];
// const findByIdAndUpdate = (items, id, item) =>
//     items.map(({_id, name, telephone, permissions, ...items}) => ({
//         ...items,
//         name: id === _id ? item.name : name,
//         telephone: id === _id ? item.telephone : telephone,
//         permissions: id === _id ? item.permissions : permissions,
//     }));
const userDataReducer = (state = initialUserData, action) => {
    switch (action.type) {
        case types.GET_DATA:
            state = action.data;
            return state;
        case types.ADD_NEW_PRODUCT:
            return [...state, action.item];
        case types.GET_USER_DELETE:
            let tempData = state.filter((item) => item._id !== action._id);
            state = tempData;
            return state;
        case types.GET_USER_EDIT:
            state.map((user) => {
                if (user._id === action.item._id) {
                    user.name = action.item.name;
                    user.telephone = action.item.telephone;
                    user.permissions = action.item.permissions;
                    return user;
                }
                return null;
            });
            return state;
        case types.POST_USER_UPDATE:
            return state;
        case types.POST_USER_DELETE:
            return state;
        case types.POST_USER_ADD:
            return state;
        default:
            return state
    }
};

export default userDataReducer