import { createAction, createSlice } from "@reduxjs/toolkit";
import localStorageService from "../services/localStorage.service";
import history from "../utils/history";
import userService from "../services/user.service";

const initialState = {
    entities: null,
    isLoading: false,
    error: null,
    dataLoaded: false,
    auth: { userId: localStorageService.getUser() },
    isLoggedIn: !!localStorageService.getUser(),
    bookmarks: localStorageService.fetchAllUsers(),
    bookmarksCount: localStorageService.fetchAllUsers().length
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        usersRequested: (state) => {
            state.isLoading = true;
        },
        usersReceived: (state, action) => {
            state.entities = action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        },
        usersRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        userToggleBookmarked: (state, action) => {
            if (state.bookmarks.includes(action.payload)) {
                state.bookmarks = state.bookmarks.filter(
                    (b) => b !== action.payload
                );
            } else {
                state.bookmarks.push(action.payload);
            }
            state.bookmarksCount = state.bookmarks.length;
            localStorageService.setUsers(state.bookmarks);
        },
        authSuccess: (state, action) => {
            state.auth = action.payload;
            state.isLoggedIn = true;
        },
        userLoggedOut: (state) => {
            state.bookmarks = null;
            state.isLoggedIn = false;
            state.bookmarksCount = 0;
            state.auth = null;
        }
    }
});

const { reducer: usersReducer, actions } = usersSlice;
const {
    usersRequested,
    usersReceived,
    usersRequestFailed,
    userToggleBookmarked,
    authSuccess,
    userLoggedOut
} = actions;

const authRequested = createAction("users/authRequested");

export const login = ({ payload, redirect }) => (dispatch) => {
    dispatch(authRequested());
    const data = localStorageService.authUser(payload);
    dispatch(authSuccess(data));
    history.push(redirect);
};
export const logOut = () => (dispatch) => {
    dispatch(userLoggedOut());
    localStorageService.removeUser();
    localStorageService.removeBookmarks();
};

export const loadUsersList = () => async (dispatch) => {
    dispatch(usersRequested());
    try {
        const { content } = await userService.fetchAll();
        dispatch(usersReceived(content));
    } catch (error) {
        dispatch(usersRequestFailed(error.message));
    }
};

export const toggleUsersBookmarks = (userId) => (dispatch) => {
    dispatch(userToggleBookmarked(userId));
};

export const getUsersList = () => (state) => state.users.entities;
export const getBookmarkUsersList = () => (state) => state.users.bookmarks;
export const getUserById = (userId) => (state) => {
    if (state.users.entities) {
        return state.users.entities.find((u) => u._id === userId);
    }
};

export const getUserBookmarkedStatus = (userId) => (state) => {
    if (state.users.bookmarks) {
        return state.users.bookmarks.find((u) => u._id === userId);
    }
};

export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;

export const getDataStatus = () => (state) => state.users.dataLoaded;
export const getUsersLoadingStatus = () => (state) => state.users.isLoading;
export const getUsersErrors = () => (state) => state.users.error;
export const getBookmarksCount = () => (state) => state.users.bookmarksCount;

export default usersReducer;
