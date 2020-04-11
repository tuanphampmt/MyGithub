import * as types from '../constants/ActionTypes'

const initialStatus = {
    userEditStatus: false,
    formStatus: false,
    sortAscStatus: false,
    sortDescStatus: false,
    adminStatus: false,
    moderatorStatus: false,
    normalStatus: false,
    searchStatus: false,

};
const statusReducer = (state = initialStatus, action) => {
    switch (action.type) {
        case types.FORM_STATUS:
            return {...state, formStatus: !state.formStatus};
        case types.SORT_ASC_STATUS:
            return {
                ...state,
                sortAscStatus: action.sortAscStatus,
                sortDescStatus: action.sortDescStatus,
                adminStatus: action.adminStatus,
                moderatorStatus: action.moderatorStatus,
                normalStatus: action.normalStatus
            };
        case types.SORT_DESC_STATUS:
            return {
                ...state,
                sortAscStatus: action.sortAscStatus,
                sortDescStatus: action.sortDescStatus,
                adminStatus: action.adminStatus,
                moderatorStatus: action.moderatorStatus,
                normalStatus: action.normalStatus
            };
        case types.ADMIN_STATUS:
            return {
                ...state,
                sortAscStatus: action.sortAscStatus,
                sortDescStatus: action.sortDescStatus,
                adminStatus: action.adminStatus,
                moderatorStatus: action.moderatorStatus,
                normalStatus: action.normalStatus
            };
        case types.MODERATOR_STATUS:
            return {
                ...state,
                sortAscStatus: action.sortAscStatus,
                sortDescStatus: action.sortDescStatus,
                adminStatus: action.adminStatus,
                moderatorStatus: action.moderatorStatus,
                normalStatus: action.normalStatus
            };
        case types.NORMAL_STATUS:
            return {
                ...state,
                sortAscStatus: action.sortAscStatus,
                sortDescStatus: action.sortDescStatus,
                adminStatus: action.adminStatus,
                moderatorStatus: action.moderatorStatus,
                normalStatus: action.normalStatus
            };
        case types.SEARCH_STATUS:
            return {
                ...state,
                searchStatus: action.searchStatus,
                sortAscStatus: action.sortAscStatus,
                sortDescStatus: action.sortDescStatus,
                adminStatus: action.adminStatus,
                moderatorStatus: action.moderatorStatus,
                normalStatus: action.normalStatus

            };
        case types.USER_EDIT_STATUS:
            return {...state, userEditStatus: !state.userEditStatus};
        default:
            return state;
    }
};
export default statusReducer