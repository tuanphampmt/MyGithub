import {combineReducers} from 'redux'
import userDataReducer from './UserDataReducer'
import statusReducer from './StatusReducer'
import searchTextReducer from './SearchTextReducer'
import userEditReducer from './UserEditReducer'
import getNewDataUserReducer from './GetNewUserReducer'
const myReducer = combineReducers({
        userDataReducer,
        statusReducer,
        searchTextReducer,
        userEditReducer,
        getNewDataUserReducer


});

export default myReducer