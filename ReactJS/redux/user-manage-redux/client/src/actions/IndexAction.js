import * as types from '../constants/ActionTypes'
import axios from "axios";

export const getDataUser = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("/api/user");
            const {data} = response;
            dispatch({
                type: types.GET_DATA,
                data: data.dataUser
            })
        } catch (err) {
            console.log(err.message);
        }
    }
};

export const getNewDataUser = (id, name, tel, per) => {
    return (dispatch) => {
        let item = {
            _id: id,
            name: name,
            telephone: tel,
            permissions: per
        };
        dispatch({
            type: types.ADD_NEW_PRODUCT,
            item: item
        })
    };
};
export const isFormStatus = () => {
    return (dispatch) => {
        dispatch({
            type: types.FORM_STATUS
        })
    };
};

export const isSortAscStatus = () => {
    return (dispatch) => {
        dispatch({
            type: types.SORT_ASC_STATUS,
            sortAscStatus: true,
            sortDescStatus: false,
            adminStatus: false,
            moderatorStatus: false,
            normalStatus: false
        })
    };
};
export const isSortDescStatus = () => {
    return (dispatch) => {
        dispatch({
            type: types.SORT_DESC_STATUS,
            sortDescStatus: true,
            sortAscStatus: false,
            adminStatus: false,
            moderatorStatus: false,
            normalStatus: false
        })
    };
};
export const isAdminStatus = () => {
    return (dispatch) => {
        dispatch({
            type: types.ADMIN_STATUS,
            adminStatus: true,
            sortAscStatus: false,
            sortDescStatus: false,
            moderatorStatus: false,
            normalStatus: false
        })
    };
};
export const isModeratorStatus = () => {
    return (dispatch) => {
        dispatch({
            type: types.MODERATOR_STATUS,
            moderatorStatus: true,
            sortAscStatus: false,
            sortDescStatus: false,
            adminStatus: false,
            normalStatus: false
        })
    };
};
export const isNormalStatus = () => {
    return (dispatch) => {
        dispatch({
            type: types.NORMAL_STATUS,
            normalStatus: true,
            sortAscStatus: false,
            sortDescStatus: false,
            adminStatus: false,
            moderatorStatus: false,
        })
    };
};
export const isSearchStatus = () => {
    return (dispatch) => {
        dispatch({
            type: types.SEARCH_STATUS,
            searchStatus: true,
            sortAscStatus: false,
            sortDescStatus: false,
            adminStatus: false,
            moderatorStatus: false,
            normalStatus: false
        })
    };
};

export const getTextSearch = (searchText) => {
    return (dispatch) => {
        dispatch({
            type: types.GET_TEXT_SEARCH,
            searchText: searchText.toLowerCase().trim()
        })
    };
};

export const userEditObject = (user) => {
    return (dispatch) => {
        dispatch({
            type: types.USER_EDIT_OBJECT,
            userEditObject: user
        })
    };
};

export const changeEditUserStatus = () => {
    return (dispatch) => {
        dispatch({
            type: types.USER_EDIT_STATUS
        })
    };
};
export const getUserRemovedInfo = (id) => {
    return (dispatch) => {
        dispatch({
            type: types.GET_USER_DELETE,
            _id: id
        })
    };
};
export const getUserEditInfo = (item) => {
    return (dispatch) => {
        dispatch({
            type: types.GET_USER_EDIT,
            item: item
        })
    };
};

export const postDataUserUpdate = (id, name, telephone, permissions) => {
    return async (dispatch) => {
        try {
            await axios.post("/api/update/" + id, {name, telephone, permissions});
            dispatch({
                type: types.POST_USER_UPDATE,
            })
        } catch (err) {
            console.log(err.message);
        }
    }
};
export const postDataUserDelete = (id) => {
    return async (dispatch) => {
        try {
            await axios.post("/api/delete/" + id);
            dispatch({
                type: types.POST_USER_DELETE,
            })
        } catch (err) {
            console.log(err.message);
        }
    }
};
export const postDataNewUser = (name, telephone, permissions) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("/api/add", {name, telephone, permissions});
            const {data}  = response;
            console.log(data);
            dispatch({
                type: types.POST_USER_ADD,
                newUser: data.newUser
            })
        } catch (err) {
            console.log(err.message);
        }
    }
};